package co.edu.unicauca.facturas.proyecto.fachadaServices.servicios;

import java.util.Date;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.models.ClienteEntity;
import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.models.FacturaEntity;
import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.repositories.FacturaRepositoryBaseDatos;
import co.edu.unicauca.facturas.proyecto.colaMensajes.productor.ProductorMensajes;
import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.ClienteDTORespuesta;
import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.FacturaDTOPeticion;
import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.FacturaDTORespuesta;

@Service
public class FacturaServicesImpl implements IFacturaServices {

    @Autowired
    ProductorMensajes obtencionClienteImpl;
    @Autowired
    ModelMapper objMapper;
    @Autowired
    FacturaRepositoryBaseDatos objFacturaRepository;    
    @Override
    public FacturaDTORespuesta crearFactura(FacturaDTOPeticion objFacturaDTOPeticion) {
      

        //se consulta al microservicio del cliente y se obtiene el cliente
        Optional<ClienteEntity> consultaCLiente= this.objFacturaRepository.findById(objFacturaDTOPeticion.getIdCliente());
        ClienteEntity objClienteEntity;
        if(consultaCLiente.isPresent())
        {
            System.out.println("El cliente ya existe en la base de datos, no se consulta desde el micosevicio de usuaios.");
            objClienteEntity=consultaCLiente.get();
        }
        else
        {
            System.out.println("El cliente no existe en la base de datos, se procede a obtenerlo desde el microservicio de clientes"+
            " y a guardalo en el microservicio de facturas.");
            ClienteDTORespuesta objCLienteObtenido= this.obtencionClienteImpl.sendMessage(objFacturaDTOPeticion.getIdCliente());
            objClienteEntity= this.objMapper.map(objCLienteObtenido, ClienteEntity.class);
            this.objFacturaRepository.guardarCliente(objClienteEntity);
       
        }

        //se crea la factura y se guarda en la base de datos    
        FacturaEntity objFacturaEntity= new FacturaEntity();
        objFacturaEntity.setCliente(objClienteEntity);//se asocia el cliente a la factura
        
        objFacturaEntity.setFechaGeneacion(new Date());   
        objFacturaEntity.setIdProducto(objFacturaDTOPeticion.getIdProducto());
        objFacturaEntity.setCantidadProductos(objFacturaDTOPeticion.getCantidadProductos());
        objFacturaEntity.setTotal(objFacturaDTOPeticion.getTotal());    
          
        FacturaEntity objFacturaEntityGuardada=this.objFacturaRepository.guardarFactura(objFacturaEntity);
       
        FacturaDTORespuesta objFacturaDTORespuesta= this.objMapper.map(objFacturaEntityGuardada, FacturaDTORespuesta.class);
        
       return objFacturaDTORespuesta;
    }

}
