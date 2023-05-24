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
//let nuevoElemento = prompt("Ingrese un nuevo elemento a la lista de compras: ");
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