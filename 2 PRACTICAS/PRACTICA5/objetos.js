//OBJETOS
//1 Literales

//const para declarar un objeto

const notebookGamer = {
    id: 1,
    marca: "Lenovo",
    modelo: "Legion 5",
    version: "1.0",
    color: "Plateado",
    puertos: 5,
    tipoPuerto:"Usb",
    precio: 1450,
    stock: 5,
}
//llamando al objeto
console.log(notebookGamer);
console.log(notebookGamer.marca);
//modificar una propiedad del objeto
notebookGamer.color = "Azul Marino";
//agregar una propiedad al objeto
notebookGamer.garantia = "12 meses"
//eliminando una propiedad del objeto
delete notebookGamer.version;
console.log(notebookGamer);
//mostrar mas de una propiedad del objeto
console.log(notebookGamer.marca+ ` `+ notebookGamer.precio+` Usd.`);
console.log(notebookGamer.id,notebookGamer.marca,notebookGamer.precio);


//CREANDO CONSTRUCTOR DE OBJETO Y USÁNDOLO
function Alumno(nombre, apellido, legajo, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.legajo = legajo;
    this.curso = curso;
    //método
    this.mostrarInfo = function () {
        alert("hola soy " + this.nombre + " " + this.apellido + " Legajo: "+ this.legajo + " Curso: " + this.curso);
    }
}
const alumno1 = new Alumno("Juan", "Sampaolesi","1194", "1C")
console.log(alumno1); 
//usar método mostrarInfo
alumno1.mostrarInfo();

/*
//utilizando métodos de strings
let frase = " Que hermosa mañana no? "
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//propiedad de string
console.log(frase.length);
*/

//for in
for(const prop in alumno1) {
    console.log(prop);
}


//clases
class paciente{
    constructor(nombre, altura, peso, edad){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.edad = edad;
    }
    calcularIMC(){
        const imc = this.peso / (this.altura * this.altura);
        console.log(imc);
    }
}

const paciente1 = new paciente("Alex", 1.81, 85, 24);
console.log(paciente1);
paciente1.calcularIMC();


