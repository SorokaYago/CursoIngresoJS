/*****************
 Soroka Yago Div B
 ******************/
/*Genero el número RANDOM entre 1 y 10 
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar() {
	var randomNumber = Math.floor(Math.random() * 10 + 1);
	var mensaje = "tu nota es un ";

	if (randomNumber > 3 && randomNumber < 9) {
		alert(mensaje + randomNumber + ". Aprobo. ");
	} else if (randomNumber < 4) {
		alert(mensaje + randomNumber + ". Vamos, la proxima se puede. ");
	} else {
		alert(mensaje + randomNumber + ". Excelente. ");
	}

}//FIN DE LA FUNCIÓN