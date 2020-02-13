/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largo;
   var ancho;
   var perimetro;
   var alambre;
   var resultado;
   var perimetroParseado;

   largo = document.getElementById("Largo").value;
   ancho = document.getElementById("Ancho").value;
   alambre = 3;
   perimetro = (largo+ancho)*2;
   perimetroParseado = parseInt(perimetro);
   resultado = (perimetroParseado)*alambre;
   resultadoParseado = parseInt(resultado);

   alert("Se necesitan "+resultadoParseado+" metros de alambre");











}
function Circulo () 
{
    var radio = document.getElementById("Radio").value;
    var radioParseado = parseInt(radio);

    var alambre = 3;
    var numeroPix2 = 6.28;

    var cuentaRadio = radioParseado/numeroPix2;
    var cuentaRadioAlambre = cuentaRadio*alambre;

    alert("Necesitaras " + cuentaRadioAlambre + " metros de alambre");
}
function Materiales () 
{
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    var largoParseado = parseInt(largo);
    var anchoParseado = parseInt(ancho);
    var perimetro = 2*(largoParseado+anchoParseado);
    var perimetroParseado = parseInt(perimetro);

    var referencia1x1 = 4;
    var referencia1x1Parseado = parseInt(referencia1x1);

    var materialCal = 3;
    var materialCalParseado = parseInt(materialCal);
    
    var materialCemento = 2;
    var materialCementoParseado = parseInt(materialCemento);

    var materialCalCuenta;
    var materialCementoCuenta;
    var materialCemCuentaParseado;
    var materialCalCuentaParseado;  
    

    materialCalCuenta = (perimetroParseado*materialCalParseado)/referencia1x1Parseado;
    materialCementoCuenta = (perimetroParseado*materialCementoParseado)/referencia1x1Parseado;
    materialCalCuentaParseado = parseInt(materialCalCuenta);
    materialCemCuentaParseado = parseInt(materialCementoCuenta);

    alert("Se necesitaran "+materialCalCuentaParseado+" bolsas de cal y "+materialCemCuentaParseado+" bolsas de cemento");




}