const {Router} = require('express');
const { getAllDogs, dogCreate, deleteDog, getDogByName } = require('../controllers/dogs');
const router = Router();

router.get("", getAllDogs)
router.get("/:name",getDogByName)
router.post("", dogCreate)
router.delete("/:id", deleteDog)
module.exports = router;