const http = require('node:http');
const url = require('node:url');

const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    // comparação com "startsWith" pois pode haver outras informações em seguida, como dados via URL
    if (req.url.startsWith('/media')) // requisição para entrar com os três valores para calcular a média
        paginaMedia(req, res);
    else if (req.url.startsWith('/')) // requisição página "Formulário"
    paginaFormulario(req, res);

});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

function paginaFormulario(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end(
        `
        <html>
            <head>
                <meta charset="utf-8">
                <title>Formulário</title>
            </head>
            <body>
                <h5>Informe os números abaixo para o aplicativo poder calcular a média:</h5>
                <form action="/media" method="get">
                    <p><label for="n1">Número 1</label>
                    <input type="number" name="n1" required></p>
                    <p><label for="n2">Número 2</label>
                    <input type="number" name="n2" required></p>
                    <p><label for="n3">Número 3</label>
                    <input type="number" name="n3" required></p>
                    <input type="submit">
                </form>
            </body>
        </html>
        `
    )
}

function paginaMedia(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    let parametros = new url.URLSearchParams(req.url);

    let n1 = parseFloat(parametros.get('/media?n1'));
    let n2 = parseFloat(parametros.get('n2'));
    let n3 = parseFloat(parametros.get('n3'));

    let media = (n1 + n2 + n3) / 3;

    // Retorna a página exatamente idêntica à iamgem do exercício
    res.end(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Resultado da Operação</title>
                </head>
                <body>
                    <h1>Resultado da Operação</h1>
                    <p><b>Média dos 3 números:</b> ${media}</p>
                </body>
            </html>
        `)

    // if (parseInt(n1 || n2 || n3) < 0) {
    //     res.end("Você informou um valor incorreto, favor fazer a requisição novamente.");
    // } else {
    //     res.end(`Resultado da Operação\nMédia dos 3 números: ${((n1 + n2 + n3) / 3)}`);
}


// res.end(
//     `
//     <html>
//         <head>
//             <meta charset="utf-8">
//             <title>Resultado da Operação</title>
//         </head>
//         <body>
//             <h1>Resultado da Operação</h1>
//             <p>Média dos 3 números: ${(numero1 + numero2 + numero3) / 3}</p>
//         </body>
//     </html>
//     `
// )
