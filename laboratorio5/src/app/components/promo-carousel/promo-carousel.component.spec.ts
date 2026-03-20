import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCarouselComponent } from './promo-carousel.component';

describe('PromoCarouselComponent', () => {
  let component: PromoCarouselComponent;
  let fixture: ComponentFixture<PromoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
