/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	
	if(contadorIntentos == 1)
	{
		alert("usted es un psiquico")
	}
	else {
		if (contadorIntentos == 2 )
		{
			alert("Buena Percepcion")
		}
		}
}