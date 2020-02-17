/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
    var eleccionMaquina;
    var numeroRandom;
    
    numeroRandom;

    function comenzar()
    {
        var max;
        var min;

        max = 4;
        min = 1;
        numeroRandom = Math.floor((Math.random() * (max-min)) + min);
        console.log(numeroRandom);


    }//FIN DE LA FUNCIÓN
    function piedra()
    {
        if (numeroRandom == 1) {
            alert("Hay empate.");
        } 
        else { if(numeroRandom == 2) {
            alert("Perdiste.");
        }
        else {
            alert("Ganaste.");
        }
        }

    }//FIN DE LA FUNCIÓN
    function papel()
    {
        if (numeroRandom == 2) {
            alert("Hay empate.");
        } 
        else { if(numeroRandom == 3) {
            alert("Perdiste.");
        }
        else {
            alert("Ganaste.");
        }
        }

    }//FIN DE LA FUNCIÓN
    function tijera()
    {
        if (numeroRandom == 3) {
            alert("Hay empate.");
        } 
        else { if(numeroRandom == 1) {
            alert("Perdiste.");
        }
        else {
            alert("Ganaste.");
        }
        }

    }//FIN DE LA FUNCIÓN