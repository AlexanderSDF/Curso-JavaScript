//Declaración de Variables
let personaje;
//Personaje tiene caracteres tipo string


//Asignación de valor
personaje = "Darth Vader"
let droide = "C3PO"
//Reasignación
droide = "BB8"


//Constantes
let fecha = 1977; /* variable con carácter numérico */
const malos = "Sith";

let cantidadUno = 3;
let cantidadDos = 5;
//calcular cantidad total - suma
let cantidadTotal = cantidadUno + cantidadDos;

//Años que se estreno la primera película de star wars
let cantidadAnios = 2023 - fecha;

//Calcular Dolar a pesos
let dolares = 100;
let cotizacion = 470;

let miCantidadEnPesos = dolares * cotizacion;

//tengo 24 manzanas para dividir entre 3 personas
let manzanas = 15;
let personas = 3;

let cantidadPorPersonas = manzanas / personas;


//Concatenar texto 
let nombre = "Alex"
let segundoNombre = "Joel"

let nombreCompleto = nombre + " " + segundoNombre;

//Consol Log se usa para imprimir el dato en consola
console.log("Hola esto es una prueba de consola");

console.log("Hola: "+nombreCompleto);
console.log("la cantidad sumada es: "+cantidadTotal);
console.log("la primera película de star wars se estreno hace: "+cantidadAnios +" Años");
console.log("mi cantidad en pesos es: $ "+miCantidadEnPesos);
console.log("De la division de manzanas, cada persona se lleva "+cantidadPorPersonas+" manzanas");


//Impresión de datos por Alert
//alert("Bienvenido " + nombreCompleto);
//alert("tu fortuna es: " +miCantidadEnPesos);

//Entrada de datos por Prompt
let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
let edadUsuario = prompt("Ingrese su edad");
alert("Bienvenido al DarkSide, " + nombreUsuario + " " + apellidoUsuario);



//Prueba de Ejercicio 1
let precioProducto = parseFloat(prompt("Ingrese el precio del juego que quiere comprar"));
console.log(precioProducto)
let impuestosPais = 1.75;
let precioConIva = precioProducto * impuestosPais;
console.log(precioConIva)
alert("El precio del juego que quiere comprar es: " + precioConIva);

//ParseInt pasa un string a numero entero
//ParseFloat pasa un string a numero decimal