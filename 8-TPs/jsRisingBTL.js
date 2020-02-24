/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;      //Entre 18 y 90 años
 var sexo;      //"M" Masculino y "F" Femenino
 var estadoCivil;       // 1 Soltero / 2 Casados / 3 Divorciado / 4 Viudos/
 var sueldoBruto;       //no menor a 8000
 var numeroLegajo;      //Numero 4 cifras sin 0 a la izquierda
 var nacionalidad;      //"A" Para argentinos / "E" Para extranjeros / "N" Para nacionalizados
 var contador = 0;
 
 

    while(contador < 6)
    {   
        
        edad = prompt("Ingrese su edad (Entre 18 y 90 años");
        edad = parseInt(edad);
        
        if (edad < 18 || edad > 90)
        {
            edad = prompt("Error. Ingresar edad valida");
            edad = parseInt(edad);
        }
        else if(edad == null)
        {
            break;
        }
        while(isNaN(edad))
        {
            edad = prompt("Error. Ingresar edad valida");
            
            if(edad == null)
            {
                break;
            }
        }
        contador ++;

        sexo = prompt("Ingresar sexo").toUpperCase();
     

        if(sexo != "F" && "M")
        {
            sexo = prompt("Error. Ingresar sexo").toUpperCase();
            
        }
        contador ++;

        estadoCivil = prompt("Ingrese estado civil (1-Soltero/2-Casado/3-Divorciado/4-Viudo)");
        estadoCivil = parseInt(estadoCivil);

        if(estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4)
        {
            estadoCivil = prompt("Error. Ingrese estado civil (1-Soltero/2-Casado/3-Divorciado/4-Viudo)");
            
        }
        else if(estadoCivil == null)
        {
            break;
        }
        while(isNaN(estadoCivil))
        {
            estadoCivil = prompt("Error. Ingrese estado civil (1-Soltero/2-Casado/3-Divorciado/4-Viudo)");
            
            if(estadoCivil == null)
            {
                break;
            }
        }
        contador ++;

        sueldoBruto = prompt("Ingrese sueldo bruto (No menor a 8000)");
        sueldoBruto = parseInt(sueldoBruto);

        if(sueldoBruto < 8000)
        {
            sueldoBruto = prompt("Error. Ingrese sueldo bruto valido");
            
        }
        else if(sueldoBruto == null)
        {
            break;
        }
        while(isNaN(sueldoBruto))
        {
            sueldoBruto = prompt("Error. Ingrese sueldo bruto valido");

            if(sueldoBruto == null)
            {
                break;
            }
        }
        contador ++;
        
        numeroLegajo = prompt("Ingresar legajo");
        numeroLegajo = parseInt(numeroLegajo);

        if(numeroLegajo < 1000 || numeroLegajo > 9999)
        {
            numeroLegajo = prompt("Error. Ingrese legajo valido")
            
        }
        else if(numeroLegajo == null)
        {
            break;
        }
        while(isNaN(numeroLegajo))
        {
            numeroLegajo = prompt("Error. Ingrese legajo valido");
            
            if(numeroLegajo == null)
            {
                break;
            }
        }
        contador ++;

        nacionalidad = prompt("Ingrese nacionalidad").toUpperCase();

        if(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
        {
            nacionalidad = prompt("Error. Ingrese nacionalidad valida").toUpperCase();
            
        }
        contador ++;
        
        if (contador == 6)
        {
            break;
        }

    }


    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivil;
    document.getElementById("Sueldo").value = sueldoBruto;
    document.getElementById("Legajo").value = numeroLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;

}
