let nombreUsuario = prompt('Ingresa tu nombre');

while((nombreUsuario == '') || (nombreUsuario == ' ') ){
    alert('Nombre invalido 😫');
    nombreUsuario = prompt('Ingresa tu nombre');
}


alert('Bienvenido/a '+nombreUsuario);

let mensaje = prompt('Deseas comprar un producto ? (s-si)');
//creo una variable global para calcular el total de la compra
let total = 0;

//Ciclo para que el usuario compre o siga comprando
while(mensaje.toLowerCase() == 's'){
    let producto = prompt('1 - Teclado gamer Logitech $6000\n2 - Mouse Wireless Genius $3900\n3 - Monitor curvo LG $40000');
    //condicional switch para evaluar el producto
    switch(producto){
        case '1':
            alert('Agregaste Teclado gamer Logitech $6000 a tu carro 🛒');
            incrementarTotal(6000);
            break;
        case '2':
            alert('Agregaste Mouse Wireless Genius $3900 a tu carro 🛒');
            incrementarTotal(3900);
            break;
        case '3':
            alert('Agregaste Monitor curvo LG $40000 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }

    mensaje = prompt('Deseas comprar otro producto ? (s-si)');
}

alert('Monto total de su compra $'+total);

//uso una funcion para calcular el total de la compra
function incrementarTotal(precio){
    total = total + precio;
    alert('Subtotal hasta el momento $'+total);
}

