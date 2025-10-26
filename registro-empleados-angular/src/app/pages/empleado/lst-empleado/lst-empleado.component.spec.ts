import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstEmpleadoComponent } from './lst-empleado.component';

describe('LstEmpleadoComponent', () => {
  let component: LstEmpleadoComponent;
  let fixture: ComponentFixture<LstEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LstEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LstEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
