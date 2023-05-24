 //listas
const listaFestejo=['bebidas','pan','salchichas','torta','mayonesa'];

console.log(listaFestejo);
console.log('En la posición 1 del array de compras se encuentra '+listaFestejo[1]);

//con strings concatena
console.log(listaFestejo[2]+' '+listaFestejo[3]);
//con numeros suma
const edades = [23,45,19,87];
console.log(edades[0]+edades[2]);

for(let i=0; i<listaFestejo.length; i++){
    console.log(listaFestejo[i]);
}

//metodo push
//let nuevoElemento=prompt('Cual es el nuevo elemento de la lista festejo?')
listaFestejo.push('limon');
console.log(listaFestejo);

//metodo unshift
listaFestejo.unshift('velitas');
console.log(listaFestejo);

//metodo pop
listaFestejo.pop();
console.log(listaFestejo);

//metodo shift
listaFestejo.shift();
console.log(listaFestejo);

//metodo splice
listaFestejo.splice(2,1);
console.log(listaFestejo);
//no solo te permite eliminar un elemento o mas de mitad de array sino que permite agregar elementos
listaFestejo.splice(3,0,'queso');
console.log(listaFestejo);

//metodo join
console.log(listaFestejo.join(' *** '));

//diapo 21 - metodo concat
const perros   = ["Puppy", "Ronnie"]
const gatos = ["Mishit", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)

//metodo slice
const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']
console.log(nombres);
console.log(masculinos);

let aBuscar = prompt('Ingresa el nombre del alumno');
//console.log(nombres.indexOf(aBuscar));

if(nombres.indexOf(aBuscar) == -1){
    alert(aBuscar +' no se encuentra inscrito aun');
    let respuesta = prompt('Desea inscribir a '+aBuscar+' ? (s-si  n-no)');
    if(respuesta.toLowerCase() == 's'){
        nombres.push(aBuscar);
    }
}else{
    alert(aBuscar +' ya se encuentra inscripto');
}

//metodo includes
console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false

//metodo reverse
nombres.reverse()
console.log( nombres ); 

//arrays de objetos

//tareas es un array de objetos literales
const tareas = [
    {
        id:1,
        nombre:'Estudiar JS'
    },
    {
        id:2,
        nombre:'Ir al supermercado'
    },
    {
        id:3,
        nombre:'Ir al gym'
    }
];
console.log(tareas);
console.log(tareas[1]);

for (const tarea of tareas){
    console.log(tarea.id+' '+tarea.nombre);
}

//creamos la class Tarea para convertir esos literales en objetos de la class Tarea y asi aprovechar el uso de métodos, etc.
class Tarea{
    constructor(objLiteralTarea){
        this.id = objLiteralTarea.id;
        this.nombre = objLiteralTarea.nombre;
        this.realizada = false;
    }
    //metodo para marcar que la tarea se realizo
    completarTarea(){
        this.realizada = true;
    }
}

//creo una nueva lista vacía y la cargo con objetos de la class Tarea 
//estos objetos tendrán casi las mismas propiedades de los literales pero le agregamos la prop 'realizada'
const listaTareas=[];
//uso el for..of para hacer la conversion 
for(const tarea of tareas){
    listaTareas.push(new Tarea(tarea));//{id:1,nombre:'Estudiar JS'}
}

console.log(listaTareas);

//marco la tarea en la posicion 2 de la nueva lista como realizada!
listaTareas[2].completarTarea();
console.log(listaTareas);











