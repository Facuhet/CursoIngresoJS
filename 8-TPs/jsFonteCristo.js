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
    var cont = 2;
    var cont2 = 0;
    var bandera = 0;
    var banderaPrimos = 0;

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

    if(numero % primo == 0 && primo != 1)
    {
        bandera = 1;
    }
    primo++;

    if()
    {
        
    }
}

function NumerosPrimos()
{
    numero = document.getElementById("numero").value;

    while(cont <= numero)
    {
        while(cont2 < cont)
        {
            if(cont % cont2 == 0 && cont2 != 1 && cont2 != cont)
            {
                bandera = 1;
            }
            cont2++;
        }

        if(bandera == 0)
        {
            alert(cont2+" Numero primo desde "+numero);
        }
        else
        {
            bandera = 0;
        }
        cont++;
        cont2=0;
    }
}