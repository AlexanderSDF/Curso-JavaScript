//!TAREA 1 CALCULADORA DE OPERACIONES BÁSICAS
//!Operaciones / Suma-Resta-Multiplicación-Division-Porcentaje

alert("Usuario, para realizar una operación se le solicitara dos números y un operador ");
let numero1 = parseInt(prompt("Indique el Número 1"));
let operador = prompt("Indique la Operación: ");
let numero2 = parseInt(prompt("Indique el Número 2"));
let mensajeResultado = "El resultado de la operación es: ";

function operaciones(numero1, numero2, operador) {
	if (operador == "+") {
		alert(mensajeResultado + (numero1 + numero2));
	}
	if (operador == "-") {
		alert(mensajeResultado + (numero1 - numero2));
	}
	if (operador == "*") {
		alert(mensajeResultado + numero1 * numero2);
	}
	if (operador == "/") {
		alert(mensajeResultado + numero1 / numero2);
	}
	if (operador == "%") {
		alert(mensajeResultado + numero1 * (numero2 / 100));
	}
	if (operador == "%%") {
		alert(mensajeResultado + (numero2 * 100) / numero1 + " %");
	}
}
operaciones(numero1, numero2, operador); //termina operación

//!TAREA 2-----------------------------------------------------------------------------------------
//!Jugador con cantidad de partidos, goles y Promedio de goles por partido

let jugador = prompt("Indique el jugador: ");
let partidos = parseInt(prompt("Indique el cantidad de partidos: "));
let goles = parseInt(prompt("Indique el cantidad de goles del jugador: "));
let alago = "Terrible jugador parece el Diegote";
let burla = "Flojo el muchacho derecho al Paddle";

let promedioGol = goles / partidos;
alert(jugador + " tiene un promedio de " + promedioGol + " goles por partido.");
if (promedio >= 0.5) {
	alert(alago);
}
if (promedio < 0.5) {
	alert(burla);
}

//!TAREA 3--------------------------------------------------------------------------------------------
//!Ingresar 3 notas sacar un promedio

let alumno = prompt("Indique su nombre: ");
let nota1 = parseInt(prompt("Indique la nota del 1er parcial: "));
let nota2 = parseInt(prompt("Indique la nota del 2do parcial: "));
let nota3 = parseInt(prompt("Indique la nota del 3er parcial: "));
let aprobado = "Felicitaciones usted cursara el Final tipo 'A' del modulo 4,5,6 la Fecha 15/11/22.";
let desaprobado = "Usted cursara el Final tipo 'B' del modulo 1,2,3,4,5,6 la Fecha 15/11/22.";
let promedioNota = (nota1 + nota2 + nota3) / 3;

alert(alumno + " su promedio general de calificaciones es " + promedioNota + ".");
if (promedio >= 6) {
	alert(aprobado);
}
if (promedio < 6) {
	alert(desaprobado);
}
