function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	max = 11;
	min = 1;
	numeroRandom = Math.floor((Math.random() * (max - min)) + min);
	console.log(numeroRandom);

	if (numeroRandom >= 9 && numeroRandom == 10) {
		alert('Excelente');
	}	
	else {
		if (numeroRandom >= 4 && numeroRandom <= 8) {
		alert('Excelente');
	}
	else { alert('Vamos, la proxima se puede')
		}
	}
	
	
}//FIN DE LA FUNCIÓN