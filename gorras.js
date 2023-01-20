
const GORRAS = [
    {
        id: "gorra-01",
        titulo: "Edicion: 'Universo'",
        color: "Negra",
        imagen: "../img/gorras/universo-tazas.jpg",
        categoria: {
            nombre: "Gorras",
            id: "gorras",
        },
        precio: 1200,

    },
    {
        id: "gorra-02",
        titulo: "Edicion: 'Nasa'",
        color: "Roja",
        imagen: "../img/gorras/roja.jpg",
        categoria: {
            nombre: "Gorras",
            id: "gorras",
        },
        precio: 1200,

    },
    {
        id: "gorra-03",
        titulo: "Edicion: 'Bitcoin'",
        color: "Amarrilla",
        imagen: "../img/gorras/amarilla.jpg",
        categoria: {
            nombre: "Gorras",
            id: "gorras",
        },
        precio: 1200,

    },
    {
        id: "gorra-04",
        titulo: "Edicion: 'Programacion'",
        color: "Azul",
        imagen: "../img/gorras/azul.jpg",
        categoria: {
            nombre: "Gorras",
            id: "gorras",
        },
        precio: 1200,

    },
    {
        id: "gorra-05",
        titulo: "Edicion: 'Planeta verde'",
        color: "Verde",
        imagen: "../img/gorras/verde.jpg",
        categoria: {
            nombre: "Gorras",
            id: "gorras",
        },
        precio: 1200,

    },

]

const containerCardsGorras = document.querySelector("#container-cards-gorras");

let botonesAgregar = document.querySelectorAll(".producto-gorra");

function cargarProductos() {

    GORRAS.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
            `<img src="${card.imagen}" class="card-img-top" alt="${card.edicion}">
        <div class="card-body">
          <h3 class="card-title">${card.titulo}</h3>
          <p class="card-text">${card.color}</p>
          <p class="card-text">${"$"} ${card.precio}</p>
          <a class="producto-gorra" id= "${card.id}">Agregar</a>
        </div>`
            ;

        containerCardsGorras.append(div);




    });

    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}

cargarProductos();




function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-gorra");

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
    const productoAgregado = GORRAS.find(card => card.id === idBoton);


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






toastify = document.querySelector("#container-cards-gorras");



toastify.addEventListener("click", () => {

    Toastify({
        text: "Gorra agregada al carrito",
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
