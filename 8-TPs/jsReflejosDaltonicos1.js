/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio = new Date();
var tiempo = 0;
var Color;
var tiempoFinal;
var tiempoTotal;
    /*setInterval(function comenzar(){
        tiempo = tiempoInicio;
        tiempoInicio++;
    },1000);*/
    

function comenzar()
{
    ColorSecreto = Math.floor(Math.random()*6 + 1);
    

    switch(ColorSecreto)
    {
        case 1:
            document.getElementById("ColorElejido").value = "azul"
        break;

        case 2:
            document.getElementById("ColorElejido").value = "amarillo"
        break;

        case 3:
            document.getElementById("ColorElejido").value = "marron"
        break;
        
        case 4:
            document.getElementById("ColorElejido").value = "verde"
        break;

        case 5:
            document.getElementById("ColorElejido").value = "celeste"
        break;

        case 6:
            document.getElementById("ColorElejido").value = "rojo"
        break;

        default:
        break;

    }

    Color = document.getElementById("ColorElejido").value;


}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    tiempoFinal = new Date();

    tiempoTotal = tiempoFinal - tiempoInicio;

    tiempoTotal = Math.floor(tiempoTotal/1000);

    if(colorParametro == Color)
    {
        alert("Has tardado "+tiempoTotal+" Segundos en ganar");
        comenzar();
    }
        
	


}//FIN DE LA FUNCIÓN