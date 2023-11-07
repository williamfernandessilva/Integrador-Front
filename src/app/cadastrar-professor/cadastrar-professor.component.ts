import { Cadastrarprofessor, } from './../cadastrarprofessor';
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
  cadastrarProfessor : Cadastrarprofessor[] = [];
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

}
loadProfessor() {
  this.cadastrarprofessorService.getProfessor().subscribe(
    {
      next : data=> this.cadastrarProfessor = data
    }
  );

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


}
