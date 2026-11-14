class Oficina {
    constructor(id, titulo, responsavel, descricao, carga_horaria){
        this._id = id;
        this._titulo = titulo;
        this._responsavel = responsavel;
        this._descricao = descricao;
        this._carga_horaria = carga_horaria;
        this._aberta = true;
    };

    // Métodos Getters
    get id(){
        return this._id;
    }
    get titulo(){
        return this._titulo;
    }
    get responsavel(){
        return this._responsavel;
    }
    get descricao(){
        return this._descricao;
    }
    get carga_horaria(){
        return this._carga_horaria;
    }
    get aberta(){
        return this._aberta;
    }

    // Métodos Setters
    set titulo(novoTitulo){
        this._titulo = novoTitulo;
    }
    set responsavel(novoResponsavel){
        this._responsavel = novoResponsavel;
    }
    set descricao(novaDescricao){
        this._descricao = novaDescricao;
    }
    set carga_horaria(novaCargaHoraria){
        this._carga_horaria = novaCargaHoraria;
    }
    set aberta(trocar){
        this._aberta = trocar;
    }
}

module.exports = Oficina;