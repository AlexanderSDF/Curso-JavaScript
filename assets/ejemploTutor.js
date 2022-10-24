//! Quiero hacer un ciclo for of para restar al stock del articulo lo vendido, quisiera hacerlo solo al stock de lo que vendí.

let cantidadLentes = 0;
let eleccionAnteojo = 0;
let acumulador = 0;
let carrito = [];
let armazonElegido = [];
let nuevoStockLentesDisponibles = [];

//Clase Creador/Constructor del Objetos LENTES
class Lentes {
	constructor(id, nombre, marca, modelo, color, precio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}
	restaStock() {
		this.stock = this.stock - cantidadLentes;
		console.log(`El stock de ${this.nombre} ha sido actualizado`);
	}
}

//Creando los lentes - Usando constructor "LENTES"
const armazon1 = new Lentes(100, "Armazón de receta", "Bless", "Aviador", "Negro", 7500, 100);
const armazon2 = new Lentes(101, "Lentes de Sol", "Davor", "Envolvente", "Negro", 7500, 100);
const armazon3 = new Lentes(
	102,
	"Armazón de receta",
	"Bless",
	"Hexagonal",
	"Dos colores",
	6500,
	100
);
const armazon4 = new Lentes(
	103,
	"Armazón de receta",
	"Bless",
	"Pin Up",
	"Dorado y Negro",
	9000,
	100
);
const armazon5 = new Lentes(104, "Lentes de Sol", "Mildura", "Pin Up", "Dorado y Rosa", 10500, 100);
const armazon6 = new Lentes(105, "Lentes de Sol", "Muzik", "Wayfarer", "Negro", 8500, 100);

const lentesDisponibles = [armazon1, armazon2, armazon3, armazon4, armazon5, armazon6];

//! Llamado del ciclo
cicloDeEleccionArmazon();

//! Ciclo para que el usuario ingrese el artículo a comprar.
function cicloDeEleccionArmazon() {
	while (eleccionAnteojo != undefined) {
		eleccionAnteojo = prompt(
			`Ingrese el número del artículo del armazón deseado.
- Artículo 100: Armazón de receta, marca Bless, modelo Aviador.
- Artículo 101: Lentes de Sol, marca Davor, modelo Envolvente.
- Artículo 102: Armazón de receta, marca Bless, modelo Hexagonal.
- Artículo 103: Armazón de receta, marca Bless, modelo Pin Up.
- Artículo 104: Lentes de Sol, marca Mildura, modelo Pin Up.
- Artículo 105: Lentes de Sol, marca Muzik, modelo Wayfarer.
Ingrese fin para finalizar la compra.`
		);
		armazonElegido = lentesDisponibles.find((armazon) => armazon.id == eleccionAnteojo);
		console.log(armazonElegido);

		//corroboro que el artículo ingresado sea válido.
		const corroboracionArticuloSeleccionado = lentesDisponibles.some(
			(lente) => lente.id == eleccionAnteojo
		);
		if (corroboracionArticuloSeleccionado == true) {
			alert("El artículo es correcto.");
		} else {
			alert("Ingresó un artículo incorrecto.");
			break;
		}
		let cantidadLentesCarrito = calcularTotal();
	}
}
//le pido al usuario que ingrese la cantidad de lentes que desea comprar.
function calcularTotal() {
	cantidadLentes = parseInt(prompt("Ingrese la cantidad de lentes que desea comprar."));
	console.log(cantidadLentes);
	console.log(armazonElegido.stock);

	//cargo cantidad de armazones vendidos a un array

	//Agrego al carrito el armazon que eligio el usuario. Primero corroboro que se encuentre disponible la cantidad que desea.
	let agregarACarrito = addShop(armazonElegido);

	//calculo el total a abonar.
	let parcialAPagar = carrito.reduce((suma, lente) => suma + lente.precio, 0);
	let totalAPagar = parcialAPagar * cantidadLentes;
	alert("La cantidad total a abonar es $ " + totalAPagar);

	//funcion para actualizar el stock disponible.
	restarAlStock(lentesDisponibles, eleccionAnteojo);
	console.table(lentesDisponibles);
	calculoEnvio();
}
function addShop(glasses) {
	if (cantidadLentes <= glasses.stock) {
		carrito.push(glasses);
	} else {
		alert("El artículo no posee esa cantidad disponible, vuelva a intentarlo.");
		cicloDeEleccionArmazon();
	}

	console.log(carrito);
}

function restarAlStock(eleccionCompra, lenteDispo) {
	for (let art of lenteDispo) {
		if (art.id == eleccionCompra) {
			restarAlStock();
		}
	}
}

function restarStock() {
	let nuevoStockLentesDisponibles = lentesDisponibles.map((lentes) => {
		return {
			id: lentes.id,
			nombre: lentes.nombre,
			marca: lentes.marca,
			modelo: lentes.modelo,
			color: lentes.color,
			precio: lentes.precio,
			stock: lentes.stock - cantidadLentes,
		};
	});
	console.table(nuevoStockLentesDisponibles);
}
