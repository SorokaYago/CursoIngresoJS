/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
	var tipoDeProducto;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var repeticion;
	var alcoholMasBarato;  
	var fabricanteAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var bandera;
	repeticion = 0;
	bandera = false;
	
	while( repeticion < 5 ){
		
		tipoDeProducto = prompt("Ingrese el articulo.");
			while(tipoDeProducto != "barbijo" && tipoDeProducto != "jabón" && tipoDeProducto != "alcohol") {

				tipoDeProducto = prompt("Error, Ingrese el articulo."); //en caso de mal ingresado
			}
		precio = prompt("ingrese un precio.");
		precio = parseFloat(precio);
			while(precio < 100 || precio > 301){
				precio = prompt("error ingrese un precio.");
				precio = parseFloat(precio);
			}

		cantidadDeUnidades = prompt("ingrese la cantidad de unidades.");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
			while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000){
				cantidadDeUnidades = prompt("error, ingrese la cantidad de unidades.");
				cantidadDeUnidades = parseInt(cantidadDeUnidades);
			}

		marca = prompt("ingrese la marca.");
		fabricante = prompt("ingrese el fabricante.");
			console.log(bandera);
		if( tipoDeProducto == "alcohol" && bandera == false ){
			
			alcoholMasBarato = precio;
			fabricanteAlcoholMasBarato = fabricante;
			cantidadAlcoholMasBarato = cantidadDeUnidades;
			console.log(cantidadAlcoholMasBarato);
			
			bandera = true
		} else if(tipoDeProducto == "alcohol" && precio < alcoholMasBarato ) {
			alcoholMasBarato = precio;
			fabricanteAlcoholMasBarato = fabricante;
			cantidadAlcoholMasBarato = cantidadDeUnidades;
		}

		
		
		
			

		repeticion++;


		} //A) 



} */

/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
// ***************
// yAGO Soroka
//***************
function mostrar() {
	var tipoDeProducto;
	var precio = parseFloat(precio);
	var cantidadDeUnidades = parseInt(cantidadDeUnidades);
	var marca;
	var fabricante;
	var i = 0;
	var alcoholBarato;
	var flag = false;
	var fabricanteAlcoholMasBarato;
	var cantidadAlcoholMasBarato = 0;
	var cantidadAlcoholTotal = 0;
	var cantidadBarbijoTotal = 0;
	var cantidadJabonTotal = 0;
	var promedio;
	var contadorAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var poductoMasCantidad;


	while (i < 5) {
		tipoDeProducto = prompt("ingrese articulo: jabon/barbijo/alcohol/etc", "alcohol");
		while (tipoDeProducto != "barjibo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol") {
			tipoDeProducto = prompt("error, ingrese un articulo valido: jabon/barbijo/alcohol/etc", "jabon");
		}

		precio = prompt("ingrese un precio", "120");
		while (precio < 100 || precio > 301) {
			precio = prompt("error, ingrese un precio correcto", "210");
		}

		cantidadDeUnidades = prompt("ingrese cantidad de unidades", "200");
		while (cantidadDeUnidades < 1 || cantidadDeUnidades > 1000) {
			cantidadDeUnidades = prompt("error, ingrese cantidad de unidades valida", "100");
		}

		marca = prompt("ingrese la marca", "marca generica");
		fabricante = prompt("ingrese fabricante", "Fabricante generico");

		switch (tipoDeProducto) {
			case "alcohol":
				if (flag == false || precio < alcoholBarato) {
					alcoholBarato = precio;
					fabricanteAlcoholMasBarato = fabricante;
					cantidadAlcoholMasBarato = cantidadDeUnidades;
					flag = true;
				}
				cantidadAlcoholTotal += cantidadDeUnidades;
				contadorAlcohol++;
				break;
			case "barbijo":
				cantidadBarbijoTotal += cantidadDeUnidades;
				contadorBarbijo++;
				break;
			case "jabon":
				cantidadJabonTotal += cantidadDeUnidades;
				contadorJabon++;
				break;
		}
		i++
	}
	document.write("el alcohol mas barato es fabricado por" + fabricanteAlcoholMasBarato + " y la cantidad de unidades disponibles es: " + cantidadAlcoholMasBarato);
	if (cantidadBarbijoTotal < cantidadAlcoholTotal && cantidadBarbijo > cantidadJabonTotal) {
		promedio = cantidadAlcoholTotal / contadorAlcohol;
		productoMasCantidad = "alcohol";
		//document.write("<br> el promedio de  alcoholes es: " + promedio);
	} else if (cantidadBarbijoTotal < cantidadJabonTotal && cantidadAlcoholTotal < cantidadJabonTotal) {
		promedio = cantidadJabonTotal / contadorJabon;
		poductoMasCantidad = "jabon";
		//document.write("<br> el promedio de jabones es: " + promedio);
	} else {
		promedio = cantidadBarbijoTotal / contadorBarbijo;
		poductoMasCantidad = "barbijo";
		//document.write("<br> el promedio de barbijos es: " + promedio);
	}
	document.write("<br> el promedio de " + productoMasCantidad + " es " + promedio);
	document.write("<br> la cantidad de jabones que hay en total es " + cantidadJabonTotal);
}