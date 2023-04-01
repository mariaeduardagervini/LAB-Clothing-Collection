import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Modelo } from 'src/app/models/modelo';

@Injectable({
  providedIn: 'root',
})
export class ModelosService {
  constructor(private http: HttpClient) {}

  acessarModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${API_PATH}/modelos`);
  }

  criar(modelo: Modelo): Observable<Modelo> {
    return this.http.post<Modelo>(`${API_PATH}/modelos`, modelo);
  }

  editar(modelo: Modelo): Observable<Modelo> {
    return this.http.put<Modelo>(`${API_PATH}/modelos/${modelo.id}`, modelo);
  }

  excluir(id: number): Observable<Modelo> {
    return this.http.delete<Modelo>(`${API_PATH}/modelos/${id}`);
  }

  searchId(id: number): Observable<Modelo> {
    return this.http.get<Modelo>(`${API_PATH}/modelos/${id}`);
  }
}
