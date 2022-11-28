
alert("Somos Ciencia Magazine")

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if ((nombre == "") && (apellido == "")) {
    alert("Necesitas rellenar el campo de nombre y apellido para continuar la operacion")
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}

alert("Te damos la bienvenida " + " " + nombre + " " + apellido + " " + "a tu portal de ciencia favorito")

let saludo = prompt("Selecciona el producto de tu preferencia.\n " + "\nPor Ejemplo '1' para Revista " + "\n\n1-Revista" + "\n2-Libros" + "\n3-Gorras" + "\n4-Tazas")
let revista = 1;
let libros = 2;
let gorras = 3;
let tazas = 4;

while ((parseInt(saludo) !== revista) && (parseInt(saludo) !== libros) && (parseInt(saludo) !== gorras) && (parseInt(saludo) !== tazas)) {
    saludo = prompt("Selecciona el producto de tu preferencia.\n " + "\nPor Ejemplo '1' para Revista " + "\n\n1-Revista" + "\n2-Libros" + "\n3-Gorras" + "\n4-Tazas")
}

let montoRevista = 800;

if (saludo == 1) {

    let enero = 1;
    let Marzo = 2;
    let mayo = 3;
    let julio = 4;
    let septiembre = 5;
    let Noviembre = 6;



    let opcionRevista = prompt("Elige la edicion mensual de tu preferencia.\n " + "\n1-Enero" + "\n2-Marzo" + "\n3-Mayo" + "\n4-Julio" + "\n5-Septiembre" + "\n6-Noviembre");

    while ((parseInt(opcionRevista) !== enero) && (parseInt(opcionRevista) !== Marzo) && (parseInt(opcionRevista) !== mayo) && (parseInt(opcionRevista) !== julio) && (parseInt(opcionRevista) !== septiembre) && (parseInt(opcionRevista) !== Noviembre)) {
        opcionRevista = prompt("Elige la edicion mensual de tu preferencia.\n " + "\n1-Enero" + "\n2-Marzo" + "\n3-Mayo" + "\n4-Julio" + "\n5-Septiembre" + "\n6-Noviembre");
    }



    if (opcionRevista == 1) {
        alert("Enero es nuestra 'Primera Edicion'");


        alert("Las revistas tiene un costo de $800 pesos");


        let cantidadRevista = prompt("indica la cantidad de Revista que deseas");

        while ((parseInt(cantidadRevista) <= 0)) {
            alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
            cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        }
        let suma = parseInt(cantidadRevista) * 800;

        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }


    if (opcionRevista == 2) {
        alert("Marzo es nuestra edicion de 'Aprende a Progrmar'");

        alert("Las revistas tiene un costo de $800 pesos");

        let cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        while (parseInt(cantidadRevista) <= 0) {
            alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
            cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        }
        let suma = parseInt(cantidadRevista) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }

    if (opcionRevista == 3) {
        alert("Mayo es nuestra edicion  de 'Planeta verde'");

        alert("Las revistas tiene un costo de $800 pesos");

        let cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        while (parseInt(cantidadRevista) <= 0) {
            alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
            cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        }
        let suma = parseInt(cantidadRevista) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionRevista == 4) {
        alert("Julio es nuestra edicion  de 'James Webb'")

        alert("Las revistas tiene un costo de $800 pesos");

        let cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        while (parseInt(cantidadRevista) <= 0) {
            alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
            cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        }
        let suma = parseInt(cantidadRevista) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionRevista == 5) {
        alert("Septiembre es nuestra edicion  de 'Criptomonedas en Argentina'");

        alert("Las revistas tiene un costo de $800 pesos");

        let cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        while (parseInt(cantidadRevista) <= 0) {
            alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
            cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        }
        let suma = parseInt(cantidadRevista) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionRevista == 6) {
        alert("Noviembre es nuestra edicion  de 'Inteligencia Artificial'");

        alert("Las revistas tiene un costo de $800 pesos");

        let cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        while (parseInt(cantidadRevista) <= 0) {
            alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
            cantidadRevista = prompt("indica la cantidad de Revista que deseas");
        }
        let suma = parseInt(cantidadRevista) * 800;
        alert(" El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



        if (pago < suma) {
            alert("Tu Saldo es insuficiente para la compra")
        }

        if (pago >= suma) {

            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }




}


let montoPlaneta = 1600;
let montoUnivero = 1800;
let montoBitcoin = 2000;
let montoDiseno = 2200;

if (saludo == 2) {
    let nuestroPlaneta = 1;
    let universo = 2;
    let bitcoin = 3;
    let diseno = 4;

    let opcionLibros = prompt("Elige el libro de tu preferencia.\n " + "\n1-Nuestro Planeta" + "\n2-Explorando el universo" + "\n3-Descubriendo el bitcoin" + "\n4-Patrones de diseño");

    while ((parseInt(opcionLibros) !== nuestroPlaneta) && (parseInt(opcionLibros) !== universo) && (parseInt(opcionLibros) !== bitcoin) && (parseInt(opcionLibros) !== diseno)) {
        opcionLibros = prompt("Elige el libro de tu preferencia.\n " + "\n1-Nuestro Planeta" + "\n2-Explorndo el universo" + "\n3-Descubriendo el bitcoin" + "\n4-Patrones de diseño")
    }
    if (opcionLibros == 1) {
        alert("El costo del libro Nuestro Planeta es de $1600");

        let cantidadLibros = prompt("Indica la cantidad de libros que deseas.");


        while ((parseInt(cantidadLibros) <= 0)) {
            alert("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");
            cantidadLibros = prompt("indica la cantidad de Libros que deseas");
        }

        let suma = parseInt(cantidadLibros) * 1600;
        alert("El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }

    if (opcionLibros == 2) {
        alert("El costo del libro Explorando el Universo es de $1800");
        let cantidadLibros = prompt("Indica la cantidad de libros que deseas.");
        while ((parseInt(cantidadLibros) <= 0)) {
            alert("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");
            cantidadLibros = prompt("indica la cantidad de Libros que deseas");
        }

        let suma = parseInt(cantidadLibros) * 1800;

        alert("El monto a pagar es " + suma);
        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }

    if (opcionLibros == 3) {
        alert("El costo del libro Descubreindo el Bitcoin es de $2000");
        let cantidadLibros = prompt("Indica la cantidad de libros que deseas.");
        while ((parseInt(cantidadLibros) <= 0)) {
            alert("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");
            cantidadLibros = prompt("indica la cantidad de Libros que deseas");
        }

        let suma = parseInt(cantidadLibros) * 2000;
        alert("El monto a pagar es " + suma);
        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }
    if (opcionLibros == 4) {
        alert("El costo del libro Patrones de Diseño es de $2200");
        let cantidadLibros = prompt("Indica la cantidad de libros que deseas.");
        while ((parseInt(cantidadLibros) <= 0)) {
            alert("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");
            cantidadLibros = prompt("indica la cantidad de Libros que deseas");
        }

        let suma = parseInt(cantidadLibros) * 2200;
        alert("El monto a pagar es " + suma);

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }



}


let montoGorras = 1200;
if (saludo == 3) {
    let Negra = 1;
    let Roja = 2;
    let amarilla = 3;
    let azul = 4;
    let verde = 5;

    let opcionGorras = prompt("Elige tu color de gorra favorita.\n " + "\n1-Negra" + "\n2-Roja" + "\n3-Amarilla" + "\n4-Azul" + "\n5-Verde");

    while ((parseInt(opcionGorras) !== Negra) && (parseInt(opcionGorras) !== Roja) && (parseInt(opcionGorras) !== amarilla) && (parseInt(opcionGorras) !== azul) && (parseInt(opcionGorras) !== verde)) {
        opcionGorras = prompt("Elige tu color de gorra favorita.\n " + "\n1-Negra" + "\n2-Roja" + "\n3-Amarilla" + "\n4-Azul" + "\n5-Verde");
    }

    if (opcionGorras == 1) {
        alert("Las gorras tienen un costo de $1200 pesos")
        let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")

        while ((parseInt(cantidadGorras) <= 0)) {
            alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
            cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
        }

        let suma = parseInt(cantidadGorras) * 1200;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Gorra Negra. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }

    if (opcionGorras == 2) {
        alert("Las gorras tienen un costo de $1200 pesos")
        let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")
        while ((parseInt(cantidadGorras) <= 0)) {
            alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
            cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
        }

        let suma = parseInt(cantidadGorras) * 1200;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Gorra Roja. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }
    if (opcionGorras == 3) {
        alert("Las gorras tienen un costo de $1200 pesos")
        let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")
        while ((parseInt(cantidadGorras) <= 0)) {
            alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
            cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
        }

        let suma = parseInt(cantidadGorras) * 1200;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Gorra Amarilla. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }

    if (opcionGorras == 4) {
        alert("Las gorras tienen un costo de $1200 pesos")

        let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")
        while ((parseInt(cantidadGorras) <= 0)) {
            alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
            cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
        }

        let suma = parseInt(cantidadGorras) * 1200;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Gorra Azul. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }
    if (opcionGorras == 5) {
        alert("Las gorras tienen un costo de $1200 pesos")
        let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")
        while ((parseInt(cantidadGorras) <= 0)) {
            alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
            cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
        }

        let suma = parseInt(cantidadGorras) * 1200;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")


        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Gorra Verde. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }

    }


}

let montoTazas = 1000;

if (saludo == 4) {
    let logoCiencia = 1;
    let logoTecnologia = 2;
    let logoUniverso = 3;
    let logoBusiness = 4;

    let opcionTazas = prompt("Elige tu taza favorita.\n " + "\n1-Logo Ciencia" + "\n2-Logo Tecnologia" + "\n3-Logo Nuestro Univero" + "\n4-Logo Business");

    while ((parseInt(opcionTazas) !== logoCiencia) && (parseInt(opcionTazas) !== logoTecnologia) && (parseInt(opcionTazas) !== logoUniverso) && (parseInt(opcionTazas) !== logoBusiness)) {
        opcionTazas = prompt("Elige tu taza favorita.\n " + "\n1-Logo Ciencia" + "\n2-Logo Tecnologia" + "\n3-Logo Nuestro Univero" + "\n4-Logo Business");
    }

    if (opcionTazas == 1) {
        alert("Las Tazas tienen un valor de 1000 pesos")
        let cantidadTazas = prompt("Indica la cantidad de Tazas que deseas.")
        while ((parseInt(cantidadTazas) <= 0)) {
            alert("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
            cantidadTazas = prompt("indica la cantidad de Tazas que deseas");
        }

        let suma = parseInt(cantidadTazas) * 1000;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")
        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Taza 'Logo Ciencia'. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionTazas == 2) {
        alert("Las Tazas tienen un valor de 1000 pesos")
        let cantidadTazas = prompt("Indica la cantidad de Tazas que deseas.")
        while ((parseInt(cantidadTazas) <= 0)) {
            alert("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
            cantidadTazas = prompt("indica la cantidad de Tazas que deseas");
        }
        let suma = parseInt(cantidadTazas) * 1000;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")
        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Taza 'Logo Tecnologia'. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionTazas == 3) {
        alert("Las Tazas tienen un valor de 1000 pesos")
        let cantidadTazas = prompt("Indica la cantidad de Tazas que deseas.")
        while ((parseInt(cantidadTazas) <= 0)) {
            alert("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
            cantidadTazas = prompt("indica la cantidad de Tazas que deseas");
        }
        let suma = parseInt(cantidadTazas) * 1000;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")
        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Taza 'Logo Nuestro Universo'. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
    if (opcionTazas == 4) {
        alert("Las Tazas tienen un valor de 1000 pesos")
        let cantidadTazas = prompt("Indica la cantidad de Tazas que deseas.")
        while ((parseInt(cantidadTazas) <= 0)) {
            alert("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
            cantidadTazas = prompt("indica la cantidad de Tazas que deseas");
        }
        let suma = parseInt(cantidadTazas) * 1000;

        alert("El monto a pagar es " + suma)

        let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

        if (pago < suma) {

            alert("Tu Saldo es insuficiente para la compra")
        }
        if (pago >= suma) {
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito.\n\n Producto: Taza 'Logo Business'. \n\nTu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    }
}




































/*
let montoPlaneta = 1600;
let montoUnivero = 1800;
let montoBitcoin = 2000;
let montoDiseno = 2200;

if (saludo == 2) {
    let nuestroPlaneta = 1;
    let universo = 2;
    let bitcoin = 3;
    let diseno = 4;

    let opcionLibros = prompt("Elige el libro de tu preferencia.\n " + "\n1-Nuestro Planeta" + "\n2-Explorndo el universo" + "\n3-Descubriendo el bitcoin" + "\n4-Patrones de diseño")
    if (opcionLibros == 1) {
        alert("El costo del libro Nuestro Planeta es de $1600")
    }

    if (opcionLibros == 2) {
        alert("El costo del libro Explorando el Universo es de $1800")
    }

    if (opcionLibros == 3) {
        alert("El costo del libro Descubreindo el Bitcoin es de $2000")
    }
    if (opcionLibros == 4) {
        alert("El costo del libro Patrones de Diseño es de $2200")
    }

    let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");
  
    if (pago < montoPlaneta) {
  
        alert("Tu Saldo es insuficiente para la compra")
    
        
    }
    if (pago >= montoPlaneta) {
        alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(montoPlaneta)));
    }
    
}



if (pago < montoUnivero) {
    alert("Tu Saldo es insuficiente para la compra")
}

if (pago >= montoUnivero) {
    alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(montoUnivero)));
}
if (pago < montoBitcoin) {
    alert("Tu Saldo es insuficiente para la compra")
}

if (pago >= montoBitcoin) {
    alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(montoBitcoin)));
}
if (pago < montoDiseno) {
    alert("Tu Saldo es insuficiente para la compra")
}

if (pago >= montoDiseno) {
    alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(montoDiseno)));
}




/*
if (saludo == 3) {
    prompt("Elige tu color de gorra favorito.\n " + "\n1-Negra" + "\n2-Roja" + "\n3-Amarilla" + "\n4-Azul" + "\n4-Verde")
    alert("El costo del libro Nuestro Planeta es de $1600")
}
/*
prompt("Elige el libro de tu preferencia.\n " + "\n1-Nuestro Planeta" + "\n2-Explora el universo" + "\n3-Descubriendo el bitcoin" + "\n4-Patrones de diseño")
alert("El costo del libro Nuestro Planeta es de $1600")


if (enero == "1") {
let montoRevista = 800 ;
alert("el costo de la Revistas tiene un valor de $800")
prompt("Serias tan amable de indicar con cuanto vas a abonar?")
prompt("Muchas gracias " + " " + nombre + "Tu compra se finalizo con exito. Tu vuelto es " - parseInt(montoRevista)  )
} else{}
 
 
}

*/
