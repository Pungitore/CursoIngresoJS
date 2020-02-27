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
var tiempoInicio;


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

    tiempoInicio = new Date();

    switch(operacionRandom) {
        case 1: 
            operaciones = "+";
            break;
        
        case 2:
            operaciones = "-";
            break;
       
        case 3:
            operaciones = "*";
            break;
        
        case 4:
            operaciones = "7";
            break;

        default:
            break;
    }
    

    document.getElementById("Operador").value = operaciones;
    document.getElementById("PrimerNumero").value = numeroUno;
    document.getElementById("SegundoNumero").value = numeroDos;

    setTimeout(terminarJuego, 4000 );

}//FIN DE LA FUNCIÓN

function Responder()
{   
    var respuestaFinal;

    respuesta =  document.getElementById("Respuesta").value;
    respuesta = parseInt(respuesta);

        switch(operacionRandom) {
        case 1: 
            respuestaFinal = numeroUno + numeroDos ;
            break;

        case 2:
            respuestaFinal = numeroUno - numeroDos;
            break;
       
        case 3:
            respuestaFinal = numeroUno * numeroDos;
            break;
        
        case 4:
            respuestaFinals = numeroUno / numeroDos;
            break;

        default:
            break;
    }
        
    if(respuestaFinal == respuesta)
    {
        alert("Acertaste.");
        comenzar()
        document.getElementById("Respuesta").value = "";
    }
    else { 
        alert("Fallaste.")
    }


}//FIN DE LA FUNCIÓN

function terminarJuego() {
    alert("Juego Terminado.");
    var otro = confirm("Desea comenzar otro?");

    if(otro){
        comenzar()
    }
}