/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */




function ComenzarIngreso() {
    var edad = prompt("Ingrese la edad entre 18 y 90.");
    //PUNTO 1
    while (edad < 18 || edad > 90 || isNaN(edad)) {
        edad = prompt("Ingrese una edad permitida.");
        edad = parseInt(edad);

        while (isNaN(edad)) {
            edad = prompt("Ingrese un numero valido");
            edad = parseInt(edad);
        }
    }
    document.getElementById("Edad").value = edad;

    //PUNTO 2
    var sexo = prompt("Ingrese sexo. M para masculino y F para femenino.");
    while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
        sexo = prompt("Ingrese un sexo valido.");
    }
    document.getElementById("Sexo").value = sexo

    //PUNTO 3
    var estadoCivil = prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos .");
    while (estadoCivil != "1" && estadoCivil != "2" && estadoCivil != "3" && estadoCivil != "4") {
        estadoCivil = prompt("Ingrese un estado civil valido");
    }
    if (estadoCivil == 1) {
        document.getElementById("EstadoCivil").value = "Soltero/a"
    }
    else {
        if (estadoCivil == 2) {
            document.getElementById("EstadoCivil").value = "Casado/a"
        }
        else {
            if (estadoCivil == 3) {
                document.getElementById("EstadoCivil").value = "Divorciado/a"
            }
            else {
                document.getElementById("EstadoCivil").value = "Viudo/a"

            }
        }
    }

    //PUNTO 4
    var sueldoBruto = prompt("ingrese un sueldo bruto no menor a 8000.")

    while (sueldoBruto < 8000 || isNaN(sueldoBruto)) {
        sueldoBruto = prompt("Ingrese un Sueldo Bruto mayor a los 8000");
        sueldoBruto = parseInt(sueldoBruto);

        while (isNaN(sueldoBruto)) {
            sueldoBruto = prompt("Ingrese un Sueldo Bruto mayor a los 8000");
            sueldoBruto = parseInt(sueldoBruto);
        }
    }
    document.getElementById("Sueldo").value = sueldoBruto;

    //PUNTO 5
    var legajo = prompt("ingrese un legajo de nomas de 4 digitos.")

    while (legajo < 1000 || legajo > 9999) {
        legajo = prompt("Ingrese un legajo valido");
        legajo = parseInt(legajo);

        while (isNaN(legajo)) {
            legajo = prompt("Ingrese un legajo");
            legajo = parseInt(legajo);
        }
    }
    document.getElementById("Legajo").value = legajo;

    //PUNTO6
    var nacionalidad = prompt("Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

    while (nacionalidad.toLowerCase() != "a" && nacionalidad.toLowerCase() != "e" && nacionalidad.toLowerCase() != "n") {
        nacionalidad = prompt("Ingrese una nacionalidad valida.");
    }
    if (nacionalidad == "a") {
        document.getElementById("Nacionalidad").value = "Argentina";
    }
    else if (nacionalidad == "e") {
        document.getElementById("Nacionalidad").value = "Extranjero";
    }
    else {
        document.getElementById("Nacionalidad").value = "Nacionalizado";
    }


}



