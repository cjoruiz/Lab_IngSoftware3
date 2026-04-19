package co.edu.unicauca.distribuidos.core.capaAccesoADatos.repositories;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import co.edu.unicauca.distribuidos.core.capaAccesoADatos.models.PacienteEntity;

@Repository
public class PacienteRepository {

	private int pos;
	private ArrayList<PacienteEntity> listaDePacientes; 

	public PacienteRepository() {
		this.listaDePacientes = new ArrayList<PacienteEntity>();		
		cargarPacientes();
		pos=this.listaDePacientes.size()+1;
	}

	public List<PacienteEntity> findAll() {
		System.out.println("Invocando a listarpacientes");
		return this.listaDePacientes;
	}

	public PacienteEntity findById(Integer id) {
		System.out.println("Invocando a consultar un paciente");
		PacienteEntity objPaciente = null;

		for (PacienteEntity paciente : listaDePacientes) {
			if (paciente.getId() == id) {
				objPaciente = paciente;
				break;
			}
		}

		return objPaciente;
	}

	public PacienteEntity save(PacienteEntity paciente) {
		System.out.println("Invocando a almacenar paciente");
		paciente.setId(pos);
		PacienteEntity objPaciente = null;
		if (this.listaDePacientes.add(paciente)) {
			objPaciente = paciente;
			pos++;
		}

		return objPaciente;
	}

	public PacienteEntity update(Integer id, PacienteEntity paciente) {
		System.out.println("Invocando a actualizar un paciente");
		PacienteEntity objPaciente = null;

		for (int i = 0; i < this.listaDePacientes.size(); i++) {
			if (this.listaDePacientes.get(i).getId() == id) {
				this.listaDePacientes.set(i, paciente);
				objPaciente = paciente;
				break;
			}
		}

		return objPaciente;
	}

	public boolean delete(Integer id) {
		System.out.println("Invocando a eliminar un paciente");
		boolean bandera = false;

		for (int i = 0; i < this.listaDePacientes.size(); i++) {
			if (this.listaDePacientes.get(i).getId() == id) {
				this.listaDePacientes.remove(i);
				bandera = true;
				break;
			}
		}

		return bandera;
	}

	private void cargarPacientes() {
		PacienteEntity objPaciente1 = new PacienteEntity(1, "Juan", "Perez", "juan@unicauca.edu.co", new Date());
		this.listaDePacientes.add(objPaciente1);
		PacienteEntity objPaciente2 = new PacienteEntity(2, "Catalina", "Lopez", "catalina@unicauca.edu.co", new Date());
		this.listaDePacientes.add(objPaciente2);
		PacienteEntity objPaciente3 = new PacienteEntity(3, "Sandra", "Sanchez", "Sandra@unicauca.edu.co", new Date());
		this.listaDePacientes.add(objPaciente3);
		PacienteEntity objPaciente = new PacienteEntity(4, "Andres", "Perez", "andres@unicauca.edu.co", new Date());
		this.listaDePacientes.add(objPaciente);
	}

}