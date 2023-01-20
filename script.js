
let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();

} else {
    productosEnCarrito = []
}



function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = PRODUCTS.find(card => card.id === idBoton);


    if (productosEnCarrito.some(card => card.id === idBoton)) {
        const index = productosEnCarrito.findIndex(card => card.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, card) => acc + card.cantidad, 0);
    numeroCarrito.innerText = nuevoNumerito;

    console.log(nuevoNumerito);
}

actualizarNumerito();
