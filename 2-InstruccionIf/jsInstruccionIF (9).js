function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 


    var max = 11;
	var min = 1;
	var aleatorio = Math.floor(Math.random()* (max- min) + min); //Math.floor Parseado Math.random que genera un
	                                                            //numero random multiplicado por el maximo + el minimo sumados despues sumando el minimo
	
	alert("Numero Random: "+aleatorio);
	

}//FIN DE LA FUNCIÓN