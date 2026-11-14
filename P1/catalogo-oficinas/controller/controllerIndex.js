
// Importação do módulo que gerencia as oficinas em memória
const oficinas = require('../model/oficinaMemoria.js');

// Função auxiliar que calcula os indicadores sobre o catálogo completo
function calcularResumo(todasOficinas) {
    var total = todasOficinas.length;
    var abertas = 0;
    var encerradas = 0;
    var carga_abertas = 0;

    for (var i = 0; i < todasOficinas.length; i++) {
        if (todasOficinas[i].aberta) {
            abertas = abertas + 1;
            carga_abertas = carga_abertas + todasOficinas[i].carga_horaria;
        } else {
            encerradas = encerradas + 1;
        }
    }

    return {
        total_oficinas: total,
        total_abertas: abertas,
        total_encerradas: encerradas,
        carga_horaria_abertas: carga_abertas
    };
}

// Exporta a função responsável por renderizar a página principal
exports.tela_principal = async function (req, res) {
    var todas = await oficinas.lista();
    var resumo = calcularResumo(todas);

    // Define se o catálogo está vazio
    var sem_oficinas = false;
    if (todas.length === 0) {
        sem_oficinas = true;
    }

    var contexto = {
        titulo_pagina: "Oficinas cadastradas",
        menu_inicio: true,
        todas_oficinas: true,
        apenas_abertas: false,
        sem_oficinas: sem_oficinas,
        sem_abertas: false,
        oficinas: todas,
        total_oficinas: resumo.total_oficinas,
        total_abertas: resumo.total_abertas,
        total_encerradas: resumo.total_encerradas,
        carga_horaria_abertas: resumo.carga_horaria_abertas
    };

    res.render('index', contexto);
};

// Exporta a função responsável pela visualização de Inscrições Abertas
exports.tela_abertas = async function (req, res) {
    var todas = await oficinas.lista();
    var abertas = await oficinas.listaAbertas();
    var resumo = calcularResumo(todas);

    // Verifica se o catálogo está vazio ou se todas estão encerradas
    var sem_oficinas = false;
    var sem_abertas = false;

    if (todas.length === 0) {
        sem_oficinas = true;
    } else if (abertas.length === 0) {
        sem_abertas = true;
    }

    var contexto = {
        titulo_pagina: "Oficinas cadastradas",
        menu_inicio: true,
        todas_oficinas: false,
        apenas_abertas: true,
        sem_oficinas: sem_oficinas,
        sem_abertas: sem_abertas,
        oficinas: abertas,
        total_oficinas: resumo.total_oficinas,
        total_abertas: resumo.total_abertas,
        total_encerradas: resumo.total_encerradas,
        carga_horaria_abertas: resumo.carga_horaria_abertas
    };

    res.render('index', contexto);
};

// Exporta a função responsável por renderizar a página Sobre
exports.sobre = async function (req, res) {
    // Objeto de contexto com título e indicação do menu ativo
    var contexto = {
        titulo_pagina: "Sobre o catálogo",
        autor: "Michael Rafael de Andrade", // Fiquei na dúvida se usava igual o nome do professor ou o meu nome.
        menu_sobre: true
    };

    // Renderiza a view sobre.hbs dentro da pasta views
    res.render('sobre', contexto);
};

