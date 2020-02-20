function mostrar()
{

var sexo = prompt("ingrese f ó m .");
 
 while(sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m" )
    {
        sexo = prompt("Ingrese un sexo valido.");
    }

document.getElementById('Sexo').value = sexo.toLowerCase();

}//FIN DE LA FUNCIÓN