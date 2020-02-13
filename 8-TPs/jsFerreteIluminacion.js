/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precioLamparas = parseInt(35);
    var precioFinal = parseInt(cantidadLamparas*precioLamparas);

    if (cantidadLamparas>=6){

    var descuento50 = parseInt((50*precioFinal)/100);
    var precioFinalDescuento = parseInt(precioFinal - descuento50);
    var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    } else if (cantidadLamparas==5 && marca =="ArgentinaLuz"){

        var descuento40= parseInt((40*precioFinal)/100);
        var precioFinalDescuento = parseInt(precioFinal - descuento40); 
        var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }   else if (cantidadLamparas==5 && marca != "ArgentinaLuz" ){

        var descuento30= parseInt((30*precioFinal)/100);
        var precioFinalDescuento = parseInt(precioFinal - descuento30);
        var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }    else if (cantidadLamparas == 4 && marca == "ArgentinaLuz" && marca == "FelipeLamparas" ){

         var descuento25= parseInt((25*precioFinal)/100);
         var precioFinalDescuento = parseInt(precioFinal-descuento25);
         var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }     else if (cantidadLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){

          var descuento20 = parseInt((20*precioFinal)/100);
          var precioFinalDescuento = parseInt(precioFinal-descuento20);
          var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }      else if (cantidadLamparas == 3 && marca == "ArgentinaLuz"){

           var descuento15 = parseInt((15*precioFinal)/100);
           var precioFinalDescuento = parseInt(precioFinal-descuento15);
           var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }       else if (cantidadLamparas == 3 && marca == "FelipeLamparas"){
        var descuento10 = parseInt((10*precioFinal)/100);
        var precioFinalDescuento = parseInt(precioFinal-descuento10);
        var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }        else if (cantidadLamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){

        var descuento5 = parseInt((5*precioFinal)/100);
        var precioFinalDescuento = parseInt(precioFinal-descuento5);
        var precioDescuento = document.getElementById("precioDescuento").value = ("Precio con descuento: $"+precioFinalDescuento);

    }   else if (cantidadLamparas < 3){

        
        var precioSinDescuento = document.getElementById("precioDescuento").value = ("Precio sin descuento: $"+precioFinal);
   
    }

    


    



}
