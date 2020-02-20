function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0;
    while(clave.toLowerCase() != "utn750"){
        contador ++;

       clave = prompt("Error ingrese la clave nuevamente");
       if (contador == 3){
           break;
       }
        

    } 
    if(contador == 3){
        alert("Intentos maximos realizados");
    }else {
        alert("Bienvenidos");
    }
      




}//FIN DE LA FUNCIÓN
