import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstAsistenciaComponent } from './lst-asistencia.component';

describe('LstAsistenciaComponent', () => {
  let component: LstAsistenciaComponent;
  let fixture: ComponentFixture<LstAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LstAsistenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LstAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
