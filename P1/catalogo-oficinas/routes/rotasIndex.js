// Importação do Express e criação do objeto roteador
var express = require('express');
var router = express.Router();

// Importação do controller das páginas principais
var controllerIndex = require('../controller/controllerIndex.js');

/* GET página principal */
router.get('/', controllerIndex.tela_principal);

/* GET página principal filtrada (Inscrições Abertas) */
router.get('/abertas', controllerIndex.tela_abertas);

/* GET página sobre */
router.get('/sobre', controllerIndex.sobre);

// Exporta o roteador configurado
module.exports = router;