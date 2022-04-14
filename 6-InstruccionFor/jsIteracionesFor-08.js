/*******************
Apellido: Soroka 
Nombre: Yago 
#: 518732
Division: B
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
********************/
function mostrar(){
	var contadorDivisores = 0;
	var numero;
	
	numero = parseInt(prompt("ingrese un numero", "50"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("NO ES UN NUMERO, ingrese un numero por favor"));
	}
	for (i = 2; i < numero; i++) {
		if (numero % 1 == 0) {
			contadorDivisores++;
		}
	}

	if (contadorDivisores != 0 || numero <= 1) {
		alert (numero + " no es un numero primo");
	} else {
		alert (numero + " SI es primo");
	}
}//FIN DE LA FUNCIÓN