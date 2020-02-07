/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var imnporteParseado;
    var descuento;
    var descuentoTotal;

    importe = document.getElementById("importe").value;
    importeParseado = parseInt(importe);
    descuento = importeParseado * 0.25;
    descuentoTotal = importeParseado - descuento; 

    document.getElementById("resultado").value = descuentoTotal ;


}
