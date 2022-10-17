//Ejercicios clase 3:

//Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
//Hacer un condicional que me diga si el promedio es 10 "felicitaciones es un alumno/a ejemplar"
//Si el promedio es mayor a 7 " promociono la materia"
//Si el promedio es mayor o igual a 4 " aprobó la materia"
//menor a 4 "desaprobó la materia"
//Agregarle un ciclo que me pregunte si deseo seguir ingresando notas

//Función suma: 
// let suma = num1 +num2
// let num1 = prompt("Ingrese un numero") 
// let num2 = prompt("Ingrese otro numero") 

//!CLASE 4 FUNCTIONS

//!PRIMERA FORMA DE DECLARAR FUNCIONES
//!Declaración la function
function pedirNombre(){
    //!Sentencio las instrucciones que realiza mi function
    let personaIngresada = prompt("Ingresar nombre")
    //* console.log(`Hola ${personaIngresada}`)
    mostrarNombre(personaIngresada)
}
function mostrarNombre(nombre){
    //!En las instrucciones de una function con parámetro, voy a utilizar el o los parámetros que haya pedido
    //!Un parámetro puede ser un dato o una variable
    console.log(`Hola ${nombre} bienvenido a Coder House, estamos encantados de tenerte con nosotros`)
}

// pedirNombre()

// mostrarNombre("Pablo")
// mostrarNombre("Julieta")
// mostrarNombre("Alan")
// mostrarNombre(5)

function suma(num1, num2){
    resul = num1 + num2
    return resul
    
}
//* let resultado = suma(7,6)
//* console.log(resultado)
//* let resultado2 = suma(9,9)
//* console.log(resultado2)
//* function resta(num1, num2){
//*     console.log(`La resta es ${num1-num2}`)
//* }
//* //Orden de los parámetros es fundamental
//* resta(6,7)
//* resta(1,9)
//* Para que se ejecute una function debemos LLAMARLA/INVOCARLA
//* Estoy invocando la function pedirNombre
//* pedirNombre()
//* pedirNombre()
function pedirDatos(){
    let numero1 = parseInt(prompt("Ingrese el primer Numero"))
    let numero2 = parseInt(prompt("Ingrese el segundo Numero"))
    let operador = prompt("Ingrese el operador deseado")
    let resultado = calculadora(numero1, numero2, operador)
    console.log(resultado)
}
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            
        case "-":
            return primerNumero - segundoNumero;
            
        case "*":
            return primerNumero * segundoNumero;
            
        case "/":
            return primerNumero / segundoNumero;
            
        default:
            return 0;
    }
}
// let calculo = calculadora(5,3, "*")
// console.log(calculo)
// console.log(calculadora(10, 5, "*"));
// console.log(calculadora(10, 2, "/"))
// console.log(calculadora(25, 10, "+"))

// pedirDatos()

//!RETOMAMOS EJERCICIO CLASE 3:

function pedirUsuario(){
    let usuario = prompt("Ingrese el nombre de la persona")
    return usuario
}
function pedirCantNotas(nombreIngresado){
    let notasIngresadas = parseInt(prompt(`Ingrese la cantidad de notas correspondientes a ${nombreIngresado}`))
    return notasIngresadas
}
let bandera = true
do{
    //!Los ingresos
    //* let nombre = prompt("Ingrese el nombre de la persona")
    //!Asignarle a una variable esa function con return
    let nombre = pedirUsuario()
    //!Decidir la cantidad a ingresar:
    //* let notasIngresar = parseInt(prompt(`Ingrese la cantidad de notas correspondientes a ${nombre}`))
    //!Invoco function y también la asigno a una variable
    let notasIngresar = pedirCantNotas(nombre)
    //* if(isNaN(notasIngresar)){
    //* }else{
    //*     console.log("Si es tipo de dato number")
    //* }
    
    while(isNaN(notasIngresar)){
        console.log("No es un número el tipo de dato")
        notasIngresar = parseInt(prompt(`REVISE EL TIPO DE DATO INGRESADO: Ingrese la cantidad de notas correspondientes a ${nombre}`))
    }
    let total = 0
    for(let i = 0; i < notasIngresar; i++){
        let nota = parseFloat(prompt(`Ingrese la nota n° ${i+1}`))
        console.log(nota)
        //! NaN = Not a Number
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
        //!equivalente
        //!total+=nota
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