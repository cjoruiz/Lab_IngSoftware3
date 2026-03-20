import { Component } from '@angular/core';

interface Doctor {
  name: string;
  experience: string;
  specialty: string;
  description: string;
  schedule: string;
  bg: string;
  img: string;
}

@Component({
  selector: 'app-medical-letters',
  standalone: true,
  imports: [],
  templateUrl: './medical-letters.component.html',
  styleUrl: './medical-letters.component.css'
})
export class MedicalLettersComponent {
  doctors: Doctor[] = [
    {
      name: "Dra. Laura Martínez",
      experience: "8 años de experiencia clínica",
      specialty: "Terapia Neural",
      description: "Especialista en tratamiento del dolor crónico y trastornos funcionales.",
      schedule: "Lunes a Viernes 8:00am - 2:00pm",
      bg: "letter1",
      img: "assets/images/medical_logo.png" 
    },
    {
      name: "Dr. Andrés Gómez",
      experience: "12 años de experiencia",
      specialty: "Cardiología",
      description: "Especialista en diagnóstico y prevención de enfermedades del corazón.",
      schedule: "Lunes, Miércoles y Viernes 2:00pm - 7:00pm",
      bg: "letter2",
      img: "assets/images/doctor_logo.png"
    },
    {
      name: "Dra. Carolina Ruiz",
      experience: "10 años de experiencia clínica",
      specialty: "Quiropraxia",
      description: "Especialista en alineación de la columna vertebral y tratamiento de dolores musculares y articulares mediante ajustes manuales.",
      schedule: "Martes y Jueves 9:00am - 4:00pm",
      bg: "letter1",
      img: "assets/images/medical_logo.png"
    },
    {
      name: "Dr. Sebastián Torres",
      experience: "15 años en lesiones deportivas y fracturas",
      specialty: "Ortopedia y Traumatología",
      description: "Experto en diagnóstico y tratamiento de lesiones óseas, articulares y musculares, incluyendo rehabilitación postquirúrgica.",
      schedule: "Lunes a Viernes 3:00pm – 8:00pm",
      bg: "letter2",
      img: "assets/images/doctor_logo.png"
    },
    {
      name: "Dra. Natalia Herrera",
      experience: "11 años en nutrición clínica",
      specialty: "Nutrición y Dietética Terapéutica",
      description: "Especialista en planes alimenticios personalizados para control de peso, enfermedades metabólicas y mejora del rendimiento físico.",
      schedule: "Lunes, Martes y Jueves 8:00am – 1:00pm",
      bg: "letter1",
      img: "assets/images/medical_logo.png"
    },
    {
      name: "Dr. Miguel Ángel Rojas",
      experience: "9 años en tratamiento de enfermedades de la piel",
      specialty: "Dermatología",
      description: "Especialista en diagnóstico y tratamiento de afecciones cutáneas, acné, dermatitis y procedimientos dermatológicos estéticos.",
      schedule: "Miércoles y Viernes 10:00am – 6:00pm",
      bg: "letter2",
      img: "assets/images/doctor_logo.png"
    }
  ];

  agendarCita(doctor: Doctor) {
    alert(`Seleccionado: ${doctor.name}`);
  }
}
