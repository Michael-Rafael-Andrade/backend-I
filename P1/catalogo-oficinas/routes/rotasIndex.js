// Importação do Express e criação do objeto roteador
var express = require('express');
var router = express.Router();

// Importação do controller das páginas principais
var controllerIndex = require('../controller/controllerIndex.js');

/* GET página principal */
router.get('/', controllerIndex.tela_principal);

/* GET página sobre */
router.get('/sobre', controllerIndex.sobre);

// Exporta o roteador configurado
module.exports = router;