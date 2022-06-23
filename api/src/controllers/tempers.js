const { Temper } = require('../db');
const { v4: uuidv4} = require('uuid');

function getAllTempers(req, res, next){
    return Temper.findAll()
    .then(tempers => res.send(tempers))
    .catch((error) => next(error))
}
function getTemperById(req, res, next){
    const id = req.params.id;
    return Temper.findByPk(id)
    .then(res => res.send(res))
    .catch((error)=>next(error))
}
function temperCreate(req, res, next){
    const temper = req.body;
    return Temper.create({
        ...temper,
        id: uuidv4()
    })
    .then(tempers => res.send(tempers))
    .catch((error) => next(error))
}
function deleteTemper(req, res, next){
    const id = req.params.id;
    return Temper.destroy({
        where: {
            id
        },
    })
    .then(() => res.sendStatus(200))
    .catch((error)=>next(error))
}
module.exports = {
    getAllTempers,
    getTemperById,
    temperCreate,
    deleteTemper
}