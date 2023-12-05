import { Cadastrarprofessor, } from './../cadastrarprofessor';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastrarprofessorService } from '../cadastrarprofessor.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

cadastrarProfessor : Cadastrarprofessor[] = [];
  filter : Cadastrarprofessor[] = [];
  isEditing : Boolean = false;
  formGroupClient : FormGroup ;
  CadrastarprofessorService: any;




constructor(private cadastrarprofessorService: CadastrarprofessorService,
  private formBuilder: FormBuilder) {
this.formGroupClient = formBuilder.group({
id : [''],
nome : [''],
sala : [''],
data : [''],
curso : [''],
materia: [''],
horario : ['']

});

}

ngOnInit(): void {
this.loadProfessor();
this.filter = this.cadastrarProfessor;

}
loadProfessor() {


  this.cadastrarprofessorService.getProfessor().subscribe({
    next: data => {
      this.cadastrarProfessor = data;
      this.filter = data;
    }
  });

}
save(){
if(this.isEditing)

    {
      this.cadastrarprofessorService.update(this.formGroupClient.value).subscribe(
        {
          next: data => {
            this.loadProfessor();
            this.formGroupClient.reset();
            this.isEditing = false;

          }
        }
      )

    }




else{
this.cadastrarprofessorService.save(this.formGroupClient.value).subscribe(
{
    next: data => {
      this.cadastrarProfessor.push(data);
      this.formGroupClient.reset();
    }
}

);
}



}

clean(){
this.formGroupClient.reset();
this.isEditing = false;
}

edit(cadastrarProfessor: Cadastrarprofessor){
this.formGroupClient.setValue(cadastrarProfessor);
this.isEditing = true;




}

delete(cadastrarProfessor: Cadastrarprofessor){
this.cadastrarprofessorService.delete(cadastrarProfessor).subscribe({
  next: ()=> this.loadProfessor()
})


}


search(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  console.log('Valor da pesquisa:', value);
  this.cadastrarProfessor = this.filter.filter((cadastrarProfessor) => {
    return cadastrarProfessor.nome?.toLowerCase().includes(value);
  });
}

searchSala(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  console.log('Valor da pesquisa:', value);
  this.cadastrarProfessor = this.filter.filter((cadastrarProfessor) => {
    return cadastrarProfessor.sala?.toLowerCase().includes(value);
  });
}

searchCurso(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  console.log('Valor da pesquisa:', value);
  this.cadastrarProfessor = this.filter.filter((cadastrarProfessor) => {
    return cadastrarProfessor.curso?.toLowerCase().includes(value);
  });
}

searchHorario(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  console.log('Valor da pesquisa:', value);
  this.cadastrarProfessor = this.filter.filter((cadastrarProfessor) => {
    return cadastrarProfessor.horario?.toLowerCase().includes(value);
  });
}

searchMateria(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  console.log('Valor da pesquisa:', value);
  this.cadastrarProfessor = this.filter.filter((cadastrarProfessor) => {
    return cadastrarProfessor.materia?.toLowerCase().includes(value);
  });
}

}

