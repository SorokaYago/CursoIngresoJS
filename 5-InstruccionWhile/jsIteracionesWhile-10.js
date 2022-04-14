/* Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. // acumulador numero menor a cero
2-Suma de los positivos. //acumulador numero mayor a cero
3-Cantidad de positivos. //contador positivos
4-Cantidad de negativos. // contador negativos
5-Cantidad de ceros. //contadorCero
6-Cantidad de números pares. // 
7-Promedio de positivos. // suma positivos dividido contador positivos
8-Promedios de negativos. //suma negativos dividido contador negativos
9-Diferencia entre positivos y negativos, (positvos-negativos). */
//Apellido: Soroka 
//Nombre: Yago 
//#: 518732
//Division: B
function mostrar() {
	//declarar contadores y variables 
	var numeroUsuario;
	var respuesta;
	var contadorCeros = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorPares = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia;
	do {
		numeroUsuario = parseInt(prompt("ingrese numeros para que los mismos sean sumados", "9"));
		if (numeroUsuario == 0) {
			contadorCeros++;
		} else if (numeroUsuario < 0) {
			contadorNegativos++;
			acumuladorNegativos += numeroUsuario;
		} else if (numeroUsuario > 0) {
			contadorPositivos++;
			acumuladorPositivos += numeroUsuario;
		}
		if (numeroUsuario % 2 == 0) {
			contadorPares++;
		}
		respuesta = prompt("quiere continuar ?", "si")
	} while (respuesta == "si");
	if (contadorPositivos > 0) {
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos < 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;
	msg = "1) Suma de los negativos es: " + acumuladorNegativos + "<br>";
	msg += "2) Suma de los positivos es: " + acumuladorPositivos + "<br>";
	msg += "3) Cantidad de positivos es: " + contadorPositivos + "<br>"; //contadorPositivos
	msg += "4) Cantidad de negativos es: " + contadorNegativos + "<br>"; //contadorNegativos
	msg += "5) Cantidad de ceros es: " + contadorCeros + "<br>"; //contadorCero
	msg += "6) Cantidad de números pares es: " + "<br>";
	msg += "7) Promedio de positivos es: " + promedioPositivos + "<br>";
	msg += "8) Promedios de negativos es: " + promedioNegativos + "<br>";
	msg += "9) Diferencia entre positivos y negativos, (positvos-negativos) es: " + "<br>";
	document.write(msg);
}//FIN DE LA FUNCIÓN