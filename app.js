let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTextoDeElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoDeElemento("p", `acertaste el numero secreto en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoDeElemento("p", "el numero secreto es menor");
        } else {
            asignarTextoDeElemento("p", "el numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoDeElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function acerto(generarNumeroSecreto, verificarIntento) {
    if (generarNumeroSecreto === verificarIntento) {
        alert("acertaste el numero qliaaaaa");
    }
}
function condicionesIniciales() {
    asignarTextoDeElemento("h1", "Juego del numero secreto");
    asignarTextoDeElemento("p", "indica un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales()