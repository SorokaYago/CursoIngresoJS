/*************
Soroka Yago Div B
**************/
function mostrar()
{
	var placeToGo = document.getElementById('txtIdDestino').value;

	switch(placeToGo) {
		case "Bariloche":
			alert(placeToGo + " queda en el Oeste.");
			break;

			case "Cataratas":
			case "Mar del plata":
				alert(placeToGo + " queda en el este.");
				break;

			case "Ushuaia":
			alert(placeToGo + " queda en el Sur.");
			break;
	}
}//FIN DE LA FUNCIÓN