var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex');

/* GET home page. */
router.get('/', controllerIndex.tela_principal);

/* GET sobre page. */
router.get('/sobre', controllerIndex.sobre);

module.exports = router;
