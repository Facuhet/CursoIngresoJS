function mostrar()
{
    var contador = 0;
    var producto;
    var precio;
    var unidades;
    var marca;
    var fabricante;
    var barbijoMasCaro = 0;
    var barbijoUnidades;
    var barbijoFabricante;
    var productoMasUnidades = 0;
    var productoUnidades;
    var fabricanteUnidades;
    var acumuladorJabon = 0;

    while(contador < 5){
        contador++;

        do{
            producto = prompt("Ingrese producto").toLowerCase();

            if(producto == null){
                contador = 7;
                break;
            }

        }while(producto != "barbijo" && producto != "alcohol" && producto != "jabon");

        do{
            precio = prompt("Ingresar precio");

            if(precio == null){
                contador = 7;
                break;
            }

            precio = parseInt(precio);

        }while(isNaN(precio) || precio < 100 || precio > 300);

        do{
            unidades = prompt("Ingrese cantidad de unidades");
            
            if(unidades == null){
                contador = 7;
                break;
            }
            
            unidades = parseInt(unidades);

        }while(isNaN(unidades) || unidades < 1 || unidades > 1000);

        do{
            marca = prompt("Ingrese la marca");

            if(marca == null){
                contador = 7;
                break;
            }

            marca = parseInt(marca);

        }while(!isNaN(marca));

        do{
            fabricante = prompt("Ingrese fabricante");

            if(fabricante == null){
                contador = 7;
                break;
            }

        }while(!isNaN(fabricante));

        switch(producto){

            case "barbijo":

                if(barbijoMasCaro < precio){
                    barbijoMasCaro = precio;
                    barbijoFabricante = fabricante;
                    barbijoUnidades = unidades;
                }
                
            break;
            
            case "jabon":
                acumuladorJabon += unidades;
            break;
        }

        if(productoMasUnidades < unidades){
            productoUnidades = producto;
            fabricanteUnidades = fabricante;
            productoMasUnidades = unidades;
        }

    }

    if(contador == 5){
        document.write("barbijo mas caro : "+barbijoMasCaro+" Unidades : "+barbijoUnidades+" Fabricante : "+barbijoFabricante+"</br>");
        document.write("Producto con mas unidades : "+productoUnidades+ " Fabricante : "+fabricanteUnidades+" Unidades : "+productoMasUnidades+"</br>");
        document.write("Unidades de jabon : "+acumuladorJabon);
    }
}
