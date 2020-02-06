/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe=25500; //Dato que sera aumentado en porcentaje
    var aumento=110; //aumenta un 10% su 100%
    var porcentaje=100; //100% de 225000

    var resultado= (importe*aumento)/porcentaje; //El resultado sera el importe con el aumento de 10%

    alert("El aumento es: " + resultado); // Aparecera en pantalla el resultado aumentado


	
}
