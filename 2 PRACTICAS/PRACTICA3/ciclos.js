/* 
//CLASE 3 CICLOS E INTERACCIONES

//1 Ciclo FOR
for (let i=1; i<=10; i++){
    console.log(`Conteo: ${i}`);
}
console.log(`Fin del Conteo`);


//Ejemplo 2 ciclo for Tablas
let numeroIngresado = parseInt(prompt("Ingrese el numero de la tabla de multiplicar"));
console.log(`Usted a elegido la tabla del ${numeroIngresado}`)

for (let i=1; i<=10; i++){ 
    let resultado = numeroIngresado * i;
    console.log(numeroIngresado + " x " + i + " = " + resultado)
}


//Ejemplo 3 ciclo for turno de pacientes
for(let i=1; i<=10; i++) {
    //cada turno solicita un nombre de la persona
    let nombreTurno = prompt(`Ingrese su nombre`);
    //informamos el turno asignado
    alert(`Tunrno Nro.  ${i} Nombre: ${nombreTurno}`);
    console.log(`Tunrno Nro.  ${i} Nombre: ${nombreTurno}`);
}
//Ejemplo adivinanza FOR

let numeroSecreto = 5
let numeroIngresado;

for (i=1; i<=10; i++){
    numeroIngresado = parseInt(prompt(`Adivina el numero secreto entre un rango del 1 al 20`));
    //si adivina
    if(numeroIngresado==numeroSecreto){
        alert(`Ganaste!!!`);
        break;
    }
    alert(`${numeroIngresado} no es el numero secreto, sigue intentando.`)
}

//Ejemplo 4 BREAK
for( let i = 1 ; i <= 10 ; i++ ){
    //si la variable es igual a 5 corta el ciclo
    if(i==5){
        break;
    }
    alert(i);
}

// CICLO WHILE
let deporte = prompt("Cuál es tu deporte? \n s-Para salir");

while(deporte != "s"){
    if(deporte == `tenis`){
        console.log(`No me gusta el tenis...`);
    }else if(deporte == `futbol`){
        console.log(`El deporte mas visto en el mundo sin dudas.`);
    }else if(deporte == `f1`){
        console.log(`El deporte que mas me gusts es la Formula 1`);
    }else{
        console.log(`Bien te gusta el ${deporte}`);
    }
    deporte = prompt("Cuál es tu deporte? \n s-Para salir");
}

//2do ejemplo de while
let codigoProducto = prompt(`Ingrese el codigo del producto para conocer mas de el. (0-Para salir)`);


while (codigoProducto != `0`){
    
    if(codigoProducto == `0983`){
        
        console.log(`Teclado Formato 60% - Marca HyperX - Precio: $ 21.0000,00`);
        
    }else if(codigoProducto == `1212`){
        
        console.log(`Monitor 27' - Marca Samsung - Precio: $ 121.0000,00`);
        
    }else if(codigoProducto == `3456`){
        
        console.log(`MousePad 40x40 - Marca Cougar - Precio: $ 4.0000,00`);
        
    }else {
        
        console.log(`Codigo invalido`);
        break
    }
    
    codigoProducto = parseInt(prompt("Ingrese el codigo del producto para conocer mas de el. \n 0-Para salir"));
}

//CICLO DO WHILE
let numero = 0;
do{
    //repetimos con do-while hasta que el usuario ingrese un numero
    numero = prompt("Ingresar numero");
    console.log(numero);
    //si el parseo no resulta en numero  se interrumpe el ciclo
}while(parseInt(numero));

*/

//CICLO SWITCH
//EJEMPLO 1 VERDURAS

let fruta = prompt(`Ingrese una fruta para saber el precio por kg. (s-Para salir)`);

while(fruta!= `s`){
    //switch para evaluar frutas
    switch(fruta){
        case `banana`:
            alert(`El precio del ${fruta} es: $ 850,00 por kg.`);
            break;
        case `mango`:
            alert(`El precio del ${fruta} es: $ 1200,0 por kg.0`);
            break;
        case `kiwi`:
            alert(`El precio del ${fruta} es: $ 1000,0 por kg.0`);
        case `limon`:
            alert(`El precio del ${fruta} es: $ 300,00 por kg.`);
            break
        case `naranja`:
        case `NARANJA`:
            alert(`El precio de la ${fruta} es: $ 250,00 por kg.`);
            break
        default:
            alert(`Fruta Sin Stock`);
            break;
    }

    fruta = prompt(`Ingrese una fruta para saber el precio por kg. (s-Para salir)`);
}