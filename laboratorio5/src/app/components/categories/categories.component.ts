import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
    
  // 🔹 Objeto con las descripciones (puede venir de un servicio después)
  especialidades: { [key: string]: string } = {
    "Terapia neural": "La Terapia Neural regula el sistema nervioso mediante anestésicos locales.",
    "Quiropraxia": "La Quiropraxia trata problemas musculoesqueléticos, especialmente la columna.",
    "Fisioterapia": "La Fisioterapia ayuda a recuperar movilidad y función física.",
    "Nutrición y Dietética Terapéutica": "La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados.",
    "Dermatología": "La Dermatología trata enfermedades de la piel.",
    "Cardiologia": "La Cardiología se especializa en enfermedades del corazón."
  };

  // 🔹 Lista de nombres para iterar en el template
  listaEspecialidades: string[] = Object.keys(this.especialidades);

  // 🔹 Propiedad para la descripción seleccionada
  descripcionSeleccionada: string = '';

  // 🔹 Método para manejar el click
  onSeleccionar(especialidad: string): void {
    this.descripcionSeleccionada = this.especialidades[especialidad] || '';
  }
}
