import { Cliente } from "./Cliente";
import { DetalleVenta } from "./DetalleVenta";
import { Empleado } from "./Empleado";

export class Venta {
    id?: number;
    fecha: string;
    valor: number;
    cliente: Cliente;
    detalleVentas: DetalleVenta[];
    empleado: Empleado;

    constructor(
        fecha: string,
        valor: number,
        cliente: Cliente,
        detalleVentas: DetalleVenta[],
        empleado: Empleado
      ) {
        this.fecha = fecha;
        this.valor = valor;
        this.cliente = cliente;
        this.detalleVentas = detalleVentas;
        this.empleado = empleado;
      }
  }
  