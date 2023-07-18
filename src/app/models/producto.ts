import { DetalleVenta } from "./DetalleVenta";
import { Proveedor } from "./Proveedor";

export class Producto {
    id?: number;
    ean: string;
    cantidad: number;
    nombre: string;
    fecha: string;
    precio: number;
    proveedor: Proveedor;
    detalleVenta: DetalleVenta[];
    
  
    constructor(
      ean: string,
      cantidad: number,
      nombre: string,
      fecha: string,
      precio: number,
      proveedor: Proveedor,
      detalleVenta: DetalleVenta[]
    ) {
      this.ean = ean;
      this.cantidad = cantidad;
      this.nombre = nombre;
      this.fecha = fecha;
      this.precio = precio;
      this.proveedor = proveedor;
      this.detalleVenta = detalleVenta;
    }
  }
  