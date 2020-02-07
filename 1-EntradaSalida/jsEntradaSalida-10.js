/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var importe = document.getElementById("importe").value;
  const descuento = 75;
  const porcentaje = 100;
  var importeParseado = parseInt(importe);

  var resultado = (importeParseado*descuento)/porcentaje;

  document.getElementById("resultado").value=resultado;




}
