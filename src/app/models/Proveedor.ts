
import { Producto } from "./producto";

export class Proveedor {
    id?: number;
    numeroDocumento: string;
    nombre: string;
    correo: string;
    tipoProducto: string;
    productos: Producto[];

    constructor(
        numeroDocumento: string,
        nombre: string,
        correo: string,
        tipoProducto: string,
        productos: Producto[]
      ) {
        this.numeroDocumento = numeroDocumento;
        this.nombre = nombre;
        this.correo = correo;
        this.tipoProducto = tipoProducto;
        this.productos = productos;
      }
  }
  