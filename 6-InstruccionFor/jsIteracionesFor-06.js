/*******************
Apellido: Soroka 
Nombre: Yago 
#: 518732
Division: B
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
********************/
function mostrar(){
	var numeroUsuario;
	var contadorPares = 0;

	numeroUsuario = prompt("ingrese un numero para que se muestren los pares y la cantidad que hay desde el 1 hasta el numero que eligio", "10");

	for (i=1; i <= numeroUsuario; i++) {

		if (i % 2 == 0) {
			contadorPares++;
			console.log(i);
		}
	}
	msg = "Los numeros pares desde el 1 hasta el numero que usted ingreso son: " + i + "\n";
	msg += "La cantidad de numeros pares encontrados es de: " + contadorPares;
	console.log(msg);
}//FIN DE LA FUNCIÓN