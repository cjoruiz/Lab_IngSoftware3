package co.edu.unicauca.facturas.proyecto.fachadaServices.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacturaDTOPeticion {    
    private float total;
    private int idCliente;
    private int idProducto;
    private int cantidadProductos;   
}
