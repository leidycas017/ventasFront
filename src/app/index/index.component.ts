import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  images = [
    { src: 'assets/personal.png', alt: 'personal' },
    { src: 'assets/proveedores.png', alt: 'proveedores' },
    { src: 'assets/inventarios.png', alt: 'inventarios' },
    { src: 'assets/compras.png', alt: 'compras' },
    { src: 'assets/ventas.png', alt: 'ventas' },
    { src: 'assets/cartera.png', alt: 'cartera' },
    { src: 'assets/pagos.png', alt: 'pagos' },
    { src: 'assets/reportes.png', alt: 'reportes' }
  ];

  nombreUsuario: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getUserName();
  }

}
