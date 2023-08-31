class Disciplina {
    constructor(id, nome) {
        this._id = id
        this._nome = nome
        this.alunos = []
    }

    get id() {
        return this._id
    }

    set id(novoId) {
        this._id = novoId
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    adicionarAluno(aluno){
        this.alunos.push(aluno);
    }
}