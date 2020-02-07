/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var importeParseado;
    var iva;
    var montoFinal;

    importe =  document.getElementById("sueldo").value;
	importeParseado = parseInt(importe); 
    iva = importeParseado * 0.10;
    montoFinal = importeParseado + iva

    document.getElementById("resultado").value = montoFinal;
}
