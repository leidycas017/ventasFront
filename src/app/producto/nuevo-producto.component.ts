import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';
import { Proveedor } from '../models/Proveedor';
import { ProveedorService } from '../service/proveedor.service';
import { DetalleVenta } from '../models/DetalleVenta';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  ean: string = "";
  cantidad: number = 0;
  nombre: string = "";
  fecha: string = "";
  precio: number = 0;
  detalleVenta: DetalleVenta[];
  proveedores: Proveedor[];
  nombreProveedorSeleccionado: string = "";
  proveedorSeleccionado: Proveedor = null;


  

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    private proveedorService: ProveedorService
    ) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }


  obtenerProveedores(): void {
    this.proveedorService.lista().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
      },
      (error) => {
        console.log('Error al obtener la lista de proveedores:', error);
      }
    );
  }


  onCreate(): void {
    this.proveedorSeleccionado = this.proveedores.find(proveedor => proveedor.nombre === this.nombreProveedorSeleccionado);
    const producto = new Producto(this.ean,this.cantidad,this.nombre,this.fecha, this.precio,this.proveedorSeleccionado,this.detalleVenta);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
