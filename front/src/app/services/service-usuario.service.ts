import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class ServiceUsuarioService {
  constructor(private http: HttpClient) {}

  public solicitarAcceso(usuario: Usuario): Observable<boolean> {
    return this.http.get<boolean>(
      'https://sistema-compras-oggn.onrender.com/api/usuarios/' +
        usuario.usuario +
        '/' +
        usuario.contrasenia,
    );
  }
}
