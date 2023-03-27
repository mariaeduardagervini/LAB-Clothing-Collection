import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  acessarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API_PATH}/usuarios`);
  }
}
