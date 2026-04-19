package co.edu.unicauca.facturas.proyecto.colaMensajes.productor;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unicauca.facturas.proyecto.fachadaServices.DTO.ClienteDTORespuesta;


@Service
public class ProductorMensajes {

    @Autowired
    private  RabbitTemplate amqpTemplate;
    private final String exchange = "ExchangeColaClientes";
    private final String routingKey = "routingKeyColaClientes";
  

    public ClienteDTORespuesta sendMessage(int idCliente) {
        System.out.println("Enviando mensaje al microservicio de clientes mediante la cola");
        ClienteDTORespuesta respuesta = (ClienteDTORespuesta) amqpTemplate.convertSendAndReceive(exchange, routingKey, idCliente);
        System.out.println("Datos del cliente recibido desde el microservicio de facturas");
        imprimiCliente(respuesta);
        return respuesta;
    }

    private void imprimiCliente(ClienteDTORespuesta cliente) {
        System.out.println("ID: " + cliente.getId());
        System.out.println("Nombre: " + cliente.getNombre());
        System.out.println("Apellido: " + cliente.getApellido());
        System.out.println("Email: " + cliente.getEmail());
        System.out.println("Categoria: " + cliente.getObjCategoria());
    }
}
    