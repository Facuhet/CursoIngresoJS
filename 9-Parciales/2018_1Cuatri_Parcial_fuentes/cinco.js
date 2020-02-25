function mostrar()
{
    var planetas;

    planetas = prompt("Ingrese un planeta del sistema solar").toLowerCase();

    switch(planetas)
    {
        case "mercurio":
            alert("Aca hace mas calor")
        break;

        case "venus":
            alert("Aca hace mas calor");
        break;

        case "tierra":
        case "la tierra":
            alert("Aca vivimos");
        break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Aca hace mas frio");
        break;

        case "pluton":
            alert("Es considerado un planeta enano, aca hace mas frio");
        break;

        default:
            alert(planetas+" No es un planeta valido");
        break;
    }
}
