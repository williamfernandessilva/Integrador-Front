import { TestBed } from '@angular/core/testing';

import { CadastrarprofessorService } from './cadastrarprofessor.service';

describe('CadastrarprofessorService', () => {
  let service: CadastrarprofessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarprofessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
