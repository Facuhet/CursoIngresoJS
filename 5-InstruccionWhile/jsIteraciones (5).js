function mostrar()
{

var sexo;

    while(sexo != "f" && sexo != "m"){
        
        sexo = prompt("Ingrese f o m").toLowerCase();

    }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN