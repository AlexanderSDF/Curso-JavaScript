//CLASE N°5 -- OBJETOS
//TENEMOS TRES FORMAS DE DECLARAR OBJETOS
//PRIMERA: OBJETOS LITERALES

let nombre = "Gonza";
let edad = 29;
const integrante1 = {
	//Decido que propiedades necesito/ o me parecen convenientes
	nombre: "Gonzalo",
	edad: 29,
	rol: "profe",
	ciudad: "Mendoza",
	gustoHelado: {
		gustoPrincipal: "Chocolate Blanco",
		gustoSecundario: "Menta granizado",
	},
};
const integrante2 = {
	nombre: "German",
	edad: 18,
	rol: "tutor",
	ciudad: "Merlo, Bs As",
};
const integrante3 = {
	nombre: "Santiago",
	edad: 20,
	rol: "estudiante",
	ciudad: "CABA",
};
let integrante4 = {
	nombre: "Luis",
	edad: 45,
	rol: "estudiante",
	ciudad: "CABA",
};
//acceder a todo el objeto
console.log(integrante2);
console.log(integrante3);
console.log(integrante1);

//acceder a un atributo de un objeto
//Acceder con el .
console.log(integrante2.nombre);
console.log(integrante4.rol);
//Acceder a un objeto dentro de otro objeto
console.log(integrante1.gustoHelado);
console.log(integrante1.gustoHelado.gustoSecundario);
//acceder de otra forma mediante ["nombrePropiedad"]
console.log(integrante3["ciudad"]);
console.log(integrante2["nombre"]);

//Cambiar valores en un objeto
console.log(integrante1.ciudad);
integrante1.ciudad = "CABA - Argentina";
console.log(integrante1.ciudad);

//SEGUNDA FORMA CREAR OBJETOS -- FUNCTION CONSTRUCTORA:
//Que tenemos un model que no es necesario repetir
//Va con mayus por convección
function Participante(nombre, edad, rol, ciudadIngresada) {
	(this.nombre = nombre),
		(this.edad = edad),
		(this.rol = rol),
		(this.ciudad = ciudadIngresada),
		(this.mostrarDatos = function () {
			console.log(
				`Soy el participante ${this.nombre} tengo ${this.edad} años, soy de ${this.ciudad} y mi rol es el de ${this.rol}`
			);
		}),
		(this.duplicarEdad = function () {
			this.edad = this.edad * 2;
		});
}

//INSTANCIACIÓN//CREAR OBJETOS;
//Utilizar sintaxis con New e instanciar
const participante = new Participante("Gabriel", 25, "estudiante", "Bs AS");
console.log(participante);

const participante2 = new Participante("Martin", 45, "estudiante", "Mar del plata");
console.log(participante2);
console.log(participante2.nombre);

//Utilización de un método
participante.mostrarDatos();
participante2.mostrarDatos();
participante.duplicarEdad();
console.log(participante.edad);
console.log(participante);

//METODO RESTRINGUIDO A LOS OBJETOS DE LA FUNCTION CONSTRUCTORA QUE CORRESPONDE
//Error común:
// integrante1.mostrarDatos()

//FOR IN una forma de declarar un ciclo for
//FOR IN RECORRE UN OBJETO PROPIEDAD A PROPIEDAD
for (let prop in integrante3) {
	console.log(integrante3[prop]);
}

for (const propiedad in participante) {
	console.log(participante[propiedad]);
}

//TERCERA FORMA DECLARAR OBJETOS:
class Auto {
	//En el constructor atributos
	constructor(modelo, marca, cantPuerta) {
		(this.modelo = modelo), (this.marca = marca), (this.cantidadPuertas = cantPuerta);
	}
	//Métodos por separado:
	mostrarDatos() {
		console.log(`El modelo del auto ${this.modelo} tiene ${this.cantidadPuertas}`);
	}
}
let fitito = new Auto("600", "Fiat", 3);
console.log(fitito);
fitito.mostrarDatos();

class Libro {
	constructor(autor, titulo, precio) {
		(this.autor = autor), (this.titulo = titulo), (this.precio = precio);
	}
	mostrarDataLibro() {
		console.log(`El autor es ${this.autor} su libro es ${this.titulo} y vale ${this.precio}`);
	}
}

function menu() {
	let opcion = prompt(`Ingrese su opcion deseada:
    1: -Libro favorito
    2: -Libro que desea comprar
    3:  Regalar libro
    ESC: para salir`);
	//Repetimos hasta que se ingresa "ESC"
	while (opcion != "ESC") {
		switch (opcion) {
			case "1":
				prompt("Ingrese su libro favorito");
				break;
			case "2":
				prompt("Ingrese el libro que desea comprar y no tiene");
				break;
			case "3":
				prompt("Regalar libro");
				break;
			default:
				alert("OPCIÓN NO CONTEMPLADA");
				break;
		}
		opcion = prompt(`Ingrese su opcion deseada:
        1: Libro favorito
        2: Libro que desea comprar
        3: Regalar libro
        ESC: Para salir`);
	}
}