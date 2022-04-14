/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
/*******************
Soroka Yago Div B
********************/
function mostrar() {
	var userInput;
	var positivos = 0; //suma de los numeros positivos acumulados del userInput
	var negativos = 1;
	var respuesta;
	var flag = 0;

	do {
		userInput = parseInt(prompt("ingrese numeros para continuar", "1"));
		if (userInput >= 0) {
			positivos = userInput + positivos;
		} else {
			flag = 1;
			negativos = userInput * negativos;
		}
		respuesta = prompt("desea continuar?", 's');
	} while (respuesta == 's');

	if (flag == 0) {
		negativos = 0;
	}
	document.getElementById("txtIdProducto").value = negativos;
	document.getElementById("txtIdSuma").value = positivos;

	/* 	do {
			positivos = userInput + positivos;
		} while (userInput >= 0);
		do {
			negativos = userInput * negativos;
		} while (userInput < 0);
	
	 */	/*	 
		   do {
			   contadorNumPositivo++;
		   } while (userInput > -1);
   	
		   do {
			   contadorNumNegativo++;
		   }
		   while (userInput < 0);
	   */

	//	sumaPositivos = acumulador +* ;
	//	negativos = contadorNumPositivo * ;

/* 
	var i = 0;
	var accumulator = 0;
	var average;
	var userInput;
	var multiplicarNegativos = 1;
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


	/* var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos; */

}//FIN DE LA FUNCIÓN