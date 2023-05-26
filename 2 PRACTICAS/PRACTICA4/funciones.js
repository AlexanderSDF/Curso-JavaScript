//FUNCIONES
//Funciones básicas
/*
function darBienvenida() {
    let nombre = prompt("Ingrese su nombre")
    alert(`Bienvenido ${nombre}`);
    console.log(`Usuario: ${nombre}`);
}
darBienvenida()

//Funciones con parámetros
function darBienvenida2(nombre) {
    alert(`Bienvenido ${nombre}`);
}
darBienvenida2("Alex")
darBienvenida2("Alex Joel")
*/


//Función para calcular el IVA
function calcularIVA(precio) {
    let iva = precio * 0.21;
    console.log("El iva de " + precio + " es: " + iva);
}
calcularIVA(100)
calcularIVA(2345)
/*
let valorProducto = parseFloat(prompt("Ingrese el nombre del producto en pesos"));

calcularIVA(valorProducto)
*/

//Funciones con parámetros y return
function autenticarUsuario(usuario, password) {
    if (usuario === "Alex" && password === "41231") {
        return true;
    } else {
        return false;
    }
}
/*
let usuario = prompt("Ingrese su nombre de usuario");
let password = prompt("Ingrese su contraseña");

let autenticado = autenticarUsuario(usuario, password);

if (autenticado) {
    alert("Bienvenido " + usuario);
}else {
    alert("Usuario o contraseña incorrecta");
}
*/

//Scope Variables Locales y Globales
let pais = "Argentina";

function cambiarPais() {
    pais = "Chile";
    console.log(pais);
    //variable  local tiene ámbito solo dentro de la función
    let ciudad = "Santiago";
    console.log(ciudad);
}
cambiarPais();
//console.log(ciudad);
//Not defined porque no existe la variable, solo en la función.

//Funciones anónimas
const cuadrado = function (numero) {return numero * numero};
console.log(cuadrado(5));

//Función flecha 
const cubo = (numero) => numero * numero * numero;
console.log(cubo(2));

const calculoIva = (numero) => numero * 0.21;
console.log(calculoIva(4522));