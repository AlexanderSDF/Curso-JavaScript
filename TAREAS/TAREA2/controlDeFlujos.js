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
	console.log(`Genial mi color favorito tambien es rojo`);
} else {
	console.log(`Bueno el mio es el color rojo`);
}

//Condición Multiple

let insumo = prompt(`Seleccione el insumo que desea consultar: 
\n1-Mouse Logitech G502 
\n2-Teclado Razer Blackwidow v2 
\n3-Monitor Samsung G7 Odyssey `);

if (insumo == `1`) {
	alert(`Mouse Logitech G502 garantia 6 meses $ 32.000,00`);
} else if (insumo == `2`) {
	alert(`Teclado Razer Blackwidow v2 garantia 6 meses $ 58.300,00`);
} else if (insumo == `3`) {
	alert(`Monitor Samsung G7 Odyssey garantia 6 meses $ 140.000,00`);
} else {
	alert(`Ingrese un numero valido`);
}

//variables booleanas
let totalPedido = parseFloat(prompt(`Ingrese el total de pedido`));
//para el caso habra envio sin cargo post $2.000
let envioSinCargo = (totalPedido > 2000);

console.log(`Envio sin cargo: ${envioSinCargo}`);