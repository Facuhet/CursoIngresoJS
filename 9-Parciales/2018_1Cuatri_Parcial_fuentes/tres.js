function mostrar()
{
    var precioIngresado;
    var precioFinalDescuento;
    var descuento;
    var contador = 0;

    
    //Dato (numero) ingresado

    do{

        do{ 

            precioIngresado = prompt("Ingrese dato");
            precioIngresado = parseInt(precioIngresado);

        }while(isNaN(precioIngresado))

        do{

            descuento = prompt("Ingrese descuento");
            descuento = parseInt(descuento);

        }while(isNaN(descuento));

        descuento = descuento/100;
        descuento = descuento*precioIngresado;

        precioFinalDescuento = precioIngresado - descuento;

        contador++;

    }while(contador < 1);

    document.getElementById("elPrecioFinal").value = precioFinalDescuento;
    
}
