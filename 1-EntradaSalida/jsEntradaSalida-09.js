/*******************
518732 Soroka Yago Div B ejercicio 9
********************/
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	var input
	var percentage 
	var output

	percentage = 1.1;
	input = txtIdSueldo.value; 
	input = parseInt(input);

	output = input * percentage;
	txtIdResultado.value = output

	/*
	1era forma
	porcentaje = importe * 0.1; 

	2da forma
	porcentaje = importe * 10/100;
	totalConAumento = importe + porcentaje;
	
	3ra forma
	totalConAumento = importe + (importe *0.1);

	4ta forma
	totalConAumento = importe * 1.1;

	console.log(totalConAumento);
	 */
}

