import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
    public url = '/tarefa/api/tarefa';

    constructor(public http: HttpClient) { }

    listarTodos(): Observable<any[]> {
        return this.http.get<any[]>( `${environment.baseUrl}/${this.url}/listarAtivos` );
    }

    cadastrar(entidade: any): Observable<any> {
        return this.http.post<any>( `${environment.baseUrl}/${this.url}`, entidade );
    }

    alterar(entidade: any): Observable<any> {
        return this.http.put<any>( `${environment.baseUrl}/${this.url}`, entidade );
    }

    alterarIndicadorDeConcluido(id: number): Observable<any> {
        return this.http.put<any>( `${environment.baseUrl}/${this.url}/${id}`,  { observe: 'response'});
    }

    excluir(id: number): Observable<any> {
        return this.http.delete<any>(`${environment.baseUrl}/${this.url}/${id}`, { observe: 'response'});
    }
}
