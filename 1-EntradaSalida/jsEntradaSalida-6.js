/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroIngresado1;
    var numeroIngresado2;
    var numeroParseado1;
    var numeroParseado2;
    var resultado; 

    numeroIngresado1 =  document.getElementById("numeroUno").value;
    numeroIngresado2 =  document.getElementById("numeroDos").value;
    
    numeroParseado1 = parseInt(numeroingresado1);
    numeroParseado2 = parseInt(numeroingresado2);
    
    resultado = numeroparseado1 + numeroparseado2;
   
    alert(resultado)
}

