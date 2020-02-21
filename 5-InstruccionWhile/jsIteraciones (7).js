/*function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iterador;

	iterador = prompt("Cuantos numeros quiere ingresar?");

	while (contador < iterador) {
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


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
*/

function mostrar(){
	var contador=0;
	var acumulador=0;
	var respuesta= true;

	while (respuesta) {
		contador++
		var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}
			
		acumulador += numero;

		respuesta = confirm("¿Desea contiunar?");
	}
		
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}