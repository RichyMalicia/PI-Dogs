const axios = require('axios')
const {Router} = require('express');
const router = Router();
const { Dog, Temper } = require('../db');
const urlExt = `https://api.thedogapi.com/v1/breeds?api_key=d3f6e19f-db7f-4892-bb7a-2c183739a70a`

const getData = async () => {
    const data = await axios(urlExt)
    return data
}
router.get("", async(req, res, next)=>{
    const miData = await getData(urlExt)
    try {
        let allTempers =await Dog.findAll({
            attributes: ['temperament']    
        })
        res.status(200).json(allTempers.data)
    } catch (error) {
        next(error)
    }
} );

module.exports = router;