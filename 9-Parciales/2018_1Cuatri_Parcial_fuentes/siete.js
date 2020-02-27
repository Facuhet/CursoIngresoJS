function mostrar()
{
    var notas;
    var acumuladorNotas = 0;
    var notaMasBaja = 11;
    var sexo;
    var sexoNotaBaja;
    var promedio;
    var contadorVarones = 0;
    var contador = 0;

    while(contador < 5){
        contador++;
    
        do{
            notas = prompt("Ingrese nota");
            notas = parseInt(notas);

        }while(isNaN(notas) || notas < 0 || notas > 10);

        do{
            sexo = prompt("Ingrese un sexo (F o M)").toLowerCase();

        }while(sexo != "f" && sexo != "m");

        //Punto B 
        if(notas < notaMasBaja){
            notaMasBaja = notas;
            sexoNotaBaja = sexo;
        }

        //Punto C
        if(notas >= 6 && sexo == "m"){
            contadorVarones++;
        }
        //Punto A
        acumuladorNotas+= notas;
        promedio = acumuladorNotas/contador;

    }

    alert("El promedio TOTAL de las notas es : "+promedio);
    alert("La nota mas baja es : "+notaMasBaja+" su sexo es : "+sexoNotaBaja);
    alert("Cantidad de varones con notas igual/mayor a 6 :"+contadorVarones);
}
