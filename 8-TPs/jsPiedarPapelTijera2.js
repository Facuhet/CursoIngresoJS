var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random()*3 + 1);



}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Empataste");
			ContadorDeEmpates++;
		break;

		case 2:
			alert("Perdiste");
			ContadorDePerdidas++;
		break;

		case 3:
			alert("Ganaste");
			ContadorDeGanadas++;
		break;
	}
	
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Ganaste");
			ContadorDeGanadas++;
		break;

		case 2:
			alert("Empataste");
			ContadorDeEmpates++;
		break;

		case 3:
			alert("Perdiste");
			ContadorDePerdidas++;
		break;
	}
	
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Perdiste");
			ContadorDePerdidas++;
		break;

		case 2:
			alert("Ganaste");
			ContadorDeGanadas++;
		break;

		case 3:
			alert("Empataste");
			ContadorDeEmpates++;
		break;
	}

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
	
}