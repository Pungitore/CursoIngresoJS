function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	max = 11; // no toma el maximo valor que deseamos se le suma 1
	min = 1;
	numeroRandom = Math.floor((Math.random() * (max - min)) + min);
	console.log(numeroRandom);

	if (numeroRandom >= 9) {
		alert('Excelente');
	}
	else {
		if (numeroRandom >= 4) {
			alert('Aprobo');
		}
		else {
			alert('Vamos, la proxima se puede')
		}
	}


}//FIN DE LA FUNCIÓN