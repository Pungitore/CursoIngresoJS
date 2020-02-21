/*function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;
	var iterador;

	iterador = prompt("Cuantos numeros quiere ingresar?");

	while (contador < iterador) {
		contador++;
		var numero = prompt("Ingrese un numero");

		// Validar
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}

		if (numero > 0) {
			positivo += numero
		}
		else {
			negativo = negativo * numero
		}

	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN*/



function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;


	while (respuesta) {
		var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}
			
		
		
		if (numero >= 0) {
			positivo += numero
		}
		else {
			negativo *= numero 
			contador ++;
		}
		respuesta = confirm("¿Desea contiunar?");
	}

	if( contador == 0) {
		negativo = 0;
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN