import express from 'express';

const app = new express();
const porta = 3000;

const ola_mundo = function(req, res){
    res.send('Olá Mundo!');
}

app.get('/', ola_mundo);

app.listen(porta, () => {
    console.log("Servidor rodando no endereço http://127.0.0.1:3000\n");
});