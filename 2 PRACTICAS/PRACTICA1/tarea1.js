let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = prompt("ingrese su edad");

alert("Bienvenido " + nombre + " " + apellido + " su edad es: " + edad);

//solicitud de datos para calcular
alert("Esta herramienta es para calcular el precio de un juego mas los impuestos país(Argentina).");
const impuestoPais = 1.75;
let precioJuego = parseFloat(prompt("ingrese el precio del juego que desea calcular"));
console.log(precioJuego);

let precioTotal = precioJuego * impuestoPais;
console.log(precioTotal);

alert("El precio total a abonar es: $ " + precioTotal+",00");

function jubilacion() {
    let anioActual = 2023;
    let jubilacion = 65;

    let calculoJubilacion = jubilacion - edad;
    let anioJubilacion = anioActual + calculoJubilacion;

    alert("Aprovechamos para informarle que a usted le faltan "+calculoJubilacion+" años para su jubilacion.");
    alert("Usted debería jubilarse aproximadamente en el "+anioJubilacion+".")
}
jubilacion();
