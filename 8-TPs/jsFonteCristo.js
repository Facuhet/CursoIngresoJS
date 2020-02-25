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
    var activarPrimo = true;

function NumerosPares() 
{
    numero = document.getElementById("numero").value;

    while(numero > 0)
    {
		
        if(numero % 2 == 0)
        {
            alert(numero+" Soy Par");
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
            alert(numero+" Soy impar");
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

    while(primo < numero)
    {
        if(numero % primo == 0)
        {
            activarPrimo = false;
        }
        primo++;
    }

    if(activarPrimo == true)
    {
        alert("El numero "+numero+ " Es primo");
    }
}

function NumerosPrimos()
{

}