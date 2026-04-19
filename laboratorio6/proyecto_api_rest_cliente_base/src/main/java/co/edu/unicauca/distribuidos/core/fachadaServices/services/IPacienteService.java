package co.edu.unicauca.distribuidos.core.fachadaServices.services;

import java.util.List;

import co.edu.unicauca.distribuidos.core.fachadaServices.DTO.PacienteDTO;

public interface IPacienteService {

	public List<PacienteDTO> findAll();

	public PacienteDTO findById(Integer id);

	public PacienteDTO save(PacienteDTO paciente);

	public PacienteDTO update(Integer id, PacienteDTO paciente);

	public boolean delete(Integer id);
}