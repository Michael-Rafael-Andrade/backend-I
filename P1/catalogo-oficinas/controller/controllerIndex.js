
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