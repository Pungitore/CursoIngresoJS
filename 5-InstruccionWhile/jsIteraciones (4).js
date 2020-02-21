function mostrar() {

	var numero = 11 //prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 9 || isNaN(numero)) {
		numero = prompt("Ingrese un numero valido.");
		numero = parseInt(numero);

	}
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN
