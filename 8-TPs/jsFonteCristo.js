/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
    var numero;
    var numeroDivisible = 0;
    var primo;
    var inicioPrimo;
    var numerosAnteriores;
    var comprobarPrimos;
    var activar;

function NumerosPares() 
{
    numero = document.getElementById("numero").value;

    while(numero > 0)
    {
		
        if(numero % 2 == 0)
        {
            alert(numero+" Es Par");
        }
        numero--; 

	}
}

function NumerosImpares()
{
    numero = document.getElementById("numero").value;
    
    while(numero > 0)
    {
		
        if(numero % 2 != 0)
        {
            alert(numero+" Es impar");
        }
        numero--;
        
	}
}

function NumerosDivisibles()
{
    numero = document.getElementById("numero").value;
    
    while(numero > 0)
    {	
        if(numero % numeroDivisible == 0)
        {
            alert(numero+" Soy divisible por "+numeroDivisible);

        }
        numeroDivisible++;

        if(numeroDivisible > 100)
        {
            numero = 0
            break;
        }
    }
}

function VerificarPrimo()
{
    numero = document.getElementById("numero").value;
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
}

function NumerosPrimos()
{
    numero = document.getElementById("numero").value;
    numerosAnteriores = 2;
    comprobarPrimos = 0;
    activar = 0;

    while(numerosAnteriores <= numero){
        
        while(comprobarPrimos < numerosAnteriores){

            if(numerosAnteriores % comprobarPrimos == 0 && comprobarPrimos != 1 && comprobarPrimos != numerosAnteriores){

                activar = 1;
            }
            comprobarPrimos++;
        }

        if(activar == 0){
            alert(comprobarPrimos+" Soy un numero primo");
        }
        else{
            activar = 0;    
        }

        numerosAnteriores++;
        comprobarPrimos = 0;
    }       
}