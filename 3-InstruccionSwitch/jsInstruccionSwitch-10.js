/*************
Soroka Yago Div B
**************/
function mostrar() {
	var placeToGo = document.getElementById('txtIdDestino').value;
	var season = document.getElementById('txtIdEstacion').value;

	switch (season) {
		case "Invierno":
			switch (placeToGo) {
				case "Bariloche":
					alert("se viaja");
					break;
				default:
					alert("no se viaja");
			}
			break;

		case "Verano":
			switch (placeToGo) {
				case "Mar del plata":
				case "Cataratas":
					alert("se viaja");
					break;
				default:
					alert("no se viaja");
			}
			break;

		case "Otoño":
			switch (placeToGo) {
				default:
					alert("se viaja");
			}
			break;

		case "Primavera":
			switch (placeToGo) {
				case "Bariloche":
				alert("no se viaja");
				break;

				default: 
				alert("se viaja");
			}
			break;
	}

}//FIN DE LA FUNCIÓN