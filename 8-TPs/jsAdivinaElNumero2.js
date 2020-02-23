/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;
var numeroIngresado;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto = Math.floor(Math.random()*100 + 1);

}

function verificar()
{
	numeroIngresado = document.getElementById("numero").value;
	numeroIngresado = parseInt(numeroIngresado);
	contadorIntentos++;
	document.getElementById("intentos").value = contadorIntentos;

	if (numeroIngresado > numeroSecreto)
	{
		alert("Incorrecto. El numero que pense es MENOR");
	}
	else if(numeroIngresado < numeroSecreto)
	{
		alert("Incorrecto. El numero que pense es MAYOR")
	}
	else
	{
		if(numeroIngresado == numeroSecreto)
		{
			switch(contadorIntentos)
			{
				case 1:
					alert("Has ganado y en solo " +contadorIntentos+ " Intento : Usted es un psiquico");
				break;

				case 2:
					alert("Has ganado y en solo " +contadorIntentos+ " Intentos : Excelente percepcion");
				break;

				case 3:
					alert("Has ganado y en solo " +contadorIntentos+ " Intentos : Esto es suerte");
				break;

				case 4:
					alert("Has ganado y en solo " +contadorIntentos+ " Intentos : Excelente tecnica");
				break;

				case 5:
					alert("Has ganado y en solo " +contadorIntentos+ " Intentos : Usted esta en la media");
				break;

				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					alert("Has ganado y en solo "+contadorIntentos+ " Intentos : Falta tecnica")
				break;

				default:
					alert("Has ganado en "+contadorIntentos+" Intentos : ¡¡Afortunado en el amor!!")
				break;
			}
		}
	}
	
}