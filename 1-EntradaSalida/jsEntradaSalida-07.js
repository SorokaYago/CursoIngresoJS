/*******************
Soroka Yago Div B ejercicio 7
********************/
/* reckoner */
function sumar() { 
	var input1;
	var input2;
	var addition;

	input1 = txtIdNumeroUno.value;
	input1 = parseInt(input1);
	input2 = txtIdNumeroDos.value;
	input2 = parseInt(input2);

	addition = input1;
	addition += input2;
	alert("the answer is: " + addition);
}

function restar() {
	var subtraction;

	input1 = txtIdNumeroUno.value;
	input1 = parseInt(input1);
	input2 = txtIdNumeroDos.value;
	input2 = parseInt(input2);

	subtraction = input1;
	subtraction -= input2;

	alert("the answer is: " + subtraction);
}

function multiplicar() { 
	var multiplication;

	input1 = txtIdNumeroUno.value;
	input1 = parseInt(input1);
	input2 = txtIdNumeroDos.value;
	input2 = parseInt(input2);

	multiplication = input1;
	multiplication *= input2;

	alert("the answer is: " + multiplication);
}

function dividir() {
	var division;

	input1 = txtIdNumeroUno.value;
	input1 = parseInt(input1);
	input2 = txtIdNumeroDos.value;
	input2 = parseInt(input2);

	division = input1;
	division /= input2;
	
	alert("the answer is: " + division);
}

