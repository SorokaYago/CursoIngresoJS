/*
Soroka Yago Div B
*/
function mostrar()
{
	//tomo el mes
	var month = document.getElementById('txtIdMes').value;

	switch (month) {
		case 'Enero':
			alert("Es " + month + " que comiences bien el año!!!.");
			break;
		case 'Marzo':
			alert("Es " + month + " a clases!!!.");
			break;
		case 'Julio':
			alert("Es " + month + " se vienen las vacaciones!!!.");
			break;
		case 'Diciembre':
			alert("Es " + month + ", felices fiestas!!!.");
			break;
			default:
				alert("En " + month + " no pasa nada"); //anotacion: no hace falta poner break en el default ya que es donde termina la funcion
	}
}//FIN DE LA FUNCIÓN