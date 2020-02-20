function mostrar()
{

	var contador=0;
	var acumulador = 0;
	

	while (contador < 5) {
		contador ++;
		var numero = prompt("Ingrese un numero");		
		
		// Validar
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Ingrese un numero valido");	
			numero = parseInt(numero);
		}

		//Acumulador
		acumulador += numero;
}


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN


/*function mostrar()
{

	var contador=0;
	var acumulador = prompt("Ingrese un numero");
	

	while (contador < 4) {
		contador ++
		acumulador = parseInt(acumulador);
		acumulador = acumulador + parseInt(prompt("Ingrese otro numero"));		
 }

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5;

}//FIN DE LA FUNCIÓN*/