let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll("#carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar")

function cargarProductosCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0) {



        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");


        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(card => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
        <img class="carrito-producto-imagen" src="${card.imagen}" alt="${card.titulo}">

                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${card.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${card.cantidad}</p>

                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${card.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${card.precio * card.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${card.id}"><i class="bi bi-trash3-fill"></i></button>

        `;
            contenedorCarritoProductos.append(div);
        });

    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}


function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;

    const index = productosEnCarrito.findIndex(card => card.id === idBoton)


    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito);


function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, card) => acc + (card.precio * card.cantidad), 0);
    total.innerText = `$${totalCalculado}`
}

botonComprar.addEventListener("click", comprarCarrito);


function comprarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}



function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, card) => acc + card.cantidad, 0);
   numeroCarrito.innerText = nuevoNumerito;

    console.log(nuevoNumerito);
}

actualizarNumerito();

toastify = document.querySelector("#carrito-acciones-comprar");

toastify.addEventListener("click", () => {

    Toastify({
        text: "Felicidades por tu compra :)",
        duration: 4000,
        destination: "../pages/car.html",
        newWindow: false, 
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to left, rgba(109, 101, 101, 0.623), rgba(48, 3, 42, 0.993))",
        },
        onClick: function () { } // Callback after click
    }).showToast();
})

