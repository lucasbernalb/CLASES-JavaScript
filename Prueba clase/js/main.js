// let nombre = prompt("putitooooo") //Lo que escribamos pasa a declarase como el dato de "nombre"

// alert("hola " + nombre)

// let numero = 10;

// numero += 5 // numero (10) + 5

// document.write(numero);

// let edad = prompt("ingresa tu edad");

// if (edad >= 18 ) {
//     alert("eres mayor de edad");
// }
// else {
//     alert("eres menor de edad");
// }

// for (let i = 0; i <= 10; i++){
//     let IngresaNombre = prompt("Ingresa tu nombre");
    
//     alert(" Turno N° " + i + " - Nombre: " + IngresaNombre);
// }

// let nombre = prompt("Ingresa tu nombre");
// let mensaje = "Hola, " + nombre + "\n" ;
// mensaje += "Como estás?";

// alert(mensaje);

// function avisoLluvia (estalloviendo) {
//     if(estalloviendo) {
//         console.log("esta")
//     } else {
//         console.log("no esta lloviendo")
//     }
// }

// avisoLluvia (false)

// function calcular (X, Y, Z) {
//     let suma = X + Y
//     let resultado = suma * Z
//     return resultado;
// }

//  console.log(calcular(5, 10, 15));
 

// function calculadora (operación, x, y) {
//     if(operación == "suma"){
//         return x + y;
//     } else if (operación == "resta"){
//         return x - y;    
//     } else if (operación == "multiplicacion"){
//         return x * y;
//     } else if (operación == "division"){
//         return x / y;
//     } else if (operación == "exponienciacion"){
//         return x ** y;
//     } else if (operación == "residuo"){
    // 
//         return x % y;
//     } else {
//         return - 1;
//     }
// }

// Pon el nombre de un club uruguayo para calcular su grandeza

// Nacional 

// function cuadrosUruguay(cuadro) {
//     let cuadro = prompt ("Ingrese un cuadro Uruguayo");
//     }


//     let cuadro = prompt("Ingresa tu cuadro")

//     while (cuadro.toUpperCase() != "ESC") {
//      switch (cuadro) {
//         case "NACIONAL":
//             alert("El mas grande del pais y el mundo");
//             break;
//         case "PEÑAROL":
//         alert ("La gallina del pais");
//         break;

//         default:
//             alert("Escriba correctamente un cuadro")
//             break;
//     }
//     cuadro = prompt("Ingresa tu cuadro").toUpperCase();
//     }

// // ENTRADA DE DATOS
// let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

// while (nombreCliente != "ESC") {
//     let textoTipoCliente = "Ingrese su Paquete de Servicios:\n\n";
//     textoTipoCliente += "1-HSBC Premier Black\n";
//     textoTipoCliente += "2-HSBC Premier\n";
//     textoTipoCliente += "3-HSBC Advanced\n";
//     textoTipoCliente += "4-HSBC Standard";
//     let tipoCliente = parseInt(prompt(textoTipoCliente));
//     let monto = parseInt(prompt("Ingrese el Monto: ($10000 - $1000000"));
//     let textoPlazo = "Ingrese el Plazo:\n\n";
//     textoPlazo += "1- 12 Cuotas\n";
//     textoPlazo += "2- 24 Cuotas\n";
//     textoPlazo += "3- 36 Cuotas";
//     let plazo = parseInt(prompt(textoPlazo));

//     // Chequeando como llegan los datos ingresados
//     /* console.log("Cliente: " + nombreCliente);
//     console.log("Tipo: " + tipoCliente);
//     console.log("Monto: $" + monto);
//     console.log("Plazo: " + plazo); */

//     // PROCESAMIENTO DE DATOS
//     let cuotaPura = calcularCuotaPura(monto, plazo);
//     let cuotaTNA = calcularCuotaTNA(tipoCliente, cuotaPura);
//     let cuotaTEA = calcularCuotaTEA(tipoCliente, cuotaPura);
//     let cuotaPagar = cuotaTNA + cuotaTEA;

//     // SALIDA DE DATOS
//     informarPrestamo(nombreCliente, monto, plazo, cuotaPagar);
//     nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
// }

// function calcularCuotaPura(monto, plazo) {
//     return monto / plazo;
// }

// function calcularCuotaTNA(tipoCliente, cuotaPura) {
//     let TNA;

//     if (tipoCliente == 1) {
//         TNA = 65 / 12;
//     } else if (tipoCliente == 2) {
//         TNA = 70 / 12;
//     } else if (tipoCliente == 3) {
//         TNA = 85 / 12;
//     } else {
//         TNA = 102 / 12;
//     }

//     return (cuotaPura * TNA) / 100;
// }

// function calcularCuotaTEA(tipoCliente, cuotaPura) {
//     let TEA;

//     if (tipoCliente == 1) {
//         TEA = 88.37 / 12;
//     } else if (tipoCliente == 2) {
//         TEA = 97.51 / 12;
//     } else if (tipoCliente == 3) {
//         TEA = 127.42 / 12;
//     } else {
//         TEA = 166.31 / 12;
//     }

//     return (cuotaPura * TEA) / 100;
// }

// function informarPrestamo(nombre, monto, plazo, cuota) {
//     let textoPlazo;

//     if (plazo == 1) {
//         textoPlazo = 12;
//     } else if (plazo == 2) {
//         textoPlazo = 24;
//     } else {
//         textoPlazo = 36;
//     }

//     alert("Cliente: " + nombre + "\nMonto: $" + monto + "\nPlazo: " + textoPlazo + " meses\nCuota a Pagar: $" + cuota.toFixed(2) + " pesos");
// }

while (true){
let nombreUsuario = prompt("Ingrese su nombre completo: (ESC para salir)");
if(nombreUsuario.toUpperCase() === "ESC")break;


    let textoPackProducto = "Elija el pack del producto que desea comprar:\n\n"
    textoPackProducto += "1 - Pantalon y Remera (1.200$)\n";
    textoPackProducto += "2 - Pantalon y Campera (2.000$)\n";
    textoPackProducto += "3 - Pantalon Remera y Campera (2.800$)\n";
    let packElecto = parseInt(prompt(textoPackProducto));
    let textoCantidad = ("Seleccione la cantidad que desea llevar del producto:\n\n");
    textoCantidad += "Llevando 10 o mas te descontamos el 10%\n";
    textoCantidad += "Llevando 20 o mas te descontamos el 20%\n";
    textoCantidad += "Llevando 30 o mas te descontamos el 30%\n";
    let cantidad = parseInt(prompt(textoCantidad));
    let textoCuotas = "¿En cuantas cuotas desea pagar?\n\n";
    textoCuotas += "1 - 3 Cuotas\n";
    textoCuotas += "2 - 6 Cuotas\n";
    textoCuotas += "3 - 9 Cuotas\n";
    textoCuotas += "4 - 12 Cuotas\n";
    let cuotas = parseInt(prompt(textoCuotas));
    
    let precioPack = 0;
    
    if (packElecto == 1) {
         precioPack = 1200;   
    } else if (packElecto == 2) {
          precioPack = 2000;   
    } else if (packElecto == 3) {
          precioPack = 2800; 
    }
    
     let montoSinDescuento = calcularMontoSin(precioPack, cantidad);
     console.log("Precio sin descuento: " + montoSinDescuento);
     let montoConDescuento = 0;
     
     if (cantidad >= 10){
         montoConDescuento = montoSinDescuento * 0.9;
    } else if (cantidad >= 20){
        montoConDescuento = montoSinDescuento * 0.8;
        } else if (cantidad >= 10){
        montoConDescuento = montoSinDescuento * 0.7;
        }
        else {
            montoConDescuento = montoSinDescuento ;
        }

    function calcularMontoSin(precioPack, cantidad){
        return precioPack * cantidad
    }
    

    
    let precioConCuotas = 0;
    
    if (cuotas == 1){
        precioConCuotas = montoConDescuento / 3;
        precioFinal = precioConCuotas + "$ (3 Meses)";
    } else if (cuotas == 2){
        precioConCuotas = montoConDescuento / 6;
        precioFinal = precioConCuotas + "$ (6 Meses)";
    } else if (cuotas == 3){
        precioConCuotas = montoConDescuento / 9;
        precioFinal = precioConCuotas + "$ (9 Meses)";
    } else if (cuotas == 4){
        precioConCuotas = montoConDescuento / 12;
        precioFinal = precioConCuotas + "$ (12 Meses)";
    }
    
    console.log("Precio con descuento " + montoConDescuento);
    console.log("Precio final a pagar " + precioConCuotas);
    
    InformacionDeLaCompra(nombreUsuario, packElecto, cantidad, montoSinDescuento, montoConDescuento, precioFinal)
     nombreUsuario = prompt("Ingrese otro nombre completo: (ESC para salir)");
    }
     
        function InformacionDeLaCompra(nombre, pack, cantidad,  montoSinD, montoConD, precio){
            let textoPack;
        
            if (pack == 1) {
                textoPack = "Pantalon y remera (1200$) " + " X " + cantidad + " Unidades";
            } else  if (pack == 2) {
                textoPack = "Pantalon y Campera";
            } else if (pack == 3) {
                textoPack = "Pantalon Remera y Campera";
            }
           alert ("Usuario: " + nombre + "\nPack: " + textoPack + "\nPrecio sin descuento: " + montoSinD + "\nPrecio con descuento: " + montoConD + "\nCuota a pagar: " + precio)       
        }