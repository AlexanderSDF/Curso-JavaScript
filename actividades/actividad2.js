//!Ejercicio clase 2:-----------------------------------------------------------

//!Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
//!Hacer un condicional que me diga si el promedio es 10 "felicitaciones es un alumno/a ejemplar"
//!Si el promedio es mayor a 7 " promociono la materia"
//!Si el promedio es mayor o igual a 4 "aprobara materia"
//!menor a 4 "desaprobó la materia"

let alumno = (prompt("Indique su nombre: "));
let nota1 = parseInt(prompt("Indique la nota del 1er parcial: "));
let nota2 = parseInt(prompt("Indique la nota del 2do parcial: "));
let nota3 = parseInt(prompt("Indique la nota del 3er parcial: "));

let promedioNota = (nota1 + nota2 + nota3) /3
if (promedioNota>=7) {
  alert(alumno + " su promedio general de calificaciones es "  + promedioNota +"."+" Felicitaciones usted promociono la materia.");
}
else if(promedioNota>4) {
  alert(alumno + " su promedio general de calificaciones es "  + promedioNota +"."+" Felicitaciones usted aprobó la materia, cursara el Final tipo 'A' del modulo 4, 5, 6 la Fecha 15/11/22.");
}
else {
  alert(alumno + " su promedio general de calificaciones es "  + promedioNota +"."+" Usted desaprobó la materia, deberá cursar el Final tipo 'B' del modulo 1, 2, 3, 4, 5 y 6 la Fecha 15/11/22.");
}

//!EJERCICIO 2--------------------------------------------------------------------
//!Usuario ingresa color  favorito y se le devuelve si es un color Primario, Secundario o Terciario

let colorFavorito = prompt("Ingrese su color Favorito.")

if((colorFavorito.toLowerCase() == "rojo")||(colorFavorito.toLowerCase() == "amarillo")||(colorFavorito.toLowerCase() =="azul")) {
  alert("El color "+ colorFavorito + " es un color primario.")
} 
else if((colorFavorito.toLowerCase() == "violeta")||(colorFavorito.toLowerCase() == "verde")||(colorFavorito.toLowerCase() =="naranja")){
  alert("El color "+ colorFavorito + " es un color secundario.")
}
else{
  alert("El color "+ colorFavorito + " es un color terciario.")
}


//!EJERCICIO 3--------------------------------------------------------------------
//!Usuario ingresa nombre de jugador, cantidad de partidos jugados  y goles anotados.
//!se le devolverá al usuario el promedio de goles por partido
let jugador = (prompt("Indique el jugador: "));
let partidos = parseInt(prompt("Indique el cantidad de partidos: "));
let goles = parseInt(prompt("Indique el cantidad de goles del jugador: "));

let promedioGol = goles / partidos
alert(jugador + " tiene un promedio de "  + promedioGol + " goles por partido.")
if (promedioGol>=0.5) {
  alert("Terrible jugador parece el Diegote")
}
else{
  alert("Flojo el muchacho derecho al Paddle")
}
//!PRACTICA--------------------------------------------------------------------------