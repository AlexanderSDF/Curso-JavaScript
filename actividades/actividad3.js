//!Ejercicio clase 3:--------------------------------------------------------------------------------------------------
// //! Etapa 1 = solicita datos y después pregunta si quiere repetir acción
// //!Crear un programa que consulte al usuario si desea ingresar notas, con un ciclo que si/no.
// //!cuando ingrese notas calcular si aprobó, reprobó o promociono.
// //!Devolver un msj que muestre el promedio mas su situación con  la materia
// //!Agregarle un ciclo que me pregunte si deseo seguir ingresando notas
// let promocionado =  ", usted ha promocionado la materia."
// let aprobado = ", usted ha aprobado la materia."
// let desaprobado = ", usted ha desaprobado la materia."
// let promedioNota = 0;
// let ciclo = true;
//
// while(ciclo === true){
//   let pregunta = prompt("Quiere ingresar notas?");
//   if (pregunta.toLowerCase() === "si"){
//     nota1 = parseInt(prompt("Ingrese nota del primer parcial"));
//     nota2 = parseInt(prompt("Ingrese nota del segundo parcial"));
//     nota3 = parseInt(prompt("Ingrese nota del tercer parcial"));
//     promedioNota = (nota1 + nota2 + nota3) / 3;
//
//     if (promedioNota >= 7 ){
//       alert("Su nota es: "+promedioNota + promocionado)
//     }
//     else if(promedioNota >=4 ){
//       alert("Su nota es: "+promedioNota +aprobado)
//     }
//     else if (promedioNota < 4 ){
//       alert("Su nota es: "+promedioNota +desaprobado)
//     }
//     else {
//       alert("Ingrese una nota valida")
//     }
//   }
//   else {
//     alert("Gracias por utilizar el algoritmo.")
//   }
// }

//!PRACTICA EJERCICIOS -----------------------------------------------------------------------------------------------
//!FOR = CICLO CON CONTEO
// let numTabla = parseInt(prompt('Dime el numero que quieras obtener la tabla'));
//
// for(let i = 0; i <=10; i++ ){
//   console.log(numTabla + ' x ' + i + ' = ' + numTabla*i)
// }
// // * Tabla con for pero aplicando backticks
// let numTabla = parseInt(prompt('La tabla:'));
//
// for(i = 1; i <=10; i++){
//   console.log(`${numTabla} x ${i} = ${i*numTabla}`)
// }
//!WHILE(MIENTRAS) = CICLO SE CORTA CUANDO CUMPLE LA CONDICIÓN
//let pregunta = prompt('Quieres ingresar notas?')
//while(pregunta.toLowerCase() != "no"){
//  let nombre = prompt('Ingrese el nombre del alumno')
//  let notaIngresada = parseFloat(prompt('Ingrese la nota 1'))
//  console.log(`La nota ingresada es: ${notaIngresada}`)
//  alert(`La nota ingresada es: ${notaIngresada}`)
//  let pregunta = prompt('Desea seguir cargando notas?')
//  if(pregunta.toLowerCase() == "no"){
//    alert('Gracias por usar el algoritmo')
//  }
//}
//*lo mismo pero con un booleano que corta el ciclo
//let bandera = true;
//while (bandera) {
//   notaIngresada =  parseInt(prompt("Ingrese una nota:"));
//   console.log(`La nota que usted ingreso es ${notaIngresada}.`);
//   pregunta = prompt("Desea seguir ingresando notas?");
//   if (pregunta != "si") {
//   alert("Gracias por usar nuestro algoritmo");
//   bandera = false;
//   }
//}

// let admin = "alex";
// let password = "41231";
// let bandera = true;
//
// while (bandera) {
// 	let userId = prompt("Ingrese nombre de usuario");
// 	if (userId.toLowerCase() != admin) {
// 		while (userId.toLowerCase() != admin) {
// 			alert("El usuario es incorrecto, intente nuevamente.");
// 			userId = prompt("Ingrese nombre de usuario");
// 		}
// 	} else {
// 		alert(`Bienvenido ${userId}`);
// 	}
//
// 	let intentos = 3;
// 	let userPw = prompt("Ingrese la contraseña");
//
// 	if (userPw != password) {
// 		while ((intentos >= 1) & (userPw != password)) {
// 			intentos = intentos - 1;
// 			alert("Contraseña incorrecta.");
// 			alert(`Intentos restantes: ${intentos + 1}`);
// 			userPw = prompt("Ingrese la contraseña");
// 		}
// 		alert("Capo no se quien sos, raja de aca");
// 	} else {
// 		alert(`Bienvenido al sistema ${admin}`);
// 		bandera = false;
// 	}
// }
