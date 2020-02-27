function mostrar()
{
    var respuesta;
    var numero;
    var letra;
    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadCeros = 0;

    do {
        //Tomar y validar datos.
        do{
        numero = prompt("Ingrese un numero.");
        numero = parseInt(numero);
        }while(isNaN(numero) || numero < -100 || numero > 100);

        do{
        letra = prompt("Ingrese una letra.");
        }while(!isNaN(letra)); 

        //PUNTO A
            if(numero % 2 == 0){
            cantidadNumerosPares++
        }
            else { 
                //PUNTO B
                cantidadNumerosImpares++;
            }

            if(numero == 0){
                cantidadCeros ++;
            }

        respuesta = confirm("Desea continuar?");
    } while(respuesta)

    document.write("La cantidad de numeros pares son  :" + cantidadNumerosPares + "<br>" + "La cantidad de numeros impares son:  " + cantidadNumerosImpares + "<br>" + "La cantidad de numeros pares son  :" + contadorCeros);

}
