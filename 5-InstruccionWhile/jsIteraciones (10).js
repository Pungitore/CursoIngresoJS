function mostrar() {
	//declarar contadores y variables 
	var contador = 0;
	var acumuladorPositivo = 0;
	var acumuladorNegativo = 0;
	var respuesta = true;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorDePares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaEntrePositivosYNegativos;

	while (respuesta) {
	/*	var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}*/
		
		do {
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		} while(isNaN(numero));

		// CALCULOS
		if (numero > 0) {
			acumuladorPositivo += numero;
			contadorPositivos++;
		}
		else if (numero < 0) {
			acumuladorNegativo += numero
			contadorNegativos++;
		}
		else {
			contadorCeros++;
		}

		//PUNTO6
		if (numero % 2 == 0) {
			contadorDePares++
		}


		respuesta = confirm("¿Desea contiunar?");
	}

	//PUNTO 7 PROMEDIO +
	if (contadorPositivos != 0) {
		promedioPositivos = acumuladorPositivo / contadorPositivos;
	}

	//PUNTO 8 PROMEDIO -
	if (contadorNegativos != 0) {
		promedioNegativos = acumuladorNegativo / contadorNegativos;
	}

	//PUNTO 9
	diferenciaEntrePositivosYNegativos = acumuladorPositivo - acumuladorNegativo;

		document.write("7- Promedio Positivos: " + promedioPositivos + "<br>");
		document.write("8- Promedio Negativos: " + promedioNegativos + "<br>");
		document.write("9- Diferencia entre los Positivos y Negativos: " + diferenciaEntrePositivosYNegativos + "<br>");
}//FIN DE LA FUNCIÓN