/*****************
Soroka Yago Div B
 *****************/
function CalcularPrecio() {
    var userInput = parseInt(document.getElementById('txtIdCantidad').value);
    var lampsPrice = 35;
    var lampsBrand = document.getElementById('Marca').value;
    var grandTotal = parseFloat (grandTotal);
    var rawPrice = parseInt(lampsPrice);;
    var tax;
    var msg;

    switch (userInput) {
        case 5:
            switch (lampsBrand) {
                case "ArgentinaLuz":
                    grandTotal = ((userInput * lampsPrice) * 0.6); //b
                    break;
                default:
                    grandTotal = ((userInput * lampsPrice) * 0.7); //b
            }
            break;

        case 4:
            switch (lampsBrand) {
                case "ArgentinaLuz":
                    grandTotal = ((userInput * lampsPrice) * 0.75); //c
                    break;
                case "FelipeLamparas":
                    grandTotal = ((userInput * lampsPrice) * 0.75); //c
                    break;
                default:
                    grandTotal = ((userInput * lampsPrice) * 0.8); //c
            }
            break;

        case 3:
            switch (lampsBrand) {
                case "ArgentinaLuz":
                    grandTotal = ((userInput * lampsPrice) * 0.85); //d
                    break;
                case "FelipeLamparas":
                    grandTotal = ((userInput * lampsPrice) * 0.9); //d
                    break;
                default:
                    /* grandTotal = ((userInput * lampsPrice) * 0.95); //d  */               
            }
            break;

        case 1:
        case 2:
            grandTotal = userInput * lampsPrice; // [0, 1, 2] ejercicio A
            break;
        default:
            grandTotal = (userInput * lampsPrice) * 0.5;
    } 

    if (grandTotal > 119) {
        grandTotal = grandTotal * 1.1;
        tax = grandTotal * 0.10;
        tax = tax.toFixed(2);
        rawPrice = grandTotal - (grandTotal * 0.10);
        rawPrice = rawPrice.toFixed(2);
        msg = "valor total CON impuestos: $" + grandTotal;
        msg += "\nValor del impuesto: $" + tax;
        msg += "\nValor de su compra sin los impuestos: $" + rawPrice;
        msg += "\nRecuerde que no debe superar los $120 si no quiere pagar impuestos.";
        alert(msg);
    }
    document.getElementById('txtIdprecioDescuento').value = "el precio es: $" + grandTotal.toFixed(2);



    /*
    if (userInput > 2 && userInput < 6) { //[3, 4, 5,] ejercicio B
        if (userInput == 5) {
            if (lampsBrand == "ArgentinaLuz") {
                grandTotal = ((userInput * lampsBrand) * 0.6); //b
            }
            else if (lampsBrand != "ArgentinaLuz") {
                grandTotal = ((userInput * lampsBrand) * 0.7); //b
            }
        } else if (userInput == 4) { //c
            if (lampsBrand == "ArgentinaLuz" || lampsBrand == "FelipeLamparas") {
                grandTotal = ((userInput * lampsBrand) * 0.75); //c
            }
            else if (lampsBrand != "ArgentinaLuz" || lampsBrand != "FelipeLamparas") {
                grandTotal = ((userInput * lampsBrand) * 0.8); //c
            }
        } else if (userInput == 3) { //d
            if (lampsBrand == "ArgentinaLuz") {
                grandTotal = ((userInput * lampsBrand) * 0.85); //d
            } else if (lampsBrand == "FelipeLamparas") {
                grandTotal = ((userInput * lampsBrand) * 0.9); //d
            } else if (lampsBrand != "FelipeLamparas" || lampsBrand != "ArgentinaLuz") {
                grandTotal = ((userInput * lampsBrand) * 0.95); //d
            }
        }
    } else if (userInput > 5) { //a 
        grandTotal = ((userInput * lampsBrand) * 0.5); // [0, 1, 2] ejercicio A
    } else { 
        grandTotal = userInput * lampsBrand; 
    }
    document.getElementById('txtIdprecioDescuento').value = "el precio es: $" + grandTotal.toFixed(2);
    
    if(grandTotal > 119) {
        grandTotal = grandTotal * 1.1; 
        tax = grandTotal * 0.10;
        tax = tax.toFixed(2);
        rawPrice = grandTotal - (grandTotal * 0.10);
        rawPrice = rawPrice.toFixed(2);
        msg = "\nValor total CON impuestos: $" + grandTotal;
        msg += "\nValor del impuesto: $" + tax;
        msg += "\nValor de su compra sin los impuestos: $" + rawPrice;
        msg += "\nRecuerde que no debe superar los $120 si no quiere pagar impuestos. ";
        document.getElementById('txtIdprecioDescuento').value = msg;
    }
    */

}