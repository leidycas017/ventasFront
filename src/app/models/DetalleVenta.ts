import { Venta } from "./Venta";
import { Producto } from "./producto";

export class DetalleVenta {
    id?: number;
    cantidad: number;
    precio: number;
    producto: Producto;
    venta: Venta;
  
    constructor(
        cantidad: number,
        precio: number,
        producto: Producto,
        venta: Venta
    ) {
        this.cantidad = cantidad,
        this.precio = precio;
        this.producto = producto;
        this.venta = venta;
      }

}
  