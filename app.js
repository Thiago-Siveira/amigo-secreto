// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaDeAmigosSorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '' || amigos.includes(nombre)) {
        alert('Por favor inserte un nombre valido.');
        return;
    }

    amigos.push(nombre);
    limpiarCaja();
    console.log('lista de amigos actualizada: ', amigos);
    actualizarListaDeAmigos(amigos);

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function actualizarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let nuevoItem = document.createElement('li');
        nuevoItem.textContent = amigos[i];
        listaAmigos.appendChild(nuevoItem);
    }
    return;
}

function sortearAmigo() {
    let resultadoElemento = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    if (listaDeAmigosSorteados.length == amigos.length) {
        resultadoElemento.innerHTML = 'Ya se sortearon todos los amigos disponibles';
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        if (listaDeAmigosSorteados.includes(amigoSorteado)) {
            sortearAmigo();
        } else {
            resultadoElemento.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
            listaDeAmigosSorteados.push(amigoSorteado);
        }
    }
    return;
}