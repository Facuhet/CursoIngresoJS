function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var iteracion=0;

		respuesta = prompt("Cuantos numeros desea sumar/promediar");
		iteracion = parseInt(respuesta);
		

		while(respuesta == iteracion ){
			contador++;
			var numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			acumulador = acumulador + numero;

			while(isNaN(numero)){

				numero = prompt("Ingrese un numero");
				numero = parseInt(numero);
			}

			if(contador == iteracion){

				break;

			}

		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN