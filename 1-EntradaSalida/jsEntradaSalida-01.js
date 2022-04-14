/*******************
Apellido: Soroka 
Nombre: Yago 
#: 518732
Division: B

Ejercicio 3

UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el 
mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), el 
precio por asiento es 1500 pesos, informar:
A) La cantidad total asientos ocupados
Dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento
Según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento
B) La recaudación total del vuelo

********************/
function mostrar() {

	var cantidadKilometros;
	var nombre;
	var edad;
	var cantidadAsientos;
	var respuesta = 's';
	var precioVuelo;
	var precioPorAsiento = 1500;

	while (respuesta = 's') {
		nombre = prompt("ingrese su nombre", "JUan");

		edad = parseInt(prompt("ingrese su edad", "18"));
		while (edad < 13 && edad > 35) {
			edad = parseInt(prompt("error,ingrese su edad", "25"));
		}

		cantidadAsientos = parseInt(prompt("ingrese cantidad de asientos a reservar"));
		while (cantidadAsientos < 1 && cantidadAsientos > 5) {
			cantidadAsientos = parseInt(prompt("ERROR, ingrese cantidad de asientos a reservar"));
		}
		
		
		cantidadKilometros = parseInt(prompt("ingrese cantidad de kilometros a reservar", "2"));
		while (cantidadKilometros < 3000 || cantidadKilometros > 18000) {
			cantidadKilometros = parseInt(prompt("ERROR, ingrese cantidad de kilometros a reservar"));
		}
		
		destino = prompt ("ingrese destino", "italia");
		while (destino != "cancun" && destino != "rio de janeiro" && destino != "japon" && destino != "italia") {
			destino = prompt ("ERROR, ingrese destino valido", "japon");
			
		}

		sumaAsientos = sumaAsientos + cantidadAsientos;
		precioPasajeros = sumaAsientos * precioPorAsiento;


		respuesta = prompt ("desea seguir ingresando vuelos?", 's')
	}

	switch (destino) {
		case "japon":
			precioVuelo = precioVuelo * 1.40;
			break;
		case "rio de janeiro":
			precioVuelo = precioVuelo * 0.90;
			break;
		case "italia":
			precioVuelo = precioVuelo * 1.25;
			break;
		case "cancun":
			precioVuelo = precioVuelo * 0.95;
			break;
	}

	msg = "la cantidad de asientos ocupados es: " + sumaAsientos;
	msg += " "

	document.write (msg);
}