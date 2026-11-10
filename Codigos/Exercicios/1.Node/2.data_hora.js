const http = require('node:http');

const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        paginaPrincipal(req, res);
    } else if (req.url === '/data') {
        paginaDataAtual(req, res);
    } else if (req.url === '/hora') {
        paginaHoraAtual(req, res);
    } else if (req.url === '/datahora') {
        paginaDataHora(req, res);
    } else{
        // código 404 indica erro (recurso não localizado)
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8'});
        // chama a função que finaliza a conexão, enviando a resposta
        res.end("Não foi possível acessar o caminho: " + req.url);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço: ${hostname}:${porta}/`);
});

function paginaPrincipal(req, res) {
    // prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `<html>
            <head>
                <meta charset="UTF-8">
                <title>Aplicação Data/Hora</title>
            </head>
            <body>
                <h1>Aplicação Data/Hora.</h1>
                <p>Aqui é possível consultar a data e/ou hora atual</p>
                <p><a href="/data">Consultar a Data Atual</a></p>
                <p><a href="/hora">Consultar a Hora Atual</a></p>
                <p><a href="/datahora">Consultar a Data e Hora Atual</a></p>
            </body>
        </html>
        `
    );
}

function paginaDataAtual(req, res) {
    // prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset="UTF-8"' });

    // obtém a data atual
    const dataAtual = new Date(Date.now());

    // converte para o formato padrão da data
    const dataAtualConvertida = dataAtual.toLocaleDateString();

    // chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Data Atual</title>
            </head>
            <body>
                <p>Página para exibir a data atual.</p>
                <p>Data atual: ${dataAtualConvertida}</p>
                <a href="/">Voltar</a>
            </body>
        </html>
        `
    );
}

function paginaHoraAtual(req, res) {
    // prepara o cabeçalho de resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8 ' });

    // Captura a Hora atual
    const horaAtual = new Date(Date.now());

    // formata a hora atual
    const horaAtualFormatada = horaAtual.toLocaleTimeString();

    // finaliza a conexão, envia a mensagem
    res.end(
        `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Hora Atual</title>
            </head>
            <body>
                <p>Página para exibir a hora atual.</p>
                <p>Hora atual: ${horaAtualFormatada}</p>
                <a href="/">Voltar</a>
            </body>
        </html>
        `
    );
}

function paginaDataHora(req, res) {
    // configura o cabeçalho de resposta
    res.writeHead(200, { 'Context-Type': 'text/html; charset=utf-8 ' });

    // pega a data atual e converte
    const dataAtualConvertida = new Date(Date.now()).toLocaleDateString();
    // pega a hora atual e converte
    const horaAtualFormatada = new Date(Date.now()).toLocaleTimeString();

    // finaliza o acesso, envia a resposta
    res.end(
        `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Data e Hora Atual</title>
            </head>
            <body>
                <p>Página para exibir a data e hora atual.</p>
                <p>Data e hora atual: ${dataAtualConvertida} - ${horaAtualFormatada}</p>
                <a href="/">Voltar</a>
            </body>
        </html>
        `
    );
}