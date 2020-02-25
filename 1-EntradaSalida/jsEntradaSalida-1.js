//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var cont = 0;
	var cont2 = 0;
	var bandera = 1;
	var numero;

	while(cont <= numero)
    {
        numero = prompt("ingrese numero");
        numero = parseInt(numero);

        while(cont2 < cont)
        {

                
            if(cont % cont2 == 0 && cont2 != 1 && cont2 != cont2)
            {
                bandera = 1;
            }
        } 
        cont2++;   
        
        if(bandera == 0)
        {
            alert(cont2);
        }
        else
        {
            bandera = 0;
        }
        
        cont++;
        cont2 = 0
    }
}

