function mostrar(){
	//tomo la edad  
	var edad = document.getElementById('txtIdEdad').value;

	if(edad > 12 && edad < 18) {
	 alert("usted es adolescente");
	} else {
	alert("usted es either mayor a 18 / menor a 13");
	}
}//FIN DE LA FUNCIÓN