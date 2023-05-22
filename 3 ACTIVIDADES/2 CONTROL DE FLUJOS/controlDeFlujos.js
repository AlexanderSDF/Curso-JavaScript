//ACTIVIDAD 1
let numero = parseFloat(prompt("Ingrese un numero"));
if (numero > 1000) {
	alert("El numero ingresado es mayor a 1000");
} else {
	alert("El numero ingresado es menor a 1000");
}


//ACTIVIDAD 2
let palabra = `hola`;

let respuesta = prompt("how do you say Hello in Spanish ?");
if (respuesta.toLocaleLowerCase() == palabra) {
	alert(`Correcto, se dice asi.`);
} else {
	alert(`Incorrecto no se dice asi.`);
}


//ACTIVIDAD 3
let numeroEntre;

numeroEntre = parseInt(prompt("Ingrese un numero"));

if ((numeroEntre >= 10) && (numeroEntre <= 50)) {
    alert(`El numero ingresado esta entre 10 y 50`);
} else {
    alert(`El numero ingresado no esta entre 10 y 50`);
    }