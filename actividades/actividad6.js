//! ARRAYS
const categorias = ["rpg", "shooter", "simulación", "carrera", "deportes", "estrategia"];
const rpg = ["World of Warcraft", "Elden Ring"];
const shooter = ["Call of Duty", "Battefield", "Counter-Strike"];
const simulacion = ["PC Building Simulator", "Mechanic Simulator"];
const carrera = ["Asseto Corsa", "F1 2022", "GRID"];
const deportes = ["Fifa 23", "NBA 23", "NFL 23"];
const estrategia = ["League of Legends", "Naval Battefield", "War Thunder"];
//console.log(categorias);
//console.log(categorias[3]);

let opcion = parseInt(
	prompt(
	`Ingrese su genero preferido:
    1. ${categorias[0]}
    2. ${categorias[1]}
    3. ${categorias[2]}
    4. ${categorias[3]}
    5. ${categorias[4]}
    6. ${categorias[5]}
    7. Salir.`
	)
);
while (opcion != 7) {
	switch (opcion) {
		case "1":
            do let juego = prompt(`Su genero seleccionado es ${categorias[0]}, ahora puede elegir entre 
            1.${rpg[0]}
            2.${rpg[1]}
            3. No me gusta ninguno`);
            while (juego != 3){
                alert(`Usted selecciono ${rpg[0]} `)
            }
			break;
		case "2":
			alert(`Su genero seleccionado es ${categorias[1]}`);
			break;
		case "3":
			alert(`Su genero seleccionado es ${categorias[2]}`);
			break;
		case "4":
			alert(`Su genero seleccionado es ${categorias[3]}`);
			break;
		case "5":
			alert(`Su genero seleccionado es ${categorias[4]}`);
			break;
		case "6":
			alert(`Su genero seleccionado es ${categorias[5]}`);
			break;
		default:
			alert(`Opción no contemplada.`);
	}
	opcion = prompt(
		`Ingrese su genero preferido:
        1. ${categorias[0]}
        2. ${categorias[1]}
        3. ${categorias[2]}
        4. ${categorias[3]}
        5. ${categorias[4]}
        6. ${categorias[5]}
        7. Salir.`
	);
}
