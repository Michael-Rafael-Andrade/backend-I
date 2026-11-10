// importar o servidor
const http = require('node:http');

// criar o endereço do servidor
const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');

    // obter data atual
    const data_atual = new Date(Date.now());

    // retorna string com data formatada para o formato brasileiro
    const data_formatada = data_atual.toLocaleDateString();

    var resposta =
        `<html>
            <head>
                <meta charset="UTF-8">
                <title>Data Atual</title>
            </head>
            <body>
            <p>Página para exibir a data atualizada.</p>
            <p>Data atual:  ${data_formatada}     
    `
    // envia a resposta e finaliza a conexão
    res.end(resposta);
});




server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço ${hostname}:${porta}/`);
});