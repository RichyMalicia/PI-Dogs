const axios = require('axios')
const {Router} = require('express');
const{v4: uuidv4} = require('uuid');
const router = Router();
const { Dog, Temper } = require('../db');
const urlExt = `https://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`

const getData = async () => {
    const data = await axios(urlExt)
    return data
}
router.get("", async(req, res, next)=>{
    const miData = await getData(urlExt)
    let cache = [];
    const datos = miData.data
    var id = 0;
    try{ 
        for(var i = 0; i < datos.length; i++) {
           const arr = datos[i]?.temperament?.split(",")   
           if(arr?.length){ 
             for(var j = 0; j < arr.length; j++){
                 let isTemperDefined = cache.find(temperament => temperament.name.trim() === arr[j].trim());
                 if (!isTemperDefined && arr[j] !== undefined) {
                     cache.push({id: uuidv4(), name: arr[j].trim()})
                 }
             }                 
       }} await Temper.bulkCreate(cache)
        .then(ttt => res.status(200).send(ttt).json(ttt))
        } catch (error) {
        next(error)
    }
} );
router.get("/all", async(req, res, next)=>{
     await Temper.findAll()
        .then(temperaments => res.status(200).json(temperaments))
        .catch (error=>next(error))
    } );
    router.delete("/all", async(req, res, next)=>{
        await Temper.findAll()
           .then(temperaments => res.status(200).json(temperaments))
           .catch (error=>next(error))
       } );

module.exports = router;