function mostrar()
{

var numeros;
var contadorUsuario;
var contador = 0;
var contadorNegativos = 0;
var contadorPositivos = 0;
var contadorCeros = 0;
var contadorPares = 0;
var acumuladorNegativos = 0;
var acumuladorPositivos = 0;
var promedioPositivo;
var promedioNegativo;
var diferencia;

	//Arreglo para que no me rompan las bolas poniendo cualquier boludes de contador;
	do{ 

		contadorUsuario = prompt("Ingrese la cantidad de numeros a validar");

	}while(isNaN(contadorUsuario) || contadorUsuario == 0)

	while(contador < contadorUsuario){

		contador++;

		do{

			numeros = prompt("Ingrese su numero");

			if(numeros == null){
				break;
			}

			numeros = parseInt(numeros);

		}while(isNaN(numeros));

		if(numeros > 0){

			contadorPositivos++;
			acumuladorPositivos += numeros;
		}
		else if(numeros < 0){

			contadorNegativos++;
			acumuladorNegativos += numeros;
		}
		else{

			contadorCeros++;
		}

		if(numeros != 0 && numeros % 2 == 0){

			contadorPares++;
		}

		//Cuentas

		promedioPositivo = acumuladorPositivos/contadorPositivos;

		promedioNegativo = acumuladorNegativos/contadorNegativos;

		diferencia = acumuladorPositivos - acumuladorNegativos;

	}

	//Arreglo para no mostrar los datos innecesariamente

	if(contador == contadorUsuario){

		document.write("Suma de negativos : "+acumuladorNegativos+"</br>");
		document.write("Suma de positivos : "+acumuladorPositivos+"</br>");
		document.write("Cantidad positivos : "+contadorPositivos+"</br>");
		document.write("Cantidad negativos : "+contadorNegativos+"</br>");
		document.write("Cantidad numeros pares : "+contadorPares+"</br>");
		document.write("Diferencia entre positivo y negativo : "+diferencia+"</br>");
	}

}//FIN DE LA FUNCIÓN