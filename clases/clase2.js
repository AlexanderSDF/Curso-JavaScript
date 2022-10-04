//*CLASE 2 - CONTROL DE FLUJOS:

//Pidan usuario ingrese cantidad goles de un jugador/a, cantidad de partidos y saque el promedio de gol

//Pedir con prompt cantGoles - cantPartidos

let nombreJugador = prompt("Ingrese nombre de jugador/a")
let cantidadGoles = parseInt(prompt("Ingrese la cantidad de goles realizados"))
let cantidadPartidos = parseInt(prompt("Ingrese la cantidad de partidos jugados"))
//Sacar el promedio
let promedioGol = cantidadGoles/cantidadPartidos
console.log("El jugador/a " + nombreJugador + " tiene un promedio de gol de " + promedioGol.toFixed(2) + " ya que hizo " + cantidadGoles + " goles en " + cantidadPartidos +" partidos.")
//como usar toFixed y controlar decimales https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
if(promedioGol >= 1){
    console.log("Es un gran goleador/a")
}else{
    console.log("Es un jugador terrenal")
}

//if = si.. condición (entre paréntesis)  
//{ instrucciones a ejecutar si se cumple la condición}
// let preguntaEdad = prompt("Responda por si o por no, si es mayor de edad")

//toLowerCase() pasar el contenido de una variable o una cadena todo a mins
if(preguntaEdad.toLowerCase() == "si"){
    //Instrucciones en caso de que se cumpla la condición/ es true
    console.log("Usted puede comprar alcohol")
}else{
    //se ejecuta cuando la condición el if es falsa/no se cumple
    console.log("Usted NO puede comprar alcohol")
}

//Otro ejemplo:
let color = prompt("Ingrese su color favorito")
//Concatenar condicionales:
//if-else if -else
if(color == "rojo"){
    console.log("Es un color primario " + color)
}else if(color == "azul"){
    console.log("Es un color primario " + color)
}else if (color == "amarillo"){
    console.log("Es un color primario " + color)
}else{
    console.log("No es un color primario")
}

let precio = 100;

if (precio < 20) {
    console.log("El precio es menor que 20");
}
else if (precio <= 50) {
    console.log("El precio es menor o igual que 50");
}
else if (precio < 100) {
    console.log("El precio es menor que 100");
}
else {
    console.log("El precio es mayor o igual que 100");
}

let numero = 4
//Hacer una variable que nos de un valor booleano
//cuando numero sea mayor a 5 es true, sino false
let mayor5 = (numero > 5)
console.log(mayor5)

if(mayor5){
    console.log("El número es mayor a 5")
}else{
    console.log("El numero no es mayor a cinco")
}

//todo let color = prompt("Ingrese su color favorito")
//Todo lo de colores primarios en una sola condición -- OPERADORES LÓGICOS

if((color == "rojo") || (color== "azul") || (color =="amarillo")){
    console.log("Es un color primario " + color)
}else{
    console.log("No es un color primario")
}


//*TABLA DE VERDAD
//*AND
//* V && V = V
//* V && F = F
//* F && V = F
//* F && F = F
//*OR
//* V || V = V
//* V || F = V
//* F || V = V
//* F || F = F


//*Operador de negación:
//negar algo -- cambiar valor de verdad por F o V según corresponda
console.log(!true)
if(!(color == "rojo")){
    console.log("Este color NO es el rojo")
}else{
    console.log("este color es rojo")
}

//*CONDICIONALES QUE OTORGAN MISMO RESULTADO:
//*          == comparando por la positiva
//*          != comparo por la negativa
//*          Operador distinto de !=

if(color != "verde"){
    console.log("Este color no es el verde")
}else{
    console.log("Este color es el verde")
}

if(color == "verde"){
    console.log("Este color es el verde")
}else{
    console.log("Este color no es el verde")
}

//*COMPARADORES ESTRICTOS
//*    === comparando por la positiva
//*   !== comparo por la negativa

let num = "5"
if(num === "5"){
    //COmpara el valor y el tipo de dato
    console.log("Esta es una igualdad estricta")
}else{
    console.log("No se cumplió la comparación estricta")
}
let num2 = "8"
if(num2 !== "8"){
    //COmpara el valor y el tipo de dato
    console.log("ESTO DA TRUE! -- No se cumplió la igualdad estricta")
}else{
    console.log("DA FALSO -- Esta es una igualdad estricta")
}



//!Ejercicios clase 2:

//!Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
//!Hacer un condicional que me diga si el promedio es 10 "felicitaciones es un alumno/a ejemplar"
//!Si el promedio es mayor a 7 " promociono la materia"
//!Si el promedio es mayor o igual a 4 "aprobara materia"
//!menor a 4 "desaprobó la materia"
