// Importação das classes que gerenciam as notas na memoria
const notas = require('../model/notaMemoria');

// Cria e já exporta a função que será responsável pela criação de nota
exports.cria_get = async function(req, res){
    contexto = {
        titulo_pagina: "Criação de Nota",
    }

    // renderiza o arquivo dentro da pasta view
    res.render('criaNota', contexto);
}

// Cria e já exporta a função que será responsável pelo criação de notas (post)
exports.cria_post = async function(req, res){
    // Obtém as informações do formulário 
    var chave = req.body.chave;
    var titulo = req.body.titulo;
    var texto = req.body.texto;

    // cria a nota 
    await notas.cria(chave, titulo, texto);

    // redireciona para a página principal
    res.redirect('/');
}

// cria e já exporta a função que será responsável pela consulta à Nota
exports.consulta = async function(req, res){
    // informação passada como parâmetro na URL
    var chave = req.params.chave_nota
    var nota = await notas.consulta(chave);

    contexto = {
        titulo_pagina: "Consulta a Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        texto: nota.texto,
    }
    // renderiza o arquivo dentro da pasta view
    res.render('consultaNota', contexto);
}

// Cria e já exporta a função que será responsável pela alteração da Nota
exports.altera_get = async function(req, res){
    // informação passada como parãmetro na URL
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);

    contexto = {
        titulo_pagina: "Altera a Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        texto: nota.texto,
    }

    // renderiza o arquivo da pasta view
    res.render('alteraNota', contexto);
}