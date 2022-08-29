//precio de los productos
let p1 = 750 //precio botella de vino
let p2 = 180 //precio botella de soda
let p3 = 150 //precio botella de tonica
let p4 = 200 //precio lata de cerveza
let a = 0
let b = 0
let c = 0
let d = 0
let sb1 = 0
let sb2 = 0
let sb3 = 0
let sb4 = 0
//------------------------------------------
let clienteQuiereProducto = true
do {
    //solicitud de producto al cliente
    let producto;
    do {
        producto = parseInt(prompt(`Productos:
            1 Botella de Vino de 700ml.
            2 Botella Soda
            3 Botella Tonica
            4 Cerveza Lata
            Ingrese Número del Producto:`));
    } while (producto < 0 || producto > 4)
    let cantidad = parseInt(prompt("Ingrese cantidad:"));
    if (producto === 1) {
        a = a + cantidad
        sb1 = a * p1; //sb1 sub total del producto 1
    } else if (producto === 2) {
        b = b + cantidad;
        sb2 = b * p2; //sb1 sub total del producto 2
    } else if (producto === 3) {
        c = c + cantidad;
        sb3 = c * p3; //sb1 sub total del producto 3
    } else if (producto === 4) {
        d = d + cantidad;
        sb4 = d * p4; //sb1 sub total del producto 4
    }
    let consulta = parseInt(prompt("Desea ingresar otro producto?: 1. Si / 2. No"))
    if (consulta === 1) {
        continue;
    } else (consulta === 2)
    clienteQuiereProducto = false;
} while (clienteQuiereProducto);
// Calculo interno del total sin Iva (pago) y del IVA (iva)
let pago = sb1 + sb2 + sb3 + sb4;
function calculoIva(iva) {
    iva = 0.21 * pago;
    return iva;
}
let tipoPago = (prompt(`Como desea realizar el pago?
1 Efectivo
2 Tarjeta de Debito
3 Tarjeta de Credito
Ingrese Número de forma de pago:`));
let totalPagar;
if (tipoPago == 1) {
    totalPagar = ((pago * 0.90) + calculoIva(pago));
} else if (tipoPago == 2) {
    totalPagar = ((pago * 0.95) + calculoIva(pago));
} else totalPagar = ((pago * 1.00) + calculoIva(pago));
alert ("total a Pagar sin Impuesto : " + pago + " Pesos ");
alert("Total a Pagar con Impuesto : " + totalPagar + " Pesos ");
