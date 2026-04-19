package co.edu.unicauca.distribuidos.core.colaMensajes.consumidor;

import org.springframework.stereotype.Service;

import co.edu.unicauca.distribuidos.core.fachadaServices.DTO.ClienteDTORespuesta;
import co.edu.unicauca.distribuidos.core.fachadaServices.services.IClienteService;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ConsumidorMensajes {

    @Autowired
	private IClienteService clienteService;

    @RabbitListener(queues = "colaObtenerCliente")
    public ClienteDTORespuesta obtenerCliente(int id) {
        System.out.println("Obteniendo cliente  " + id +" para enviarlo al microservicio de facturas");
        ClienteDTORespuesta  objCliente = clienteService.findById(id);
		return objCliente;       
    }
}
    