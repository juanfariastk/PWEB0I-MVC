class AlunoController{

    constructor() {
        this.service = new AlunoService();
    }

    adicionar() {
        const nomeElemento = document.querySelector("#nome");
        const idadeElemento = document.querySelector("#idade");
        const matriculoElemento = document.querySelector("#matricula");
        const alunoInserido = this.service.adicionar(nomeElemento.value, Number(idadeElemento.value),
            matriculoElemento.value);
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.adicionarAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.service.listarMenoresIdade();
        alunosMenores.forEach(menor => this.adicionarAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }


    adicionarAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

}
