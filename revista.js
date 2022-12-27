
const PRODUCTS = [
    {
        id: "revista-01" ,
        titulo: "Ciencia tecnológica",
        mes: "Enero",
        imagen: "../img/revistas/enero.jpg",
        categoria: {
            nombre: "Revistas",
            id: "revista",
        },
        precio: 800,
        
},
{
    id: "revista-02" ,
    titulo: "Aprenda a Programar",
    mes: "Marzo",
    imagen: "../img/revistas/marzo.gif",
    categoria: {
        nombre: "Revistas",
        id: "revista",
    },
    precio: 800,
    
},
{
    id: "revista-03" ,
    titulo: "Planeta verde",
    mes: "Mayo",
    imagen: "../img/revistas/mayo.jpg",
    categoria: {
        nombre: "Revistas",
        id: "revista",
    },
    precio: 800,
   
},
{
    id: "revista-04" ,
    titulo: "James Webb",
    mes: "Julio",
    imagen: "../img/revistas/julio.jpg",
    categoria: {
        nombre: "Revistas",
        id: "revista",
    },
    precio: 800,
   
},
{
    id: "revista-05" ,
    titulo: "Criptomonedas en Argentina",
    mes: "Septiembre",
    imagen: "../img/revistas/septiembre.jpg",
    categoria: {
        nombre: "Revistas",
        id: "revista",
    },
    precio: 800,
   
},
{
    id: "revista-06" ,
    titulo: "Inteligencia Artificial",
    mes: "Noviembre",
    imagen: "../img/revistas/noviembre.jpg",
    categoria: {
        nombre: "Revistas",
        id: "revista",
    },
    precio: 800,
    
},
]

const containerCardsRevistas = document.querySelector("#container-cards-revistas");

let botonesAgregar = document.querySelectorAll(".producto-revista");

function cargarProductos() {

   PRODUCTS.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = 
        `<img src="${card.imagen}" class="card-img-top" alt="${card.titulo}">
        <div class="card-body">
          <h3 class="card-title">${card.titulo}</h3>
          <p class="card-text">${card.mes}</p>
          <p class="card-text">${card.precio}</p>
          <a class="producto-revista" id= "${card.id}">Agregar</a>
        </div>`
        ;

        containerCardsRevistas.append(div);
        
      
       
        
    });
  
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}
 
cargarProductos();




function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-revista");

    botonesAgregar.forEach(boton => (
        boton.addEventListener("click", agregarAlCarrito)
    ));
};
let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();

}else {
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
    let nuevoNumerito = productosEnCarrito.reduce((acc,card) => acc + card.cantidad, 0);
    numerito =   nuevoNumerito; 

    console.log( nuevoNumerito);
}


