function mostrar() {
    var respuesta;
    var numero;
    var letra;
    var contadorNumerosPares = 0;
    var contadorNumerosImpares = 0;
    var contadorCeros = 0;
    var contadorPositivos = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativo = 0;
    var promedioTotalPositivo = 0;
    var maximo;
    var minimo;
    var maximoLetra;
    var minimoLetra;
    var pimeraVez = true;
    
    do {
        //Tomar y validar datos.
        do {
            numero = prompt("Ingrese un numero.");
            numero = parseInt(numero);
        } while (isNaN(numero) || numero < -100 || numero > 100);

        do {
            letra = prompt("Ingrese una letra.");
        } while (!isNaN(letra));

        //PUNTO A B C
        if (numero % 2 == 0) {
            contadorNumerosPares++
        }
        else if (numero == 0) {
               contadorCeros++;
    
        } else {
            contadorNumerosImpares++;
        }

        // PUNTO D
        if(numero > 0)
        {
            acumuladorPositivos += numero;
            contadorPositivos++;
        }   else if (numero < 0) //PUNTO E
        {   
            acumuladorNegativo += numero;
        }
        

        if (primeraVez){
            primeraVez = false;

            minimo = numero;
            maximo = numero;
            maximoLetra = letra;
            minimoLetra = letra;
        }   else {
            if(numero > maximo) {
                maximo = numero;
                maximoLetra = letra;
            }
            else if (numero < minimo )
            {
                minimo = numero;
                minimo = letra;
            }
        }

        respuesta = confirm("Desea continuar?");
    } while (respuesta)

    // PUNTO D
    if(contadorPositivos != 0){
    promedioTotalPositivo = acumuladorPositivos / contadorPositivos;
    console.log(promedioTotalPositivo);
    }
    else {
        promedioTotalPositivo = 0;
    }
    document.write("La cantidad de numeros pares son  :" + contadorumerosPares + "<br>" + "La cantidad de numeros impares son:  " + contadorNumerosImpares + "<br>" + "La cantidad de ceros son  :" + cantidadCeros + "<br>" + "El promedio de los numeros positivos: " + promedioTotalPositivo + "<br>" + "La suma de los negativos: " + acumuladorNegativo + "Numero Mayo: " + maximo + "<br>" + "Letra Mayor: " + maximoLetra);

}





do {
    
    //  VALIDACIONES




    contador++
} while (contadorDeJugadores < 5);