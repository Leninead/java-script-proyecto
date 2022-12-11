
alert("Somos Ciencia Magazine")

let nombre = prompt("Ingrese su nombre").toUpperCase();
let apellido = prompt("Ingrese su apellido").toUpperCase();

while ((nombre == "") && (apellido == "")) {
    alert("Necesitas rellenar el campo de nombre y apellido para continuar la operacion")
    nombre = prompt("Ingrese su nombre").toUpperCase();
    apellido = prompt("Ingrese su apellido").toUpperCase();
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



let volver = "a";
let salir = "b";

function cierreVenta() {
    let salida = prompt("Elige la opcion de tu preferencia: " + "\n" + "\na-Volver al menu" + "\nb-Salir");

    if (salida == volver) {
        saludo = prompt("Selecciona el producto de tu preferencia.\n " + "\nPor Ejemplo '1' para Revista " + "\n\n1-Revista" +
            "\n2-Libros" + "\n3-Gorras" + "\n4-Tazas")
        operacionEleccion();

    }

    if (salida == salir) {
        alert("Gracias por preferirnos sera hasta una proxima vez")
    }

}


function operacionEleccion() {

    //--> Seccion Revistas <--//   
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



        let precio = 800;


        function meses(enero) {
            alert("Las revistas tiene un costo de $800 pesos");


            let cantidadRevista = prompt("indica la cantidad de Revista que deseas");


            while (isNaN(parseInt(cantidadRevista))) {
                alert("Necesitas agregar una cantidad numerica");
                cantidadRevista = prompt("indica la cantidad de Revista que deseas");

            }

            while ((parseInt(cantidadRevista) <= 0)) {
                alert("tienes que elegir al menos 1 revista para seguir la compra. Gracias");
                cantidadRevista = prompt("indica la cantidad de Revista que deseas");

            }

            let suma = parseInt(cantidadRevista) * precio;

            alert(" El monto a pagar es " + suma);

            let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");



            if (pago < suma) {
                alert("Tu Saldo es insuficiente para la compra")
            } else if (pago >= suma) { alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma))); }




        }


        if (opcionRevista == 1) {
            alert("Enero es nuestra 'Primera Edicion'");
            meses();
        } else if (opcionRevista == 2) {
            alert("Marzo es nuestra edicion de 'Aprende a Progrmar'");
            meses();
        } else if (opcionRevista == 3) {
            alert("Mayo es nuestra edicion  de 'Planeta verde'");
            meses();
        } else if (opcionRevista == 4) {
            alert("Julio es nuestra edicion  de 'James Webb'")
            meses();
        } else if (opcionRevista == 5) {
            alert("Septiembre es nuestra edicion  de 'Criptomonedas en Argentina'");

            meses();
        } else if (opcionRevista == 6) {
            alert("Noviembre es nuestra edicion  de 'Inteligencia Artificial'");
            meses();
        }

        cierreVenta();

    }

    //--> Seccion Libros <--//
    class libro {
        constructor(edicion, precio) {
            this.edicion = edicion.toLowerCase();
            this.precio = parseFloat(precio);


        }
        toString() {
            return this.edicion + " (" + this.precio.toFixed(2) + ")";
        }


    }

    let montoPlaneta = 1600;
    let montoUnivero = 1800;
    let montoBitcoin = 2000;
    let montoDiseno = 2200;


    let libro1 = new libro("Nuestro Planeta", montoPlaneta);
    console.log("este es el precio de la edicion " + libro1);


    let libro2 = new libro("Explorando el universo", montoUnivero)

    console.log("este es el precio de la edicion " + libro2);

    let libro3 = new libro("Descubriendo el bitcoin", montoBitcoin)

    console.log("este es el precio de la edicion " + libro3)

    let libro4 = new libro("Patrones de diseño", montoDiseno)

    console.log("este es el precio de la edicion " + libro4)




    if (saludo == 2) {
        let nuestroPlaneta = 1;
        let universo = 2;
        let bitcoin = 3;
        let diseno = 4;

        let opcionLibros = prompt("Elige el libro de tu preferencia.\n " + "\n" + nuestroPlaneta + "-" + libro1 + "\n" + universo + "-" + libro2 + "\n" + bitcoin + "-" + libro3 + "\n" + diseno + "-" + libro4);

        while ((parseInt(opcionLibros) !== nuestroPlaneta) && (parseInt(opcionLibros) !== universo) && (parseInt(opcionLibros) !== bitcoin) && (parseInt(opcionLibros) !== diseno)) {
            opcionLibros = prompt("Elige el libro de tu preferencia.\n " + "\n" + nuestroPlaneta + "-" + libro1 + "\n" + universo + "-" + libro2 + "\n" + bitcoin + "-" + libro3 + "\n" + diseno + "-" + libro4);
        }
        function libroOption() {
            let cantidadLibros = prompt("Indica la cantidad de libros que deseas.");

            while (isNaN(parseInt(cantidadLibros))) {
                alert("Necesitas agregar una cantidad numerica");
                cantidadLibros = prompt("indica la cantidad de Libros que deseas");

            }

            while ((parseInt(cantidadLibros) <= 0)) {
                alert("tienes que elegir al menos 1 Libro para seguir la compra. Gracias");

                cantidadLibros = prompt("indica la cantidad de Libros que deseas");
            }

            let suma = parseInt(cantidadLibros) * montoPlaneta;
            alert("El monto a pagar es " + suma);

            let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");

            if (pago < suma) {

                alert("Tu Saldo es insuficiente para la compra")

            }

            if (pago < suma) {
                alert("Tu Saldo es insuficiente para la compra")
            } else if (pago >= suma) { alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma))); }


        }

        if (opcionLibros == nuestroPlaneta) {
            alert("El costo del libro Nuestro Planeta es de $1600");
            libroOption();
        } else if (opcionLibros == universo) {
            alert("El costo del libro Explorando el Universo es de $1800");
            libroOption();
        } else if (opcionLibros == bitcoin) {
            alert("El costo del libro Descubriendo el Bitcoin es de $2000");
            libroOption();
        } else if (opcionLibros == diseno) {
            alert("El costo del libro Patrones de Diseño es de $2200");
            libroOption();

        }
        cierreVenta();
    }

    //--> Seccion Gorras <--//

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

        function gorra(negra) {
            alert("Las gorras tienen un costo de $1200 pesos")
            let cantidadGorras = prompt("Indica la cantidad de Gorras que deseas.")


            while (isNaN(parseInt(cantidadGorras))) {
                alert("Necesitas agregar una cantidad numerica");
                cantidadGorras = prompt("indica la cantidad de Revista que deseas");

            }
            while ((parseInt(cantidadGorras) <= 0)) {
                alert("tienes que elegir al menos 1 Gorra para seguir la compra. Gracias");
                cantidadGorras = prompt("indica la cantidad de Gorras que deseas");
            }

            let suma = parseInt(cantidadGorras) * montoGorras;

            alert("El monto a pagar es " + suma)

            let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");


            if (pago < suma) {
                alert("Tu Saldo es insuficiente para la compra")
            } else if (pago >= suma) {
                alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
            }
        }


        if (opcionGorras == 1) {
            alert("Producto: Gorra Negra.");
            gorra();
        } else if (opcionGorras == 2) {
            alert("Producto: Gorra Roja.");
            gorra();
        } else if (opcionGorras == 3) {
            alert("Producto: Gorra Amarilla.");
            gorra();

        } else if (opcionGorras == 4) {
            alert("Producto: Gorra Azul.");
            gorra();
        } else if (opcionGorras == 5) {
            alert("Producto: Gorra Verde.");

            gorra();


        }
        cierreVenta();
    }

    //--> Seccion tazas <--//

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

        function taza() {
            alert("Las Tazas tienen un valor de 1000 pesos")
            let cantidadTazas = prompt("Indica la cantidad de Tazas que deseas.")

            while (isNaN(parseInt(cantidadTazas))) {
                alert("Necesitas agregar una cantidad numerica");
                cantidadTazas = prompt("indica la cantidad de Revista que deseas");

            }
            while ((parseInt(cantidadTazas) <= 0)) {
                alert("tienes que elegir al menos 1 Taza para seguir la compra. Gracias");
                cantidadTazas = prompt("indica la cantidad de Tazas que deseas");
            }

            let suma = parseInt(cantidadTazas) * montoTazas;

            alert("El monto a pagar es " + suma)

            let pago = prompt("Serias tan amable de indicar con cuanto vas a abonar?");


            if (pago < suma) {
                alert("Tu Saldo es insuficiente para la compra")
            } else if (pago >= suma) { alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma))); }
        }

        if (opcionTazas == 1) {
            alert("Producto: Taza 'Logo Ciencia'.");
            taza();
        } else if (opcionTazas == 2) {
            alert("Producto: Taza 'Logo Tecnologia'.");
            taza();
        } else if (opcionTazas == 3) {
            alert("Producto: Taza 'Logo Universo'.");
            taza();
        } else if (opcionTazas == 4) {
            alert("Producto: Taza 'Logo Business'.");
            taza();
        }
        cierreVenta();
    }


}
operacionEleccion();































