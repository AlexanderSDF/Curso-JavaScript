//ciclo for - por conteo
for(let i=1; i<=3; i++){
    console.log('Conteo: '+i);
}

console.log('El conteo ha finalizado');

//Diapo 11
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
let resultado;
for (let i = 1; i <= 10; i++) {
    resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

//Diapo 12
for (let i = 1; i <= 4; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

//Diapo 13
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}

//Ejemplo de Ferran
let numeroAAdivinar = 3;
let numeroUsuario;

for(let i=1; i<=10; i++){
    numeroUsuario = parseInt(prompt('Adivina... cual es el numero que pensé ? (de 1 a 20)'));
    //si adivina
    if(numeroUsuario == numeroAAdivinar){
        alert('Ganaste 💪');
        break;
    }
    //si no adivina
    alert('No es el numero '+numeroUsuario+'\nSigue intentando');
}

//Diapo 14
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 2 o 6, no se interpreta la repetición
    if((i==2)||(i==6)){
        continue;
    }
    alert(i);
}


//Ciclos por condicion - WHILE

let deporte = prompt('Ingresa un deporte que te guste (s-para salir)');

while (deporte != 's'){
    if (deporte == 'tenis'){
        console.log('Me encanta el tenis');
    }else if(deporte == 'futbol'){
        console.log('Messi es un capo');
    }else{
        console.log('Escribiste '+deporte);
    }

    deporte = prompt('Ingresa otro deporte que te guste (s-para salir)');
}

//Otro ejemplo con mas sentido
let codigoProducto = prompt('Ingresa el codigo del producto para saber detalles del mismo (0-salir)');

while (codigoProducto != '0'){
    if(codigoProducto == '0983'){
        console.log("Cuaderno A4 - marca Gloria - Precio $2000");
    }else if(codigoProducto == '1212'){
        console.log('Lapicera - marca Bic - Precio $800');
    }else if(codigoProducto == '3456'){
        console.log('Folio A4 - marca xyz - Precio $ 400');
    }else{
        console.log('Codigo invalido');
    }

    codigoProducto = prompt('Ingresa el codigo del producto para saber detalles del mismo (0-salir)');
}

//Diapo 20
let repetir = false;
do {
    console.log("¡Solo una vez!");
} while (repetir)

//Diapo 21
let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));



//SWITCH es un condicional como el IF
let fruta = prompt('Ingresa la fruta para conocer el precio por kg. (s - salir)');

while (fruta != 's'){
    //utilizo un switch para evaluar las frutas
    switch(fruta){
        case 'banana':
            console.log('Banana kg $ 800');
            break;
        case 'frutilla':
            console.log('Frutilla kg $ 2000');
            break;
        case 'limon':
            console.log('Limon kg $ 300');
            break;
        case 'naranja':
        case 'NARANJA':
            console.log('Naranja kg $250');
            break;
        default:
            console.log('Fruta sin stock');
            break;
    }

    fruta = prompt('Ingresa la fruta para conocer el precio por kg. (s - salir)');
}