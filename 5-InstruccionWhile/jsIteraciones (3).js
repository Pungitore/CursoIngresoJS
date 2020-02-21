/*function mostrar() {

    var clave = prompt("ingrese el número clave.", "utn750");
    var contador = 0;

    while (clave.toLowerCase() != "utn750") {
        contador++;
        clave = prompt("Error! Ingrese el numero de clave.");
    }

    if (contador == 3) {
        alert("Intentos maximos ingresados");
    }
    else {
        alert("Bienvenido");
    }

}//FIN DE LA FUNCIÓN*/

function mostrar() {
    var clave = prompt("ingrese el número clave.");
    var contador = 0;

    do {
        contador++;
        clave = prompt("Error! Ingrese el numero de clave.");
    } while (clave.toLowerCase() != "utn750" && contador < 3);
   
    if (contador == 3) {
        alert("Intentos maximos ingresados");
    }
    else {
        alert("Bienvenido");
    }
}