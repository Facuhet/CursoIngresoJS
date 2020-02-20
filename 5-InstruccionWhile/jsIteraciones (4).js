function mostrar()
{

	var contador = 0;	

	while(numero < 0 || numero > 10 || isNaN(numero) ){
		contador++;
	var numero = prompt("ingrese un número entre 0 y 10.");
	
	if (contador == 4){
		break;
	}

	}
	if (contador == 4){
		alert("Alcanzo el maximo de intentos");
	}


}//FIN DE LA FUNCIÓN