import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAlunoComponent } from './grade-aluno.component';

describe('GradeAlunoComponent', () => {
  let component: GradeAlunoComponent;
  let fixture: ComponentFixture<GradeAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeAlunoComponent]
    });
    fixture = TestBed.createComponent(GradeAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
