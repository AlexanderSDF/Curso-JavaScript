// 
// //!Ejercicio clase 3:
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

//!Ejercicios clase 3 opción 2---------------------------------------------------------

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
        console.log(`${nombre}: Aprobo la materia.  Su promedio es ${promedio.toFixed(2)} `)
    }else{
        console.log(`${nombre}: Desaprobo la materia.  Su promedio es ${promedio.toFixed(2)} `)
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
//         console.log(`${nombre}: Aprobo la materia.  Su promedio es ${promedio.toFixed(2)} `)
//     }else{
//         console.log(`${nombre}: Desaprobo la materia.  Su promedio es ${promedio.toFixed(2)} `)
//     }
//     let pregunta = prompt(`Desea ingresar las notas de otro/a alumno/a?
//     "ESC" para no`)
//     if(pregunta.toUpperCase() == "ESC"){
//         bandera = false
//         alert("Gracias por utilizar nuestro código!! ")
//     }
// }while(bandera)