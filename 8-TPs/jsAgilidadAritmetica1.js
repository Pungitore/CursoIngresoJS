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
var numeroDos;
var operacionRandom;
var operaciones;

function comenzar()
{
    var max;
    var min;
    var maxOperador;
    var minOperador;

    max = 11;
    min = 1;
    maxOperador = 5;
    minOperador = 1;

    numeroUno = Math.floor((Math.random() * (max-min)) + min);
    console.log(numeroUno);


    numeroDos = Math.floor((Math.random() * (max-min)) + min);
    console.log(numeroDos);

    operacionRandom = Math.floor((Math.random() * (maxOperador-minOperador)) + minOperador);
    console.log(operacionRandom);

    switch(operacionRandom) {
        case 1: 
        operaciones = "*";
        break;
        
        case 2:
        operaciones = "/";
        break;
       
        case 3:
        operaciones = "-";
        break;
        
        default:
        operaciones = "+";
        break;
    }
    

    document.getElementById("Operador").value = operaciones;
    document.getElementById("PrimerNumero").value = numeroUno;
    document.getElementById("SegundoNumero").value = numeroDos;

}//FIN DE LA FUNCIÓN

function Responder()
{
    respuesta =  document.getElementById("Respuesta").value;

}//FIN DE LA FUNCIÓN
