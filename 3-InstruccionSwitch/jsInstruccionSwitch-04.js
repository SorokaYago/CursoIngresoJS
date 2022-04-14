/*************
Soroka Yago Div B
**************/
function mostrar() {
	var months = document.getElementById('txtIdMes').value;

	switch (months) {
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
			alert("El mes: " + months + " tiene 31 dias.");
			break;

		case 'Febrero':
			alert("El mes: " + months + " tiene 28 dias.");
			break;

		default:
			alert("El mes: " + months + " tiene 30 dias.");
	}


}//FIN DE LA FUNCIÓN