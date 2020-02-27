function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var confirmar;
    var contadorPares = 0;
    var marcaProductoPesado;
    var primeraIteracion = true;
    var promedio;
    var productosBajoCero = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var pesoMaximo;
    var pesoMinimo;

    confirmar = confirm("¿Desea ingresar los datos?");

    while(confirmar == true){

        do{

            marca = prompt("Ingrese la marca");

        }while(!isNaN(marca));

        do{

            peso = prompt("Ingrese el peso");
            peso = parseInt(peso);

        }while(isNaN(peso) || peso < 0 || peso > 100);

        do{

            temperatura = prompt("Ingrese la temperatura")
            temperatura = parseInt(temperatura);

        }while(isNaN(temperatura) || temperatura < - 30 || temperatura > 30);

        //Temperatura PARES
        if(temperatura % 2 == 0){

            contadorPares++;

        }

        //Productos conservados a menos de 0 grados
        if(temperatura < 0){

            productosBajoCero++;

        }

        //Promedio Peso de todos los productos
        if(peso > 0){

            acumuladorPeso += peso;
            contadorPeso++;

        }

        promedio = acumuladorPeso / contadorPeso;

        //Peso maximo y minimo
        if(primeraIteracion == true || peso > pesoMaximo){

            pesoMaximo = peso;
            marcaProductoPesado = marca;
        }

        if(primeraIteracion == true || peso < pesoMinimo){

            pesoMinimo = peso;
        }
        primeraIteracion = false ;

        confirmar = confirm("¿Desea ingresar otros datos?");

    }

    document.write("Temperatura PARES : "+contadorPeso +"</br>");
    document.write("Marca de producto mas pesado : "+marcaProductoPesado+"</br>");
    document.write("Productos conservados a menos de 0 grados : "+productosBajoCero+"</br>");
    document.write("Promedio de peso de todos los productos : "+promedio+"</br>");
    document.write("Peso maximo y minimo : "+pesoMaximo+" y "+pesoMinimo);
}
