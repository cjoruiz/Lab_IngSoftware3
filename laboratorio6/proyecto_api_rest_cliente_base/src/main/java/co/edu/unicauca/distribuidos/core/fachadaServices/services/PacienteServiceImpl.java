package co.edu.unicauca.distribuidos.core.fachadaServices.services;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import co.edu.unicauca.distribuidos.core.capaAccesoADatos.models.PacienteEntity;
import co.edu.unicauca.distribuidos.core.capaAccesoADatos.repositories.PacienteRepository;
import co.edu.unicauca.distribuidos.core.fachadaServices.DTO.PacienteDTO;

@Service
public class PacienteServiceImpl implements IPacienteService {

	private PacienteRepository servicioAccesoBaseDatos;

	private ModelMapper modelMapper;

	public PacienteServiceImpl(PacienteRepository servicioAccesoBaseDatos, ModelMapper modelMapper) {
		this.servicioAccesoBaseDatos = servicioAccesoBaseDatos;
		this.modelMapper = modelMapper;
	}

	@Override
	public List<PacienteDTO> findAll() {

		List<PacienteEntity> pacientesEntity = this.servicioAccesoBaseDatos.findAll();
		List<PacienteDTO> pacientesDTO = this.modelMapper.map(pacientesEntity, new TypeToken<List<PacienteDTO>>() {
		}.getType());
		return pacientesDTO;
	}

	@Override
	public PacienteDTO findById(Integer id) {
		PacienteEntity objPacienteEntity = this.servicioAccesoBaseDatos.findById(id);
		PacienteDTO pacienteDTO = this.modelMapper.map(objPacienteEntity, PacienteDTO.class);
		return pacienteDTO;
	}

	@Override
	public PacienteDTO save(PacienteDTO paciente) {
		PacienteEntity pacienteEntity = this.modelMapper.map(paciente, PacienteEntity.class);
		pacienteEntity.setCreateAt(new Date());
		PacienteEntity objPacienteEntity = this.servicioAccesoBaseDatos.save(pacienteEntity);
		PacienteDTO pacienteDTO = this.modelMapper.map(objPacienteEntity, PacienteDTO.class);
		return pacienteDTO;  
	}
  
	@Override
	public PacienteDTO update(Integer id, PacienteDTO paciente) {
		PacienteEntity pacienteEntity = this.modelMapper.map(paciente, PacienteEntity.class);
		PacienteEntity pacienteEntityActualizado = this.servicioAccesoBaseDatos.update(id, pacienteEntity);
		PacienteDTO pacienteDTO = this.modelMapper.map(pacienteEntityActualizado, PacienteDTO.class);
		return pacienteDTO;
	}

	@Override
	public boolean delete(Integer id) {
		return this.servicioAccesoBaseDatos.delete(id);
	}
}