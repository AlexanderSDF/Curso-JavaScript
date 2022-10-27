
//class constructora
class Libro {
    constructor(id, autor, titulo, precio, imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen

    }
    //métodos
    mostrarData(){
        console.log(`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio} MËTODO`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1,"Jorge Luis Borges","Aleph", 900, "AlephBorges.jpg")

const libro2 = new Libro(2,"Gabriel García Marquez","Cien años de Soledad", 4500, "CienSoledadMarquez.jpg")

const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800, "PaulaAllende.jpg")

const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400, "FiccionesBorges.jpg")

const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200, "AndamiosBenedetti.jpg")

const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2000, "CiudadPerrosVargasLlosa.jpg")

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
    console.log(array.sort((a,b) => (b.precio - a.precio)))
}
// ordenarMayorMenor(estanteria)


//FUNCTIONS CÓDIGO:

//Function que consulte al usuario opción deseada
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo de libros
                        2 - Agregar un libro a nuestro catálogo 
                        3 - Eliminar un libro de nuestro catálogo 
                        4 - Encontrar por titulo:
                        5 - Buscar libros de un mismo autor:
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
            
      	break
        case 4: 
        buscarPorTitulo(estanteria)
      	break
        case 5: 
        buscarPorAutor(estanteria)
      	break 
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}
// //CÓDIGO:
// let salir = false
// while(salir!=true){
//     preguntarOpcion()
// }

//CLASE 8 DOM:

//PRIMER MANERA DE ACCEDER A EL DOM -- getElement
//Recordar importancia del objeto global document
//Acceso con getElementByTagName
let etiquetas = document.getElementsByTagName("h5")
//Mediante tagName me devuelve un htmlCollection
console.log(etiquetas)
for(let nodo of etiquetas){
    nodo.remove()
}

//Acceso con getElementsByClassName por clase
let etiquetaFecha = document.getElementsByClassName("fecha")
console.log(etiquetaFecha)
console.log(etiquetaFecha[0])

//Acceso con ID
let titulo = document.getElementById("titulo")
console.log(titulo)
//NO ME DEVUELVE UN HTML COLLECTION
let jornada = document.getElementById("jornada")
console.log(jornada)

//SEGUNDA FORMA DE ACCEDER AL DOM
//QuerySelector -- sintaxis similar a CSS
//ID
let listaPaises = document.querySelector("#listaPaises")
console.log(listaPaises)
//CLASS -- para acceder a todos los nodos con la class debemos pasarle el All
let paises = document.querySelectorAll(".paises")
console.log(paises)
//TAG
let lis = document.querySelectorAll("li")
console.log(lis)
//querySelectorAll devuelve una lista de nodo y no un HTMLCollection

//MODIFICAR HTML
titulo.innerText = "Bienvenidos a Coder House"
console.log(titulo.innerHTML)

//USO de innerHTML
listaPaises.innerHTML += `<li class="paises">Venezuela</li>`
listaPaises.innerHTML += `<li class="paises">Costa Rica</li>
<li class="paises">Argentina</li>
<p>Fin del listado</p>`

titulo.innerHTML = "Hoy es la clase sobre DOM"

//CREACION DE ELEMENTOS
let nuevoLi = document.createElement("li")
nuevoLi.innerText = "Paraguay" 
nuevoLi.className = "paisNuevo"
//Le decimos agregate dentro de listaPaises
listaPaises.append(nuevoLi)

//eliminar un nodo
titulo.remove()

//PLANTILLAS y comenzar nuestro proyecto en el DOM

//capturo div productos
let productos = document.getElementById("productos")

for(let libro of estanteria){
    let nuevoLibro = document.createElement("div")
    nuevoLibro.innerHTML = `<article id="${libro.id}" class="card">
                                <h3 class="tituloCard">${libro.titulo}</h3>
                                <img src="assets/${libro.imagen}"  alt="${libro.titulo} de ${libro.autor}">
                                <div class="content">
                                    <p class="autorCard">${libro.autor}</p>
                                    <p class="precioCard">Precio: ${libro.precio}</p>
                                    <a href="" target="blank">Agregar al carrito</a>
                                </div>
                            </article>`
    productos.appendChild(nuevoLibro)
}
{/* <article class="card">
        <h3 class="tituloCard">El aleph</h3>
        <img src="assets/AlephBorges.jpg"  alt="">
        <div class="content">
            <p class="autorCard">Jorge Luis Borges</p>
            <p class="precioCard">Precio: 900</p>
            <a href="" target="blank">Agregar al carrito</a>
        </div>
            
    </article>  */}