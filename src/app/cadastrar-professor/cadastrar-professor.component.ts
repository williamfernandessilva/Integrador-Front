import { Cadastarprofessor, } from './../cadastrarprofessor';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastrarprofessorService } from '../cadastrarprofessor.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent {



  isEditing : Boolean = false;
  formGroupClient : FormGroup ;
  Cadastarprofessor: any;
  cadastrarprofessor: any;
  CadrastarprofessorService: any;
  CadastrarprofessorService: any;
  Cadastrarprofessor: any;


  constructor(private cadastrarprofessorService: CadastrarprofessorService,
    private formBuilder: FormBuilder) {
this.formGroupClient = formBuilder.group({
id : [''],
nome : [''],
salas : [''],
data : [''],
curso : [''],
semestre: [''],
materia: [''],
horario : ['']

});

}

ngOnInit(): void {
  this.loadClients();

}
loadClients() {
  this.CadastrarprofessorService.getcadastarprofessor().subscribe(
    {
      next : (data: any) => this.Cadastrarprofessor = data
    }
  );

}
save(){
  if(this.isEditing)

      {
        this.cadastrarprofessorService.update(this.formGroupClient.value).subscribe(
          {
            next: data => {
              this.loadClients();
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
        this.cadastrarprofessor.push(data);
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

edit(cadastrarprofessor: Cadastarprofessor){
  this.formGroupClient.setValue(cadastrarprofessor);
  this.isEditing = true;




}

delete(cadastrarprofessor: Cadastarprofessor){
  this.CadrastarprofessorService.delete(cadastrarprofessor).subscribe({
    next: ()=> this.loadClients()
  })


}


}
