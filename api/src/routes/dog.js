const axios  = require('axios');
const {Router} = require('express');
const { Op } = require('sequelize')
/* const { getAllDogs, dogCreate, deleteDog, getDogByName } = require('../controllers/dogs'); */
const {Dog, Temper} = require('../db');
const router = Router();
const urlExt = `https://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`


const getData = async () => {
    const data = await axios(urlExt)
    return data
}

router.get("/", async(req, res, next)=>{
    /* const name = req.query.name; */
    const miData = await getData(urlExt)
    
    try {
        let allDogs = await Dog.findAll();
        if(!allDogs.length) await Dog.bulkCreate(miData.data)
        res.status(200).json(miData.data) 
    } catch (error) {
        console.log(error)
    }
/*     if(name){
        try {
            let dog = await Dog.findAll({
                where:{
                    name:{
                        [Op.iLike]: '%' + name + '%'
                    }
                }
            });
            return res.status(200).json(dog)
        } catch (error) {
            console.log(error)
        }
    } */ /* else if (req.query.filter){
       try {
           let dog = await Dog.findAll({
               where:{
                   temperament: req.query.filter 
               },
               limit: 6,
               offset: req.query.page,
               order: [["name", req.query.order]],
               include: {model: Temper}
           });
           return res.send(dog)
       } catch (error) {
           console.log(error);
       }
    } */ /* else {
        try {
            let dog = await Dog.findAll({
                limit: 8,
                offset: req.query.page,
                order: [["name", req.query.order]],
                include: {model: Temper}
            });
            return res.send(dog)
        } catch (error) {
            console.log(error)
        }
    }   */      
    
})

router.get("/:id", (req, res, next)=>{
    const {id} = req.params;
    try {
        Dog.findAll({
            where:{
                id: id
            }
        })
        .then(busqueda =>{
            console.log(busqueda)
            return res.status(200).json(busqueda)
        })
    } catch (error) {
        console.log(error)
    }
    })
router.post("", )
router.delete("/:id", )
module.exports = router;