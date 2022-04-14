function mostrar() {
	//tomo la edad
	var edad = document.getElementById('txtIdEdad').value;
	var mensaje = "usted es mayor de edad";

	if (edad > 17) {
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN