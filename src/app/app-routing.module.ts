import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CoordenadorComponent } from './coordenador/coordenador.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfessoresComponent } from './professores/professores.component';
import { HistoricoComponent } from './historico/historico.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { GradeProfessorComponent } from './grade-professor/grade-professor.component';
import { GradeAlunoComponent } from './grade-aluno/grade-aluno.component';




const routes: Routes = [
  {path: 'professores', component : ProfessoresComponent},
  {path: 'alunos',  component : AlunosComponent},
  {path: 'coordenador',   component : CoordenadorComponent},
  {path: 'inicio', component : InicioComponent},
  {path: 'cadastro', component : CadastroComponent},
  {path: 'historico', component : HistoricoComponent},
  {path: 'cadastrarprofessor', component : CadastrarProfessorComponent},
  {path: 'gradeprofessor', component : GradeProfessorComponent},
  {path: 'gradealuno', component : GradeAlunoComponent},





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
