
const TAZAS = [
    {
        id: "taza-01",
        titulo: "Logo Ciencia",

        imagen: "../img/tazas/logo-ciencia.jpg",

        precio: 1200,

    },
    {
        id: "taza-02",
        titulo: "Logo tecnologia",

        imagen: "../img/tazas/tecnologia.jpg",

        precio: 1200,

    },
    {
        id: "taza-03",
        titulo: "Logo Nuestro Universo",

        imagen: "../img/tazas/universo.jpg",
        categoria: {
            nombre: "Libros",
            id: "libros",
        },
        precio: 1200,
    },

    {
        id: "taza-04",
        titulo: "Logo Business",

        imagen: "../img/tazas/bussines.jpg",

        precio: 1200,

    },

]

const containerCardsLibros = document.querySelector("#container-cards-tazas");

let botonesAgregar = document.querySelectorAll(".producto-taza");

function cargarProductos() {

    TAZAS.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
            `<img src="${card.imagen}" class="card-img-top" alt="${card.titulo}">
        <div class="card-body">
          <h3 class="card-title">${card.titulo}</h3>
        
          <p class="card-text">${"$"} ${card.precio}</p>
          <a class="producto-taza" id= "${card.id}">Agregar</a>
        </div>`
            ;

        containerCardsLibros.append(div);




    });
    actualizarBotonesAgregar();
    console.log(botonesAgregar);

}

cargarProductos();


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-taza");

    botonesAgregar.forEach(boton => (
        boton.addEventListener("click", agregarAlCarrito)
    ));
};

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
    const productoAgregado = TAZAS.find(card => card.id === idBoton);


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


toastify = document.querySelector("#container-cards-tazas");

toastify.addEventListener("click", () => {
    Toastify({
        text: "Taza agregada al carrito",
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
