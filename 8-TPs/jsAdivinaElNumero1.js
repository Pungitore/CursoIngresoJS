/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0; 
numeroSecreto;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	var max;
	var min;

	max = 101;
	min = 1;
	numeroSecreto = Math.floor((Math.random() * (max-min)) + min);
  console.log(numeroSecreto);
	

}

function verificar()
{   
    var numeroIngresado;
    var numeroIngresadoParseado;
   
    contadorIntentos = contadorIntentos + 1;

    document.getElementById("intentos").value = contadorIntentos;

    numeroIngresado = document.getElementById("numero").value;
    numeroIngresadoParseado = parseInt(numeroIngresado);
    console.log(numeroIngresadoParseado);

    if(numeroIngresadoParseado > numeroSecreto) {
      alert("El numero ingresado es mayor al secreto");
    }
    else {
      if (numeroIngresadoParseado < numeroSecreto) {
        alert("El numero ingresado es menor al secreto");
      }
    else { 
      if (numeroIngresadoParseado == numeroSecreto)
        alert("Adivinaste al numero secreto! en: " + contadorIntentos+ " intentos, " + "el numero era:  " + numeroSecreto);
        else {
          alert("Ingrese un numero");
        }
    }  
    }
	
} 

