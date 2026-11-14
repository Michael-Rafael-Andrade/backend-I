// Importação da classe Oficina definida em oficina.js
var Oficina = require('./oficina.js');

// Vetor em memória que armazena os objetos das oficinas
const lista_oficinas = []; // começa com uma lista de vetor vazio

// Contador sequencial para gerar IDs numéricos únicos
var proximo_id = 1;

// Classe responsável por gerenciar as oficinas em memória
class OficinaMemoria {
    // Método assíncrono para cadastrar uma nova oficina
    async cria(titulo, responsavel, descricao, carga_horaria) {
        var id = proximo_id;
        proximo_id = proximo_id + 1;

        // Instancia um novo objeto Oficina (inicia com aberta = true)
        lista_oficinas[id] = new Oficina(
            id,
            titulo,
            responsavel,
            descricao,
            carga_horaria
        );

        return lista_oficinas[id];
    }

    // Método assíncrono que retorna todas as oficinas cadastradas
    async lista() {
        return Object.values(lista_oficinas);
    }

    // Método assíncrono que retorna apenas oficinas com inscrições abertas
    async listaAbertas() {
        var todas = Object.values(lista_oficinas);
        var abertas = [];

        for (var i = 0; i < todas.length; i++) {
            if (todas[i].aberta) {
                abertas.push(todas[i]);
            }
        }

        return abertas;
    }

    // Método assíncrono para consultar uma oficina pelo ID
    async consulta(id) {
        if (lista_oficinas[id]) {
            return lista_oficinas[id];
        } else {
            throw new Error("Oficina com o ID " + id + " não existe");
        }
    }

    // Método assíncrono para atualizar os dados de uma oficina existente
    async atualiza(id, titulo, responsavel, descricao, carga_horaria) {
        if (lista_oficinas[id]) {
            lista_oficinas[id].titulo = titulo;
            lista_oficinas[id].responsavel = responsavel;
            lista_oficinas[id].descricao = descricao;
            lista_oficinas[id].carga_horaria = carga_horaria;
            return lista_oficinas[id];
        } else {
            throw new Error("Oficina com o ID " + id + " não existe");
        }
    }

    // Método assíncrono para alternar a situação entre aberta e encerrada
    async alternaSituacao(id) {
        if (lista_oficinas[id]) {
            if (lista_oficinas[id].aberta) {
                lista_oficinas[id].aberta = false;
            } else {
                lista_oficinas[id].aberta = true;
            }
            return lista_oficinas[id];
        } else {
            throw new Error("Oficina com o ID " + id + " não existe");
        }
    }

    // Método assíncrono para excluir uma oficina pelo ID
    async deleta(id) {
        if (lista_oficinas[id]) {
            delete lista_oficinas[id];
        } else {
            throw new Error("Oficina com o ID " + id + " não existe");
        }
    }

    // Método assíncrono para pesquisar oficinas por título, responsável ou descrição
    async pesquisa(termo) {
        var todas = Object.values(lista_oficinas);
        var encontradas = [];
        var termoBusca = termo.toLowerCase().trim();

        if (termoBusca === "") {
            return encontradas;
        }

        for (var i = 0; i < todas.length; i++) {
            var titulo = todas[i].titulo.toLowerCase();
            var responsavel = todas[i].responsavel.toLowerCase();
            var descricao = todas[i].descricao.toLowerCase();

            if (
                titulo.indexOf(termoBusca) !== -1 ||
                responsavel.indexOf(termoBusca) !== -1 ||
                descricao.indexOf(termoBusca) !== -1
            ) {
                encontradas.push(todas[i]);
            }
        }

        return encontradas;
    }

}

// Instancia e exporta o objeto gerenciador
var oficinas = new OficinaMemoria();

module.exports = oficinas;