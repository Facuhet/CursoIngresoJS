function mostrar()
{

var numero;
var maximo;
var minimo;
var respuesta;
var primerIngreso = true;

	respuesta = confirm("¿Desea ingresar un numero?");
	
	while(respuesta == true){
		
		do{

			numero = prompt("Ingrese el numero");

			if(numero == null){
				
				break;
			}

			numero = parseInt(numero);

		}while(isNaN(numero))

		respuesta = confirm("¿Desea ingresar otro numeros?");

		if(primerIngreso == true){

			primerIngreso = false;

			maximo = numero;
			minimo = numero;

		}else if(numero > maximo){

			maximo = numero;

		}else{

			if(numero < minimo){
				
				minimo = numero;

			}
		}
	}

	if(respuesta == false){

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
		
	}


}//FIN DE LA FUNCIÓN