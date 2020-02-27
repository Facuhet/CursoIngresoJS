function mostrar()
{
    var numero;
    var primo;
    var inicioPrimo;

    numero = prompt("Ingrese un numero para verificar si es primo");
    primo = 2;
    inicioPrimo = 2
    
    for(primo, numero , inicioPrimo; inicioPrimo < numero ; inicioPrimo++){

        if(numero % inicioPrimo == 0){

            primo++;
        }
    }

    if(primo != 2){
        alert(numero+" No es un numero primo");

    }else{

        alert(numero+" Es un numero primo");
    }

}//FIN DE LA FUNCIÓN