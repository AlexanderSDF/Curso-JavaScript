let impuesto = 1.75
let precio = 0
let resNetflix = 0 
let resSpotify = 0
let resSteam = 0
let ciclo = true
function precioFinal(resNetflix, resSpotify, resSteam) {
  alert(`Tu precio total seria: $${resNetflix + resSpotify + resSteam}`)
}

debugger

while(ciclo === true) {
  let producto = prompt(`Que quieres cotizar Netflix, Spotify, Steam?`).toLowerCase();
  
  if (producto === "netflix") {
    precio = parseFloat(prompt(`Cuanto sale tu suscripción?`));
    resNetflix = precio * impuesto;
    console.log(`Tu suscripción de Netflix saldría: $${resNetflix}`);
    alert(`Tu suscripción de Netflix saldría: $${resNetflix}`);
    ciclo = confirm(`Quieres seguir?`);
  }
  else if(producto === "spotify") {
    precio = parseFloat(prompt(`Cuanto sale tu suscripción?`));
    resSpotify = precio * impuesto;
    console.log(`Tu suscripción de Spotify saldría: $${resSpotify}`);
    alert(`Tu suscripción de Spotify saldría: $${resSpotify}`);
    ciclo = confirm(`Quieres seguir?`);
  }
  else if(producto === "steam") {
    precio = parseFloat(prompt(`Cuanto sale tu juego?`));
    resSteam = precio * impuesto;
    console.log(`Tu juego saldría: $${resSteam}`);
    alert(`Tu juego saldría: $${resSteam}`);
    ciclo = confirm(`Quieres seguir?`);
  }
  else{
    alert(`La opcion que escribiste no esta contemplada.`)
  }
}

let final = confirm(`Quiere el precio final?`)

precioFinal(resNetflix, resSpotify, resSteam)

// //!SIMULADOR DE COMPRA
// //! Muestra al cliente los productos disponibles.
// //! Consulta al cliente cuantos productos va solicitar del efecto indicado
// //!En base a la cantidad disponible en stock devuelve al cliente un msj.

// //!VARIABLES-----------------------------------------------------

// let empresa = "Kamui Camisetas";
// let iva = 1.21;
// let camisetaArgentina = 12000;
// let camisetaBoca = 8000;
// let camisetaRiver = 8000;
// let camisetaReal = 16000;
// let bucle = true;

// //!CONSTANTES Y FUNCIONES----------------------------------------

// function precioTotalCamisetas(camiseta, cantidad, iva) {
// 	alert(`El precio total es: $${camiseta * cantidad * iva},00`);
// }

// //!CÓDIGO--------------------------------------------------------
// let nombre = "Fernando Torres";

// while (bucle === true) {
// 	let opcion = prompt(`Que camiseta quieres comprar:
// 1. Selección Argentina Titular -- $${camisetaArgentina},00
// 2. Club Atlético Boca Juniors  -- $${camisetaBoca},00
// 3. Club Atlético River Plate   -- $${camisetaRiver},00
// 4. Real Madrid Futbol Club     -- $${camisetaReal},00
// 5. Otros.`);
// 	if (opcion == 1) {
// 		alert(`Usted ha seleccionado la camiseta`);
// 		let cantidad = prompt(`Ingrese la cantidad de camisetas a comprar.`);
// 		precioTotalCamisetas(camisetaArgentina, cantidad, iva);
// 	} else if (opcion == 2) {
// 		alert(`Usted ha seleccionado la camiseta2`);
// 	} else if (opcion == 3) {
// 		alert(`Usted ha seleccionado la camiseta3`);
// 	} else if (opcion == 4) {
// 		alert(`Usted ha seleccionado la camiseta4`);
// 	} else if (opcion == 5) {
// 		alert(`Usted ha seleccionado la camiseta5`);
// 	} else {
// 		alert(`Esta opcion no esta contemplada`);
// 	}
// }