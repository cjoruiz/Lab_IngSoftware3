package co.edu.unicauca.facturas.proyecto.capaControladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.FacturaDTOPeticion;
import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.FacturaDTORespuesta;
import co.edu.unicauca.facturas.proyecto.fachadaServices.servicios.IFacturaServices;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", 
methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class FacturasRestController {

	@Autowired
	private IFacturaServices facturaService;

    @PostMapping("/facturas")
	public FacturaDTORespuesta crearFactura(@RequestBody FacturaDTOPeticion factura) {
		FacturaDTORespuesta objRespuesta = null;
		objRespuesta = this.facturaService.crearFactura(factura);
		return objRespuesta;
	}
}
