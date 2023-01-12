
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





/*
//Saludo MARCA

const MARCA = "Somos Ciencia Magazine"
const BIENVENIDA = ("¡Bienvenido a " + MARCA + ".");

//variables
let volver = "a";
let salir = "b";



console.log(MARCA);
alert(MARCA);


class Cliente {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
}


let clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());




while ((clienteUno.nombre == "") || (clienteUno.apellido == "") || (clienteUno.correo == "") || ((clienteUno.correo).search("@") == -1)) {

    console.log("Debes ingresar todos los campos solicitados");
    alert("Debes ingresar todos los campos solicitados, en email deberas usar un @");

    clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());
}

console.log(BIENVENIDA + " " + clienteUno.toString() + " " + ", tu portal de ciencia favorito");
alert(BIENVENIDA + " " + clienteUno.toString() + " " + ", tu portal de ciencia favorito")

//ARRAY para seleccion de las operaciones

let listaDeOperaciones = ["1.- Revistas", "2.- Libros", "3.- Gorras", "4.- Tazas"];





//--> Objetos y arrays <--//   

//Revistas
class Revista {
    constructor(mes, nombre, precio) {
        this.mes = mes;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    toString() {
        return this.mes + " (" + this.precio.toFixed(2) + ")";
    }
}

let edicionRevista = [];

edicionRevista.push(new Revista("Enero", "Es nuestra primera edicion", 800));
edicionRevista.push(new Revista("Marzo", "Aprende a Programar", 800));
edicionRevista.push(new Revista("Mayo", "Planeta verde", 800));
edicionRevista.push(new Revista("Julio", "James Webb", 800));
edicionRevista.push(new Revista("Septiembre", " Criptomonedas en Argentina", 800));
edicionRevista.push(new Revista("Noviembre", "Inteligencia Artificial", 800));

//Libros

class Libro {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    toString() {
        return this.nombre + + " (" + this.precio.toFixed(2) + ")";
    }
}

let edicionLibro = [];

edicionLibro.push(new Libro("Nuestro Planeta", 1600));
edicionLibro.push(new Libro("Explorando el Universo", 1800));
edicionLibro.push(new Libro("Descubriendo el bitcoin", 2000));
edicionLibro.push(new Libro("Patrones de diseño", 2200));

//Gorras
class Gorra {
    constructor(color, precio) {
        this.color = color;
        this.precio = parseFloat(precio);
    }
    toString() {
        return this.color + + " (" + this.precio.toFixed(2) + ")";
    }
}

let edicionGorra = [];

edicionGorra.push(new Gorra("Negra", 1200));
edicionGorra.push(new Gorra("Roja", 1200));
edicionGorra.push(new Gorra("Amarilla", 1200));
edicionGorra.push(new Gorra("Azul", 1200));
edicionGorra.push(new Gorra("Verde", 1200));

//Tazas
class Taza {
    constructor(logo, precio) {
        this.logo = logo;
        this.precio = parseFloat(precio);
    }
    toString() {
        return this.logo + + " (" + this.precio.toFixed(2) + ")";
    }
}

let edicionTaza = [];

edicionTaza.push(new Taza("Logo Ciencia", 1000));
edicionTaza.push(new Taza("Logo Tecnología", 1000));
edicionTaza.push(new Taza("Logo Universo", 1000));
edicionTaza.push(new Taza("Logo Business", 1000));

//Funciones

function elegirOperacion() {
    let operacion = parseInt(prompt("Selecciona el producto de tu preferencia.\n " + "\nPor Ejemplo '1' para Revista " + "\n\n" + (listaDeOperaciones[0]) + "\n" + (listaDeOperaciones[1]) + "\n" + (listaDeOperaciones[2]) + "\n" + (listaDeOperaciones[3]) + "\n"));

    switch (operacion) {
        case 1:
            alert("Las revistas tiene un costo de 800$");
            console.log("Las revistas tiene un costo de 800$");
            compraRevista();
            cierreVenta();
            break;
        case 2:

            compraLibro();
            cierreVenta();
            break;
        case 3:
            alert("Las gorras tienen un costo de 1200$")
            compraGorra();
            cierreVenta();
            break;
        case 4:
            alert("Las tazas tienen un costo de 1000$")
            compraTaza();
            cierreVenta();
            break;

        default:
            console.log("Debes seleccionar una opción entre 1 y 4");
            alert("Debes seleccionar una opción entre 1 y 4");
            elegirOperacion();

            break;
    }



}

//Function para opcion Revista
function compraRevista() {
    let seleccionRevista = parseInt(prompt("Elije la edicion mensual de tu preferencia:" + "\n\n" + "1.- " + (edicionRevista[0].mes) + "\n" + "2.- " + (edicionRevista[1].mes) + "\n" + "3.- " + (edicionRevista[2].mes) + "\n" + "4.- " + (edicionRevista[3].mes) + "\n" + "5.- " + (edicionRevista[4].mes) + "\n" + "6.- " + (edicionRevista[5].mes)));

    switch (seleccionRevista) {
        case 1:

            alert("Enero es nuestra Primera Edicion");
            console.log("Las revistas tiene un costo de $800 pesos");

            calcularCompraRevista();

            break;

        case 2:
            alert("Marzo es nuestra edicion Aprende a Progrmar")
            calcularCompraRevista();
            break;
        case 3:
            alert("Mayo es nuestra edicion Planeta verde")
            calcularCompraRevista();
            break;
        case 4:
            alert("Julio es nuestra edicion James Webb")
            calcularCompraRevista();
            break;
        case 5:
            alert("Septiembre es nuestra edicion Criptomonedas en Argentina")
            calcularCompraRevista();
            break;
        case 6:
            alert("Noviembre es nuestra edicion Inteligencia Artificial")
            calcularCompraRevista();
            break;

        default:
            console.log("Debes seleccionar una opción entre 1 y 6");
            alert("Debes seleccionar una opción entre 1 y 6");
            compraRevista();
            break;
    }

}

elegirOperacion();

function calcularCompraRevista() {
    let cantidadRevista = prompt("indica la cantidad de Revista que deseas");
    console.log("indica la cantidad de Revista que deseas");

    while (isNaN(parseInt(cantidadRevista))) {
        alert("Necesitas agregar una cantidad numerica");
        console.log("Necesitas agregar una cantidad numerica");
        cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        console.log("indica la cantidad de Revista que deseas");
    }

    while ((parseInt(cantidadRevista) <= 0)) {
        alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
        console.log("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
        cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        console.log("indica la cantidad de Revista que deseas");

    }

    let suma = parseInt(cantidadRevista) * ((edicionRevista[0].precio));

    alert(" El monto a pagar es " + suma);
    console.log(" El monto a pagar es " + suma);

    let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");
    console.log("Serias tan amable de indicar con cuanto vas a abonar?");



    if (pago < suma) {
        alert("Tu Saldo es insuficiente para la compra")
        console.log("Tu Saldo es insuficiente para la compra");
    } else if (pago >= suma) { alert("Muchas gracias " + " " + clienteUno.toString() + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma))); }


}
// Funcion para Libro
function compraLibro() {
    let seleccionLibro = parseInt(prompt("Elije el libro de tu preferencia:" + "\n\n" + "1.- " + (edicionLibro[0].nombre) + "\n" + "2.- " + (edicionLibro[1].nombre) + "\n" + "3.- " + (edicionLibro[2].nombre) + "\n" + "4.- " + (edicionLibro[3].nombre)));

    switch (seleccionLibro) {
        case 1:
            alert("El costo del libro 'Nuestro Planeta' es de 1600$ ")
            console.log("El costo del libro 'Nuestro Planeta' es de 1600$ ");
            calcularCompraLibro();
            break;
        case 2:
            alert("El costo del libro 'Explorando el Universo' es de 1800$  ")
            console.log("El costo del libro 'Explorando el Universo' es de 1800$  ");
            calcularCompraLibro();
            break;
        case 3:
            alert("El costo del libro 'Descubriendo el Bitcoin' es de 2000$ ")
            console.log("El costo del libro 'Descubriendo el Bitcoin' es de 2000$ ");
            calcularCompraLibro();
            break;
        case 4:
            alert("El costo del libro 'Descubriendo el Bitcoin' es de 2200$ ")
            console.log("El costo del libro 'Descubriendo el Bitcoin' es de 2200$ ");
            calcularCompraLibro();
            break;



        default:
            console.log("Debes seleccionar una opción entre 1 y 4");
            alert("Debes seleccionar una opción entre 1 y 4");
            compraLibro();
            break;
    }
}


function calcularCompraLibro() {

    let cantidadLibros = prompt("Indica la cantidad de libros que deseas.");

    while (isNaN(parseInt(cantidadLibros))) {
        alert("Necesitas agregar una cantidad numerica");
        console.log("Necesitas agregar una cantidad numerica");
        cantidadLibros = prompt("indica la cantidad de Libros que deseas");
        console.log("indica la cantidad de Libros que deseas");
    }

    while ((parseInt(cantidadLibros) <= 0)) {
        alert("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");
        console.log("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");

        cantidadLibros = prompt("indica la cantidad de Libros que deseas");
        console.log("indica la cantidad de Libros que deseas");
    }

    let suma = parseInt(cantidadLibros) * ((edicionLibro[0].precio));

    alert("El monto a pagar es " + suma);
    console.log("El monto a pagar es " + suma);

    let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");
    console.log("Serias tan amable de indicar con cuanto vas a abonar?");

    if (pago < suma) {

        alert("Tu Saldo es insuficiente para la compra")
        console.log("Tu Saldo es insuficiente para la compra");

    }

    if (pago < suma) {
        alert("Tu Saldo es insuficiente para la compra")
        console.log("Tu Saldo es insuficiente para la compra");
    } else if (pago >= suma) { alert("Muchas gracias " + " " + clienteUno.toString() + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma))); }

}
//Function para Gorra

function compraGorra() {
    let seleccionGorra = parseInt(prompt("Elije la gorra de tu preferencia:" + "\n\n" + "1.- " + (edicionGorra[0].color) + "\n" + "2.- " + (edicionGorra[1].color) + "\n" + "3.- " + (edicionGorra[2].color) + "\n" + "4.- " + (edicionGorra[3].color) + "\n" + "5.- " + (edicionGorra[4].color)));

    switch (seleccionGorra) {
        case 1:
            alert("Producto seleccinado: Gorra Negra")
            calcularCompraGorra();
            break;
        case 2:
            alert("Producto seleccinado: Gorra Roja")
            calcularCompraGorra();
            break;
        case 3:
            alert("Producto seleccinado: Gorra Amarilla")
            calcularCompraGorra();
            break;
        case 4:
            alert("Producto seleccinado: Gorra Azul")
            calcularCompraGorra();
            break;
        case 5:
            alert("Producto seleccinado: Gorra Verde")
            calcularCompraGorra();
            break;

        default:
            console.log("Debes seleccionar una opción entre 1 y 5");
            alert("Debes seleccionar una opción entre 1 y 5");
            compraGorra();
            break;
    }
}

function calcularCompraGorra() {
    let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")
    console.log("Indica la cantidad de Gorras que deseas.");


    while (isNaN(parseInt(cantidadGorras))) {
        alert("Necesitas agregar una cantidad numerica");
        console.log("Necesitas agregar una cantidad numerica");
        cantidadGorras = prompt("indica la cantidad de Revista que deseas");
        console.log("indica la cantidad de Revista que deseas");

    }
    while ((parseInt(cantidadGorras) <= 0)) {
        alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
        console.log("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
        cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
        console.log("indica la cantidad de Gorras que deseas");
    }

    let suma = parseInt(cantidadGorras) * ((edicionGorra[0].precio));

    alert("El monto a pagar es " + suma);
    console.log("El monto a pagar es " + suma);

    let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");
    console.log("Serias tan amable de indicar con cuanto vas a abonar?");


    if (pago < suma) {
        alert("Tu Saldo es insuficiente para la compra");
        console.log("Tu Saldo es insuficiente para la compra");
    } else if (pago >= suma) {
        alert("Muchas gracias " + " " + clienteUno.toString() + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        console.log("Muchas gracias " + " " + clienteUno.toString() + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
    }
}

function compraTaza() {
    let seleccionTaza = parseInt(prompt("Elije la taza de tu preferencia" + "\n\n" + "1.- " + (edicionTaza[0].logo) + "\n" + "2.- " + (edicionTaza[1].logo) + "\n" + "3.- " + (edicionTaza[2].logo) + "\n" + "4.- " + (edicionTaza[3].logo)));
    switch (seleccionTaza) {
        case 1:
            alert("Taza seleccionada: 'Logo Ciencia' ")
            calcularTaza();
            break;
        case 2:
            alert("Taza seleccionada: 'Logo Tecnología' ")
            calcularTaza();
            break;
        case 3:
            alert("Taza seleccionada: 'Logo Universo' ")
            calcularTaza();
            break;
        case 4:
            alert("Taza seleccionada: 'Logo Business' ")
            calcularTaza();
            break;


        default:
            console.log("Debes seleccionar una opción entre 1 y 4");
            alert("Debes seleccionar una opción entre 1 y 4");
            compraTaza();
            break;
    }
}
function calcularTaza() {
    let cantidadTazas = prompt("Indica la cantidad de Tazas que deseas.")
    console.log("Indica la cantidad de Tazas que deseas.");

    while (isNaN(parseInt(cantidadTazas))) {
        alert("Necesitas agregar una cantidad numerica");
        console.log("Necesitas agregar una cantidad numerica");
        cantidadTazas = prompt("indica la cantidad de Revista que deseas");
        console.log("indica la cantidad de Revista que deseas");

    }
    while ((parseInt(cantidadTazas) <= 0)) {
        alert("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
        console.log("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
        cantidadTazas = prompt("indica la cantidad de Tazas que deseas");
        console.log("indica la cantidad de Tazas que deseas");
    }

    let suma = parseInt(cantidadTazas) * ((edicionTaza[0].precio));

    alert("El monto a pagar es " + suma);
    console.log("El monto a pagar es " + suma);

    let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");
    console.log("Serias tan amable de indicar con cuanto vas a abonar?");


    if (pago < suma) {
        alert("Tu Saldo es insuficiente para la compra");
        console.log("Tu Saldo es insuficiente para la compra");
    } else if (pago >= suma) {
        alert("Muchas gracias " + " " + clienteUno.toString() + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        console.log("Muchas gracias " + " " + clienteUno.toString() + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
    }
}




function cierreVenta() {
    let salida = prompt("Elige la opcion de tu preferencia: " + "\n" + "\na-Volver al menu" + "\nb-Salir");
    console.log("Elige la opcion de tu preferencia: " + "\n" + "\na-Volver al menu" + "\nb-Salir");

    if (salida == volver) {
        elegirOperacion();
    } else {
        alert("Debes seleccionar una de las opciones indicada")
        salida = prompt("Elige la opcion de tu preferencia: " + "\n" + "\na-Volver al menu" + "\nb-Salir");
        console.log("Elige la opcion de tu preferencia: " + "\n" + "\na-Volver al menu" + "\nb-Salir");
    }

    if (salida == salir) {
        alert("Gracias por preferirnos sera hasta una proxima vez")
        console.log("Gracias por preferirnos sera hasta una proxima vez");
    }
}

*/



