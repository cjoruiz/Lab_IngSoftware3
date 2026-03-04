const formPaciente = document.getElementById("formPaciente"); 
const pacienteSelect = document.getElementById("pacienteSelect");

formPaciente.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const nombres = document.getElementById("nombresPaciente").value; 
  const apellidos = document.getElementById("apellidosPaciente").value;

  const paciente = gestionarPacientes.registrarPaciente(nombres, apellidos);
    
  const option = document.createElement("option");
  option.value = paciente.id;
  option.textContent = `${paciente.nombres} ${paciente.apellidos}`;
  pacienteSelect.appendChild(option);

  formPaciente.reset();
});


