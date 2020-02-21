function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta;
	var iterador;
	var numero;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var contadorNegativos=0;
	var acumuladorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivos;
	var primedioNegativos;
	var diferenciaPositivosNegativos;
	

		respuesta = prompt("Ingrese la cantidad de numeros a operar");
		iterador = parseInt(respuesta);

	while(iterador == respuesta);{
		numero = prompt("Ingrese un numero")
		numero = parseInt(numero);
	
	
		while(isNaN(numero)){
			numero = prompt("Error! Ingrese un numero: ");

			if(numero == null){
				break;
			}
		}

		if (numero < 0){
			//Punto 1
			acumuladorNegativos += numero;
			contadorNegativos++;

		}else if(numero > 0){
			//Punto
			acumuladorPositivos += numero;
			contadorPositivos++;

		}else{
			//Ceros
			contadorCeros++;
		}

	}




}//FIN DE LA FUNCIÓN