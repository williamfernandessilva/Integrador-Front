import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeProfessorComponent } from './grade-professor.component';

describe('GradeProfessorComponent', () => {
  let component: GradeProfessorComponent;
  let fixture: ComponentFixture<GradeProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeProfessorComponent]
    });
    fixture = TestBed.createComponent(GradeProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
