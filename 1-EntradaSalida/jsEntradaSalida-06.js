/*******************
Soroka Yago Div B ejercicio 6
********************/
/* sumar */
function sumar() {
	var num1; //number1
	var num2; //number2
	var msg; //message that will show up

	num1 = txtIdNumeroUno.value;
	num1 = parseInt(num1);
	num2 = txtIdNumeroDos.value;
	num2 = parseInt(num2);

	msg = num1;
	msg += num2;

	alert("la respuesta es: " + msg);
}