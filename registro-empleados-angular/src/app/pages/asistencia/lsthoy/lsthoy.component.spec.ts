import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsthoyComponent } from './lsthoy.component';

describe('LsthoyComponent', () => {
  let component: LsthoyComponent;
  let fixture: ComponentFixture<LsthoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsthoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsthoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
