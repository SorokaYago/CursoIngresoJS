/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
/*******************
Soroka Yago Div B
********************/
function mostrar() {
	var userInput = prompt("ingrese su sexo siendo: 'f' (minuscula) para femenino o: 'm' (minuscula) para masculino", "femenino");
	var msg = "su sexo es : ";
	var genre;

	while (userInput != "f" && userInput != "m") {
		userInput = prompt("debe ingresar un sexo valido, solo 'f' o 'm'", "masculino");
		while (userInput == "femenino") {
			userInput = prompt("[EMANUEL]: hola BONITA, solo la 'f' tenes qu eponer, no la palabra entera, gracias :* espero que estes teniendo un hermoso dia, por favor mandeme whatsapp: 1150586440, si tiene hijos mejor", "f");
			while (userInput == "masculino") {
				userInput = prompt("capo vos sos o te haces? tenes que ingresar 'm', NO la palabra entera", "femenino");
			}
		}
		while (userInput == "masculino") {
			userInput = prompt("capo, tenes que ingresar 'm', NO la palabra entera", "masculino");
			while (userInput == "femenino") {
				userInput = prompt("[EMANUEL]: hola BONITA, solo la 'f' tenes qu eponer, no la palabra entera, gracias :* espero que estes teniendo un hermoso dia, por favor mandeme whatsapp: 1150586440, si tiene hijos mejor", "f");
			}			
		}

	}

	if (userInput == "m") {
		genre = "asculino... no avivemos giles";
	} else if (userInput == "f") {
		genre = "emenino, que le vaya bien!! paseme su whtsapp por favor!";
	}

	document.getElementById("txtIdSexo").value = msg + userInput + genre;





	/* 
	var userInput;
	
	userInput = prompt("ingrese f para femenino o m para masculino", "a");
	while (userInput != "f" && userInput != "m") {
		userInput = prompt ("lo que ha ingresado es incorrecto", "b");
	}
	document.getElementById('txtIdSexo').value = userInput 
	*/
}//FIN DE LA FUNCIÓN