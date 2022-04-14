/*******************
Apellido: Soroka 
Nombre: Yago 
#: 518732
Division: B
al presionar el botón pedir un número.
mostrar los numeros divisores desde el 1 al número ingresado, y 
mostrar la cantidad de numeros divisores encontrados.
********************/
function mostrar(){
	var contadorDivisores = 0;
	var numero;

	numero = parseInt(prompt("ingrese un numero", "50"));
	for (i = 1; i <= numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
			console.log(i);
		}
	}
	console.log("divisores encontrados: " + contadorDivisores);
}//FIN DE LA FUNCIÓN