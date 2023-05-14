/*
console.log("Practica de la clase 2");

let nombre = "Alex";

if (nombre == "Alex") {
	console.log(`Hola, ${nombre}, bienvenido a la practica de la clase 2`);
}

let idioma = prompt(`Cual es tu idioma? \n1-Español \n2-Inglés`);

if (idioma == `1`) {
	alert(`Buenas noches ${nombre}`);
}

if (idioma == `2`) {
	alert(`Good Night ${nombre}`);
}

//Condición Doble

let colorFavorito = prompt(`ingrese el color favorito`);

if (colorFavorito == `rojo`) {
	console.log(`Genial mi color favorito también es rojo`);
} else {
	console.log(`Bueno el mio es el color rojo`);
}
*/

//Condición Multiple
/* 
let insumo = prompt(`Seleccione el insumo que desea consultar: 
\n1-Mouse Logitech G502 
\n2-Teclado Razer Blackwidow v2 
\n3-Monitor Samsung G7 Odyssey `);

if (insumo == `1`) {
	alert(`Mouse Logitech G502 garantía 6 meses $ 32.000,00`);
} else if (insumo == `2`) {
	alert(`Teclado Razer Blackwidow v2 garantía 6 meses $ 58.300,00`);
} else if (insumo == `3`) {
	alert(`Monitor Samsung G7 Odyssey garantía 6 meses $ 140.000,00`);
} else {
	alert(`Ingrese un numero valido`);
}
 */

//variables booleanas
/*
let totalDelPedido = parseFloat(prompt(`Ingrese el total en $ de su pedido`));


//Habrá envio sin cargo cuando el monto supere los 20000
let envioSinCargo = totalDelPedido > 20000; 
console.log(`El usuario tiene cargo ${envioSinCargo}`);

/* if (totalDelPedido > 20000) {
	envioSinCargo = true;
} else {
	envioSinCargo = false;
}
 */

// Operador AND &&
// ambas condiciones deben ser verdaderas
let equipoFutbol = prompt(`en que equipo de futbol jugo mas tiempo Cristiano Ronaldo?`);
let numeroCamisetaCR7 = prompt(`que numero de camiseta usa Cristiano Ronaldo?`);

if (equipoFutbol == `Real Madrid` && numeroCamisetaCR7 == `7`) {
	alert(`ganaste una camiseta autografiada por Cristiano Ronaldo!!`);
} else {
	alert(`una o mas respuestas no son correctas.`);
}

// Operador OR ||
// al menos una de las condiciones deben ser verdaderas

let banda = prompt(
	`que banda Pop en 2022 realizo 10 recitales en el estadio Monumental?`
);
if (banda == `Coldplay` || banda == `coldplay` || banda == `COLDPLAY`) {
	alert(`Excelente acertaste`);
}

if (banda == ``) {
	alert(`No ingresaste ninguna valor`);
}
