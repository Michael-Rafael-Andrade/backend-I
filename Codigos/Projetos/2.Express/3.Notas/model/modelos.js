// Neste arquivo serão definidos todos os modelos de dados da aplicação
class Nota {
    constructor(chave, titulo, texto){
        this._chave = chave;
        this._titulo = titulo;
        this._texto = texto;
    }
    // Métodos Getters e Setters
    get chave(){
        return this._chave;
    }
    get titulo(){
        return this._titulo;
    }
    get texto(){
        return this._texto;
    }
    set titulo(novoTitulo){
        this._titulo = novoTitulo;
    }
    set texto(novoTexto){
        this._texto = novoTexto;
    }
}
    
module.exports = Nota;