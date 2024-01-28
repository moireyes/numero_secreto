function validarIntento() {
    let valor = parseInt(document.getElementById('valorUsuario').value);
    intentos++;
    //console.log(intentos);
    if (numeroSecreto === valor) {
        asignarElementoHtml('p',`Acertaste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }
    else {
        if (numeroSecreto > valor) {
        asignarElementoHtml('p','El número secreto es mayor');
        }
        else {
        asignarElementoHtml('p','El número secreto es menor');
        }
        limpiarCaja();
    }  
    return;
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //buscar existentes
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoHtml("p","Ya se utilizaron todos los números posibles");
        document.querySelector("#intentar").setAttribute("disabled","true");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumero();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarElementoHtml(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarElementoHtml('h1','Juego del número secreto con Funciones');
    asignarElementoHtml('p',`Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 0;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de numeros
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
condicionesIniciales();

let listagenerica = [];
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
console.log(lenguagesDeProgramacion);
muestra();
muestraInverso();

function muestra() {
    for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
        console.log(lenguagesDeProgramacion[index]);  
    }
}
function muestraInverso() {
    for (let index = lenguagesDeProgramacion.length-1; index >= 0; index--) {
        console.log(lenguagesDeProgramacion[index]);  
    }
}
