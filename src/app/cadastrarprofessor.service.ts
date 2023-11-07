import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Cadastrarprofessor, } from './cadastrarprofessor';

@Injectable({
  providedIn: 'root'
})
export class CadastrarprofessorService {
  url = "  http://localhost:8080/professores";

  constructor( private http: HttpClient) { }

  getProfessor(): Observable<Cadastrarprofessor[]>{
    return this.http.get<Cadastrarprofessor[]>(this.url)
   }


   save(cadastarprofessor:Cadastrarprofessor):Observable<Cadastrarprofessor>{
    return this.http.post<Cadastrarprofessor>(this.url,cadastarprofessor);

   }
   update(cadastarprofessor:Cadastrarprofessor): Observable<Cadastrarprofessor>
  {
    return this.http.put<Cadastrarprofessor>(`${this.url}/${cadastarprofessor.id}`, cadastarprofessor);
  }
   delete(cadastarprofessor:Cadastrarprofessor):Observable<void>{
    return this.http.delete<void>(`${this.url}/${cadastarprofessor.id}`);

}
}
