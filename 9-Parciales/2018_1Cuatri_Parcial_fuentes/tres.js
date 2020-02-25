function mostrar()
{
    var precioIngresado;
    var precioFinalDescuento;
    var descuento;

    //Dato (numero) ingresado
    precioIngresado = prompt("Ingrese precio");
    
    //Dato (numero - porcentaje) ingresado
    descuento = prompt("Ingrese descuento");

    //Parseo de datos
    descuento = parseInt(descuento);
    precioIngresado = parseInt(precioIngresado);

    //Cuentas
    descuento = descuento/100;
    descuento = precioIngresado*descuento;

    //Resultado final con descuento aplicado
    precioFinalDescuento = precioIngresado - descuento;

    //Muestra de resultado en pantalla
    document.getElementById("elPrecioFinal").value = "Precio final con descuento : "+precioFinalDescuento;
    
}
