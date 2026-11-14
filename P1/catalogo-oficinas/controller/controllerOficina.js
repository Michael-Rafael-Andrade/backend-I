// Importação do módulo que gerencia as oficinas em memória
const oficinas = require('../model/oficinaMemoria');

// Renderiza a tela com o formulário de cadastro de nova oficina (GET)
exports.cria_get = async function (req, res) {
    // Define o título da página e destaca "Nova Oficina" no menu superior
    var contexto = {
        titulo_pagina: "Nova Oficina",
        menu_nova: true
    };

    // Renderiza a view criaOficina.hbs
    res.render('criaOficina', contexto);
};

// Processa os dados enviados pelo formulário de cadastro (POST)
exports.cria_post = async function (req, res) {
    // Obtém os campos enviados pelo formulário
    var titulo = req.body.titulo;
    var responsavel = req.body.responsavel;
    var descricao = req.body.descricao;
    // Converte a carga horária recebida (string) para número inteiro
    var carga_horaria = parseInt(req.body.carga_horaria);

    // Salva a nova oficina no catálogo em memória
    await oficinas.cria(titulo, responsavel, descricao, carga_horaria);

    // Redireciona para a página principal após o cadastro
    res.redirect('/');
};

// Renderiza a tela de consulta com todos os detalhes da oficina (GET)
exports.consulta = async function (req, res) {
    var id = req.params.id;
    var oficina = await oficinas.consulta(id);

    var contexto = {
        titulo_pagina: "Consulta de Oficina",
        oficina: oficina
    };

    res.render('consultaOficina', contexto);
};

// Renderiza o formulário de edição preenchido com os dados atuais (GET)
exports.altera_get = async function (req, res) {
    var id = req.params.id;
    var oficina = await oficinas.consulta(id);

    var contexto = {
        titulo_pagina: "Editar Oficina",
        oficina: oficina
    };

    res.render('alteraOficina', contexto);
};

// Processa os dados atualizados do formulário de edição (POST)
exports.altera_post = async function (req, res) {
    var id = req.params.id;
    var titulo = req.body.titulo;
    var responsavel = req.body.responsavel;
    var descricao = req.body.descricao;
    var carga_horaria = parseInt(req.body.carga_horaria);

    await oficinas.atualiza(id, titulo, responsavel, descricao, carga_horaria);

    res.redirect('/');
};

// Alterna a situação da oficina entre aberta e encerrada (GET)
exports.alterna = async function (req, res) {
    // Obtém o ID passado como parâmetro de rota
    var id = req.params.id;

    // Atualiza somente a situação da oficina
    await oficinas.alternaSituacao(id);

    // Retorna para a página principal
    res.redirect('/');
};

// Exclui uma oficina após confirmação na janela modal (GET)
exports.deleta = async function (req, res) {
    // Obtém o ID passado como parâmetro de rota
    var id = req.params.id;

    // Remove a oficina da memória
    await oficinas.deleta(id);

    // Redireciona para a página principal
    res.redirect('/');
};

// Renderiza a tela inicial de pesquisa (GET)
exports.pesquisa_get = async function (req, res) {
    var contexto = {
        titulo_pagina: "Pesquisa de Oficinas",
        menu_pesquisa: true,
        realizou_pesquisa: false,
        termo: ""
    };

    res.render('pesquisaOficina', contexto);
};

// Processa o termo pesquisado e exibe os resultados (POST)
exports.pesquisa_post = async function (req, res) {
    var termo = req.body.termo;
    var resultados = await oficinas.pesquisa(termo);

    var sem_resultados = false;
    if (resultados.length === 0) {
        sem_resultados = true;
    }

    var contexto = {
        titulo_pagina: "Pesquisar Oficinas",
        menu_pesquisa: true,
        realizou_pesquisa: true,
        termo: termo,
        sem_resultados: sem_resultados,
        oficinas: resultados
    };

    res.render('pesquisaOficina', contexto);
};