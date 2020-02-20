/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
    var numeroSecreto; 
    var contadorIntento;
    contadorIntento = 1;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
    //alert(numeroSecreto );}
    numeroSecreto = Math.floor(Math.random()*100 + 1);
    
    
	

}

    var numeroIngresado;

function verificar()
{
    numeroIngresado = document.getElementById("numero").value;
    if(contadorIntento == 10){
      document.getElementById("intentos").value = contadorIntento = 0;
      alert("El juego termino");

    }else {
        if(numeroIngresado < numeroSecreto){
          alert("El numero que pense es mayor")
          document.getElementById("intentos").value = contadorIntento ++;
          
        }else {
          if(numeroIngresado > numeroSecreto){
            alert("El numero que pense es menor");
            document.getElementById("intentos").value = contadorIntento ++;
          }else {

            if(numeroIngresado == numeroSecreto){
              alert("Has ganado y en solo: "+ contadorIntento+ " intentos");
              document.getElementById("intentos").value = contadorIntento ++;
            }

          }
        }

    }
	
}