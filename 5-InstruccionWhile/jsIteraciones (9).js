function mostrar() {

	var contador = 0;
	var respuesta = true;
	var minimo;
	var maximo;
	var primeraIteracion = true;

	while (respuesta) {
		var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("ERROR. Ingrese un numero valido");
			numero = parseInt(numero);
		}

		//CALCULO
		if (primeraIteracion) {
			primeraIteracion = false;
			minimo = numero;
			maximo = numero;
		}
		else {
			//Apartir de 2da iteracion 
			if (numero > maximo) {
				maximo = numero;
			}
			if (numero < minimo) {
				minimo = numero
			}
		}
		respuesta = confirm("¿Desea contiunar?");
	}
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}//FIN DE LA FUNCIÓN