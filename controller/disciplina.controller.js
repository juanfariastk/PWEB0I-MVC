class DisciplinaController {
    constructor() {
        this.service= new DisciplinaService();
    }

    adicionar() {
        const elementoCodigo = document.querySelector('#codigo');
        const elementoNome = document.querySelector('#nome');

        const codigo = Number(elementoCodigo.value);
        console.log(codigo);
        const materiaAdicionada = this.service.adicionar(codigo, elementoNome.value);
        console.log(materiaAdicionada);
        const elementoListaMaterias = document.querySelector('#listaMaterias');

        if (materiaAdicionada) {
            this.adicionarMateriaNoHtml(materiaAdicionada, elementoListaMaterias);
        }
    }

    adicionarMateriaNoHtml(materia, elementoDestino) {
        const elementoMateria = document.createElement('li');
        elementoMateria.textContent = `Código: ${materia.codigo} - Nome: ${materia.nome}`;

        elementoDestino.appendChild(elementoMateria);
    }
}
