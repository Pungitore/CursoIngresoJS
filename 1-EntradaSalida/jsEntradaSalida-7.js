/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
    
var numeroIngresado1;
var numeroIngresado2;
var numeroParseado1;
var numeroParseado2;
var resultado; 

function sumar()
{	
    numeroIngresado1 =  document.getElementById("numeroUno").value;
    numeroIngresado2 =  document.getElementById("numeroDos").value;
    
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    
    resultado = numeroParseado1 + numeroParseado2;
   
    alert("La suma es: " + resultado)
}

function restar()
{

    numeroIngresado1 =  document.getElementById("numeroUno").value;
    numeroIngresado2 =  document.getElementById("numeroDos").value;
    
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    
    resultado = numeroParseado1 - numeroParseado2;
   
    alert("La resta es: " + resultado)
}

function multiplicar()
{ 
    numeroIngresado1 =  document.getElementById("numeroUno").value;
    numeroIngresado2 =  document.getElementById("numeroDos").value;
    
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    
    resultado = numeroParseado1 * numeroParseado2;
   
    alert("La multiplicacion es: " + resultado)
}

function dividir()
{
    numeroIngresado1 =  document.getElementById("numeroUno").value;
    numeroIngresado2 =  document.getElementById("numeroDos").value;
    
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    
    resultado = numeroParseado1 / numeroParseado2;
   
    alert("La divicion es: " +resultado)
}

