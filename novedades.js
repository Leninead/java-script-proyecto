
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

//-->Usando json para simular a traves de una RUTA RELATIVA, y asi traer productos como lo hacemos desde una API

const containerCardsNovedades = document.querySelector("#container-cards-novedades");


fetch("../productos.json")
.then(response =>  response.json())

.then(data => {
   

        let stocks = true;

        function time(ms) {
            return new Promise ((resolve, reject) => {
                stocks?setTimeout(resolve,ms):reject(console.log("sin stock"))
            })
        }
        
        async function encargar() {
            try{
            
               

                await time(0000)
                showProducts(data);

                
                await time(4000)
             
        
            }catch(error){
              
            }
            finally{
                console.log("cierre de ventas por dia");
            }
        }
        
        encargar();
      
   
   
    

  
})





function showProducts(products) {
    products.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
        `<img src= "${card.imagen}" class="card-img-top" alt="">
        <div class="card-body"> 
        <h3 class="card-title">${card.nombre}</h3>
        <p class="card-text">${"$"} ${card.precio}</p>
        <p class="card-text">${card.disponible}</p>
        <a href="../pages/formulario.html" class="producto-encargar" id= "${card.id}">Encargar</a>
        </div>`
        ;
        containerCardsNovedades.append(div);
      
      
     
     });
}





toastify = document.querySelector("#container-cards-novedades");



toastify.addEventListener("click",() => {

    Toastify({
        text: "Click aqui para encargar",
        duration: 4000,
        destination: "../pages/formulario.html",
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


  