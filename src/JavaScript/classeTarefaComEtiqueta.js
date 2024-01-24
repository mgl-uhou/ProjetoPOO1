import tarefa from "./classeTarefa.js";

class tarefasComEtiqueta extends tarefa {
  constructor(){
    super();
    this._etiqueta = '';
  }

  setAlterar(descricao, etiqueta){
    super.setAlterar(descricao);
    this._etiqueta = etiqueta;
  }

  setInformation(nome, descricao, etiqueta){
    super.setInformation(nome, descricao);
    this._etiqueta = etiqueta;
  }

  getInformation(){
    return `<strong>Tipo da Tarefa:</strong> Tarefa com Etiqueta. <br/>  <strong>Tarefa:</strong> ${this._nome.toLowerCase()}. <strong>Etiqueta:</strong> <span class="normal-case">${this._etiqueta}.</span> <br /> <strong>Descrição:</strong> ${this._descricao}`;
  }

  getConcluida(){
    const date = new Date( Date.now() );

    return `A tarefa <strong class="capitalize">${this._nome.toLowerCase()}</strong> foi marcada como concluida em <strong>${date.toLocaleDateString()}</strong>. <br /> ${this._etiqueta}`;
}
}

export default tarefasComEtiqueta;