function mostrar()
{
    var numero;
    var letra;
    var bandera = confirm("Desea ingresar datos?");
    var contadorPares = 0;
    var contadorImpares = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var contadorPositivos = 0;
    var promedio;
    var contadorCeros = 0;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraMinimo;
    var primeraIteracion = true;

    while(bandera == true){

        do{
            numero = prompt("Ingrese un numero valido");
            numero = parseInt(numero);

        }while(isNaN(numero) || numero > 100 || numero < -100)

        do{
            letra = prompt("Ingrese una letra");

        }while(!isNaN(letra))
        
        if(numero > 0 && numero < 101){
            acumuladorPositivos += numero;
            contadorPositivos++;
        }
        else{   //Punto E
            acumuladorNegativos += numero;
        }

        //Punto A y B
        if(numero % 2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }

        //Punto C
        if(numero == 0){
            contadorCeros++;
        }

        //Punto D
        promedio = acumuladorPositivos / contadorPositivos;

        //Punto F
        
        if(primeraIteracion == true || numero > maximo){

            maximo = numero;
            letraMaximo = letra;

        }
        if(primeraIteracion  == true || numero < minimo){

            minimo = numero;
            letraMinimo = letra;

        }
        primeraIteracion = false;

        bandera = confirm("Desea ingresar otros datos?");
    }

    alert("Cantidad de numeros PARES : "+contadorPares);
    alert("Cantidad de numeros IMPARES : "+contadorImpares);
    alert("Cantidad de 0 : "+contadorCeros);
    alert("Promedio de numeros positivos : "+promedio);
    alert("Suma de numeros negativos : "+acumuladorNegativos);
    alert("Maximo y su letra : "+maximo+" "+letraMaximo+" | Minimo y su letra : "+minimo+" "+letraMinimo);
}
