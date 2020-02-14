function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Enero":
    alert("Que comiences bien el año");
        break;
    case "Marzo":
    alert("A clases");
        break;
    case "Julio":
    alert("Se vienen las vacaciones");
        break;
    case "Diciembre":
    alert("Felices fiestas");
        break;
    default:
    alert("No hay un evento reconocido en este mes");
        break;    

}



}//FIN DE LA FUNCIÓN