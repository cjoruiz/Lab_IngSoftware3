package co.edu.unicauca.facturas.proyecto.colaMensajes.configuracion;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;

@Configuration
public class ConfiguracionProductor {
   
    @Bean("BeanAsociadoAcolaClientes")
    public Queue generarQueue() {
        return new Queue("colaObtenerCliente", true); 
    }

    @Bean("BeanAsociadoAExchangecolaClientes")
    public DirectExchange generarExchangeParaObtenerCliente() {
        return new DirectExchange("ExchangeColaClientes");
    }

    @Bean
    public Binding generarbinding(  @Qualifier("BeanAsociadoAcolaClientes") Queue colaClientes, 
                                    @Qualifier("BeanAsociadoAExchangecolaClientes") DirectExchange exchange) {
        return BindingBuilder.bind(colaClientes).to(exchange).with("routingKeyColaClientes");
    }

    @Bean
    public Jackson2JsonMessageConverter generarConvertidorAJSON() {
        Jackson2JsonMessageConverter objConvertidor = new Jackson2JsonMessageConverter();
        objConvertidor.setClassMapper(new MappeadorJSON());
        return objConvertidor;
    }

    @Bean
    public RabbitTemplate rabbitTemplate(   ConnectionFactory connectionFactory, 
                                            Jackson2JsonMessageConverter objConvertitor) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(objConvertitor);
        return rabbitTemplate;
    }
}
    