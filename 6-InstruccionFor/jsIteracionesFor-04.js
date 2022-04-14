/*******************
//Apellido: Soroka 
//Nombre: Yago 
//#: 518732
//Division: B
al presionar el botón repetir hasta que utilizamos 'BREAK'.
********************/
function mostrar(){
	
	for (i=1; i<=10; i++) {
		pregunta = parseInt(prompt("ingrese un numero para continuar: "));
		break;
	}
	alert("el numero que usted ingreso fue: " + pregunta + ". Muchas gracias, aqui termino el bucle de 10 iteraciones, solo con un numero!!!!");


}//FIN DE LA funcion