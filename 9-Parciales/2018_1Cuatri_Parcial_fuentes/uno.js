/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
function mostrar() {
    var tipo;
    var precio;
    var cantidad;
    var marca;
    var fabricante;
    var acumuladorBarbijo = 0;
    var acumuladorAlcohol = 0;
    var acumuladorJabon = 0;
    var contadorBarbijo = 0;
    var contadorAlcohol = 0;
    var contadorJabon = 0;
    var precioAlcoholBarato = 0;
    var cantidadAlcoholBarato = 0;
    var fabricanteAlcoholBarato;
    var promedioCompra;
    var mayorTipo;
    var flag = 0;
    var mensajeAlcohol = "A) No se compraron alcoholes ";
    var mensajeb;
    var mensajeJabon;
    document.getAnimationsI

    for (i = 0; i < 3; i++) {
        tipo = prompt("ingrese articulo: jabon/barbijo/alcohol/etc", "jabon");


        while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
            tipo = prompt("ERROR, ingrese un articulo valido: jabon/barbijo/alcohol/etc", "jabon");
        }

        precio = parseFloat(prompt("ingrese un precio entre 100 y 300", "120")).toFixed(2);
        while (precio < 100 || precio > 300 || isNaN(precio)) {
            precio = parseFloat(prompt("ERROR, ingrese un precio correcto", "120")).toFixed(2);
        }


        cantidad = parseInt(prompt("ingrese cantidad de unidades, maximo 1000", "1"));
        while (cantidad < 1 || cantidad > 1000) {
            cantidad = parseInt(prompt("ERROR, ingrese cantidad de unidades valida", "3"));
        }

        marca = prompt("ingrese la marca", "Dove");
        fabricante = prompt("ingrese fabricante", "p&g");

        switch (tipo) {
            case "alcohol":
                acumuladorAlcohol += cantidad;
                contadorAlcohol++;
                if (flag == 0 || precio < precioAlcoholBarato) {
                    precioAlcoholBarato = precio;
                    cantidadAlcoholBarato = cantidad;
                    fabricanteAlcoholBarato = fabricante;
                    flag = 1;
                }
                break;
            case "barbijo":
                acumuladorBarbijo += cantidad;
                contadorBarbijo++;
                break;
            case "jabon":
                acumuladorJabon += cantidad;
                contadorJabon++;
                break;
        }
    }

if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
    mayorTipo = "Alcohol";
    promedioCompra = acumuladorAlcohol / contadorAlcohol;
} else if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol) {
    mayorTipo = "barbijo";
    promedioCompra = acumuladorBarbijo / contadorBarbijo;
} else {
    mayorTipo = "jabon";
    promedioCompra = acumuladorJabon / contadorJabon;
}

if (flag == 1) {
    mensajeAlcohol = "A) Fabricante alcohol barato: " + fabricanteAlcoholBarato + 
    "\n Cantidad: " + cantidadAlcoholBarato + 
    "\nPrecio: " + precioAlcoholBarato;
}

mensajeb = "B) Tipo con mas unidades: " + mayorTipo + "\nPromedio: " + promedioCompra;
mensajeJabon = "C) Unidades de jabon: " + acumuladorJabon;

alert(mensajeAlcohol + "\n" + mensajeb + "\n" + mensajeJabon);
}//fin