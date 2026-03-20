import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLettersComponent } from './medical-letters.component';

describe('MedicalLettersComponent', () => {
  let component: MedicalLettersComponent;
  let fixture: ComponentFixture<MedicalLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
