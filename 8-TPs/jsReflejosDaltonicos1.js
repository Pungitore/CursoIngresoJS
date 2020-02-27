/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio;
function comenzar()
{
    var ramdon;
    var min = 1;
    var max = 7;

    tiempoInicio = new Date();

    ramdon = Math.floor(Math.random() * (max - min)) + min;

    switch(ramdon){
        case 1:
            colorSecreto = "azul";
            break;
        case 2:
            colorSecreto = "amarillo";
            break;
        case 3: 
            colorSecreto = "amarron";
            break;
        case 4: 
            colorSecreto = "verde";
            break;
        case 5: 
            colorSecreto = "celeste";
            break;    
        case 6: 
            colorSecreto = "rojo";
            break;    
}

	         document.getElementById("ColorElejido").value = colorSecreto;


}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    var tiempoFinal;
    var tiempoTotal;

    tiempoFinal = new Date();

    tiempoTotal = tiempoFinal - tiempoInicio;
    tiempoTotal /= 1000; 
    
    console.log(colorParametro)	
    if(colorParametro == colorSecreto)
    {
        alert("Ganaste y tardaste " + tiempoTotal + " segundos.");
        comenzar();
    }

   
    
}//FIN DE LA FUNCIÓN
