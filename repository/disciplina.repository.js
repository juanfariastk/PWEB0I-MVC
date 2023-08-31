class DisciplinaRepository{
    constructor() {
        this.lista = [];
    }

    inserir(disciplina) {
        this.lista.push(disciplina);
    }

    remover(id) {
        const indiceDisciplinaARemover = this.lista.findIndex(
            (disciplina) => {
                disciplina.id === id;
            }
        );

        if (indiceDisciplinaARemover > -1) {
            this.lista.splice(indiceDisciplinaARemover, 1);
        }
    }

    atualizar(id, novoNome) {
        const indiceDisciplinaAAtualizar = this.lista.findIndex(
            (disciplina) => {
                disciplina.id === id;
            }
        );

        if (indiceDisciplinaAAtualizar > -1) {
            this.lista[indiceDisciplinaAAtualizar].nome = novoNome;
        }
    }

    listar() {
        return this.lista;
    }
}
