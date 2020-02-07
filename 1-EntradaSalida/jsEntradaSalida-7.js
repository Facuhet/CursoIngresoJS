/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var n1Parseado = parseInt(n1);
    var n2Parseado = parseInt(n2);
    var resultado = n1Parseado+n2Parseado; //Suma de enteros

    alert("La suma es " + resultado);

}

function restar()
{
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var n1Parseado = parseInt(n1);
    var n2Parseado = parseInt(n2);
    var resultado = n1Parseado-n2Parseado; //Resta de enteros

    alert("La resta es " + resultado);



}

function multiplicar()
{ 
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var n1Parseado = parseInt(n1);
    var n2Parseado = parseInt(n2);
    var resultado = n1Parseado*n2Parseado; //Multiplicacion de enteros

    alert("La multiplicacion es: " + resultado);
}

function dividir()
{
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var n1Parseado = parseInt(n1);
    var n2Parseado = parseInt(n2);
    var resultado = n1Parseado/n2Parseado; // Division de enteros

    alert("La division es: " + resultado);
}

