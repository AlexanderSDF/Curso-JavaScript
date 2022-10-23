//CLASE N°7 
//Funciones de orden superior: funciones que pueden recibir otras functions como parámteros o retornar otras functions

// //retornar functions: 

// function mayorQue(n){
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)
// // (m) => m > n es lo que MayorQueDiez pero con (m) => m > 10
// let mayorQueVeintiCinco = mayorQue(25)
// // (m) => m > n es lo que MayorQueVeintiCinco pero con (m) => m > 25
// console.log(mayorQueDiez)
// console.log(mayorQueDiez(15))
// //INvocamos con parámetro (15) => 15 > 10
// //Devuelve true

// console.log(mayorQueVeintiCinco(15))
// //INvocamos con parámetro (15) => 15 > 25
// //Devuelve false

// console.log(mayorQueDiez(4))
// //INvocamos con parámetro (4) => 4 > 10
// //CUatro es mayor que diez? NO, me devuelve false
// console.log(mayorQueVeintiCinco(150))
// //INvocamos con parámetro (150) => 150 > 25
// //TRUE

// //FUNCTION QUE RECIBE UNA FUNCTION
// const nums = [1,3,5,7,9, 15]
// function porCadaUno(array, funcion){
//     for(let elemento of array){
//         funcion(elemento)
//     }
// }
// //INVOCO FUNCTION QUE RECIBE FUNCTION
// // porCadaUno(nums, console.log)
// // porCadaUno(nums, alert)

//class constructora
class Libro {
    constructor(id, autor, titulo, precio){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio

    }
    //métodos
    mostrarData(){
        console.log(`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio} MËTODO`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1,"Jorge Luis Borges","Aleph", 900)

const libro2 = new Libro(2,"Gabriel García Marquez","Cien años de Soledad", 4500)

const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800)

const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400)

const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200)

const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2000)

//Creamos nuestro array de objetos
//Formas de cargar array
//forma uno -- directa
const estanteria = [libro1, libro2, libro3, libro4,libro5, libro6]
console.log(estanteria)
//forma dos // con push
const biblioteca = []
biblioteca.push(libro1, libro2)
console.log(biblioteca)

//Función para agregar libros: 
function nuevoLibro(array){
    let autorIngresado = prompt("Ingrese el nombre del autor")
    let tituloIngresado = prompt("Ingrese el título de la obra")
    let precioIngresado = parseInt(prompt("Ingrese el precio del libro"))
    let libroCreado = new Libro(array.length+1, autorIngresado, tituloIngresado, precioIngresado)
    //Objeto creado lo pusheo al array
    array.push(libroCreado)
    console.log(array)
}
function verCatalogo(array){
    for(let libro of array){
        console.log(`El libro ${libro.titulo} del autor ${libro.autor} vale $${libro.precio}`)
    }
}

function mostrarCatalogoFOREACH(array){
    //FOR EACH === PARA CADA UNO
    //método de array FOR EACH
    array.forEach( 
        //function flecha -- instrucciones que deseamos
        (libro) => {
            //método de function constructora que creamos nosotros/as
            libro.mostrarData()
            //clg equivalente al método de la function constructora
            // console.log(`El libro ${libro.titulo} del autor ${libro.autor} vale $${libro.precio} CON FOR EACH`)
        }
    )
    array.forEach()
}
// mostrarCatalogoFOREACH(estanteria)
// // console.log("SEPARACION")
// // mostrarCatalogoFOREACH(biblioteca)

//FUNCTION PARA APLICAR MÉTODO FIND
function buscarPorTitulo(array){
    let tituloBuscado = prompt("Ingrese el titulo que desea buscar")
    //FIND DEVUELVE EL ELEMENTO ENCONTRADO O UNDEFINED
    let tituloEncontrado = array.find(
        (libro)=> libro.titulo.toLowerCase() == tituloBuscado.toLowerCase()
        )
    if(tituloEncontrado == undefined){
        console.log(`El libro ${tituloBuscado} no se encuenta en catalogo`)
    }else{
        console.log(tituloEncontrado)
    }
}
function buscarPorAutor(array){
    let autorBuscado = prompt("Ingrese el autor que desea buscar")
    let busqueda = array.filter(
        (book)=> book.autor.toLowerCase() == autorBuscado.toLowerCase()
    )
    if(busqueda.length == 0){
        console.log("No se encontró ningún libro de este autor")
    }else{
        console.log(busqueda)
        verCatalogo(busqueda)
    }
}

//Método MAP
function sumarIva(array){
    let estanteriaIVA = array.map(
        (libro)=>{
            return {
                id: libro.id,
                autor: libro.autor,
                titulo: libro.titulo,
                precio : libro.precio *1.21
            }
        }
    )
    console.log("LIBROS CON IVA")
    console.log(estanteriaIVA)
}
// sumarIva(estanteria)

//SORT -- ATENCIÖN METODO QUE DESTRUYE (AFECTA) AL ARRAY ORIGINAL -- en el after lo seguimos
// //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// // https://davidyero.medium.com/ordenar-arreglo-de-objetos-por-propiedad-o-atributo-javascript-56f74fc48906
function ordenarMayorMenor(array){
    //Ordenado de Mayor a menor
    console.log(array.sort((a,b) => (b.precio - a.precio)))
}
function ordenarMenorMayor(array){
    //Ordenado de menor a Mayor
    console.log(array.sort((x,y)=>(x.precio - y.precio)))
}
function ordenarAlfabeticamenteTitulo(array){
    console.log(array.sort((a, b) => {
      if(a.titulo == b.titulo) {
        return 0; 
      }
      if(a.titulo < b.titulo) {
        return -1;
      }
      return 1;
    }))

}
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de mayor a menor
    2 - Ordenar de menor a mayor
    3 - Ordenar alfabeticamente por título`))
    switch(opcion){
        case 1:
            ordenarMayorMenor(array)
        break
        case 2: 
            ordenarMenorMayor(array)
        break
        case 3:
            ordenarAlfabeticamenteTitulo(array)
        break
        default:
            console.log("opción no reconocida")
        break

    }
}
function eliminarLibro(array){
    console.log("A partir del catálogo ingrese el id del libro a eliminar")
    for(let elem of array){
        console.log(`${elem.id} - ${elem.titulo} del autor ${elem.autor}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
    //mapeamos para tener un array con los indices
    let indices = array.map(libro => libro.id)
    console.log(indices)
    //indexOf para buscar ese ID en el array de indices y devolvernos la posición
    let indice = indices.indexOf(idEliminar)
    console.log(indice)
    //con la posición del elemento aplico splice al array de objetos
    array.splice(indice, 1)
    console.log(array)
}


//FUNCTIONS CÓDIGO:
//Function que consulte al usuario opción deseada
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo de libros
                        2 - Agregar un libro a nuestro catálogo 
                        3 - Eliminar un libro de nuestro catálogo 
                        4 - Encontrar por titulo:
                        5 - Buscar libros de un mismo autor:
                        6 - Ordenar libros:
                        0 - Para salir
                        `))
    menu(opcion)
}

//Function que ofrezca un menú
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos, vuelva pronto :D`)
        break    
        case 1:
            verCatalogo(estanteria)
        break 
        case 2: 
            nuevoLibro(estanteria)
           
      	break 
   	    case 3: 
            eliminarLibro(estanteria)
      	break
        case 4: 
        buscarPorTitulo(estanteria)
      	break
        case 5: 
        buscarPorAutor(estanteria)
      	break 
        case 6:
        ordenar(estanteria)
        break
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}
//CÓDIGO:
let salir = false
while(salir!=true){
    preguntarOpcion()
}