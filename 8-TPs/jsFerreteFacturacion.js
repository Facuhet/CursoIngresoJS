/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    var precio1Parseado = parseInt(precio1);
    var precio2Parseado = parseInt(precio2);
    var precio3Parseado = parseInt(precio3);

    var resultado = precio1Parseado+precio2Parseado+precio3Parseado;
    
    alert("La suma es "+ resultado);
}
function Promedio () 
{
	var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    var precio1Parseado = parseInt(precio1);
    var precio2Parseado = parseInt(precio2);
    var precio3Parseado = parseInt(precio3);

    var resultado = (precio1Parseado+precio2Parseado+precio3Parseado)/3;

    alert("El promedio es "+ resultado);
}
function PrecioFinal () 
{
	var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    var precio1Parseado = parseInt(precio1);
    var precio2Parseado = parseInt(precio2);
    var precio3Parseado = parseInt(precio3);
    
    var resultadoSinIva = precio1Parseado+precio2Parseado+precio3Parseado;
    var resultadoConIva = resultadoSinIva*0.21;
    var resultadoSinIvaParseado = parseInt(resultadoSinIva);
    var resultadoConIvaParseado = parseInt(resultadoConIva);
    var precioFinalConIva = resultadoConIvaParseado+resultadoSinIvaParseado;

    alert("El precio final con su IVA es "+precioFinalConIva);
}