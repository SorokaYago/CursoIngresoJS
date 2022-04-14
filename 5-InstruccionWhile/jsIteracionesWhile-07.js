/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
/*******************
Soroka Yago Div B
********************/
function mostrar() {
	var userInput;
	//var respuesta = 's';
	var respuesta;
	var sumaAcumulada = 0;
	var contador = 0;
	
	//while (respuesta == 's')
	do {
		userInput = parseInt(prompt("ingrese un numeros para continuar, los mismos seran sumados", "5"));
		sumaAcumulada = sumaAcumulada + userInput;

		contador++;
		respuesta = prompt("desea continuar?", 's');
	} while (respuesta == 's');

	promedio = sumaAcumulada / contador;

	document.getElementById("txtIdSuma").value = sumaAcumulada;
	document.getElementById("txtIdPromedio").value = promedio;












	/* 
	var i = 0;
	var accumulator = 0;
	var average;
	var userInput;
	var maxInput = 'si';
	
	
	while(maxInput == "si") {
		userInput= prompt("ingrese numeros para que estos sean sumados");
		userInput = parseInt(userInput);
		accumulator = userInput + accumulator;
		i++;
		maxInput = prompt ("quiere continuar? ingrese 'si' o 'no' dependiendo de lo que quiera", "si");
	}
	
	average = accumulator / i;
	document.getElementById('txtIdSuma').value = accumulator;
	document.getElementById('txtIdPromedio').value = average; 
	 */
}//FIN DE LA FUNCIÓN