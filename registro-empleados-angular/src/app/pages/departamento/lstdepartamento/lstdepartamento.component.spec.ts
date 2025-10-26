import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstdepartamentoComponent } from './lstdepartamento.component';

describe('LstdepartamentoComponent', () => {
  let component: LstdepartamentoComponent;
  let fixture: ComponentFixture<LstdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LstdepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LstdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
