/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1=5.5;
    var n2=4.5;
    var entero=parseInt(n1+n2); //Suma de enteros
    alert("La suma es: " + entero)

}

function restar()
{
    var n3=3.5;
    var n4=6.5;
    var entero=parseInt(n3-n4); //Resta de enteros

    alert("La resta es; " + entero);



}

function multiplicar()
{ 
    var n5=2.5;
    var n6=3.5;
    var entero=parseInt(n5*n6); //Multiplicacion de enteros

    alert("La multiplicacion es: " + entero);
}

function dividir()
{
    var n7=5.5;
    var n8=5.5;
    var entero=parseInt(n7/n8); // Division de enteros

    alert("La division es: " + entero);
}

