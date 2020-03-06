function mostrar()
{
    var altura;
    var sexo;
    var contador = 0;
    var acumuladorAltura = 0;
    var minimo = 250;
    var sexoMinimo;
    var contadorMujeres = 0;
    var promedio;

    while(contador < 5){

        do{
            altura = prompt("Ingrese la altura");

            if(altura == null){
                break;
            }

            altura = parseInt(altura);

        }while(isNaN(altura) || altura > 250 || altura < 0);

        do{

            sexo = prompt("Ingrese el sexo").toLowerCase();

            if(sexo == null){
                break;
            }

        }while(!isNaN(sexo) || sexo != "f" && sexo != "m");

        contador++;

        if(altura > 0){
            acumuladorAltura += altura;
        }

        if(altura < minimo){

            minimo = altura;
            sexoMinimo = sexo;
        }

        if(altura > 190 && sexo == "f"){
            
            contadorMujeres++;

        }

        promedio = acumuladorAltura/5
    }

    if(contador == 5){
        alert("promedio : "+promedio);
        alert("Altura mas baja : "+minimo+" sexo : "+sexoMinimo);
        alert("Mujeres con mas de 190 centimetros : "+contadorMujeres);
    }
}
