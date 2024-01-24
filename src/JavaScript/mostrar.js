const esconder = () => {
    const novaTarefaComum = document.getElementById('novaTarefa');
    const novaTarefaComEtiqueta = document.getElementById('novaTarefaComEtiqueta');
    const novaTarefaPrioritaria = document.getElementById('novaTarefaPrioritária');
    const novaTarefaRepetitiva = document.getElementById('novaTarefaRepetitiva');
    
    const removerTarefa = document.getElementById('removerTarefa');

    const editarTarefaComum = document.getElementById('editarTarefaComum');
    const editarTarefaComEtiqueta = document.getElementById('editarTarefaComEtiqueta');
    const editarTarefaPrioritaria = document.getElementById('editarTarefaPrioritaria');
    const editarTarefaRepetitiva = document.getElementById('editarTarefaRepetitiva');

    const marcarTarefa = document.getElementById('marcarTarefa');
  
    novaTarefaComum.classList.add( 'hidden' );
    novaTarefaComEtiqueta.classList.add( 'hidden' );
    novaTarefaPrioritaria.classList.add( 'hidden' );
    novaTarefaRepetitiva.classList.add( 'hidden' );

    removerTarefa.classList.add( 'hidden' );

    editarTarefaComum.classList.add( 'hidden' );
    editarTarefaComEtiqueta.classList.add( 'hidden' );
    editarTarefaPrioritaria.classList.add( 'hidden' );
    editarTarefaRepetitiva.classList.add( 'hidden' );

    marcarTarefa.classList.add( 'hidden' );
}

const mostrarNovaComum = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefa');
    novaTarefa.classList.remove( 'hidden' );
    novaTarefa.classList.remove( 'hidden' );
    novaTarefa.classList.add( 'flex' );
}

const mostrarNovaComEtiqueta = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefaComEtiqueta');
    novaTarefa.classList.remove( 'hidden' );
    novaTarefa.classList.add( 'flex' );
}

const mostrarNovaPrioritaria = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefaPrioritária');
    novaTarefa.classList.remove( 'hidden' );
    novaTarefa.classList.add( 'flex' );
}

const mostrarNovaRepetitiva = () => {
    esconder();
  
    const novaTarefa = document.getElementById('novaTarefaRepetitiva');
    novaTarefa.classList.remove( 'hidden' );
    novaTarefa.classList.add( 'flex' );
}

const mostrarRemover = () => {
    esconder();
  
    const removerTarefa = document.getElementById('removerTarefa');
    removerTarefa.classList.remove( 'hidden' );
    removerTarefa.classList.add( 'flex' );
}

const mostrarEditarComum = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaComum');
    editarTarefa.classList.remove( 'hidden' );
    editarTarefa.classList.add( 'flex' );
}

const mostrarEditarComEtiqueta = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaComEtiqueta'); 
    editarTarefa.classList.remove( 'hidden' );
    editarTarefa.classList.add( 'flex' );
}

const mostrarEditarPrioritaria = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaPrioritaria');
    editarTarefa.classList.remove( 'hidden' );
    editarTarefa.classList.add( 'flex' );
}

const mostrarEditarRepetitiva = () => {
    esconder();
  
    const editarTarefa = document.getElementById('editarTarefaRepetitiva');
    editarTarefa.classList.remove( 'hidden' );
    editarTarefa.classList.add( 'flex' );
}
  
const mostrarConcluida = () => {
    esconder();

    const marcarTarefa = document.getElementById('marcarTarefa');
    marcarTarefa.classList.remove( 'hidden' );
    marcarTarefa.classList.add( 'flex' );
}

export {mostrarNovaComum, mostrarNovaComEtiqueta, mostrarNovaPrioritaria, mostrarNovaRepetitiva, mostrarRemover, mostrarEditarComum, mostrarEditarComEtiqueta, mostrarEditarPrioritaria, mostrarEditarRepetitiva, mostrarConcluida};