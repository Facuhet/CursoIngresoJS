function mostrar()
{
    var notas;
    var acumuladorNotas = 0;
    var sexo;
    var sexoNotaBaja;
    var promedio;
    var contadorVarones = 0;
    var contador = 0;
    var bandera = 10;
    var minimo;


        while(contador < bandera)
        {
            //NOTAS
            notas = prompt("Ingrese su nota");
            

            if(notas > 10 || notas < 0)
            {
                notas = prompt("Error. Ingrese nota valida");

                if(notas == null)
                {
                    break;
                }
            }

            while(isNaN(notas))
            {
                notas = prompt("Error Ingrese una nota valida");
            }

            notas = parseInt(notas);

            contador++;
            acumuladorNotas += notas;
            acumuladorNotas = parseInt(acumuladorNotas);

            //Sexo
            sexo = prompt("Ingrese el sexo").toLowerCase();

            if(sexo != "f" && sexo != "m")
            {
                sexo = prompt("Error. Ingrese un sexo valido").toLowerCase();
            }

                if(sexo == "m" && notas >= 6)
                {
                    contadorVarones++;
                    contadorVarones = parseInt(contadorVarones);
                }

            contador++;

            //Nota minima
            minimo = notas;

                if(notas < minimo)
                {
                    minimo = notas;
                    sexoNotaBaja = sexo;
                }

            //Promedio

            promedio = acumuladorNotas/5;
            promedio = parseInt(promedio);

            if (contador == bandera)
            {
                break;
            }
        }

        alert("Promedio de notas : "+promedio);
        alert("La nota mas baja es : "+minimo+" y su sexo es : "+sexoNotaBaja);
        alert("Cantidad de varones con nota igual o mayor a 6 : "+contadorVarones);
}
