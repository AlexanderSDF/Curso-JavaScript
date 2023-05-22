//clase de control de flujos
console.log("Hola chicos");

let nombre = "Lautaro";

if (nombre == "Lautaro") {
	console.log("Bienvenido Lauti ! No te vayas a la heladera 💪");
}

let idioma = prompt("Ingresa tu idioma\n1-Español\n2-Ingles"); //'1'

if (idioma == "1") {
	alert("Buenas noches");
}

if (idioma == "2") {
	alert("Good night");
}

//condicional doble
let colorFavorito = prompt("Ingresa tu color favorito");

if (colorFavorito == "rojo") {
	console.log("Mi color favorito tambien es el rojo !");
} else {
	console.log("Que pena, mi color favorito es el rojo, no coincidimos");
}

//condicional multiple
let insumo = prompt(
	"Desea ver precio de:\n1-Aro de luz led\n2-Teclado gamer LG Pro\n3-Mouse Genius"
);

if (insumo == "1") {
	alert("Aro de luz led marca Xiam garantia 6 meses $ 5000");
} else if (insumo == "2") {
	alert("Teclado gamer LG PRO garantia 12 meses $ 79000");
} else if (insumo == "3") {
	alert("Mouse Genius garantia 12 meses $ 9999");
} else {
	alert("Codigo invalido");
}

//variables booleanas
let totalDelPedido = parseFloat(
	prompt("Ingrese el monto en pesos del total de su pedido")
);
//se dara envio sin cargo cuando el monto supere los 20000
let envioSinCargo = totalDelPedido > 20000; //false

console.log("El usuario tiene envio sin cargo: " + envioSinCargo);

/* if(totalDelPedido>20000){
    envioSinCargo = true;
}else{
    envioSinCargo = false;
} */

//Operador AND &&
//Ambas condiciones deben ser verdaderas
let equipoFutbol = prompt(
	"Cual fue el equipo de futbol en el que se inicio Lionel Messi ?"
);
let edadMessi = prompt("Cual es la edad actual de Lionel Messi?");

if (equipoFutbol == "newells" && edadMessi == "35") {
	alert("Ganaste una camiseta autografiada !!!!!!!!");
} else {
	alert("Una o mas respuestas erroneas");
}

//Operador OR ||
//Al menos una condicion debe ser verdadera

let banda = prompt("Cual fue la banda pop que en 2022 realizo 10 recitales en River ?");

if (banda == "coldplay" || banda == "Coldplay" || banda == "COLDPLAY") {
	alert("Excelente !!!");
}

if (banda == "") {
	alert("No ingresaste ningun valor");
}
