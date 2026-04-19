package co.edu.unicauca.distribuidos.core.colaMensajes.configuracion;

import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.Queue;

@Configuration
public class ConfiguracionConsumidor {
    
    @Bean("BeanAsociadoAcolaClientes")
    public Queue generarQueue() {
        return new Queue("colaObtenerCliente", true);  
    }

    @Bean("BeanAsociadoConvertidorJSON")
    public Jackson2JsonMessageConverter jackson2JsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean("BeanAsociadoAListenerContainerFactory")
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(
            ConnectionFactory connectionFactory,
            @Qualifier("BeanAsociadoConvertidorJSON") Jackson2JsonMessageConverter objConvertidor) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setMessageConverter(objConvertidor);
        return factory;
    }
}

