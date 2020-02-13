function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    var max = 11;
	var min = 1;
	var aleatorio = Math.floor(Math.random() * (max - min) + min);

	if (aleatorio >= 9){

		alert("Nota: "+aleatorio+" EXCELENTE");
	} else if (aleatorio > 4){
		alert("Nota: "+aleatorio+" Aprobo");
	    }else if (aleatorio<4){
			alert("Nota: "+aleatorio+" Vamos, la proxima se puede");

		   }
	

}//FIN DE LA FUNCIÓN