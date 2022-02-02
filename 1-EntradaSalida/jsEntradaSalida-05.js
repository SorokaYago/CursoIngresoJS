/*******************
Soroka Yago Div B
********************/
/* concatenate 	*/
function mostrar()
{	
	var name;
	var age;
	var msg; 

	name= txtIdNombre.value;
	age= txtIdEdad.value;
	//msg = "You're called " + name + " & you're " + age + " years old. Thanks for coming by."; 
	msg= "You're called ";
	msg+= name;
	msg+= " & you're ";
	msg+= age;
	msg+= " years old. Thanks for coming by.";

	//name= document.getElementById("txtIdNombre").value; or: name= txtIdNombre.value;
	//age= document.getElementById("txtIdEdad").value; or: age= txtIdEdad.value;

	alert(msg);
}