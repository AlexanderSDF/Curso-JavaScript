//FUNCIONES
//funciones basicas
function enviarBienvenida(){
    let nombre=prompt('Ingresa tu nombre');
    alert ('Bienvenido '+nombre);
    //10 lineas mas
}

enviarBienvenida();

/* for(let i=0;i<4;i++){
    enviarBienvenida();
    console.log('vuelta '+i)
} */

//funciones con parametros
function enviarBienvenida2(nombre){
    alert('Bienvenido/a '+nombre);
}

enviarBienvenida2('Juanita');
enviarBienvenida2('Juan Carlos Gomez');

let nombre = prompt('Ingresa tu nombre');

enviarBienvenida2(nombre);

//funcion que va a calcular el iva de un precio

function calcularIva(precio){
    let iva = precio * 0.21;
    console.log('El iva de $'+precio+' es $'+iva);
}

calcularIva(100);
calcularIva(2345);

let valorProducto = parseFloat(prompt('Ingresa el valor de tu producto en pesos'));//12345.99

calcularIva(valorProducto);

//funciones con parametros y return

function autenticarUsuario(user, password){
    if((user=='Pepe') && (password=='12345')){
        return true;
    }else{
        return false;
    }
}

let usuario = prompt('Ingresa tu nombre de usuario');
let contrasenia = prompt('Ingresa la contraseña para '+usuario);

let autenticado = autenticarUsuario(usuario,contrasenia); //true o false
if(autenticado){
    alert("Bienvenido nuevamente "+usuario);
}else{
    alert("Usuario o contraseña erroneos");
}

//variables locales y globales

let pais = 'Argentina';
//console.log(pais);

function cambiarPais(){
    pais = 'Chile';
    console.log(pais);
    //variable local tiene ambito solo dentro de las llaves de la funcion
    let ciudad = 'Santiago'
    console.log(ciudad);
}

cambiarPais();
//error porque ciudad tiene ambito local
//console.log(ciudad);

//funcion anonima que calcula el cuadrado de un numero

const cuadrado = function (numero){ return numero * numero }

console.log(cuadrado(8));

/* function calcularCuadrado(numero){
    let cuadrado = numero * numero;
    return cuadrado;
}

let resulCuadrado = calcularCuadrado(8);
console.log(resulCuadrado); */

//funcion flecha que calcula el area de un rectangulo

let area = (base,altura) => base * altura;

console.log('El area del rectangulo es: '+ area(10,5));