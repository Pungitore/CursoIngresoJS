function mostrar() {
    var respuesta;
    var peso;
    var marca;
    var temperatura;
    var contadorTemperaturasPares = 0;
    var primeraVez = true;
    var maximoPeso;
    var minimoPeso;
    var maximoMarca;
    var minimoMarca;
    var contadorMarcaMenorACero = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var promedioPesoTotal;

    do {
        

        do {
            marca = prompt("Ingrese marca del producto.");
        } while (!isNaN(marca));

        do {
            peso = prompt("Ingrese un peso entre 1 y 100.");
            peso = parseInt(peso);
        } while (isNaN(peso) || peso < 1 || peso > 100);

        do {
            temperatura = prompt("Ingrese la temperatura de almacenamiento entre -30 y 30.");
            temperatura = parseInt(temperatura);
        } while (isNaN(temperatura) || temperatura < -31 || temperatura > 31);

        //PUNTO A
        if (temperatura % 2 == 0) {
            contadorTemperaturasPares++;
        }

        //PUNTO B Y F
        if (primeraVez) {
            primeraVez = false;
            maximoPeso = peso;
            minimoPeso = peso;
            maximoMarca = marca;
            minimoMarca = marca;
        }
        else {
            if (peso > maximoPeso) {
                maximoPeso = peso;
                maximoMarca = marca;
            }

         else if (peso < minimoPeso) {
                minimoPeso = peso;
                minimoMarca = marca;
            }
        }

        //PUNTO C 
        if (temperatura < 0) {
            contadorMarcaMenorACero++;
        }

        //PUNTO D 
        contadorPeso++
        acumuladorPeso += peso
       
        respuesta = confirm("Desea continuar?");
    } while (respuesta);

    

    //PUNTO F
    if(contadorPeso > 0){
    promedioPesoTotal = acumuladorPeso / contadorPeso;
    }
    else{
        promedioPesoTotal = alert("No ingreso productos");
    }
  
    document.write("Cantidad de temperturas pares: " + contadorTemperaturasPares + "<br>");
    document.write( "La marca del producto mas pesado: " + maximoMarca + "<br>");
    document.write("Cantidad de productos menores a 0 grados: " + contadorMarcaMenorACero + "<br>");
    document.write ("Promedio de peso total: " + promedioPesoTotal + "<br>") ;
    document.write ("Peso Maximo: " + maximoPeso + "<br>") ;
    document.write ("Peso Minimo: " + minimoPeso);
   
}
