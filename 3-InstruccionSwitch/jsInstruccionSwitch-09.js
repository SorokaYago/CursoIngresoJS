/*************
Soroka Yago Div B
**************/
function mostrar() {
	var season = document.getElementById('txtIdEstacion').value;
	var placeToGo = document.getElementById('txtIdDestino').value;
	var basePrice = 15000; 
	var grandTotal;

	switch (season) {
		case "Invierno":
			switch(placeToGo){
				case "Bariloche":
					grandTotal = basePrice * 1.2;
				break;

				case"Mar del plata":
				grandTotal = basePrice * 0.8;
				break;

				default:
					grandTotal = basePrice * 0.9;
			}
			break;

		case "Verano":
			switch (placeToGo){
				case "Bariloche":
					grandTotal = basePrice * 0.8;
					break;
				case "Mar del plata":
					grandTotal = basePrice * 1.2;
				break;

				default:
					grandTotal = basePrice * 1.1;
			}
			break;

		default:
			if (placeToGo == "Cordoba"){
				grandTotal = basePrice;	
			}
			else {
				grandTotal = basePrice * 1.1;
			}
	} alert("El precio por ir a " + placeToGo + " en " + season + " es de: $" + grandTotal);
}//FIN DE LA FUNCIÓN