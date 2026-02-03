import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';
import { Pais } from '../models/pais';
import { Provincia } from '../models/provincia';
import { Rubro } from '../models/rubro';
import { Iva } from '../models/iva';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  url = 'https://sistema-compras-oggn.onrender.com/api/proveedores/';

  obtenerPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(
      'https://sistema-compras-oggn.onrender.com/api/paises/',
    );
  }
  obtenerProvincias(paisId: number): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(
      'https://sistema-compras-oggn.onrender.com/api/provincias/' + paisId,
    );
  }

  constructor(private http: HttpClient) {}

  public obtenerProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  public obtenerProveedoresPorEstado(estado: boolean): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url + 'estado/' + estado);
  }

  public obtenerProveedor(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(this.url + id);
  }

  public agregarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.url, proveedor);
  }

  public modificarEstadoProveedor(
    id: number | undefined,
  ): Observable<Proveedor> {
    return this.http.put<Proveedor>(this.url + id + '/estado', {});
  }

  public modificarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(this.url + proveedor.id, proveedor);
  }

  public obtenerRubros(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(
      'https://sistema-compras-oggn.onrender.com/api/rubros/',
    );
  }

  public obtenerRubrosActivos(): Observable<any> {
    return this.http.get<any>(
      'https://sistema-compras-oggn.onrender.com/api/rubros/activos',
    );
  }

  public obtenerRubro(id: number): Observable<Rubro> {
    return this.http.get<Rubro>(
      'https://sistema-compras-oggn.onrender.com/api/rubros/' + id,
    );
  }

  public agregarRubro(nombre: string): Observable<Rubro> {
    let rubro: Rubro = {
      rubro: nombre,
    };
    console.log(rubro);

    return this.http.post<Rubro>(
      'https://sistema-compras-oggn.onrender.com/api/rubros/',
      rubro,
    );
  }

  public modificarRubro(rubro: Rubro): Observable<Rubro> {
    console.log(rubro);

    return this.http.put<Rubro>(
      'https://sistema-compras-oggn.onrender.com/api/rubros/' + rubro.id,
      rubro,
    );
  }

  public obtenerIvas(): Observable<Iva[]> {
    return this.http.get<Iva[]>(
      'https://sistema-compras-oggn.onrender.com/api/ivas/',
    );
  }
}
