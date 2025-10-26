import { TestBed } from '@angular/core/testing';

import { LstdepartamentoService } from './lstdepartamento.service';

describe('LstdepartamentoService', () => {
  let service: LstdepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LstdepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
