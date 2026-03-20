import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { PromoCarouselComponent } from '../promo-carousel/promo-carousel.component';
import { CategoriesComponent } from '../categories/categories.component';
import { MedicalLettersComponent } from '../medical-letters/medical-letters.component';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, PromoCarouselComponent, CategoriesComponent, MedicalLettersComponent, RegisterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
