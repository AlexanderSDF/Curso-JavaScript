//class constructora
class Libro {
	constructor(id, autor, titulo, precio, imagen) {
		//propiedades o atributos de nuestra clase
		(this.id = id),
			(this.autor = autor),
			(this.titulo = titulo),
			(this.precio = precio),
			(this.imagen = imagen);
	}
	//métodos
	mostrarData() {
		console.log(
			`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio} MËTODO`
		);
	}
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1, "Jorge Luis Borges", "Aleph", 900, "AlephBorges.jpg");

const libro2 = new Libro(
	2,
	"Gabriel García Marquez",
	"Cien años de Soledad",
	4500,
	"CienSoledadMarquez.jpg"
);

const libro3 = new Libro(3, "Isabel Allende", "Paula", 2800, "PaulaAllende.jpg");

const libro4 = new Libro(4, "Jorge Luis Borges", "Ficciones", 1400, "FiccionesBorges.jpg");

const libro5 = new Libro(5, "Mario Benedetti", "Andamios", 2200, "AndamiosBenedetti.jpg");

const libro6 = new Libro(
	6,
	"Mario Vargas Llosa",
	"La ciudad y los perros",
	2000,
	"CiudadPerrosVargasLlosa.jpg"
);

//Creamos nuestro array de objetos
//Formas de cargar array
//forma uno -- directa
const estanteria = [libro1, libro2, libro3, libro4, libro5, libro6];
console.log(estanteria);
//forma dos // con push
const biblioteca = [];
biblioteca.push(libro1, libro2);
console.log(biblioteca);

//Función para agregar libros:
function nuevoLibro(array) {
	let autorIngresado = prompt("Ingrese el nombre del autor");
	let tituloIngresado = prompt("Ingrese el título de la obra");
	let precioIngresado = parseInt(prompt("Ingrese el precio del libro"));
	let libroCreado = new Libro(array.length + 1, autorIngresado, tituloIngresado, precioIngresado);
	//Objeto creado lo pusheo al array
	array.push(libroCreado);
	console.log(array);
}
function verCatalogo(array) {
	for (let libro of array) {
		console.log(`El libro ${libro.titulo} del autor ${libro.autor} vale $${libro.precio}`);
	}
}

function mostrarCatalogoFOREACH(array) {
	//FOR EACH === PARA CADA UNO
	//método de array FOR EACH
	array.forEach(
		//function flecha -- instrucciones que deseamos
		(libro) => {
			//método de function constructora que creamos nosotros/as
			libro.mostrarData();
			//clg equivalente al método de la function constructora
			// console.log(`El libro ${libro.titulo} del autor ${libro.autor} vale $${libro.precio} CON FOR EACH`)
		}
	);
}

//FUNCTION PARA APLICAR MÉTODO FIND
function buscarPorTitulo(array) {
	let tituloBuscado = prompt("Ingrese el titulo que desea buscar");
	//FIND DEVUELVE EL ELEMENTO ENCONTRADO O UNDEFINED
	let tituloEncontrado = array.find(
		(libro) => libro.titulo.toLowerCase() == tituloBuscado.toLowerCase()
	);
	if (tituloEncontrado == undefined) {
		console.log(`El libro ${tituloBuscado} no se encuenta en catalogo`);
	} else {
		console.log(tituloEncontrado);
	}
}
function buscarPorAutor(array) {
	let autorBuscado = prompt("Ingrese el autor que desea buscar");
	let busqueda = array.filter((book) => book.autor.toLowerCase() == autorBuscado.toLowerCase());
	if (busqueda.length == 0) {
		console.log("No se encontró ningún libro de este autor");
	} else {
		console.log(busqueda);
		verCatalogo(busqueda);
	}
}

//Método MAP
function sumarIva(array) {
	let estanteriaIVA = array.map((libro) => {
		return {
			id: libro.id,
			autor: libro.autor,
			titulo: libro.titulo,
			precio: libro.precio * 1.21,
		};
	});
	console.log("LIBROS CON IVA");
	console.log(estanteriaIVA);
}
// sumarIva(estanteria)

//SORT -- ATENCIÖN METODO QUE DESTRUYE (AFECTA) AL ARRAY ORIGINAL -- en el after lo seguimos
// //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// // https://davidyero.medium.com/ordenar-arreglo-de-objetos-por-propiedad-o-atributo-javascript-56f74fc48906
function ordenarMayorMenor(array) {
	console.log(array.sort((a, b) => b.precio - a.precio));
}
// ordenarMayorMenor(estanteria)

//FUNCTIONS CÓDIGO:

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
			verCatalogo(estanteria);
			break;
		case 2:
			nuevoLibro(estanteria);

			break;
		case 3:
			break;
		case 4:
			buscarPorTitulo(estanteria);
			break;
		case 5:
			buscarPorAutor(estanteria);
			break;
		default:
			alert(`Ingrese una opción correcta`);
	}
}
// //CÓDIGO:
// let salir = false
// while(salir!=true){
//     preguntarOpcion()
// }

//PLANTILLAS y comenzar nuestro proyecto en el DOM

//capturas DOM
let divProductos = document.getElementById("productos");
let btnGuardarLibro = document.getElementById("guardarLibroBtn");
let buscador = document.getElementById("buscador");
let btnVerCatalogo = document.getElementById("verCatalogo");
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo");
//FUNCTIONS
function mostrarCatalogo(array) {
	divProductos.innerHTML = "";
	for (let libro of array) {
		let nuevoLibro = document.createElement("div");
		nuevoLibro.innerHTML = `<div id="${libro.id}" class="card" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;"src="../assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
                                    <div class="card-body">
                                        <h4 class="card-title">${libro.titulo}</h4>
                                        <p>Autor: ${libro.autor}</p>
                                        <p class="">Precio: $ ${libro.precio}</p>
                                    <button id="" class="btn btn-outline-success">Agregar al carrito</button>
                                    </div>
    </div>`;
		divProductos.appendChild(nuevoLibro);
	}
}
//Función para agregar libros:
function cargarLibro(array) {
	//captura y utilización de input para crear nuevo objeto
	let inputAutor = document.getElementById("autorInput");
	let inputTitulo = document.getElementById("tituloInput");
	let inputPrecio = document.getElementById("precioInput");
	let libroCreado = new Libro(
		array.length + 1,
		inputAutor.value,
		inputTitulo.value,
		inputPrecio.value,
		"libroNuevo.jpg"
	);
	//Objeto creado lo pusheo al array
	array.push(libroCreado);
	mostrarCatalogo(array);
	console.log(array);
	inputAutor.value = "";
	inputTitulo.value = "";
	inputPrecio.value = "";
}
// mostrarCatalogo(estanteria)

//EVENTOS PROYECTO
btnGuardarLibro.addEventListener("click", () => {
	cargarLibro(estanteria);
});
buscador.addEventListener("input", () => {
	console.log(buscador.value);
});
btnVerCatalogo.onclick = () => {
	mostrarCatalogo(estanteria);
};
btnOcultarCatalogo.ondblclick = () => {
	divProductos.innerHTML = "";
};
//CLASE EVENTOS:
/*
Los eventos son los mecánismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).
*/
/*Las event handler pueden ser cualquier tipo de function de las que conocemos:
-Arrow
-Anónima
-Declarada con la palabra reservada function*/

function holaComi45025() {
	alert("Hola comi 45025");
	console.log("Buenas noches!");
}
//capturamos inputAlumno
let inputAlumno = document.getElementById("nombreAlumno");
console.log(inputAlumno);
function saludarAlumno(nombre) {
	alert(`Hola ${nombre}`);
}
//SEGUNDA FORMA ADJUNTAR EVENTOS:
//captura buton semantico
let botonSemantico = document.getElementById("evento-semantico");
//Cuando pasamos a un evento, invocamos sin los ()
//FORMA 2 cuando pasamos más de un evento, sólo se toma el último
botonSemantico.onclick = holaComi45025;
botonSemantico.onclick = () => {
	saludarAlumno(inputAlumno.value);
};

//Primera forma addEventListener -- más recomendada
//puedo pasar múltiples eventos a un mismo elemento
let eventoMultiple = document.getElementById("evento-multiple");
//Dos términos ("evento", functionHandler)
//Cuando utilizamos addEven no va el ON
eventoMultiple.addEventListener("click", holaComi45025);
eventoMultiple.addEventListener("click", (event) => {
	saludarAlumno(inputAlumno.value);
	console.log(event);
	console.log(event.target);
	console.log(event.type);
});
