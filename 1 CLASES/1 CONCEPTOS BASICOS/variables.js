// declaracion de variables
let personaje;
//asignando un valor a la variable
personaje = 'Darth Vader';
//personaje tiene un dato de tipo string

//declaracion y asignacion en la misma linea
let droide = 'C3PO';
//reasignacion
droide = 'BB8';

//asignacion de un dato numerico
let fecha = 1977;

//constantes
const PI = 3.14;

//Operaciones matematicas
let cantidadUno = 3;
let cantidadDos = 5;

//calcular cantidad total - suma
let cantidadTotal = cantidadUno + cantidadDos; //8

// Años que se estreno la primera peli de Star Wars - resta
let cantidadAnios = 2023 - fecha;

//calcular dolar a peso - multiplicacion
let dolares = 100;
let cotizacion = 470;

let miFortunaEnPesos = dolares * cotizacion;

//Tengo 24 manzanas para dividir entre 3 personas 
let manzanas = 24
let personas = 3;

let cadaUnoLleva = manzanas / personas;

//Concatenar textos
let nombre = 'Pepe';
let apellido = 'Gomez';

let nombreCompleto = nombre +' '+ apellido;//Pepe Gomez

//salida de datos por consola

console.log('Saludos desde el archivo variables.js');

console.log('El usuario activo es: '+nombreCompleto);
console.log('La cantidad total sumada es = '+cantidadTotal);
console.log('La primera peli de Star Wars se estreno hace '+cantidadAnios+' años');
console.log('Mi fortuna en pesos es $'+miFortunaEnPesos);
console.log('Cada persona se lleva '+cadaUnoLleva+' manzanas');

//salida de datos por alert
alert('Bienvenido '+nombreCompleto);
alert('La fortuna de la Profe '+miFortunaEnPesos+' pesos');

//entrada de datos del usuario
nombreCompleto = prompt('Ingresa tu nombre');//Mariana Perez
alert("Te damos la bienvenida "+nombreCompleto);

//ejercicio con numeros

let precioProducto = parseFloat(prompt('Ingrese el precio del producto que quiere consultar'));//100
let precioConIva = precioProducto * 1.21;
console.log(precioConIva);

//parseFloat convierte un string a numero decimal
//parseInt convierte un string a numero entero