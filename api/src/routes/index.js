const { Router } = require('express');
const DogsRouter = require('./dog')
const TemperRouter = require('./temper')
const router = Router()
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', DogsRouter);
router.use('/temper', TemperRouter)

module.exports = router;
