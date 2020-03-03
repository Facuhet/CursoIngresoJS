function mostrar()
{
    var nombreHuesped;
    var huespedConMasPersonas = 0;
    var huespedConMasPersonasNombre;
    var cantidadPersonas = 0;
    var cantidadPersonasConMasDias = 0;
    var cantidadEstadias = 0;
    var acumuladorEstadias = 0;
    var reserva = 0;
    var personaConMasDias = 0;
    var formaDePago;
    var respuesta = true;
    var efectivo = 0;
    var tarjeta = 0;
    var qr = 0;
    var formaDePagoMasUtilizada;
    var promedio;

    respuesta = confirm("Desea ingresar datos");

    do{

        if(respuesta == false){
            break;
        }

        do{

            nombreHuesped = prompt("Ingrese nombre del huesped");
            
            if(nombreHuesped == null){
                break;
            }

        }while(!isNaN(nombreHuesped) || nombreHuesped == "");

        do{

            cantidadPersonas = prompt("Cantidad de personas");
            
            if(cantidadPersonas == null){
                break;
            }

            cantidadPersonas = parseInt(cantidadPersonas);

        }while(isNaN(cantidadPersonas) || cantidadPersonas == 0);

        do{

            cantidadEstadias = prompt("Ingrese estadia");
            
            if(cantidadEstadias == null){
                break;
            }

            cantidadEstadias = parseInt(cantidadEstadias);

        }while(isNaN(cantidadEstadias) || cantidadEstadias == 0);

        do{

            formaDePago = prompt("Ingrese forma de pago (Efectivo, Tarjeta, QR").toLowerCase();
            
            if(formaDePago == null){
                break;
            }

        }while(!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr");

        //Datos para promedio reserva/dia
        acumuladorEstadias += cantidadEstadias;
        reserva++;

        if(cantidadPersonas > huespedConMasPersonas){

            huespedConMasPersonas = cantidadPersonas;
            huespedConMasPersonasNombre = nombreHuesped;

        }

        if(cantidadEstadias > personaConMasDias ){

            personaConMasDias = cantidadEstadias
            cantidadPersonasConMasDias = cantidadPersonas;
        }

        if(formaDePago == "efectivo"){
            efectivo++;

        }
        else if(formaDePago == "tarjeta"){
            tarjeta++;

        }
        else{

            if(formaDePago == "qr"){
                qr++;
            }
        }

        if(efectivo > tarjeta && efectivo > qr){
            formaDePagoMasUtilizada = "efectivo";

        }
        else if(tarjeta > efectivo && tarjeta > qr){
            formaDePagoMasUtilizada = "tarjeta";

        }
        else{

            if(qr > tarjeta && qr > efectivo){
                formaDePagoMasUtilizada = "QR";
            }
        }

        //Promedio

        promedio = acumuladorEstadias / reserva;
        promedio = parseInt(promedio);

        respuesta = confirm("Desea seguir ingresando datos ?");

        
    }while(respuesta == true);
    
    document.write("Huesped con mas personas es "+ huespedConMasPersonasNombre+" con "+huespedConMasPersonas+" personas en una sola reserva"+"</br>");
    document.write("Son "+cantidadPersonasConMasDias+" las personas que se quedaron mas dias, los dias son : "+personaConMasDias+"</br>");
    document.write("La forma de pago mas utilizada es "+formaDePagoMasUtilizada+"</br>");
    document.write("Promedio cantidad de dias por reserva "+promedio+"</br>");

}