const axios  = require('axios');
const {Router, application} = require('express');
const { API_KEY, BASE_DATA } = process.env
const{v4: uuidv4} = require('uuid')
const {Dog, Temper } = require('../db');
const router = Router();
const UUID = new RegExp("^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$");

const getApi = async () => {
    try {
     const listado = await axios(`http://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const dataApi = await listado.data.map(d =>{
        return{
            name: d.name,
            id: d.id,
            weightMin: d.weight.metric.split ("-")[0] && d.weight.metric.split ("-")[0],
            heightMin: d.height.metric.split ("-")[0] && d.height.metric.split ("-")[0],
            weightMax: d.weight.metric.split ("-")[1] && d.weight.metric.split ("-")[1],
            heightMax: d.height.metric.split ("-")[1] && d.height.metric.split ("-")[1],
            life_spanMin: d.life_span.split ("-")[0] && d.life_span.split ("-")[0],
            life_spanMax: d.life_span.split ("-")[1] && d.life_span.split ("-")[1],
            temperament: d.temperament ? d.temperament : "Unknown",
            image: d.image.url,
            mine: false,
        };
    });

            return dataApi
    } catch (error) {
        console.log(error)
    };
};
    const dataBase = async () => {
        try {
          const dbPerros =  await Dog.findAll({
            include: Temper,
        }); 
        var regex = /(\d+)/g;
        
        const info = dbPerros.map((e)=>{
            let temp = e.tempers.map((e) => e.name);
            let tempEnd = temp.join(", ");
            
            return {
                id: e.id,
                name: e.name,
            weightMin: e.weightMin,
            weightMax: e.weightMax,
            heightMin: e.heightMin,
            heightMax: e.heightMax,
            life_spanMin: e.life_spanMin,
            life_spanMax: e.life_spanMax,
            image: e.image ? e.image : "Not image",
            temperament: tempEnd,
            mine: e.mine,
        };
        });
              return info
        } catch (error) {
            console.log(error);
        }
    }   
    const allData = async () => {
        try {
          const api = await getApi();
          const db = await dataBase();
          const datos = api.concat(db);
          return datos;  
        } catch (error) {
            console.log(error);
        }
    }
    

router.get("/", async(req, res, next)=>{
    const {name} = req.query;
        const allDogs = await allData();
        if(name){
            let searchedDog = await allDogs.filter((d) => 
            d.name.toLowerCase().includes(name.toLowerCase())
            );
            res.status(200).json(searchedDog);

        } else {
            res.status(200).json(allDogs)
        }
    });
        
router.get("/:id", async(req, res, next)=>{
    const {id} = req.params;
    try{ 
     if( id[0] === "s"){
        return await Dog.findAll({
            where:{
                id: id,
            },
            include: Temper,
        })
        .then(busqueda =>{
            console.log('BUSQUEDA', busqueda);
                  res.status(200).json(busqueda[0]);
        })
    } else {     
        await axios(`https://api.thedogapi.com/v1/breeds/${id}`)
        .then(dog => dog.data.find(d=>d.id == id))
       
        .then(dog => res.status(200).json(dog))
    } } catch (error) {
        next(error)
    }
    
}) 

var id = 2;
const idKey = () => id = id + 1;
router.post("/", async (req, res, next)=>{
    try{
        let {
            name,
            weightMin,
            weightMax,
            heightMin,
            heightMax,
            life_spanMin,
            life_spanMax,
            image,
            temperament,
        } = req.body
        console.log("BODY", req.body);

        const myDog = await Dog.create({
            id: "s" + idKey(), 
            name,
            weightMin,
            weightMax,
            heightMin,
            heightMax,
            life_spanMin,
            life_spanMax,
            image, 
            temperament
            
        });
        let dbTemper = await Temper.findAll({
            where:{
                name: temperament
            },
        });
        await myDog.addTemper(dbTemper)
     res.status(200).json(myDog)
    } catch(e){
        next(e);
    };
});


module.exports = router;