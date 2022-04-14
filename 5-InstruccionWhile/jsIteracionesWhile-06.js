/*******************
Soroka Yago Div B
********************/
function mostrar(){

	var i = 0;
	var suma = 0;
	var quantity = 5;
	var userInput;;

	while (i < quantity){
		
		userInput = parseInt(prompt("ingrese disntos numeros, 5 veces, para que sean sumados", quantity));
		suma = userInput + suma;
		i++ 
	}

	promedio = suma / quantity; 

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;













	
	/* var i = 0;
	var accumulator = 0;
	var average;
	var userInput;
	var maxInput = 5;
	
	
	while(i < maxInput) {
		userInput= prompt("ingrese numeros para que estos sean sumados");
		userInput = parseInt(userInput);
		accumulator = userInput + accumulator;
		i++;
	}
	
	average = accumulator / maxInput;
	document.getElementById('txtIdSuma').value = accumulator;
	document.getElementById('txtIdPromedio').value = average; */
	
}//FIN DE LA FUNCIÓN