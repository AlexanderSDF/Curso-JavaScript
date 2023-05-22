//objetos
//literales

const hub = {
    id: 1,
    marca: 'NetMak',
    color: 'blanco y verde',
    puertos: 5,
    tipoPuerto: 'usb',
    precio: 5999.99,
    stock: 5
}
//vemos el objeto
console.log(hub);
//vemos una propiedad del objeto
console.log(hub.color);
//modificamos una propiedad del objeto
hub.color = 'negro';

console.log(hub);
//agregamos una nueva propiedad
hub.garantia = '12 meses';

console.log(hub);
//eliminamos una propiedad
delete hub.garantia;
console.log(hub);

//mostrar mas de una propiedad
console.log(hub.marca + ' $'+ hub.precio);
console.log(hub.id,hub.marca,hub.precio);

//otra forma de acceder a una propiedad de un objeto 
hub['puertos']=3;
console.log(hub);



//funcion constructora
function Alumno(nombre, apellido, legajo, curso){
    //propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.legajo = legajo;
    this.curso = curso;
    //metodo
    this.mostrarInfo = function(){
        alert('Hola soy '+this.nombre+' '+this.apellido+' Legajo:'+this.legajo+' Curso:'+this.curso);
    }
}

//creamos alumnos nuevos
const alumno1 = new Alumno('Juan', 'Perez', 12345, '6A'); //nueva instacia de objeto
const alumno2 = new Alumno('Martina','Rodriguez', 9876, '3C');
//mostramos un alumno
console.log(alumno1);
//forzamos un alumno sin propiedad curso a ver como lo vemos
const alumno3 = new Alumno('Lucia','Ludueña', 5555);
 

//Metodos de strings
let oracion = "Que hermosa NOCHE que tenemos hoy";
console.log(oracion.toUpperCase());
console.log(oracion.toLowerCase());
//propiedad de string
console.log(oracion.length)


let ganadorLibertadores = prompt('quien gano la copa Libertadores 2022?');
if(ganadorLibertadores.toUpperCase() == "FLAMENGO"){
    alert('EXCELENTE RESPUESTA');
}

//si quiero usar el metoso mostrarInfo 
alumno1.mostrarInfo();

//for..in
for(const prop in alumno1){
    console.log(prop, alumno1[prop]);
}



//clases
class Paciente{
    constructor(nombre, altura, peso, edad){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.edad = edad;
    }
    calcularIMC(){
        let imc = this.peso/(this.altura * this.altura);
        alert("El indice de masa corporal de "+this.nombre+' es:'+imc);
    }
}

const p1 = new Paciente('Pablo', 1.80, 78, 30);
console.log(p1);
p1.calcularIMC();