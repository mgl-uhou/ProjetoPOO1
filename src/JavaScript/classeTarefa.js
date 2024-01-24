class tarefa{ // Aqui a classe que tem as propriedades dos objetos e o método é criada.
    constructor(){
        this._nome = '';
        this._descricao = '';
    }

    setAlterar(des) /** Método que edita o valor das propriedades da terefa */ {
        this._descricao = des;
    }

    setInformation(nome, descricao){
        this._nome = nome;
        this._descricao = descricao;
    }

    getInformation(){
        return `<strong>Tipo da Tarefa:</strong> Tarefa Comum. <br/> <strong>Tarefa:</strong> ${this._nome.toLowerCase()}. <br /> <strong>Descrição:</strong> ${this._descricao}`; // Aqui as informações que aparecerão no site são organizadas.
    }

    getNome(){
        return this._nome;
    }

    getConcluida(){
        const date = new Date( Date.now() );

        return `A tarefa <strong class="capitalize">${this._nome.toLowerCase()}</strong> foi marcada como concluída em <strong>${date.toLocaleDateString()}</strong>.`;
    }
}

/* document.getElementById('dataConclusao').value */

export default tarefa;