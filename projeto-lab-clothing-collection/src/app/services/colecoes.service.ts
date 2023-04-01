import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Colecao } from '../models/colecao';

@Injectable({
  providedIn: 'root',
})
export class ColecoesService {
  constructor(private http: HttpClient) {}

  acessarColecoes(): Observable<Colecao[]> {
    return this.http.get<Colecao[]>(`${API_PATH}/colecoes`);
  }
  criar(colecao: Colecao): Observable<Colecao> {
    return this.http.post<Colecao>(API_PATH, colecao);
  }
  editar(colecao: Colecao): Observable<Colecao> {
    return this.http.put<Colecao>(`${API_PATH}/${colecao.id}`, colecao);
  }
  excluir(id: number): Observable<Colecao> {
    return this.http.delete<Colecao>(`${API_PATH}/${id}`);
  }
}
