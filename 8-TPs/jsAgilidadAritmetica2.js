/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var respuesta;
var temporizador;
var numeroUnoRandom;
var numeroDosRandom;
var respuestaUsuario;
var operadorRandom;

function comenzar()
{
    numeroUnoRandom = Math.floor(Math.random()*10+1);
    numeroDosRandom = Math.floor(Math.random()*10+1);
    operadorRandom = Math.floor(Math.random()*4+1);

    switch(operadorRandom)
    {
        case 1:
            operadorRandom = "+";
            respuesta = numeroUnoRandom + numeroDosRandom;
            respuesta = Math.floor(respuesta);
        break;

        case 2:
            operadorRandom = "-";
            respuesta = numeroUnoRandom - numeroDosRandom;
            respuesta = Math.floor(respuesta);
        break;

        case 3:
            operadorRandom = "*";
            respuesta = numeroUnoRandom * numeroDosRandom;
            respuesta = Math.floor(respuesta);
        break;

        case 4:
            operadorRandom = "/";
            respuesta = numeroUnoRandom / numeroDosRandom;
            respuesta = Math.floor(respuesta);
        break;
    }
    
    document.getElementById("PrimerNumero").value = numeroUnoRandom;
    document.getElementById("SegundoNumero").value = numeroDosRandom;
    document.getElementById("Operador").value = operadorRandom;


}//FIN DE LA FUNCIÓN
function Responder()
{
    respuestaUsuario = document.getElementById("Respuesta").value;
    respuestaUsuario = parseInt(respuestaUsuario);

    if(respuestaUsuario == respuesta)
    {
        alert("Correcto");
    }
    else
    {
        alert("Incorrecto");
    }

    temporizador = setTimeout(comenzar , 4000);

}//FIN DE LA FUNCIÓN
