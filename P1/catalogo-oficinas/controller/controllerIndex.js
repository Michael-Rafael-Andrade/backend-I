
// Exporta a função responsável por renderizar a página principal
exports.tela_principal = async function (req, res) {
    // Objeto de contexto com os dados enviados para a view
    var contexto = {
        titulo_pagina: "Catálogo de Oficinas",
        menu_inicio: true
    };

    // Renderiza a view index.hbs aplicando o layout compartilhado
    res.render('index', contexto);
};

// Exporta a função responsável por renderizar a página Sobre
exports.sobre = async function (req, res) {
    // Objeto de contexto com título e indicação do menu ativo
    var contexto = {
        titulo_pagina: "Sobre o Catálogo",
        autor: "Michael Rafael de Andrade",
        menu_sobre: true
    };

    // Renderiza a view sobre.hbs dentro da pasta views
    res.render('sobre', contexto);
};

