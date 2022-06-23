const {Dog} = require('../db');
const {v4: uuidv4} = require('uuid');
const axios = require('axios')
const UUID = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")
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


function getDogById(req, res, next){
     const id = req.params.id
     const regex = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'
     if(UUID.test(id)){
     Dog.findByPk(id)
     .then(dog => res.send(dog))
     .catch((error) => next(error))
    } else {
     const apiDog = axios(`https://api.thedogapi.com/v1/breeds/${id}`)
     .then(ress => res.send(ress.data))     
     .catch((error) => next(error))
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
    deleteDog
 }