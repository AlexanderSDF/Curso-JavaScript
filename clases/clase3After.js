//CLASE 3 - CICLOS

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)

//sugar syntax i+ idéntico a decirle i = i +1
//sugar syntax para sumar index += 2
//CICLO FOR
//Ciclo for tiene tres partes fundamentales
// (desde; hasta; actualización)
// for(let index = 0; index < 12; index = index + 1){
//     //Primero declara index y asigna un valor, hasta y luego indica como se actualiza

//     //PRIMER VUELTA index = 0 -> IMPRIME
//     //SEGUNDA VUELTA index = 1 -> IMPRIME
//     //TERCER VUELTA index = 2 ->
//     //DOCE VUELTA index = 11 -> IMPRIME
//     //TRECE VUELTA index = 12 -> (EL HASTA ME DA FALSE) se deja de ejecutar el ciclo
//     //Instrucciones a ejecutar
//     console.log(index)
// }
// //Quiero hacer con un ciclo FOR pedirle al usuario el número que desea multiplicar y mostrarle la tabla del 0 al 10 de ese número.

// // let numTabla = parseInt(prompt("Ingrese el número del cual desea saber su tabla multiplicar"))
// // // 5 x 0 = 0
// // // 5 x 1 = 5
// // // 5 x 2 = 10 
// // // ..
// // // 5 x 10 = 50
// // for(let i = 0; i <=10; i++ ){
// //     //Imprimir del 0 al 10
// //     console.log(numTabla + " x "+ i +" = " + numTabla*i)
// // }

// // 5 x 0 = 0
// // 5 x 1 = 5
// // 5 x 2 = 10 
// // ..
// // 5 x 10 = 50
// let numTabla = parseInt(prompt("Ingrese el número del cual desea saber su tabla multiplicar"))
// for(let i = 0; i <=10; i++ ){
//     //Imprimir del 0 al 10
//     let resultado = numTabla*i
//     // console.log(numTabla + " x "+ i +" = " + resultado)
//     //Otra forma de concatenar -- Uso de backticks (alt + 96) `` ${variables}
//     console.log(`${numTabla} x ${i} = ${numTabla*i}`)
// }

//CICLO WHILE : MIENTRAS
//while(condición a evaluar)
//condición sea TRUE se ejecuta el ciclo // cuando sea false deja de ejecutarse
// let booleano = false
// while(booleano == true){
//     //puede ejecutar cero veces
//     console.log("Se ejecuta el ciclo")
// }
// let pregunta = prompt("Desea ingresar una nota")
// while(pregunta != "no"){
//     let notaIngresada = parseInt(prompt("Ingrese una nota"))
//     console.log("Su nota es " + notaIngresada)
//     //condición de corte
//     pregunta = prompt("¿Desea seguir ingresando notas?")
//     if(pregunta == "no"){
//         console.log("Gracias por utilizar nuestro algoritmo. Saludos :D")
//     }
// }
// let bandera = true
// let pregunta2 = prompt("Desea ingresar una nota")
// while(bandera){
//     let notaIngresada = parseInt(prompt("Ingrese una nota"))
//     console.log("Su nota es " + notaIngresada)
//     //condición de corte
//     pregunta2 = prompt("¿Desea seguir ingresando notas?")
//     if(pregunta2 == "no"){
//         console.log("Gracias por utilizar nuestro algoritmo. Saludos :D")
//         bandera =false
//     }
// }

//DO WHILE: Ingresa al menos una vez
// let condicion = true
// do{
//     let adivinanza = prompt("Que tiene 6 caras y 21 ojos")
//     if(adivinanza.toLowerCase() == "dado"){
//         console.log("Su respuesta es correcta")
//         alert("Felicitaciones ha adivinado :D")
//         //condición de corte
//         condicion = false
//     }else{
//         console.log("Respuesta incorrecta, vuelta intentar")
//     }
// }while(condicion)

//SWITCH: ES UN CONDICIONAL MÁS PUNTUAL
// let opcion = prompt(`Ingrese su opcion deseada:
// 1: -Libro favorito
// 2: -Libro que desea comprar
// 3:  Regalar libro
// ESC: para salir`);
// //Repetimos hasta que se ingresa "ESC"
// while(opcion != "ESC" ){
//    switch (opcion) {
//        case "1":
//             prompt("Ingrese su libro favorito");
//             break;
//         case "2":
//             prompt("Ingrese el libro que desea comprar y no tiene");
//             break;
//         case "3":
//             prompt("Regalar libro")
//             break;
//        default:
//            alert("OPCIÓN NO CONTEMPLADA")
//            break;
//    }
//    opcion = prompt(`Ingrese su opcion deseada:
//     1: Libro favorito
//     2: Libro que desea comprar
//     3: Regalar libro
//     ESC: Para salir`);
// }

//Ejercicios clase 3:


//Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
//Hacer un condicional que me diga si el promedio es 10 "felicitaciones es un alumno/a ejemplar"
//Si el promedio es mayor a 7 " promociono la materia"
//Si el promedio es mayor o igual a 4 " aprobó la materia"
//menor a 4 "desaprobó la materia"
//Agregarle un ciclo que me pregunte si deseo seguir ingresando notas

//Idea while: 
//Idea do while:
let bandera = true
do{
    //Los ingresos
    let nombre = prompt("Ingrese el nombre de la persona")
    //Decidir la cantidad a ingresar:
    let notasIngresar = parseInt(prompt(`Ingrese la cantidad de notas correspondientes a ${nombre}`))
    // if(isNaN(notasIngresar)){
    // }else{
    //     console.log("Si es tipo de dato number")
    // }
    
    while(isNaN(notasIngresar)){
        console.log("No es un número el tipo de dato")
        notasIngresar = parseInt(prompt(`REVISE EL TIPO DE DATO INGRESADO: Ingrese la cantidad de notas correspondientes a ${nombre}`))
    }
    let total = 0
    for(let i = 0; i < notasIngresar; i++){
        let nota = parseFloat(prompt(`Ingrese la nota n° ${i+1}`))
        // NaN = Not a Number
        while(isNaN(nota)){
            
            nota = parseFloat(prompt(`Ingrese la nota n° ${i+1}`))
        }
        if(nota > 0 && nota<=10){
            total = total + nota
        }else{
            alert("Ingrese una nota dentro del rango")
            nota = parseFloat(prompt(`Ingrese la nota n° ${i+1}`))
            total = total + nota
        }
        //equivalente
        //total+=nota
    }

    let promedio = total / notasIngresar
    if(promedio == 10){
        console.log(`${nombre}: Felicitaciones es un alumno/a ejemplar. Su promedio es ${promedio.toFixed(2)} `)
    }else if(promedio > 7){
        console.log(`${nombre}: Promociono la materia.  Su promedio es ${promedio.toFixed(2)} `)
    }else if(promedio >= 4){
        console.log(`${nombre}: Aprobó la materia.  Su promedio es ${promedio.toFixed(2)} `)
    }else{
        console.log(`${nombre}: Desaprobó la materia.  Su promedio es ${promedio.toFixed(2)} `)
    }
    let pregunta = prompt(`Desea ingresar las notas de otro/a alumno/a?
    "ESC" para no`)
    if(pregunta.toUpperCase() == "ESC"){
        bandera = false
        alert("Gracias por utilizar nuestro código!! ")
    }
}while(bandera)
//Condicional que evalue el promedio
//Lo del ciclo - que ingrese otro alumno


// let bandera = true
// do{
//     //Los ingresos
//     let nombre = prompt("Ingrese el nombre de la persona")
//     let nota1 = parseFloat(prompt("Ingrese la primer nota"))
//     let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
//     let nota3 = parseFloat(prompt("Ingrese la tercer nota"))
    
//     let total = nota1+ nota2 + nota3
//     let promedio = total / 3
//     if(promedio == 10){
//         console.log(`${nombre}: Felicitaciones es un alumno/a ejemplar. Su promedio es ${promedio.toFixed(2)} `)
//     }else if(promedio > 7){
//         console.log(`${nombre}: Promociono la materia.  Su promedio es ${promedio.toFixed(2)} `)
//     }else if(promedio >= 4){
//         console.log(`${nombre}: Aprobó la materia.  Su promedio es ${promedio.toFixed(2)} `)
//     }else{
//         console.log(`${nombre}: Desaprobó la materia.  Su promedio es ${promedio.toFixed(2)} `)
//     }
//     let pregunta = prompt(`Desea ingresar las notas de otro/a alumno/a?
//     "ESC" para no`)
//     if(pregunta.toUpperCase() == "ESC"){
//         bandera = false
//         alert("Gracias por utilizar nuestro código!! ")
//     }
// }while(bandera)