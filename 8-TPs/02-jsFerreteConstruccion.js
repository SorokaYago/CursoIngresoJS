/*******************
518732 Soroka Yago Div B ejercicio 7
********************/
function Rectangulo() {
    var input1;
    var input2;
    var periodo;
    var alambre;

    input1 = txtIdLargo.value;
    input1 = parseFloat(input1);
    input2 = txtIdAncho.value;
    input2 = parseFloat(input2);

    periodo = (input1 + input2) * 2;
    alambre = periodo * 3;

    alert("debe comprar: " + alambre + " metros de alambre.");
}
function Circulo() {
    var perimetro;
    var radio;
    var alambre;

    radio = txtIdRadio.value;
    radio = parseFloat(radio);

    perimetro = 2 * Math.PI * radio;
    alambre = perimetro *3
    alert("debe comprar " + alambre + " metros de alambre para la zona circular.")

}
function Materiales() {
    var input1;
    var input2;
    var area;
    var cemento;
    var cal;

    input1 = txtIdLargo.value;
    input1 = parseFloat(input1);
    input2 = txtIdAncho.value;
    input2 = parseFloat(input2);

    area = input1 * input2;

    cemento = area * 2;
    cal = area * 3;

    alert('para un contrapiso de ' + area + ' metros cuadrados necesito comprar '+ cemento + ' bolsas de cemento y ' + cal + ' bolsas de cal.');
}