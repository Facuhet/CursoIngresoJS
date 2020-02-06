/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe=22500;// Importe para hacer descuento
    var descuento=75;//Descuento de 25%
    var porcentaje=100; //El 100% del importe
    

    alert("Su descuento es: " + parseInt(importe*descuento)/porcentaje);
    //El alert mostrara el importe con el descuento del 25%



}
