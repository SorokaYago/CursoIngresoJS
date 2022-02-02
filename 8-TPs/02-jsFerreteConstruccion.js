/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var input1;
var input2;
var periodo;

input1 = txtIdLargo.value;
input1 = parseInt(input1);
input2 = txtIdAncho.value;
input2 = parseInt(input2);

periodo = input1 * 2 + input2 * 2;

alert("debe comprar: " + periodo + " metros de alambre.");
}
function Circulo () 
{
	
}
function Materiales () 
{
	
}