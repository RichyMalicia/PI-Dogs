const axios  = require('axios');
const {Router, application} = require('express');
const{v4: uuidv4} = require('uuid')
const { Op } = require('sequelize');
const db = require('../db');

/* const { getAllDogs, dogCreate, deleteDog, getDogByName } = require('../controllers/dogs'); */
const {Dog, Temper} = require('../db');
const router = Router();
const UUID = new RegExp("^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$");

const urlExt = `http://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`


const getData = async () => {
    const data = await axios(urlExt)
    return data
}

router.get("/", async(req, res, next)=>{
    const name = req.query.name;
    if(!name) {
        const dbDogs =  await Dog.findAll({
            include: {
                model: Temper,
            },
        });
        const miData =  await getData(urlExt)
        Promise.all([dbDogs, miData])
        .then((data)=>{
            const[dbDogsResults, miDataResults ] = data; 
            const resultado = dbDogsResults.concat(
                miDataResults.data);
                res.status(200).json(resultado);
            })
            .catch(error=>next(error))                       
                    
            }else{
                const db = Dog.findAll({
                    where: {
                        name: name,
                    },
                });
                const api = axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
                Promise.all([db, api])  
                .then(data =>{
                    let [db, api] = data;
                    if(api.data.number > 0){
                        api.data.forEach(dog=>{
                         if(dog.data.name.toLowerCase().includes(name)){
                                    const perro = {
                                        id: dog.id,
                                        name: dog.data.name,
                                        weight: dog.weight.metric,
                                        height: dog.height.metric,
                                        life_span: dog.life_span,
                                        image: dog.image.url
                                    };
                                    db.push(perro)
                                };
                            });
                            /* db.splice(8) */
                            return res.status(200).json(db);
                        } else if(db.length > 0){
                            /* db.splice(8); */
                            return res.status(200).json(db);
                        } else {res.status(200).json("No hay resultados...")}
                    })
                    .catch(error => next(error));
                };   
        });
    
    
  
/* router.get("/:id", (req, res, next)=>{
    const id = req.params.id;
    return Dog.findByPk(id)
    .then((dog)=> res.send(dog))
    .catch((error)=> next(error));
}); */
        /* if(name){ 
        let dog = await Dog.findAll({
            where:{
                name:{
                    [Op.iLike]: '%' + name + '%'
                }
            }
        });
        
        return res.status(200).json(dog)
    }
    res.status(200).json(miData.data)
} catch (error) {
    console.log(error)
    }
   
        
        
    } 
)
 */
router.get("/:id", async(req, res, next)=>{
    const {id} = req.params;
    try{ 
    if(UUID.test(id)){ 
        return await Dog.findByPk(id)
        .then(busqueda =>{
            console.log("BUSQUEDA", busqueda);
             res.status(200).json(busqueda);
        })
    
    } else { 
       
        await axios(urlExt)
     
        .then(dog => dog.data.find(d=>d.id == id))
        .then(dog => res.status(200).json(dog))
        
        
    }} catch (error) {
        next(error)
    }
    
}) 

router.post("/", (req, res, next)=>{
    const dog = req.body;
     return Dog.create({
        ...dog,
    id: uuidv4()})
    .then((e)=> res.send(e))
    .catch(error=> next(error))
})
router.delete("/:id", )
module.exports = router;