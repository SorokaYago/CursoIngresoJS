/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
/*******************
Soroka Yago Div B
********************/
function mostrar(){ 
	var userInput = parseInt(prompt("Ingrese un numero entre 0 y 9 inclusive", "7"));

	while (userInput < 0 || userInput > 9) {
		userInput = prompt("no es un numero valido, intente nuevamente: ", "8");
	}
	document.getElementById("txtIdNumero").value = userInput;
	alert("usted ha salido del bucle");

	/* var userInput;
	userInput = parseInt(userInput);

	userInput = prompt("ingrese numero entre el [0 ; 9] inclusive", "10");

	while (userInput < 0 || userInput > 9 || !userInput) {
		
		userInput = prompt ("clave incorrecta", "11");
		
	}
	document.getElementById('txtIdNumero').value = userInput */
	
}//FIN DE LA FUNCIÓN