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


