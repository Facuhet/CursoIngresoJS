function mostrar()
{
//tomo la edad  

    var edad =document.getElementById("edad").value;

    if (edad <13){

        alert("Eres un niño");

    }else if (edad >12 && edad <18){
        
        alert ("Eres un adolescente");

    }else if (edad >=18 && edad <= 115){
        alert ("Eres mayor de edad");
    }else{
        alert("No deberias estar vivo... ");
    }

    /* 
    var edad = document.getElementById("edad").value;
    if (edad > 17) {
        alert("Eres mayor");
    }else{

        if (edad > 13){
            alert("es adolescente");
        }else{
            alert ("es menor");
        }

    }
    
    */


}//FIN DE LA FUNCIÓN