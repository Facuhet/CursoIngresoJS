function mostrar()
{

	//declarar contadores y variables 
	
	var respuesta = true;
	var numero;
	var contadorPositivos = 0;
	var acumuladorPositivos = 0;
	var contadorNegativos = 0;
	var acumuladorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	
		
	while(respuesta == true)
	{
		numero = prompt("Ingrese un numero")
		numero = parseInt(numero);

		respuesta = confirm("¿Desea ingresar otro numero?");

	
		while(isNaN(numero))
		{
			numero = prompt("Error! Ingrese un numero: ");

			if(numero == null)
			{
				break;
			}
		}

		if (numero < 0)
		{
			//Punto 1
			acumuladorNegativos += numero;
			contadorNegativos++;
			promedioNegativos = acumuladorNegativos/contadorNegativos;


		}
		else if(numero > 0)
		{
			//Punto
			acumuladorPositivos += numero;
			contadorPositivos++;
			promedioPositivos = acumuladorPositivos/contadorPositivos;

				if(numero % 2 == 0)
				{
					contadorPares++;
				}

		}
		else
		{
			//Ceros / Punto 5
			contadorCeros++;
		}
	
			//CuentaPromedioN/P
		
		diferenciaPositivosNegativos = acumuladorPositivos - acumuladorNegativos;

	}
					//Mostrar por document.write()
	document.write("Punto 1 (Suma de negativos) :"+acumuladorNegativos+"</br>");
	document.write("Punto 2 (Suma de Positivos) :"+acumuladorPositivos+"</br>");
	document.write("Punto 3 (Cantidad de Positivos) :"+contadorPositivos+"</br>");
	document.write("Punto 4 (Cantidad de Negativos) :"+contadorNegativos+"</br>");
	document.write("Punto 5 (Cantidad de Ceros) :"+contadorCeros+"</br>");
	document.write("Punto 6 (Cantidad de Pares) :"+contadorPares+"</br>");
	document.write("Punto 7 (Promedio de Positivos) :"+promedioPositivos+"</br>");
	document.write("Punto 8 (Promedio de Negativos) :)"+promedioNegativos+"</br>");
	document.write("Punto 9 (Difrencia entre P/N) :"+diferenciaPositivosNegativos+"</br>");
	


}//FIN DE LA FUNCIÓN