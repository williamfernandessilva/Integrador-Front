import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Cadrastarprofessor } from './cadastrarprofessor';

@Injectable({
  providedIn: 'root'
})
export class CadastrarprofessorService {
  getCadastarprofessor() {
    throw new Error('Method not implemented.');
  }
  url = "  http://localhost:3000/cadastrarprofessor";

  constructor( private http: HttpClient) { }

  getProfessor(): Observable<Cadrastarprofessor[]>{
    return this.http.get<Cadrastarprofessor[]>(this.url)
   }


   save(cadastarprofessor:Cadrastarprofessor):Observable<Cadrastarprofessor>{
    return this.http.post<Cadrastarprofessor>(this.url,cadastarprofessor);

   }
   update(cadastarprofessor:Cadrastarprofessor): Observable<Cadrastarprofessor>
  {
    return this.http.put<Cadrastarprofessor>(`${this.url}/${cadastarprofessor.id}`, cadastarprofessor);
  }
   delete(cadastarprofessor:Cadrastarprofessor):Observable<void>{
    return this.http.delete<void>(`${this.url}/${cadastarprofessor.id}`);

}
}
