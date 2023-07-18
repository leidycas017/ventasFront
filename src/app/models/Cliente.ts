
import { Venta } from "./Venta";

export class Cliente {
    id?: number;
    numeroDocumento: string;
    nombre: string;
    correo: string;
    estado: string;
    ventas: Venta[];
  }
  