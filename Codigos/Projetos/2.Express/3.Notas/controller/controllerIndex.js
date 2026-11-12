// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMemoria.js');

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index');
}