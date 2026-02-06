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
      'https://agreed-sloth-asjserv-74462f81.koyeb.app//api/usuarios/' +
        usuario.usuario +
        '/' +
        usuario.contrasenia,
    );
  }
}
