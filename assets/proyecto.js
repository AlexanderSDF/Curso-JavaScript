//! Proyecto de carrito para tienda de celulares

let cantidadNotebooks = 0;
let eleccionNotebook = 0;
let acumulador = 0;
let carrito = [];
let notebookElegida = [];
let nuevoStockNotebook = [];

//!constructor de objetos
class Notebook {
	constructor(id, nombre, categoria, marca, color, precio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.categoria = categoria;
		this.marca = marca;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}
	restaStock() {
		this.stock = this.stock - cantidadNotebooks;
		console.log(`El stock de ${this.nombre} ha sido actualizado`);
	}
}
//!construcción de objetos
const producto1 = new Notebook(
	1,
	`Notebook 13'`,
	`Trabajo de Oficina`,
	`Lenovo`,
	`Plateado`,
	67000,
	15
);
const producto2 = new Notebook(2, `Notebook 14'`, `Trabajo de Oficina`, `Asus`, `Negro`, 72000, 13);
const producto3 = new Notebook(
	3,
	`Notebook 15'`,
	`Trabajo Demandante`,
	`Huawei`,
	`Blanca`,
	95000,
	7
);
const producto4 = new Notebook(
	4,
	`Notebook 13'`,
	`Trabajo Demandante`,
	`Macbook`,
	`Plateado`,
	230000,
	3
);
const producto5 = new Notebook(5, `Notebook 14'`, `Gamer`, `Asus`, `Negro`, 280000, 8);
const producto6 = new Notebook(6, `Notebook 14'`, `Gamer`, `Alienware`, `Blanco`, 300000, 2);
const notebooksDisponibles = [producto1, producto2, producto3, producto4, producto5, producto6];
//!Ciclo de agregar A Carrito
cicloEleccionNotebook();

function cicloEleccionNotebook() {
	while (eleccionNotebook != undefined) {
		eleccionNotebook = prompt(
			`Ingrese el número del artículo de la Notebook deseado.

- Artículo 1: Notebook Lenovo Thinkpad 13' apta para trabajo de oficina. 
- Artículo 2: Notebook Asus Lite 14' apta trabajo de oficina.
- Artículo 3: Notebook Huawei z32 15' apta trabajo demandante.
- Artículo 4: Macbook Apple Air M1 13' apta trabajo demandante. 
- Artículo 5: Notebook Asus Rog 14' apta para gaming.
- Artículo 6: Notebook Alienware 14' apta para gaming.

Ingrese fin para finalizar la compra.`
		);
		notebookElegida = notebooksDisponibles.find((notebook) => notebook.id == eleccionNotebook);
		console.log(notebookElegida);
		//Verifica que el articulo sea valido
		const verificacionArticulos = notebooksDisponibles.some(
			(notebook) => notebook.id == eleccionNotebook
		);
		if (verificacionArticulos == true) {
			alert(`El artículo es correcto.`);
		} else {
			alert(`Ingresó un artículo incorrecto.`);
			break;
		}
		let cantidadNotebookCarrito = calcularTotal();
	}
}
//!Usuario Ingresa cantidad a comprar
function calcularTotal() {
	cantidadNotebooks = parseInt(prompt(`Ingrese la cantidad de notebooks que desea comprar.`));
	console.log(cantidadNotebooks);
	console.log(notebookElegida.stock);
	//!caga
}
//!Se agrega al carrito la cantidad Seleccionada siempre que exista en Stock
let agregarACarrito = addShop(notebookElegida);

//!Se calcula el Total a abonar
let subtotalPagar = carrito.reduce((suma, notebook) => suma + notebook.precio, 0);
let totalPagar = subtotalPagar * cantidadNotebooks;
alert(`La cantidad total a abonar es $${totalPagar},00`);

//!Función para actualizar Stock
function addShop(pc) {
	if (cantidadNotebooks <= pc.stock) {
		carrito.push(pc);
	} else {
		alert(`No hay en Stock la cantidad ingresada, vuelva a intentarlo.`);
	}
	console.log(carrito);
}

function restarAStock(eleccionNotebook, notebookDisponibles) {
	for (let art of notebookDisponibles) {
		if (art.id == eleccionNotebook) {
			restarStock();
		}
	}
}
function restarStock() {
	let nuevoStockNotebook = notebookDisponibles.map((notebook) => {
		return {
			id: notebook.id,
			nombre: notebook.nombre,
			categoria: notebook.categoria,
			marca: notebook.marca,
			color: notebook.color,
			precio: notebook.precio,
			stock: notebook.stock - cantidadNotebooks,
		};
	});
	console.log(nuevoStockNotebook);
}
