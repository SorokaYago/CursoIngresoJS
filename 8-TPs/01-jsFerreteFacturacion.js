/*******************
518732 Soroka Yago Div B TP1
********************/
//promedio: sumar los 3 y dividirlos entre ellos
function Sumar() {
    var input1
    var input2; 
    var input3;
    var addition;

    input1 = txtIdPrecioUno.value;
    input1 = parseInt(input1);
    input2 = txtIdPrecioDos.value;
    input2 = parseInt(input2);
    input3 = txtIdPrecioTres.value;
    input3 = parseInt(input3);

    addition = input1 + input2 + input3;

    alert("la suma da: " + addition);
}

function Promedio() {
    var average
    var quantity
    var addition

    input1 = txtIdPrecioUno.value;
    input1 = parseInt(input1);
    input2 = txtIdPrecioDos.value;
    input2 = parseInt(input2);
    input3 = txtIdPrecioTres.value;
    input3 = parseInt(input3);

    addition = input1 + input2 + input3;
    quantity = 3;
    average = addition / quantity;

    alert("el promedio es: " + average.toFixed(2));
}

function PrecioFinal() {
    var input1;
    var input2;
    var input3;
    var addition;
    var vat;
    var grandTotal;
    //entendi que si no se definen variables al principio, las mismas se definen automaticamente al trabajarlas?

    input1 = txtIdPrecioUno.value;
    input1 = parseInt(input1);
    input2 = txtIdPrecioDos.value;
    input2 = parseInt(input2);
    input3 = txtIdPrecioTres.value;
    input3 = parseInt(input3);

    addition = input1 + input2 + input3;
    vat = 1.21;
    grandTotal = addition * vat;

    alert("el precio final, con iva, es: " + grandTotal.toFixed(2));

}