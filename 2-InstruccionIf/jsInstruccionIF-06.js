function mostrar() {
	//tomo la edad 
	var edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad > 17 && edad < 65) {
		alert("usted tiene 18 / es mayor de 18");
	} else if (edad > 12 && edad < 17) {
		alert("usted es un adolescente");
	} else if (edad == 17) {
		alert("usted es casi un adolescente");
	} else if (edad == 12) {
		alert("usted es casi un ninio");
	} else if (edad > 64 && edad < 100) {
		alert("anciano");
	} else if(edad > 99 && edad < 111 ){
		alert("como es que usted esta vivo? su viaje ha sido o no en vano?");
	} else if(edad > 110 ) {
		alert("usted ha ingresado una edad incorrecta o es muy viejo, asi que aqui tiene una cancion para que disfrute");
		prompt("https://youtu.be/CYSwtYlapRQ", "https://youtu.be/CYSwtYlapRQ");
	}else {
		alert("usted es un ninio");
	}
}//FIN DE LA FUNCIÓN