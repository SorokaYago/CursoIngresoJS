function mostrar(){
	//tomo la edad  
	var edad = document.getElementById('txtIdEdad').value;
	var estadoCivil = document.getElementById('estadoCivil').value;
	/* if (edad < 18 && estadoCivil != "Soltero") {
		alert("No hacer nada");
	} else */ if (edad > 17 && estadoCivil == "Soltero") {
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN