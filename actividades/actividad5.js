//!Repaso de clase 5 Objeto 
// 
//!Declaración de un Objeto literal
// 
// const escuderia1 = {
  // marca: "Mercedes",
  // velPunta: "245Km",
  // pilotos: {
    // piloto1: "Hamilton",
    // piloto2: "Russell",
  // },
  // colores: {
    // colorPrimario:"Plata",
    // colorSecundario:"Negro",
    // colorTerciario:"Verde Menta",
  // }
// }
// const escuderia2 = {
//  marca: "Red Bull",
//  velPunta: "260Km",
//  pilotos: {
//    piloto1: "Verstappen",
//    piloto2: "Perez",
//  }
//  colores:{
//    colorPrimario:"Azul Marino",
//    colorSecundario:"Rojo",
//    colorTerciario:"Amarillo",
//  }
// }
// 
//*Llamado de un Objeto literal 
// console.log(escuderia1);//*llamando el objeto
// console.log(escuderia2.colores);//*llamando la propiedad colores

//! Segunda forma Constructora = se usa un constructor/molde para los objetos
//*Primera letra con Mayúsculas para diferenciar de otra herramienta

let carreras = 18;

function Escuderia(marca, velPunta, color1, color2, pilotos, puntos){
  (this.marca = marca),
  (this.velPunta = velPunta),
  (this.color1 = color1),
  (this.color2 = color2),
  (this.pilotos = pilotos),
  (this.puntos = puntos),
  //*función dentro de objeto es método
  (this.presentar = function() {
    console.log(
      `Hola a todos somos la escuderia ${this.marca}, llevamos en el campeonato ${carreras} carreras y tenemos ${this.puntos} puntos, nuestra escudería utiliza los colores ${this.color1} con ${color2} y nuestros pilotos son ${this.pilotos} que conducen nuestros monoplazas que alcanzan una velocidad punta de ${this.velPunta}.`
    );
  })
}
//*Construcción del Objeto
//*Console objeto
const Ferrari = new Escuderia("Ferrari", "263Kmh", "Rojo","negro", "Leclerc y Sainz",410);
const Mercedes = new Escuderia("mercedes", "250Kmh", "plata","negro", "Hamilton y Russel", 387);
console.log(Mercedes);
//*Utilización de un método para un Objeto
Mercedes.presentar();
Ferrari.presentar();
