// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){

    const porcentajeConDescuento = 100 - descuento;
    const precioPorDescuento = (precio * porcentajeConDescuento) / 100;

    return precioPorDescuento;

}



//Podemos imprimir un objeto en el console con todas las variables.
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioPorDescuento
// })


function descuentoDelPrecio() {  
    const inputPrice = document.getElementById('InputPrice').value;
    const inputDiscount = document.getElementById('InputDiscount').value;

    const precioTotalConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

    const precioDescuento = document.getElementById('PrecioDescuento');

    precioDescuento.innerText = ("El precio total con el descuento es de $" + precioTotalConDescuento );
}