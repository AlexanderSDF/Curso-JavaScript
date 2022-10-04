//Segunda forma de escribir JavaScript - Buena Practica
console.log("Bienvenidos a la primera clase de JavaScript") 

//Formas de guardar espacios en memoria
//var y let son dos formas de declarar variables = se puede reasignar valor

//Declarar y asignar valor, se llama "Inicializar"

//PRIMERA FORMA "VAR" - Mala Practica
//Declaramos variable 
var autor
var titulo = "Primer Clase"
console.log(autor)//undefined
console.log(titulo)

//SEGUNDA FORMA "LET" - Buena Practica
//Declaramos Variable - Forma A
let editorial 
console.log(editorial)
//Asignamos Valor
editorial = "Pinguli's Editorials"
console.log(editorial)

//Declaramos Variable y Asignamos valor - Forma B
let editorial2 = "Editorial Pinguli"
console.log(editorial2)

//TERCERA FORMA "CONST" - De Constante = no se puede reasignar valor
//A diferencia de las variables no se pueden solo declarar.
//Se debe declarar y asignar = inicializar
const cantidadPaginas = 100
const PI = 3.14
console.log(cantidadPaginas)
console.log(PI) 

//TIPOS DE DATOS
//Lenguaje de tipado débil: no hay que aclarar el tipo de dato.
//String:
let cadenaTexto = "hola, como estas?"
console.log(cadenaTexto)
//Number:
let numero = 5
console.log(numero)
//Booleano:
let booleano = true // o false
console.log(booleano)

//OPERACIONES BÁSICAS + - * / 
let num1 = 8
let num2 = 5
const num3 = 2
//suma
let suma1 = 6 + 7
console.log(suma1)
let suma2 = num1 + num2
console.log(suma2)
let suma3 = suma1 + num3
console.log(suma3)
//resta
let resta1 = num1 - num3
console.log(resta1)
//Multiplicar
let mul1 = num1 * num3
console.log(mul1)
//Dividir
let div1 = num1 / num2
console.log(div1)

//CONCATENACIÓN / símbolo + concatena string sin espacios
let cadena1 = "Coder"
let cadena2 = "House"
console.log(cadena1+"   "+cadena2)
console.log(num1+cadena1)
//devuelve NaN=Not a Number / cuando se hace op con números y strings
console.log(num1-cadena1)

//Alert -- Cartel Emergente de Salida
//alert("El Valor de la suma es: " + suma1)

//prompt -- cartel emergente de entrada
//guarda sus datos default como string

/*Usuario ingrese dos numero, por separado y esos dos números 
se sumen en una tercer variable mediante un cartel emergente la suma*/
let numero1 = parseInt(prompt("Ingrese el Primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
let resultadoSuma = numero1 + numero2;
console.log(resultadoSuma);
alert("El resultado de la suma es: " + resultadoSuma);