function mostrar()
{

    let numero = prompt("Ingrese un numero");
    let contador = 0

    for(numero , contador; contador <= numero ; contador++){

        if(numero % contador == 0){

            alert("Numeros divisibles por "+numero+" son : "+contador);
        }
    }

}//FIN DE LA FUNCIÓN