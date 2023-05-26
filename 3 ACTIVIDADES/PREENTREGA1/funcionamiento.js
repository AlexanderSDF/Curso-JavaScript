let nombreUsuario = prompt("Ingrese su nombre");
console.log("Usuario: "+nombreUsuario);
//ciclo para definir si es un nombre válido
while ((nombreUsuario == "")||(nombreUsuario == " ")){
    alert("Nombre invalido");
    nombreUsuario = prompt("Ingrese su nombre");
} 
alert("Bienvenido/a " + nombreUsuario);

let mensaje = prompt("Deseas comprar un producto? \n S.Si N.No");
//variable para guardar el total de la compra
let total = 0;

//condicional evaluar si el usuario quiere seguir comprando un producto
while (mensaje.toLocaleLowerCase() == "s"){
    let producto = prompt(`Que producto desea comprar?\n 1 - Teclado HyperX $ 23000\n2 - Mouse Logitech G502 $ 35000\n3 - Teclado Razer $ 40000`);
    //condicional switch para evaluar el producto
    switch (producto){
            case "1":
                alert("Agregaste Teclado HyperX $ 23000 a tu carrito");
                incrementarTotal(23000);
                break;
            case "2":
                alert("Agregaste Mouse Logitech G502 $ 35000 a tu carrito");
                incrementarTotal(35000);
                break;
            case "3":
                alert("Agregaste Teclado Razer $ 40000 a tu carrito");
                incrementarTotal(40000);
                break;
            default:
                alert("Producto invalido");
                break;
        }

    mensaje = prompt(`Deseas comprar un producto? \n S.Si N.No`);
}

//mensaje de precio total de la compra
alert("El total de su compra es: $ " + total);

//función para incrementar el total 
function incrementarTotal(precio){
    total = total + precio;
    alert("El subtotal de su compra es es: $ " + total);
}