import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CoordenadorComponent } from './coordenador/coordenador.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfessoresComponent } from './professores/professores.component';


const routes: Routes = [
  {path: 'professores', component : ProfessoresComponent},
  {path: 'alunos',  component : AlunosComponent},
  {path: 'coordenador',   component : CoordenadorComponent},
  {path: 'inicio', component : InicioComponent},
  {path: 'cadastro', component : CadastroComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
