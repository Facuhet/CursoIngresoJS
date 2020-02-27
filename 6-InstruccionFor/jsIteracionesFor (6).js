function mostrar()
{
    let limite;
    let numero = 1;

    for(numero , limite = prompt("Ingrese un numero") ; numero <= limite ; numero++ ){
        

        if(numero % 2 == 0){

            alert("Numeros pares hasta "+limite+" son : "+numero);

        }
        
        
    }



}//FIN DE LA FUNCIÓN