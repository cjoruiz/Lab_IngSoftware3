package co.edu.unicauca.facturas.proyecto.fachadaServices.DTO;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacturaDTORespuesta {
    private int id;
    private Date fechaGeneacion;
    private float total;   
    private int idProducto;
    private int cantidadProductos;

    private ClienteDTORespuesta Cliente;
}
