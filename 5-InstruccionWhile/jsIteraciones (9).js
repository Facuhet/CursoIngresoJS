function mostrar()
{

	var contador=0;
	// declarar variables
	var iterador;
	var respuesta;
	var numero;
	var minimo;
	var maximo;
	var primeraiteracion=true;

	respuesta = prompt("Ingrese cantidad de veces");
	iterador = parseInt(respuesta);

	while(iterador == respuesta)
	{
		contador++;
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);

			if (numero == null){
				break;
			}

		
		
		while(isNaN(numero)){
			numero = prompt("Ingrese un numero valido")

			if (numero == null){
				break;
			}
				
			numero = parseInt(numero);
		}

	
			if (primeraiteracion){ 

				primeraiteracion = false;
				maximo = numero;
				minimo = numero;

			} else {
				
				if(numero > maximo){ 
					maximo = numero;

			    }
				if(numero < minimo){
					minimo = numero;
				}
				
			}

			if (contador == iterador){
				break;
			}

	}

	
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
}//FIN DE LA FUNCIÓN