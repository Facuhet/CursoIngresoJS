function mostrar()
{
//tomo la edad  

	var edad = document.getElementById("edad").value;
    var estadoCivil = document.getElementById("estadoCivil").value;

    if (edad < 18 && estadoCivil != "Soltero" ){//Edad menor a 18 Y estadoCivil distinto a Soltero

        alert("Eres muy pequeño para NO ser soltero");
    }



}//FIN DE LA FUNCIÓN