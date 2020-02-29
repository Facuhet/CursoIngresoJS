function mostrar()
{
    var nombreHuesped;
    var cantidadPersonas;
    var cantidadEstadias;
    var formaDePago;
    var respuesta;

    respuesta = confirm("Desea ingresar datos");
    do{

        do{
            nombreHuesped = prompt("Ingrese nombre del huesped");
            
        }while(!isNaN(nombreHuesped));

        do{
            cantidadPersonas = prompt("Cantidad de personas");
            cantidadPersonas = parseInt(cantidadPersonas);

        }while(isNaN(cantidadPersonas) || cantidadPersonas < 1);

        do{
            cantidadEstadias = prompt("Ingrese estadia");
            cantidadEstadias = parseInt(cantidadEstadias);

        }while(isNaN(cantidadEstadias));

        do{

            formaDePago = prompt("Ingrese forma de pago (Efectivo, Tarjeta, QR").toLowerCase();

        }while(!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr");

        

        respuesta = confirm("Desea seguir ingresando datos ?");

    }while(respuesta);

}
