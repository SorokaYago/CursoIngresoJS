/*******************
Apellido: Soroka 
Nombre: Yago 
#: 518732
Division: B

Ejercicio 2

Un aficionado a las cartas coleccionables desea organizar su colección, para esto necesita ingresar en un programa:

nombre, 
tipo de carta (validar monstruo, arma, mágica) y su 
cantidad. 

Además deberá Especificar su 

rareza (validar común, rara, legendaria), 
precio (validar entre $250 y $5000). 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:

La cantidad de cartas de cada tipo.

De las cartas raras la que menos precio tiene y su nombre

El valor de la colección entera

Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)

********************/
function mostrar() {
	var nombre;
	var respuesta = 's';
	var tipo;
	var cantidad;
	var rareza;
	var precio;
	var contadorCantidad = 0;
	var contadorArma = 0;
	var contadorMonstruo = 0;
	var contadorMagica = 0;
	var flag = 0;
	var nombreRaras;
	var cartasRaras;
	var suma = 0;

	for (i=0; i<10; i++) {
	caracterer = prompt ("ingrese 5 distintos caracteres. ");
	
	}


	/* while (respuesta == 's') {


		nombre = prompt("ingrese nombre de su carta", "nombre");

		tipo = prompt("ingrese tipo de su carta", "mostruo");
		while (tipo = ! "monstruo" && tipo != "arma" && tipo != "magica") {
			tipo = prompt("ERROR, ingrese tipo de carta valida", "arma");
		}

		if (tipo == "magica") {
			contadorMagica = contadorMagica + 1;
		} else if (tipo == "arma") {
			contadorArma = contadorArma + 1;
		} else if (tipo == "monstruo") {
			contadorMonstruo = contadorMonstruo + 1;
		}

		cantidad = parseInt(prompt("ingrese cantidad", '1'));
		while (cantidad < 1 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("ERROR, ingrese cantidad correcta", '2'));
		}
		contadorCantidad = contadorCantidad + cantidad;

		rareza = prompt("ingrese rareza de su carta", "legendaria");
		while (rareza = ! "comun" && rareza != "rara" && rareza != "legendario") {
			rareza = prompt("ERROR, ingrese rareza de carta valida", "comun");
		}

		precio = parseInt(prompt("ingrese precio", '1'));
		while (precio < 250 && precio > 5000) {
			precio = parseInt(prompt("ERROR, ingrese precio valido entre 250 y 5000", '2'));
		}
		suma = suma + precio


		if (flag == 0) {
			cartasRaras = precio;
			nombreRaras = nombre;
			flag = 1
		}

		if (precio < cartasRaras) {
			cartasRaras = precio;
			nombreRaras = nombre;
		}

		respuesta = prompt("desea seguir ingresando cartas?", 's')
	}

	msg = "cantidad de magicas son: " + contadorMagica + " cantidad cartas monstruo son: " + contadorMonstruo + " cantidad de cartas arma son: " + contadorArma + "<br>";
	msg += "de la carta rara, la que menos precio tiene es: $" + cartasRaras + " y se llama: " + nombreRaras + "<br>";
	msg += "el precio de la coleccion entera es: $" + suma + "<br>";
	msg += "el porcentaje de legendarias es: " + " el porcentaje de rares es: " + " el porcentaje de comunes es: "

 */
	document.write (msg);
}