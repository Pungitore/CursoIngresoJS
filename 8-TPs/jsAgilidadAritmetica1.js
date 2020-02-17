/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumero;
var segundoNumero;
var numeroUno;
var numeroDos2;

function comenzar()
{
    var max;
    var min;
    
    primerNumero = document.getElementById("PrimerNumero").value
    segundoNumero = document.getElementById("SegundoNumero").value
    max = 11;
    min = 1;
    
    numeroUno = Math.floor((Math.random() * (max-min)) + min);
    console.log(numeroUno);
    primerNumero = numeroUno;

    numeroDos2 = Math.floor((Math.random() * (max-min)) + min);
    console.log(numeroDos2);
    segundoNumero = numeroDos2;

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
