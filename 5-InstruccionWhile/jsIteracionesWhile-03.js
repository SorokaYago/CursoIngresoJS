/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
//Apellido: Soroka 
//Nombre: Yago 
//#: 518732
//Division: B
function mostrar() {
	var pass = "utn750";
	var userInput = prompt("ingrese una la clave secreta", "there's no time to analyse");

	while (userInput != pass) {
		userInput = prompt("Incorrecto, intente nuevamente.", "123456789maybe?");
		while (userInput == "123456789maybe?") {
			userInput = prompt("es usted gracioso? intente nuevamente.", "nuevamente");
			while (userInput == "nuevamente") {
				userInput = prompt("YA COMETE LA MALDITA NARANJA", "utn750")
			}
		}
	} alert("usted salio del bucle, felicidades.");













	/* var password = "utn750";
	var userInput;

	userInput = prompt("ingrese la clave para continuar", "la clave");
	
	while (userInput != password) {
		
		userInput = prompt ("clave incorrecta", "siga intentando");

	} alert ("estoy fuera del while");
	 */
}//FIN DE LA FUNCIÓN
