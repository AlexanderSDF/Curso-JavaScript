//Segunda forma de escribir JavaScript - Buena Practica
console.log("Bienvenidos a la primera clase de JavaScript") 

//Formas de guardar espacios en memoria
//var y let son dos formas de declarar variables
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

//TERCERA FORMA "CONST" - Buena Practica
const cantidadPaginas