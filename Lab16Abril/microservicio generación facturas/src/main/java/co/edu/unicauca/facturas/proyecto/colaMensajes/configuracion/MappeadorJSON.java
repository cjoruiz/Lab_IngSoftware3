package co.edu.unicauca.facturas.proyecto.colaMensajes.configuracion;

import java.util.HashMap;
import java.util.Map;

import org.springframework.amqp.support.converter.DefaultClassMapper;

public class MappeadorJSON extends DefaultClassMapper {
    public MappeadorJSON() {
        Map<String, Class<?>> idClassMapping = new HashMap<>();
        idClassMapping.put(
            "co.edu.unicauca.distribuidos.core.fachadaServices.DTO.ClienteDTORespuesta",
            co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.ClienteDTORespuesta.class);
        this.setIdClassMapping(idClassMapping);
    }
}
