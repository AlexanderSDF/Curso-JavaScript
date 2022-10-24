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
			alert(`Su genero seleccionado es ${categorias[0]}, ahora puede elegir entre:
            1. ${rpg[0]}
            2. ${rpg[1]}
            3. No me gusta ninguno.`);
			break;
		case "2":
			alert(`Su genero seleccionado es ${categorias[1]}, ahora puede elegir entre:
			1. ${shooter[0]}
            2. ${shooter[1]}
			3. ${shooter[2]}
            4. No me gusta ninguno.`);
			break;
		case "3":
			alert(`Su genero seleccionado es ${categorias[2]}, ahora puede elegir entre:
			1. ${simulacion[0]}
			2. ${simulacion[1]}
			3. No me gusta ninguno.`);
			break;
		case "4":
			alert(`Su genero seleccionado es ${categorias[3]}, ahora puede elegir entre:
			1. ${carrera[0]}
			2. ${carrera[1]}
			3. ${carrera[2]}
			4. No me gusta ninguno.`);
			break;
		case "5":
			alert(`Su genero seleccionado es ${categorias[4]}, ahora puede elegir entre:
			1. ${deportes[0]}
			2. ${deportes[1]}
			3. ${deportes[2]}
			4. No me gusta ninguno.`);
			break;
		case "6":
			alert(`Su genero seleccionado es ${categorias[5]}, ahora puede elegir entre:
			1. ${estrategia[0]}
			2. ${estrategia[1]}
			3. ${estrategia[2]}
			4. No me gusta ninguno.`);
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
