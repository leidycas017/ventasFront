import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/Proveedor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
  })

  export class ProveedorService {
    proveedorURL = environment.proveedorURL;

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Proveedor[]> {
        return this.httpClient.get<Proveedor[]>(this.proveedorURL + 'lista');
      }
  }