class AlunoService {
    constructor() {
        this.repository = new AlunoRepository();
    }

    adicionar(nome, idade, matricula) {
        const estudantePesquisado = this.pesquisarPorMatricula(matricula);
        if (estudantePesquisado.length > 0) {
            throw new Error('Estudante já cadastrado!');
        }

        if (idade < 18) {
            throw new Error('Estudante não pode ser menor de idade');
        }

        const novoEstudante = new Aluno(nome, idade, matricula);
        this.repository.adicionar(novoEstudante);
        return novoEstudante;
    }

    pesquisarPorMatricula(matricula) {
        return this.repository.listar().filter(estudante => estudante.matricula === matricula);
    }

    remover(matricula) {
        this.repository.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repository.listar().filter(estudante => estudante.idade < 18);
    }
}
