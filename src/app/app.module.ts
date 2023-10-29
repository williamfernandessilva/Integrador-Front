import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { CoordenadorComponent } from './coordenador/coordenador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HistoricoComponent } from './historico/historico.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { GradeProfessorComponent } from './grade-professor/grade-professor.component';
import { GradeAlunoComponent } from './grade-aluno/grade-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    ProfessoresComponent,
    CoordenadorComponent,
    InicioComponent,
    CadastroComponent,
    HistoricoComponent,
    CadastrarProfessorComponent,
    GradeProfessorComponent,
    GradeAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
