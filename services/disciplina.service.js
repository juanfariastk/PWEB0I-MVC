class DisciplinaService {
    constructor() {
        this.repository = new DisciplinaRepository()
    }

    adicionar(id, nome) {
        const disciplinaPesquisada = this.pesquisarPorId(id)

        if(disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!')
        } 

        const disciplina = new Disciplina(id, nome)
        this.repository.inserir(disciplina)

        return disciplina
    }

    remover(id) {
        this.repository.remover(id)
    }

    pesquisarPorId(id) {
        return this.repository.listar()
        .filter((disciplina) => disciplina.id === id)
    }

    inserirAlunoNaDisciplina(id, aluno) {
        const disciplina = this.pesquisarPorId(id)

        if(disciplina.length == 0) {
            throw new Error('Disciplina não encontrada!')
        }

        disciplina[0].adicionar(aluno)
    }

    atualizar(id, novoNome) {
        const disciplina = this.pesquisarPorId(id)
        if(disciplina.length > 0) {
            this.repository.atualizar(id, nome)
        } else {
            throw new Error('Disciplina não encontrada!')
        }
    }
}
