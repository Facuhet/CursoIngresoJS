/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var n1 = document.getElementById("numeroDividendo").value;
    var n2 = document.getElementById("numeroDivisor").value;
    var n1Parseado = parseInt(n1);
    var n2Parseado = parseInt(n2);
    var resultado = n1Parseado%n2Parseado;

    alert("El resto es: " + resultado);
}
