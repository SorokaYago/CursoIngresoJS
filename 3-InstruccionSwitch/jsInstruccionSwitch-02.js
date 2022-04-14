/*
Soroka Yago Div B
*/
function mostrar() {
	//tomo el mes
	var months = document.getElementById('txtIdMes').value;

	switch (months){
		case 'Enero':
			case 'Febrero':
				case 'Marzo':
		alert("Es " + months + " Falta para el invierno.");
		break;
		case 'Junio':
			case 'Julio':
				case 'Agosto':
		alert("Es " + months + " Abrigate que hace frio.");
		break;
		case 'Noviembre':
			case 'Diciembre':
				alert ("es "+ months + " Ya pasamos el frio, ahora calor!!!.");
				break;
		default:
		alert("No pasa nada en " + months);
	}
}//FIN DE LA FUNCIÓN