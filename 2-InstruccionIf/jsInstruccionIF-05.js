function mostrar(){
	//tomo la edad  
	var edad = document.getElementById('txtIdEdad').value;

	if (edad < 13 || edad > 17) {
		alert("NO ES ADOLESCENTE");
	}
}//FIN DE LA FUNCIÓN