var express = require('express');
var router = express.Router();
var controllerNota = require('../controller/controllerNota');

/* GET cria nota. */
router.get('/cria', controllerNota.cria_get);

/* POST cria nota. */
router.post('/cria', controllerNota.cria_post);

/* GET consulta nota. */
router.get('/consulta/:chave_nota', controllerNota.consulta);

/* GET altera nota. */
router.get('/altera/:chave_nota', controllerNota.altera_get);



module.exports = router;