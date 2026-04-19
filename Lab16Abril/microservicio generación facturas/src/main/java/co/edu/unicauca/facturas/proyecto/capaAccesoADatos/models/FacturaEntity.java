package co.edu.unicauca.facturas.proyecto.capaAccesoADatos.models;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacturaEntity {
    private int id;
    private Date fechaGeneacion;
    private float total;   
    private int idProducto;
    private int cantidadProductos;
    private ClienteEntity cliente;
}
