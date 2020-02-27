

function mostrar() {
    var contador = 0;
    var acumuladorNotas = 0;
    var notaMasBaja = 11;
    var sexoNotaBaja;
    var contadorVarones = 0;
    var nota;
    var sexo;
    var promedioNotas;

    while (contador < 5) {
        contador++

        do {
            nota = prompt("Ingrese una nota.");
            nota = parseInt(nota);

        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt("Ingrese un sexo. F o M")
        } while (sexo != "f" && sexo != "m");

        //PUNTO A
        acumuladorNotas += nota;

        //PUNTO B
        /*if(contador == 1){
            notaMasBaja = nota;
        }
        else {
            if (nota < notaMasBaja)
            {
                notaMasBaja = nota;
            }
        }*/
        if( nota < notaMasBaja){
            notaMasBaja = nota;
            sexoNotaBaja = sexo;
        }

        //PUNTO C
        if (nota >= 6 && sexo == "m" ){
            contadorVarones++;
        }


    }
        //PUNTO A
        promedioNotas = acumuladorNotas / contador;
        console.log(promedioNotas);
        console.log(notaMasBaja);
        console.log(sexoNotaBaja);
        console.log(contadorVarones);
}


