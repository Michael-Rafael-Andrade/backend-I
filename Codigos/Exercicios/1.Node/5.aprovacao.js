const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    // Se a URL contiver parâmetros enviados pelo formulário (ex: ?n1=10&n2=8...)
    if (req.url.includes('n1=')) {
        calcularResultado(req, res);
    } else {
        paginaPrincipal(req, res);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

function paginaPrincipal(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    try {
        // Nome do arquivo ajustado para 5.formulario.html
        const html = fs.readFileSync('./5.formulario.html');
        res.write(html);
        res.end();
    } catch (erro) {
        console.error("Erro ao carregar o formulário: " + erro);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("Erro ao carregar o formulário.");
    }
}

function calcularResultado(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Extrai os parâmetros da URL
    const queryString = req.url.split('?')[1] || '';
    const parametros = new url.URLSearchParams(queryString);

    // Converte os dados do formulário com parseFloat
    const n1 = parseFloat(parametros.get('n1')) || 0;
    const n2 = parseFloat(parametros.get('n2')) || 0;
    const n3 = parseFloat(parametros.get('n3')) || 0;
    const n4 = parseFloat(parametros.get('n4')) || 0;

    // Cálculo da média das 4 notas
    const media = (n1 + n2 + n3 + n4) / 4;

    try {
        let html;
        // Se a média for maior ou igual a 6.0 carrega aprovado, senão reprovado
        if (media >= 6.0) {
            html = fs.readFileSync('./5.aprovado.html');
        } else {
            html = fs.readFileSync('./5.reprovado.html');
        }
        res.write(html);
        res.end();
    } catch (erro) {
        console.error("Erro ao carregar a página de resultado: " + erro);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("Erro ao carregar o resultado.");
    }
}