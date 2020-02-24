var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function comenzar() {
	//Genero el número RANDOM entre 1 y 3
	var max;
	var min;

	max = 4;
	min = 1;
	numeroRandom = Math.floor((Math.random() * (max - min)) + min);
	console.log(numeroRandom);



}//FIN DE LA FUNCIÓN
function piedra() {
	if (numeroRandom == 1) {
		alert("Hay empate.");
		ContadorDeEmpates++;
		console.log(ContadorDeEmpates);
	}
	else {
		if (numeroRandom == 2) {
			alert("Perdiste.");
			ContadorDePerdidas++;
			console.log(ContadorDePerdidas);

		}
		else {
			alert("Ganaste.");
			ContadorDeGanadas++;
			console.log(ContadorDeGanadas);
		}
	}
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
}//FIN DE LA FUNCIÓN

function papel() {
	if (numeroRandom == 2) {
		alert("Hay empate.");
		ContadorDeEmpates++;
		console.log(ContadorDeEmpates);
	}
	else {
		if (numeroRandom == 3) {
			alert("Perdiste.");
			ContadorDePerdidas++;
			console.log(ContadorDePerdidas);
		}
		else {
			alert("Ganaste.");
			ContadorDeGanadas++;
			console.log(ContadorDeGanadas);
		}
	}
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
}//FIN DE LA FUNCIÓN

function tijera() {
	if (numeroRandom == 3) {
		alert("Hay empate.");
		ContadorDeEmpates++;
		console.log(ContadorDeEmpates);
	}
	else {
		if (numeroRandom == 1) {
			alert("Perdiste.");
			ContadorDePerdidas++;
			console.log(ContadorDePerdidas);
		}
		else {
			alert("Ganaste.");
			ContadorDeGanadas++;
			console.log(ContadorDeGanadas);

		}
	}
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
}//FIN DE LA FUNCIÓN

function mostrarResultado() {

}