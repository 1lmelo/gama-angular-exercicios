import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from 'typings/Lista';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  readonly URL = 'http://localhost:3000/lista';

  constructor(private http: HttpClient) { }

  getLista():Observable<Lista[]>{
      return this.http.get<Lista[]>(this.URL);
  }


  addLista(lista: Lista){
      return this.http.post<Lista>(this.URL, lista);
  }


}
