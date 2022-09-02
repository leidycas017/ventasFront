export class Producto {
    id?: number;
    nombre: string;
    precio: number;
    idproveedor: number;
    cantidad: number;
    ean: string;
    fecha: string;

    constructor(nombre: string, precio: number, cantidad: number, ean: string, fecha: string, idproveedor: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.ean = ean;
        this.fecha = fecha;
        this.idproveedor = idproveedor;
    }
}
