const doctors = [
  {
    name: "Dra. Laura Martínez",
    experience: "8 años de experiencia clínica",
    specialty: "Terapia Neural",
    description: "Especialista en tratamiento del dolor crónico y trastornos funcionales mediante técnicas de infiltración con anestésicos locales.",
    schedule: "Lunes a Viernes 8:00am - 2:00pm",
    bg: "letter1",
    img: "img/medical_logo.png"
  },
  {
    name: "Dr. Andrés Gómez",
    experience: "12 años de experiencia en enfermedades cardiovasculares",
    specialty: "Cardiología",
    description: "Especialista en diagnóstico, prevención y tratamiento de enfermedades del corazón y sistema circulatorio.",
    schedule: "Lunes, Miércoles y Viernes 2:00pm - 7:00pm",
    bg: "letter2",
    img: "img/doctor_logo.png"
  },
  {
    name: "Dra. Carolina Ruiz",
    experience: "10 años de experiencia clínica",
    specialty: "Quiropraxia",
    description: "Especialista en alineación de la columna vertebral y tratamiento de dolores musculares y articulares mediante ajustes manuales.",
    schedule: "Martes y Jueves 9:00am - 4:00pm",
    bg: "letter1",
    img: "img/medical_logo.png"
  },
  {
    name: "Dr. Sebastián Torres",
    experience: "15 años en lesiones deportivas y fracturas",
    specialty: "Ortopedia y Traumatología",
    description: "Experto en diagnóstico y tratamiento de lesiones óseas, articulares y musculares, incluyendo rehabilitación postquirúrgica.",
    schedule: "Lunes a Viernes 3:00pm – 8:00pm",
    bg: "letter2",
    img: "img/doctor_logo.png"
  },
  {
    name: "Dra. Natalia Herrera",
    experience: "11 años en nutrición clínica",
    specialty: "Nutrición y Dietética Terapéutica",
    description: "Especialista en planes alimenticios personalizados para control de peso, enfermedades metabólicas y mejora del rendimiento físico.",
    schedule: "Lunes, Martes y Jueves 8:00am – 1:00pm",
    bg: "letter1",
    img: "img/medical_logo.png"
  },
  {
    name: "Dr. Miguel Ángel Rojas",
    experience: "9 años en tratamiento de enfermedades de la piel",
    specialty: "Dermatología",
    description: "Especialista en diagnóstico y tratamiento de afecciones cutáneas, acné, dermatitis y procedimientos dermatológicos estéticos.",
    schedule: "Miércoles y Viernes 10:00am – 6:00pm",
    bg: "letter2",
    img: "img/doctor_logo.png"
  }
];

function renderDoctors() {
  const container = document.getElementById("letters-container");

  container.innerHTML = `
    <div class="row g-3">
      ${doctors.map(doctor => `
        <div class="col-6 col-md-4 col-lg-3 d-flex">
          <div class="${doctor.bg} p-3 letter h-100 w-100 shadow">
            <h5>${doctor.name}</h5>
            <p>${doctor.experience}</p>
            <p><strong>Especialidad:</strong> ${doctor.specialty}</p>
            <p>${doctor.description}</p>
            <p><strong>Horario:</strong> ${doctor.schedule}</p>

            <div class="container-img-button">
              <img src="${doctor.img}" alt="medico" class="medical-logo">
              <button class="btn btn-light btn-sm">Agendar cita</button>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

renderDoctors();

const listaEspecialidades = document.getElementById("listaEspecialidades");
const descripcion = document.querySelector(".descripcion-categoria");

listaEspecialidades.addEventListener("click", (e) => {

  if (e.target.classList.contains("list-group-item")) {

    const texto = e.target.textContent.trim();

    if (texto === "Terapia neural") {
      descripcion.textContent =
        "La terapia neural regula el sistema nervioso mediante anestésicos locales.";
    }

    else if (texto === "Quiropraxia") {
      descripcion.textContent =
        "La quiropraxia trata problemas musculoesqueléticos, especialmente la columna.";
    }

    else if (texto === "Fisioterapia") {
      descripcion.textContent =
        "La fisioterapia ayuda a recuperar movilidad y función física.";
    }

    else if (texto === "Nutrición y Dietética Terapéutica") {
      descripcion.textContent =
        "La nutrición terapéutica diseña planes alimenticios personalizados.";
    }

  }

});