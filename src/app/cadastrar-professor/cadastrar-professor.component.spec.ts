import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProfessorComponent } from './cadastrar-professor.component';

describe('CadastrarProfessorComponent', () => {
  let component: CadastrarProfessorComponent;
  let fixture: ComponentFixture<CadastrarProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarProfessorComponent]
    });
    fixture = TestBed.createComponent(CadastrarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
