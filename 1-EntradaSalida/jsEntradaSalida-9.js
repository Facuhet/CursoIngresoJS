/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo = document.getElementById("sueldo").value;          
    const aumento=110;    
    const porcentaje=100;
    var sueldoParseado = parseInt(sueldo);
    var resultado = (sueldo*aumento)/porcentaje;
    document.getElementById("resultado").value = resultado;


	
}
