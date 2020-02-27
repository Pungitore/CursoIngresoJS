/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
     
     var numeros
     var numerosPositivos;
     var numerosPositivosParceado;
     var contadorPares;

function ComenzarIngreso () {

    numeros = document.getElementById("numero").value

}

function NumerosPares()
{
 	//PUNTO1     

     var numerosPositivos = document.getElementById("numero").value 
     numerosPositivosParceado = parseInt(numerosPositivos);

     while(numerosPositivos < 0)
        var numeroPositivo = prompt("Ingrese un numero");
		numerosPositivosParceado = parseInt(numeroPositivo);
    
        
	 while (isNaN(numerosPositivos)) {
			numerosPositivos = alert("Ingrese un numero valido");
			numerosPositivos = parseInt(numerosPositivos);
		}

    if (numerosPositivos % 2 == 0) {
			contadorPares++
		}
		
        alert("los numeros pares son:  " + contadorPares);

		respuesta = confirm("¿Desea contiunar?");
	}




function NumerosImpares() {

    numeros = document.getElementById("numero").value

}


function NumerosDivisibles() {

    numeros = document.getElementById("numero").value

}


function VerificarPrimo() {

    numeros = document.getElementById("numero").value

}


function NumerosPrimos() {

    numeros = document.getElementById("numero").value

}
