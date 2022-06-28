const {Dog} = require('../db');
const {v4: uuidv4} = require('uuid');
const axios = require('axios')
const UUID = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")

function getDogById(req, res, next){
    const q = req.query
    
    const db = Dog.findAll({
        include: {
            model: Dog,
            where: {
                name: q
            }
        }
    })


    const apiDog = axios(`https://api.thedogapi.com/v1/breeds/search?q=${q}`)
    Promise.all([db, apiDog])
    .then(ress => res.send(ress.data))     
    .catch((error) => next(error))
   
}

function getAllDogs(req, res, next){
    const myDogs = Dog.findAll()
    const apiDogs = axios(`http://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`)
    Promise.all([myDogs, apiDogs]) 
    .then((dogs) => {
        const [myDogsRes, apiDogsRes] = dogs;
        const resp = myDogsRes.concat(apiDogsRes.data);
        res.send(resp);
    })
    .catch((error) => next(error));
 };
async function getDogByName(req,res,next){
    try {const raza_perro = req.params;
   
    const api = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${raza_perro}`)
    const datosApi = await api.data.map(e=>{
        return{
            name: e.name,
            img: e.image.url
        }
    })
    return res.json(api.data)
    } catch (error) {
        next(error)
    }
}
function dogCreate(req, res, next){
     const dog = req.body
     return Dog.create({
         ...dog,
         id: uuidv4()
     })
     .then(dogs => res.send(dogs))
     .catch((error) => next(error))
 }

function deleteDog(req, res, next){
     const id = req.params.id;
     
     return Dog.destroy({
         where: {
             id,
         },
     })
     .then(()=>{
         res.sendStatus(200);
     })
     .catch((error) => next(error))
 }

 module.exports = {
    getAllDogs,
    getDogById,
    dogCreate,
    deleteDog,
    getDogByName
 }