const axios = require('axios')
const {Router} = require('express');
const{v4: uuidv4} = require('uuid');
const router = Router();
const { Dog, Temper } = require('../db');
const {API_KEY} = `https://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`

const getData = async () => {
    const data = await axios(urlExt)
    return data
}
router.get("", async(req, res, next)=>{
    try {
        const apiInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`);
        let temp = apiInfo.data.map((element) => element.temperament);
        temp = temp.join(', ').split(', ');
        temp = temp.filter((e) => e);
        temp = [...new Set(temp)];
        temp.forEach(element => {
            Temper.findOrCreate({
                where: { name: element}
            })
        });
        const allTemp = await Temper.findAll();
        res.status(200).json(allTemp);
    } catch(error){
        next(error)
        }
})

    router.delete("/all", async(req, res, next)=>{
        await Temper.findAll()
           .then(temperaments => res.status(200).json(temperaments))
           .catch (error=>next(error))
       } );

module.exports = router;