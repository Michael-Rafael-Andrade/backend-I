// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMemoria.js');

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    // nota criada para teste
    await notas.cria('nota_1', "Olá mundo, Notas", "Esta é uma nota para testar as funcionalidades da aplicação de notas.");

    contexto = {
        titulo_pagina: "Gerenciador de Notas de Texto",
        notas: await notas.lista(),
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}