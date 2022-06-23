const {Router} = require('express');
const { getAllTempers, getTemperById, temperCreate, deleteTemper } = require('../controllers/tempers');
const router = Router();

router.get("", getAllTempers);
router.get("/:id", getTemperById)
router.post("", temperCreate)
router.delete("/:id", deleteTemper)
module.exports = router;