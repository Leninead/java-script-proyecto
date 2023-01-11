
const LIBROS = [
    {
        id: "libro-01",
        titulo: "Nuestro Planeta",

        imagen: "../img/libros/nuiestro-planeta.jpg",
        categoria: {
            nombre: "Libros",
            id: "libros",
        },
        precio: 1600,

    },
    {
        id: "libro-02",
        titulo: "Explorando el Universo",

        imagen: "../img/libros/explorando-universo.jpg",
        categoria: {
            nombre: "Libros",
            id: "libros",
        },
        precio: 1600,

    },
    {
        id: "libro-03",
        titulo: "Descubriendo el Bitcoin",

        imagen: "../img/libros/bitcoin.webp",
        categoria: {
            nombre: "Libros",
            id: "libros",
        },
        precio: 1600,
    },

    {
        id: "libro-04",
        titulo: "Patrones de Diseño",

        imagen: "../img/libros/patrones.png",
        categoria: {
            nombre: "Libros",
            id: "libros",
        },
        precio: 1600,

    },

]

const containerCardsLibros = document.querySelector("#container-cards-libros");

let botonesAgregar = document.querySelectorAll(".producto-libro");

function cargarProductos() {

    LIBROS.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
            `<img src="${card.imagen}" class="card-img-top" alt="${card.titulo}">
        <div class="card-body">
          <h3 class="card-title">${card.titulo}</h3>
        
          <p class="card-text">${"$"} ${card.precio}</p>
          <a class="producto-libro" id= "${card.id}">Agregar</a>
        </div>`
            ;

        containerCardsLibros.append(div);




    });
    actualizarBotonesAgregar();
    console.log(botonesAgregar);

}

cargarProductos();


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-libro");

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
    const productoAgregado = LIBROS.find(card => card.id === idBoton);


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
    numerito = nuevoNumerito;

    console.log(nuevoNumerito);
}

toastify = document.querySelector("#container-cards-libros");

toastify.addEventListener("click", () => {
    Toastify({
        text: "Libro agregado al carrito",
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
