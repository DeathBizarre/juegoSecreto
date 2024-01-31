let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [ ];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}  
function jugarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
   if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
} else {
    //El usuario no acertó
    if (numeroUsuario > numeroSecreto) {
    asignarTextoElemento("p", "el número es menor");
    }   else { 
        asignarTextoElemento("p", "el número es mayor");
    } 
    intentos ++;
    limpiarCaja();
}
    return;
}

function limpiarCaja (){
   document.querySelector("#valorUsuario").value = "";
   
}
function generarNúmero() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;    
   //si ya sorteamos todos los números
   if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento ("p", "Ya acertaste todos los números");
} else {

        //si el numero está incluido en la lista
        if (listaNumeros.includes(numeroGenerado)){
            return generarNúmero();
            
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento ("h1", "Juego del número secreto");
    asignarTextoElemento ("p", `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNúmero();
    intentos = 1;
}   
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //mensaje de inicio
    //generar número
    //iniciar número de intentos
    condicionesIniciales();
    //deshabilitar botón nuevo juego
   document.querySelector("#reiniciar").setAttribute("disabled","true");

} 

condicionesIniciales();
