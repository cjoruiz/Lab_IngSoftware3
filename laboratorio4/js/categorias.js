
const listaEspecialidades = document.getElementById("listaEspecialidades");
const descripcion = document.querySelector(".descripcion-categoria");

// 🔹 Objeto con las descripciones
const especialidades = {
    "Terapia neural": 
        "La Terapia Neural regula el sistema nervioso mediante anestésicos locales.",

    "Quiropraxia": 
        "La Quiropraxia trata problemas musculoesqueléticos, especialmente la columna.",

    "Fisioterapia": 
        "La Fisioterapia ayuda a recuperar movilidad y función física.",

    "Nutrición y Dietética Terapéutica": 
        "La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados.",

    "Dermatología": 
        "La Dermatología trata enfermedades de la piel.",

    "Cardiologia": 
        "La Cardiología se especializa en enfermedades del corazón."
};

listaEspecialidades.addEventListener("click", (e) => {

    if (e.target.tagName === "A") {

        const texto = e.target.textContent.trim();

        descripcion.textContent = especialidades[texto] || "";

    }

});
