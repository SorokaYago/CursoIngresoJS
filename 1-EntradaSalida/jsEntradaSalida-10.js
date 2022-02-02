/*******************
518732 Soroka Yago Div B ejercicio 10
********************/
/* discount */
function mostrarAumento() {
	var input
	var percentage
	var output

	input = txtIdImporte.value;
	input = parseInt(input);
	percentage = input * 0.25;

	output = input - percentage;
	txtIdResultado.value = output;

	/*
	var importe;
	var porcentaje;
	var totalConDescuento;
	//eficiencia y eficacia
	 
	importe = txtIdNumeroUno.value;

	//porcentaje = una parte de un total. eg un porcentaje de un sueldo, etc

	porcentaje = importe * 0.25; 

	//2da forma

	porcentaje = importe * 25/100;

	totalConDescuento = importe + porcentaje;
	
	//3ra forma

	totalConDescuento = importe + (importe *0.25);

	//4ta forma

	totalConDescuento = importe * 1.25;

	//5ta forma

	totalConDescuento = importe / 0.75;


	console.log(totalConDescuento);
	*/
}
