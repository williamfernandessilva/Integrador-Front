import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Cadastarprofessor, } from './cadastrarprofessor';

@Injectable({
  providedIn: 'root'
})
export class CadastrarprofessorService {
  getCadastarprofessor() {
    throw new Error('Method not implemented.');
  }
  url = "  http://localhost:3000/cadastrarprofessor";

  constructor( private http: HttpClient) { }

  getProfessor(): Observable<Cadastarprofessor[]>{
    return this.http.get<Cadastarprofessor[]>(this.url)
   }


   save(cadastarprofessor:Cadastarprofessor):Observable<Cadastarprofessor>{
    return this.http.post<Cadastarprofessor>(this.url,cadastarprofessor);

   }
   update(cadastarprofessor:Cadastarprofessor): Observable<Cadastarprofessor>
  {
    return this.http.put<Cadastarprofessor>(`${this.url}/${cadastarprofessor.id}`, cadastarprofessor);
  }
   delete(cadastarprofessor:Cadastarprofessor):Observable<void>{
    return this.http.delete<void>(`${this.url}/${cadastarprofessor.id}`);

}
}
