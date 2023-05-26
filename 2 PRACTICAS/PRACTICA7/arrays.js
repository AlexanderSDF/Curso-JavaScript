//ARRAYS LISTA
const listaCompras = ["Coca-Cola", "Pre-Pizza", "Tomate", "Cebolla", "Helado", "Queso"];
console.log(listaCompras);
console.log("Lo mas importante de la lista es la " + listaCompras[0]);

//Strings que concatenan
console.log(listaCompras[1] + " " + listaCompras[2]);

//Strings de numeros para sumar
const edades = [20,21,22,23,24,25];
console.log(edades[0] + edades[1]);

//!VER QUE FUNCIÓN CUMPLE
for (let i=0; i<listaCompras.length; i++){
    console.log(listaCompras[i]);
}

//MÉTODOS DE ARRAYS
//push() - Agrega un elemento al final de la lista
//let nuevoElemento = prompt("Ingrese un nuevo elemento a la lista de tareas: ");
listaCompras.push("Chocolate");
console.log(listaCompras);

//unshift() - Agrega un elemento al inicio de la lista
listaCompras.unshift("Cafe");
console.log(listaCompras);

//pop() - Elimina el último elemento de la lista
listaCompras.pop();
console.log(listaCompras);

//shift() - Elimina el primer elemento de la lista  
listaCompras.shift();
console.log(listaCompras);
//!ver
//Splice() - Elimina y agregar 1 o varios elementos de la lista
listaCompras.splice(1,4,"Papas Fritas");
console.log(listaCompras);

//join() - Concatena los elementos de la lista en una cadena
console.log(listaCompras.join(" *** "));

//concat() - Concatena los elementos de la lista en una cadena
const perros = ["Thor", "Spike"];
const gatos = ["Nebula", "Ares"];
const mascotas = perros.concat(gatos);
console.log(mascotas);

//slice() - Del array.slice(0,5) toma desde-hasta el elemento indicado y vuelca los datos en una nueva variable

const nombres = ["Juan", "Pedro","Marcelo", "Maria", "Ana", "Diana"];
const nombresMasculinos = nombres.slice(0,3);
console.log(nombresMasculinos);

/*
//indexOf() - Busca en el array y devuelve la posición de un elemento
let aBuscar = prompt("Ingrese un alumno a buscar: ");
//console.log(nombres.indexOf(aBuscar));

if (nombres.indexOf(aBuscar) === -1){
    alert(aBuscar+ " el elemento no se encuentra inscrpito aun");
    let respuesta = prompt("Desea inscribirlo? \ns-Si\n n-No");
    if (respuesta.toLocaleLowerCase() == "s"){
        nombres.push(aBuscar);
        console.log(nombres);
    }
}else{
    alert(aBuscar+ " ya se encuentra inscrpito.");
}
*/

//includes() - Verifica si un elemento esta o no en el array => True o false
console.log(nombres)
console.log(nombres.includes("Juan"))
console.log(nombres.includes("Juanita"))
console.log(nombres.includes("Diana"))

//reverse() - Devuelve el array en orden invertido
console.log(nombres.reverse())

//ARRAYS EN OBJETOS
//actividades va ser un array de objetos
const tareas = [
    {
        id: 1,
        nombre: "Estudiar"
    },
    {
        id:2,
        nombre: "Trabajar"
    },
    {
        id:3,
        nombre: "Hacer actividad física"
    },
    {
        id:4,
        nombre: "Comprar insumos"
    },
    {
        id:5,
        nombre: "Momento de ocio"
    },
    {
        id:6,
        nombre: "Descansar"
    }
];
console.log(tareas);
console.log(tareas[1]);

for (const tarea of tareas){
    console.log(tarea.id+" - "+tarea.nombre);
}

//class tarea para convertir objeto literal en objetos de la class tarea
class Tarea{
    constructor(objetoLiteralTarea){
        this.id = objetoLiteralTarea.id;
        this.nombre = objetoLiteralTarea.nombre;
        this.realizada = false;
    }
    //metodo para marcar actividad realizada
    completarTarea(){
        this.realizada = true;
    }
}
//nueva lista vacía y se carga con los objetos de la class tarea
//estos objetos tendrán las mismas propiedades que las literales pero"Realizada"
const listaTareas=[];
//uso un for..of para hacer la conversion
for(const tarea of tareas){
    listaTareas.push(new Tarea(tarea));
}
console.log(listaTareas);

//marco tareas como completadas
listaTareas[3].completarTarea();
console.log(listaTareas);