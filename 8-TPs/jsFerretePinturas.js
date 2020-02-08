/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Pasar Fahrenheit a Celsius
    
    var temperaturaFahrenheitCelsius;
    var resta;
    var division;
    var resultado;

    temperaturaFahrenheitCelsius = document.getElementById("Temperatura").value;
    temperaturaFahrenheitCelsiusParseado = parseInt(temperaturaFahrenheitCelsius);

    resta = 32;
    division = 1.8;
    resultado = (temperaturaFahrenheitCelsiusParseado-resta)/division;

    alert(temperaturaFahrenheitCelsius+" Fahrenheit son "+resultado+" centigrados");


}

function CentigradosFahrenheit () 
{
    //Pasar de Celsius a Fahrenheit
    
    var temperaturaCelsiusFahrenheit;
    var multiplicacion;
    var suma;
    var resultado;

    temperaturaCelsiusFahrenheit = document.getElementById("Temperatura").value;
    temperaturaCelsiusFahrenheitParseado = parseInt(temperaturaCelsiusFahrenheit);

    multiplicacion = 1.8;
    suma = 32;
    resultado = (temperaturaCelsiusFahrenheitParseado*multiplicacion)+suma;

    alert(temperaturaCelsiusFahrenheit + " centigrados son " + resultado + " Fahrenheit");



	
}
