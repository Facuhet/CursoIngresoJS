function mostrar()
{
    var numeroUno;
    var numeroDos;
    var respuesta;

    numeroUno = prompt("Ingrese el primer numero");
    numeroDos = prompt("Ingrese el segundo numero");

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);


    if (numeroUno == numeroDos)
    {
        alert("Los numeros son {"+numeroUno+","+numeroDos+"}");
    }
    else if(numeroUno > numeroDos)
    {
        respuesta = numeroUno - numeroDos;
        respuesta = parseInt(respuesta);

        alert("El resultado de la resta es : "+respuesta);
    }
    else
    {
        respuesta = numeroUno + numeroDos;
        respuesta = parseInt(respuesta);

        if(respuesta < 10)
        {
            alert("El resultado de la suma es : "+respuesta);
        }
        else
        {
            alert("La suma es :"+respuesta+" y supero el 10");
        }
    }
}
