/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
    var respuesta;
    var numeroAleatorioUno;
    var numeroAleatorioDos;
    var operadorMatematico;
    var respuestaUsuario;
    var operadorRandom;
function comenzar()
{
    numeroAleatorioUno = Math.floor(Math.random()*10+1);
    numeroAleatorioDos = Math.floor(Math.random()*10+1);
    operadorRandom = Math.floor(Math.random()*4 + 1);
    

    switch(operadorRandom){
        case 1:
                 operadorMatematico = "+";
                 respuesta = numeroAleatorioUno + numeroAleatorioDos;
        break;

        case 2:
                operadorMatematico = "-";
                respuesta = numeroAleatorioUno - numeroAleatorioDos;
        break;
       
        case 3:
                operadorMatematico = "*";
                respuesta = numeroAleatorioUno * numeroAleatorioDos;
        break;

        case 4:
                operadorMatematico = "/";
                respuesta = numeroAleatorioUno / numeroAleatorioDos;
        break;

    }
    
    document.getElementById("Operador").value = operadorMatematico;
    document.getElementById("PrimerNumero").value = numeroAleatorioUno
    document.getElementById("SegundoNumero").value = numeroAleatorioDos
    

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuestaUsuario = document.getElementById("Respuesta").value;

	if(respuestaUsuario == respuesta){
        alert("!Correcto¡");
    }else if(respuestaUsuario != respuesta){
        alert("!Incorrecto¡");
    }
        
    

}//FIN DE LA FUNCIÓN
