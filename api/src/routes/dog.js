const {Router} = require('express');
const { getAllDogs, getDogById, dogCreate, deleteDog } = require('../controllers/dogs');
const router = Router();

router.get("", getAllDogs)
router.get("/:id", getDogById)
router.post("", dogCreate)
router.delete("/:id", deleteDog)
module.exports = router;