/*************
Soroka Yago Div B
**************/
function mostrar() {
	var hour = parseInt(document.getElementById('txtIdHora').value);

	switch (hour) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("es de maniana");
			break;

		default:
			alert("el horario elegido no es de maniana")
	}
}//FIN DE LA FUNCIÓN