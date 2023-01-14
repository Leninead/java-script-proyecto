
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

//-->Usando json para simular traer productos como lo hacemos desde una API
const containerCardsNovedades = document.querySelector("#container-cards-novedades");


fetch("../productos.json")
.then(response => response.json())
.then(data => {
 data.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML =
    `<img src= "${card.imagen}" class="card-img-top" alt="">
    <div class="card-body"> 
    <h3 class="card-title">${card.nombre}</h3>
    <p class="card-text">${"$"} ${card.precio}</p>
    <p class="card-text">${card.disponible}</p>
    </div>`
    ;
    containerCardsNovedades.append(div);

 
 });
})