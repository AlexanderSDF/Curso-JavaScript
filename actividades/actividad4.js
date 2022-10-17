//! Para declarar Función

//*Operación suma
function suma(numero1 , numero2) {
  resultado = numero1 + numero2;
  return resultado;
  console.log(resultado);
}

//*Calculadora según necesidad

function datos(){
  let numero1 = parseFloat(prompt(`Ingrese el primer número a operar`)) ;
  let numero2 = parseFloat(prompt(`Ingrese el segundo número a operar`)) ;
  let operador = parseFloat(prompt(`Ingrese el operador`)) ;
  let resultado = calcular(numero1, numero2, operador);
  console.log(resultado);
}
function calcular(numeroA, numeroB, operadorA){
  switch(operadorA){
    case "+":
      return numeroA + numeroB;
    case "-":
      return numeroA - numeroB;
    case "*":
      return numeroA * numeroB;
    case "/":
      return numeroA / numeroB;
    default:
      return 0;
  } 
}
datos()
calcular()