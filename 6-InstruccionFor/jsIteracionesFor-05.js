/*******************
//Apellido: Soroka 
//Nombre: Yago 
//#: 518732
//Division: B
********************/
function mostrar(){
	var numeroUsuario;
	var respuesta = "si";
	var acumulador = 0;
	var acumulador2 = 0;
	while (respuesta == "si") {
		numeroUsuario = parseInt(prompt("ingrese numeros para que los mismos sean sumados, si quiere cortar la suma, ingrese '9'"));
		acumulador += numeroUsuario;
		if (numeroUsuario == 9) {
			break;
		}
	acumulador2 += numeroUsuario;
	}
	msg = "La suma de los numeros que usted ingreso es: " + acumulador + "\n";
	msg += "Usted ha salido del bucle al ingresar el numero 9, es decir que el 9 se ha sumado. \n";
	msg += "La suma de los numeros que usted ingreso, sin que se le sume el 9 es: " + acumulador2;

	alert(msg);
}//FIN DE LA FUNCIÓN