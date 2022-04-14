/*************
Soroka Yago Div B
**************/
function mostrar() {
	var placeToGo = document.getElementById('txtIdDestino').value;

	switch (placeToGo) {
		case "Bariloche":
		case "Ushuaia":
			alert("en " + placeToGo + " hace frio.");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("en " + placeToGo + " hace calor.");
			break;
	}
}//FIN DE LA FUNCIÓN