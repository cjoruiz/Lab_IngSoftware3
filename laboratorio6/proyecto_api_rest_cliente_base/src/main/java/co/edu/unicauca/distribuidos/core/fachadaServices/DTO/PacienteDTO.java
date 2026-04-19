package co.edu.unicauca.distribuidos.core.fachadaServices.DTO;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PacienteDTO {
	private Integer id;
	private String nombre;
	private String apellido;
	private String email;
	private Date createAt;

	public PacienteDTO() {

	}
}


