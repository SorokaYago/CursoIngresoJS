/*
 ============================================================================
 Name        : prueba1.c
 Author      : sorokaYago
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

#define MENSAJE "hola mundo it's showtime lmao\n"
int main(void) {

	//ARRABCA El programa
	setbuf (stdout, NULL);
	printf(MENSAJE);

	int recta;
	int valor1 = 27;
	float pi = 3.14;
	char letra = 'C';
	int numero1Usuario;
	int numero2Usuario;
	int resultadoSuma;
	int resultadoMultiplicacion;
	int resultadoDivision;
	recta = 28;

	printf("el valor de pi es: %f\n", pi);
	printf("la recta tiene %d metros\n", recta);
	printf("precio: %d pesos\n", valor1);
	printf("letra: %c\n", letra);
	printf("ingrese primer numero: \n");
	scanf("%d", &numero1Usuario);
	printf("ingrese el segundo numero: \n");
	scanf("%d", &numero2Usuario);
	printf("tu primer numero es: %d y tu segundo numero es: %d\n", numero1Usuario, numero2Usuario);
	resultadoSuma = numero1Usuario + numero2Usuario;
	printf("%d + %d es %d\n", numero1Usuario, numero2Usuario, resultadoSuma);
	resultadoMultiplicacion = numero1Usuario * numero2Usuario;
	printf("%d multiplicado %d es igual a: %d", numero1Usuario, numero2Usuario, resultadoMultiplicacion);
	resultadoDivision = numero1Usuario / numero2Usuario;
	printf("");


	/*int numero1;
	int numero2;
	int resultado;

	printf("ingrese 1er numero: \n");
	scanf("%d", &numero1);
	printf("ingrese 2do numero: \n");
	scanf("%d", &numero2);
	resultado = numero1 + numero2;
	printf("la suma entre %d y %d da como resultado %d", numero1, numero2, resultado);
	*/

	return EXIT_SUCCESS;
}
