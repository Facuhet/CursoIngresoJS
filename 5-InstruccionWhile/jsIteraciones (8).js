function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var iterador=0;
	var numero;
	var acumulador1;
	var contador2=0;

	respuesta = prompt("Ingrese cantidad de numeros");
	iterador = parseInt(respuesta);

		while(respuesta == iterador){
			contador++;
			var numero = prompt("Ingrese numero");

				if (numero == null){
					break;
				}

			numero = parseInt(numero);

				

				while(isNaN(numero)){
					prompt("Ingrese un numero");

					if (numero == null){
						break;
					}

					numero =parseInt(numero);	

				}
				

			
			if(numero >= 0) {

				positivo += numero;
			

			}	else {
				
					negativo *= numero;
					contador2++;
				

				}

				if (contador == iterador){
					break;
				}

			
		}

		if (contador2 == 0){
			negativo = 0;
		}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN