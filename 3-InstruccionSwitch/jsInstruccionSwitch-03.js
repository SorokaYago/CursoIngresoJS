/*************
Soroka Yago Div B
**************/
function mostrar() {
var months;
  months= document.getElementById("txtIdMes").value;

	switch (months) {
		case "Febrero":
			alert("este mes no tiene mas de 29 dias");
			break;
		case "TE ADORO":
				alert("CAMILITA TE AMO MUCHOOOOOOOOOOOOOOOO");
				break;
		default:
			alert("Este mes tiene 30 o más días");
	}

		//tomo el mes Enero, marzo, mayo, julio, agosto, octubre y diciembre tienen 31 días.
		/* var months = document.getElementById('txtIdMes').value;
	
		switch (months) {
			case 'Febrero':
				alert("El mes: " + months + " no tiene mas de 29 dias.");
				break;
	
			default:
				alert("El mes: " + months + " tiene 30 o mas dias."); */
		
}//FIN DE LA FUNCIÓN