package co.edu.unicauca.facturas.proyecto.fachadaServices.servicios;

import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.FacturaDTOPeticion;
import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.FacturaDTORespuesta;

public interface IFacturaServices {
    public FacturaDTORespuesta crearFactura(FacturaDTOPeticion objFacturaDTOPeticion);
}
