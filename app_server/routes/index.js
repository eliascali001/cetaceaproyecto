var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

/* GET home page. */
router.get('/', ctrlMain.index); //llama a la función index del main.js de la carpeta controllers, cualquier persona que entre a mi homepage entrará en este get
router.get('/Home', ctrlMain.Home); //el "/hola" es mi url y "ctrlMain.hola" llama a mi controlador con la función hola
router.get('/About_us', ctrlMain.About_us);
router.get('/News', ctrlMain.News);

module.exports = router;
