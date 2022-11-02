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
let estanteria = [];
//CONDICIONAL EVALUA PRIMERA VEZ QUE ENTRA AL PROYECTO
if (localStorage.getItem("estanteria")) {
	estanteria = JSON.parse(localStorage.getItem("estanteria"));
} else {
	//Entra por primera -- setear el array el original
	console.log("Seteando el array por primera vez");
	estanteria.push(libro1, libro2, libro3, libro4, libro5, libro6);
	localStorage.setItem("estanteria", JSON.stringify(estanteria));
}

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
                                    <img class="card-img-top" style="height: 250px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
                                    <div class="card-body">
                                        <h4 class="card-title">${libro.titulo}</h4>
                                        <p>Autor: ${libro.autor}</p>
                                        <p class="">Precio: ${libro.precio}</p>
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
	//TAMBIÉN MODIFICAMOS ARRAY DEL STORAGE:
	localStorage.setItem("estanteria", JSON.stringify(array));
	mostrarCatalogo(array);
	console.log(array);
	inputAutor.value = "";
	inputTitulo.value = "";
	inputPrecio.value = "";
}

//EVENTOS PROYECTO
btnGuardarLibro.addEventListener("click", () => {
	cargarLibro(estanteria);
});
buscador.addEventListener("input", () => {
	console.log(buscador.value);
});
//Botones eliminados
// btnVerCatalogo.onclick = () =>{mostrarCatalogo(estanteria)}
// btnOcultarCatalogo.ondblclick = ()=>{divProductos.innerHTML =""}

mostrarCatalogo(estanteria);

//CLASE 10 STORAGE:
//cargar algo en almacenamiento//pushear
//setItem lleva clave y valor (key -value)
localStorage.setItem("curso2", "JS Coder House");
sessionStorage.setItem("saludo", "Bienvenidos!");
localStorage.setItem("curso2", "React");

//Traemos-capturamos elementos
let curso = localStorage.getItem("curso");
console.log(curso);

//DARK MODE
let btnDarkMode = document.getElementById("botonDarkMode");
let btnLightMode = document.getElementById("botonLightMode");
let btnPreferencia = document.getElementById("eliminarMode");
//Podemos con un valor booleano o con valor(pushee dark o light)
let modoOscuro;
//Condicional que evalua si existe o no ALGO EN EL STORAGE -- primera vez que entra
if (localStorage.getItem("modoOscuro")) {
	modoOscuro = localStorage.getItem("modoOscuro");
} else {
	console.log("Entro por primera vez");
	localStorage.setItem("modoOscuro", true);
	modoOscuro = "true";
}
console.log(modoOscuro);

if (modoOscuro == "true") {
	// document.body.style.backgroundColor ="black"
	// document.body.style.color = "antiquewhite"

	document.body.classList.add("darkMode");
} else {
	// document.body.style.backgroundColor ="antiquewhite"
	// document.body.style.color = "black"

	document.body.classList.remove("darkMode");
}
//Evento darkMode
btnDarkMode.addEventListener("click", () => {
	console.log("Funciona botón oscuro");
	//forma cambiar estilos con document:
	// document.body.style.backgroundColor ="black"
	// document.body.style.color = "antiquewhite"

	document.body.classList.add("darkMode");
	localStorage.setItem("modoOscuro", true);
});
btnLightMode.addEventListener("click", () => {
	console.log("Funciona botón claro");

	//forma cambiar estilos con document:
	// document.body.style.backgroundColor ="antiquewhite"
	// document.body.style.color = "black"

	document.body.classList.remove("darkMode");
	localStorage.setItem("modoOscuro", false);
});
btnPreferencia.onclick = () => {
	//Eliminar del storage el item mediante clave
	localStorage.removeItem("modoOscuro");
	//Elimina todo lo guardado en el storage
	// localStorage.clear()
};

// localStorage.setItem("estanteria", JSON.stringify(estanteria) )

// let biblioteca2 = JSON.parse(localStorage.getItem("estanteria"))
// console.log(biblioteca2)
