package co.edu.unicauca.distribuidos.core.capaControladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unicauca.distribuidos.core.fachadaServices.DTO.PacienteDTO;
import co.edu.unicauca.distribuidos.core.fachadaServices.services.IPacienteService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200",  
 methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}) 
public class PacienteRestController {

	@Autowired
	private IPacienteService pacienteService;

	@GetMapping("/pacientes") 
	public List<PacienteDTO> listarPacientes() {
		return pacienteService.findAll();
	}

	@GetMapping("/pacientes/{id}")
	public PacienteDTO consultarPaciente(@PathVariable Integer id) {
		PacienteDTO objPaciente = null;
		objPaciente = pacienteService.findById(id);
		return objPaciente; 
	}

	
	@GetMapping("/pacientes2")
	public PacienteDTO consultarPaciente2(@RequestParam Integer id) {
		PacienteDTO objPaciente = null;
		objPaciente = pacienteService.findById(id);
		return objPaciente;
	}

	@PostMapping("/pacientes")
	public PacienteDTO crearPaciente(@RequestBody PacienteDTO paciente) {
		PacienteDTO objPaciente = null;
		objPaciente = pacienteService.save(paciente);
		return objPaciente;
	}

	@PutMapping("/pacientes/{id}")
	public PacienteDTO actualizarPaciente(@RequestBody PacienteDTO paciente, @PathVariable Integer id) {
		PacienteDTO objPaciente = null;
		PacienteDTO pacienteActual = pacienteService.findById(id);
		if (pacienteActual != null) {
			objPaciente = pacienteService.update(id, paciente);
		}
		return objPaciente;
	}

	@DeleteMapping("/pacientes/{id}")
	public Boolean eliminarPaciente(@PathVariable Integer id) {
		Boolean bandera = false;
		PacienteDTO pacienteActual = pacienteService.findById(id);
		if (pacienteActual != null) {
			bandera = pacienteService.delete(id);
		}
		return bandera;
	}

}