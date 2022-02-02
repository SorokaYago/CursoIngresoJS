/*******************
518732 Soroka Yago Div B ejercicio 8
********************/
/* modulo/resto: % */
function SacarResto() { 
	var input1; //number1
	var input2; //number2
	var modulo; 

	input1 = txtIdNumeroDividendo.value;
	input1 = parseInt(input1);
	input2 = txtIdNumeroDivisor.value;
	input2 = parseInt(input2);

	modulo = input1;
	modulo %= input2;

	alert("el resto de la division es: " + modulo);
}

