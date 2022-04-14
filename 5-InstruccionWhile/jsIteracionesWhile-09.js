/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar(){	// declarar variables
var respuesta;
var userInput;
var flag = 0;
//var acumuladorMaxMin; no se donde la uso
var max;
var min; 

//crear bucle
do {
	userInput = parseInt(prompt("ingrese numero", "500")); ///si fue 10	
	
	if (flag==0 || userInput < min) {
		min= userInput; //y aca tambien 10
	} //no me acuerdo porq ue no puse flag aca arriba pero si abajo, debe ser que detecta las dos al mismo tiempo y libera la condicion solo por la de abajo

	if (flag == 0 || userInput > max) {
		max= userInput; // aca le asigna 10
		flag = 1;
	}
	
	respuesta = prompt("desea continuar?", "si");
}	while (respuesta == "si");

//mostrar datos
document.getElementById("txtIdMaximo").value = "el numero maximo es: " + max;
document.getElementById("txtIdMinimo").value = "el numero minimo es: " + min;
	
}//FIN DE LA FUNCIÓN