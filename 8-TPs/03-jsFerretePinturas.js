/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    var centigrados;
    var fahrenheit;
    var mensaje;

    fahrenheit = parseFloat(document.getElementById('txtIdTemperatura').value);
    centigrados = (fahrenheit - 32) * 5 / 9;
    //console.log(centigrados);
    mensaje = fahrenheit + ' grados fahrenheit es igual a ' + centigrados.toFixed(1) + ' grados centigrados';

    alert(mensaje);


}

function CentigradosFahrenheit() {
    var fahrenheit;
    var centigrados;
    var mensaje;

    centigrados = centigrados = parseFloat(document.getElementById('txtIdTemperatura').value);
    fahrenheit = centigrados * 9/5 + 32
    //console.log(fahrenheit);
    mensaje = centigrados + ' grados centigrados es igual a ' + fahrenheit.toFixed(1) + ' grados fahrenheit';

    alert(mensaje);
}