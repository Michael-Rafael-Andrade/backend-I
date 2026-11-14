// Importação do Express e criação do objeto roteador
var express = require('express');
var router = express.Router();

// Importação do controller responsável pelas operações de oficina
var controllerOficina = require('../controller/controllerOficina.js');

/* GET formulário de cadastro de nova oficina */
router.get('/cria', controllerOficina.cria_get);

/* POST recebe os dados do formulário de cadastro */
router.post('/cria', controllerOficina.cria_post);

/* GET alterna situação (aberta/encerrada) de uma oficina */
router.get('/alterna/:id', controllerOficina.alterna);

/* GET exclui uma oficina após confirmação modal */
router.get('/deleta/:id', controllerOficina.deleta);

// Exporta o roteador configurado
module.exports = router;