function mostrar()
{
	//


	var contador=0;
	// declarar variables
	var respuesta = true;
	var numero;
	var minimo;
	var maximo;
	var primeraiteracion=true;

	while(respuesta == true)
	{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);


			if (numero == null)
			{
				break;
			}

		
		
		while(isNaN(numero))
		{
			numero = prompt("Ingrese un numero valido")

			if (numero == null)
			{
				break;
			}		
			numero = parseInt(numero);
		}		
				if(primeraiteracion == true || numero > maximo)
				{ 
					maximo = numero;
			    }
				if(primeraiteracion == true|| numero < minimo)
				{
					minimo = numero;
				}	
			
				primeraiteracion = false;

				respuesta = confirm("¿Desea ingresar otro numero?")
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
}//FIN DE LA FUNCIÓN