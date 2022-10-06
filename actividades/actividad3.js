
//!Ejercicio clase 3:
//!Crear un programa que consulte al usuario si desea ingresar notas, con un ciclo que si/no.
//!cuando ingrese notas calcular si aprobó, reprobó o promociono.
//!Devolver un msj que muestre el promedio mas su situación con  la materia
//!Agregarle un ciclo que me pregunte si deseo seguir ingresando notas
let promocionado =  ", usted ha promocionado la materia."
let aprobado = ", usted ha aprobado la materia." 
let desaprobado = ", usted ha desaprobado la materia."
let promedioNota = 0;
let ciclo = true;

while(ciclo === true){
  let pregunta = prompt("Quiere ingresar notas?");
  if (pregunta.toLowerCase() === "si"){
    nota1 = parseInt(prompt("Ingrese nota del primer parcial"));
    nota2 = parseInt(prompt("Ingrese nota del segundo parcial"));
    nota3 = parseInt(prompt("Ingrese nota del tercer parcial"));
    promedioNota = (nota1 + nota2 + nota3) / 3;
    
    if (promedioNota >= 7 ){
      alert("Su nota es: "+promedioNota + promocionado)
    }
    else if(promedioNota >=4 ){
      alert("Su nota es: "+promedioNota +aprobado)
    }
    else if (promedioNota < 4 ){
      alert("Su nota es: "+promedioNota +desaprobado)
    }
    else {
      alert("Ingrese una nota valida")
    }
  }
  else {
    alert("Gracias por utilizar el algoritmo.")
  }
}














