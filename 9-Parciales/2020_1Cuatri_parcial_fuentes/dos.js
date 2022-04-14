/*******************
Apellido: Soroka 
Nombre: Yago 
#: 518732
Division: B
INCOMPLETO
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
********************/

function mostrar() {
  var tipo;
  var cantidad;
  var precio;
  var respuesta = 's';
  var cantidadBolsasTotal = 0;
  var precioCal = 0;
  var precioCemento = 0;
  var precioArena = 0;
  var cantidadArena = 0;
  var cantidadCal = 0;
  var cantidadCemento = 0;
  var valorConDescuento = 0;
  var valorTotal = 0;
  var precioTotalSwitch;
  var tipoConMasCantidad;
  var tipoMasCaro;
  //var acumuladorBolsas = 0;

  while (respuesta == 's') {
    tipo = prompt("ingrese productos de construccion", "cal");
    while (tipo != "cal" && tipo != "arena" && tipo != "cemento") {
      tipo = prompt("INCORRECTO, ingrese su tipo de producto nuevamente", "arena");
    }

    cantidad = parseInt(prompt("ingrese cantidad de bolsas", "100"));
    while (cantidad < 1 || isNaN(cantidad)) {
      cantidad = parseInt(prompt("INCORRECTO, ingrese cantidad nuevamente", "200"));
    }

    precio = parseInt(prompt("ingrese el precio por bolsa", "300")).toFixed(2);
    while (precio < 1 || isNaN(precio)) {
      precio = parseFloat(prompt("INCORRECTO, ingrese el precio nuevamente", "200")).toFixed(2);
    }

    switch (tipo) {
      case "arena":
        precioArena = precio + precioArena;
        cantidadArena = cantidad + cantidadArena;
        break;
      case "cal":
        precioCal = precio + precioCal;
        cantidadCal = cantidad + cantidadCal;
        break;
      case "cemento":
        precioCemento = precio + precioCemento;
        cantidadCemento = cantidad + cantidadCemento;
        break;
    }

    //acumuladorBolsas = acumuladorBolsas + cantidad;
    valorBolsas = precio * cantidad;
    valorTotal = valorBolsas + valorTotal;

    respuesta = prompt("desea seguir ingresando datos?", 's');
  }

  cantidadBolsasTotal = cantidadArena + cantidadCal + cantidadCemento;
  precioTotalSwitch = precioArena + precioCal + precioCemento; // esto es lo mismo que valorTotal?

  //B) Valor con descuento
  if (cantidadBolsasTotal > 10 && cantidadBolsasTotal < 31) {
    valorConDescuento = valorTotal * 0.85; // 15%
  } else if (cantidadBolsasTotal > 30) {
    valorConDescuento = valorTotal * 0.75; // 25%
  }

  //C) Tipo con mas cantidad
  if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
    tipoConMasCantidad = "Arena ";
  } else if (cantidadCal >= cantidadArena && cantidadCal > cantidadCemento) {
    tipoConMasCantidad = "Cal ";
  } else {
    tipoConMasCantidad = "Cemento ";
  }

  //E) Tipo mas caro
  if (precioArena > precioCal && precioArena > precioCemento){
    tipoMasCaro = "Arena"
  } else if (precioCal >= precioArena && precioCal > precioCemento) {
    tipoMasCaro = "Cal"
  } else { 
    tipoMasCaro = "Cemento"
  }

  msg = "A) El importe total a pagar, bruto y sin descuento es: $" + valorTotal + "<br>";
  msg += "B) El importe total a pagar con descuento (si corresponde) es: $" + valorConDescuento + "<br>";
  msg += "C) El tipo con mas cantidad es: " + tipoConMasCantidad + "<br>";
  msg += "D) El tipo mas caro es: " + tipoMasCaro + "<br>";

  document.write(msg);

  /* var tipo;
  var cantidadBolsas;
  var precio;
  var precioBolsa;
  var respuesta = "si";
  var precioTotal = 0;

  var cantidadCemento = 0;
  var cantidadCal = 0;
  var cantidadArena = 0;
  var cantidadBolsasTotal;
  var precioDescuento = 0;
  var tipoConMasCantidad;

  while(respuesta == "si") {

    precioBolsa = precio * cantidadBolsas;
    precioTotal += precioBolsa;

    switch(tipo) {
      case "arena":
        precioArena += precioBolsa
        cantidadArena += cantidadBolsas;
        break;
        case "cemento":
          precioCemento += precioBolsa;
          cantidadCemento += cantidadBolsas;
          break;
        case "cal":
          precioCal += precioBolsa;
          cantidadCal += cantidadBolsas;
          break;
    }
    respuesta = prompt ("desea comprar otro? ", "si");
  }
  cantidadBolsasTotal = cantidadArena + cantidadCal + cantidadCemento;
  precioTotal = precioArena + precioCal + precioCemento;

  if (cantidadBolsasTotal > 10 && cantidadBolsasTotal < 30) {
    precioDescuento = precioTotal * 0.85;
  } else if (cantidadBolsasTotal > 30) {
    precioDescuento = precioTotal * 0.75
  }

  if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
    tipoConMasCantidad = "arena";
  } else {
    if(cantidadCal > cantidadArena && cantidadCal > cantidadCemento) {
      tipoConMasCantidad = "cal";
    } else {
      tipoConMasCantidad = "cemento";
    }
  }
  
  document.write ("precio sin descuento " + precioTotal + "<br>");
  document.write ("precio con descuento " + precioDescuento + "<br>");
  document.write ('la cantidad con mas bolsas es: ' + tipoConMasCantidad + "<br>"); */
}