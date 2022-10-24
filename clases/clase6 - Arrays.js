//CLASE N°6 -- ARRAYS
//LOs [] me indican que el espacio de memoria que estoy declarando es un ARRAY
//Es un array vacío []
// const miPrimerArray = []
// console.log(miPrimerArray)

// //Qué tipo de datos puede tener un array:
// //array con datos number:
// const arrayNumbers = [1, 23, 5, 19, 30, 35]
// console.log(arrayNumbers)
// //array con tipo de dato string
// const arrayString = ['David',`Coder`, "Ger", "zanahoria", "mesa"]
// console.log(arrayString)
// //array con tipo de dato boolean
// const arrayBoolean = [true, false, false]
// console.log(arrayBoolean)
// //array con cualquier tipo de datos mezclados
// const arrayVarios = [true, 25, "House", 4]
// console.log(arrayVarios)

// //acceder a los elementos del array
// console.log(arrayNumbers[3])
// console.log(arrayString[4])

//const numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//console.log(numeros)
////for para recorrer un array
//for(let i = 0; i < 12; i++){
//    console.log(numeros[i])
//}
////for equivalente, pero más optimo con el .length
//for(let index = 0; index < numeros.length; index++){
//    console.log("Con el length " + numeros[index])
//}
// //MÉTODOS:

// //Métodos para agregar elementos a un array
// //push método que permite agregar un elemento al final del array
// arrayString.push("nuevo String")
// console.log(arrayString)
// //unshift método que permite agregar un elemento al principio del array
// arrayString.unshift(8)
// console.log(arrayString)

// //Métodos para QUITAR elementos de un array
// //pop elimina el ÚLTIMO ELEMENTO
// numeros.pop()
// numeros.pop()
// numeros.pop()
// numeros.pop()
// console.log(numeros)
// //shift elimina el PRIMER ELEMENTO
// numeros.shift()
// numeros.shift()
// numeros.shift()
// console.log(numeros)

// //SPLICE
// //Dos parámetros, primero posición INDICE y segundo cantidad elementos a eliminar
// arrayVarios.splice(2,1)
// console.log(arrayVarios)
// //Mostrar mediante el parámetro que le pasemos
// console.log(arrayString.join(" - "))

//class constructora
class Libro {
	constructor(id, autor, titulo, precio) {
		//propiedades o atributos de nuestra clase
		(this.id = id), (this.autor = autor), (this.titulo = titulo), (this.precio = precio);
	}
	//métodos
	mostrarData() {
		console.log(
			`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio}`
		);
	}
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1, "Jorge Luis Borges", "Aleph", 900);

const libro2 = new Libro(2, "Gabriel García Marquez", "Cien años de Soledad", 4500);

const libro3 = new Libro(3, "Isabel Allende", "Paula", 2800);

const libro4 = new Libro(4, "Jorge Luis Borges", "Ficciones", 1400);

const libro5 = new Libro(5, "Mario Benedetti", "Andamios", 2200);

const libro6 = new Libro(6, "Mario Vargas Llosa", "La ciudad y los perros", 2000);

//Creamos nuestro array de objetos
//cargar array
//forma uno -- directa
const estanteria = [libro1, libro2, libro3, libro4, libro5, libro6];
console.log(estanteria);
//forma dos // con push
const biblioteca = [];
biblioteca.push(libro1, libro2, libro3, libro4, libro5, libro6);
console.log(biblioteca);

//Función para agregar libros:
function nuevoLibro(array) {
	let autorIngresado = prompt("Ingrese el nombre del autor");
	let tituloIngresado = prompt("Ingrese el título de la obra");
	let precioIngresado = parseInt(prompt("Ingrese el precio del libro"));
	let libroCreado = new Libro(array.length + 1, autorIngresado, tituloIngresado, precioIngresado);
	console.log(libroCreado);
	//Objeto creado lo pusheo al array
	array.push(libroCreado);
	console.log(array);
}

//FUNCTIONS:

//Function que consulte al usuario opción deseada
function preguntarOpcion() {
	let opcion = parseInt(
		prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo de libros
                        2 - Agregar un libro a nuestro catálogo 
                        3 - Eliminar un libro de nuestro catálogo 
                        4 - Encontrar por titulo:
                        5 - Buscar libros de un mismo autor:
                        0 - Para salir
                        `)
	);
	menu(opcion);
}
//Function que ofrezca un menú
function menu(opcionSeleccionada) {
	switch (opcionSeleccionada) {
		case 0:
			salir = true;
			alert(`Gracias por visitarnos, vuelva pronto :D`);
			break;
		case 1:
			break;
		case 2:
			nuevoLibro(estanteria);

			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		default:
			alert(`Ingrese una opción correcta`);
	}
}
//CÓDIGO:
let salir = false;
while (salir != true) {
	preguntarOpcion();
}
