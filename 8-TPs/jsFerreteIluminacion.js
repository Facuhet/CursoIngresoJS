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
    var precioLamparas = 35;
    var precioFinal = parseInt(cantidadLamparas*precioLamparas);
    var precioDescuento = document.getElementById("precioDescuento").value;

    var descuento;
    var precioFinalDescuento;
    var valorIngresoBruto = 110;
    var cuentaIngresoBruto;
    var diferenciaImpuesto;
    
    if (cantidadLamparas>=6){

    descuento = parseInt((50*precioFinal)/100);
    precioFinalDescuento = parseInt(precioFinal - descuento);
    document.getElementById("precioDescuento").value = precioFinalDescuento;

     if(precioFinalDescuento >= 120){  
       cuentaIngresoBruto = Math.floor(precioFinalDescuento*valorIngresoBruto/100);
       diferenciaImpuesto = Math.floor(cuentaIngresoBruto - precioFinalDescuento);
       document.getElementById("precioDescuento").value = cuentaIngresoBruto;
       alert("Usted pago $"+diferenciaImpuesto+" de IIBB");
    

     }
       
       

    } else if (cantidadLamparas==5 && marca =="ArgentinaLuz"){

      descuento = parseInt((40*precioFinal)/100);
      precioFinalDescuento = parseInt(precioFinal - descuento);
      document.getElementById("precioDescuento").value = precioFinalDescuento;

    }   else if (cantidadLamparas==5 && marca != "ArgentinaLuz" ){

        descuento = parseInt((30*precioFinal)/100);
        precioFinalDescuento = parseInt(precioFinal - descuento);
        document.getElementById("precioDescuento").value = precioFinalDescuento;

        if(precioFinalDescuento >= 120){  

       cuentaIngresoBruto = Math.floor(precioFinalDescuento*valorIngresoBruto/100);
       diferenciaImpuesto = Math.floor(cuentaIngresoBruto - precioFinalDescuento);
       document.getElementById("precioDescuento").value = cuentaIngresoBruto;
       alert("Usted pago $"+diferenciaImpuesto+" de IIBB");
       
     }
        

    }    else if (cantidadLamparas == 4 && marca == "ArgentinaLuz" && marca == "FelipeLamparas" ){
         
         descuento = parseInt((25*precioFinal)/100);
         precioFinalDescuento = parseInt(precioFinal - descuento);
         document.getElementById("precioDescuento").value = precioFinalDescuento;

         

    }     else if (cantidadLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){

          descuento = parseInt((20*precioFinal)/100);
          precioFinalDescuento = parseInt(precioFinal - descuento);
          document.getElementById("precioDescuento").value = precioFinalDescuento;

    }      else if (cantidadLamparas == 3 && marca == "ArgentinaLuz"){

           descuento = parseInt((15*precioFinal)/100);
           precioFinalDescuento = parseInt(precioFinal - descuento);
           document.getElementById("precioDescuento").value = precioFinalDescuento;

    }       else if (cantidadLamparas == 3 && marca == "FelipeLamparas"){

            descuento = parseInt((10*precioFinal)/100);
            precioFinalDescuento = parseInt(precioFinal - descuento);
            document.getElementById("precioDescuento").value = precioFinalDescuento;

    }        else if (cantidadLamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){

             descuento = parseInt((5*precioFinal)/100);
             precioFinalDescuento = parseInt(precioFinal - descuento);
             document.getElementById("precioDescuento").value = precioFinalDescuento;
    

    }         else if (cantidadLamparas < 3){

              document.getElementById("precioDescuento").value = precioFinal;
   
   
    }  
    

}
