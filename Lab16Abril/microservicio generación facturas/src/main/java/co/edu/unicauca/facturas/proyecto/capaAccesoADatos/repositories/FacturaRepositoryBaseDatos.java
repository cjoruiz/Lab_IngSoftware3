package co.edu.unicauca.facturas.proyecto.capaAccesoADatos.repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.models.CategoriaEntity;
import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.models.ClienteEntity;
import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.models.FacturaEntity;
import co.edu.unicauca.facturas.proyecto.capaAccesoADatos.repositories.conexion.ConexionBD;


@Repository //El objeto creado se almacena en el contenedor de Spring
public class FacturaRepositoryBaseDatos {
    private final ConexionBD conexionABaseDeDatos;

    public FacturaRepositoryBaseDatos() {
        conexionABaseDeDatos = new ConexionBD();
    }

    public FacturaEntity guardarFactura(FacturaEntity objFactura) {
    
        System.out.println("registrando factura en base de datos");  
        
        int resultado = -1;

        try {

            conexionABaseDeDatos.conectar();

            PreparedStatement sentencia = null;
            String consulta = "insert into facturas(fecha_generacion, total, id_producto, cantidad_productos, id_cliente) values(?,?,?,?,?)";
            sentencia = conexionABaseDeDatos.getConnection().prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);
            sentencia.setDate(1, new java.sql.Date(objFactura.getFechaGeneacion().getTime()));
            sentencia.setFloat(2, objFactura.getTotal());
            sentencia.setInt(3, objFactura.getIdProducto());
            sentencia.setInt(4, objFactura.getCantidadProductos());
            sentencia.setInt(5, objFactura.getCliente().getObjCategoria().getId());
            resultado = sentencia.executeUpdate();
            
            ResultSet generatedKeys = sentencia.getGeneratedKeys();
            if (generatedKeys.next()) {
                int idGenerado = generatedKeys.getInt(1); 
                objFactura.setId(idGenerado);
                System.out.println("ID generado: " + idGenerado);                
            }
            else {
                System.out.println("No se pudo obtener el ID generado.");
            }

            generatedKeys.close();
            sentencia.close();
            conexionABaseDeDatos.desconectar();

        } catch (SQLException e) {
            System.out.println("error en la inserción: " + e.getMessage());
        }
       
        return objFactura;
    }

    public ClienteEntity guardarCliente(ClienteEntity objCliente) {
        System.out.println("registrando cliente en base de datos");
        
        int resultado = -1;

        try {

            conexionABaseDeDatos.conectar();

            PreparedStatement sentencia = null;
            String consulta = "insert into clientes(id, nombre, apellido, email, createAt, idCategoria) values(?,?,?,?,?,?)";
            sentencia = conexionABaseDeDatos.getConnection().prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);
            sentencia.setInt(1, objCliente.getId());
            sentencia.setString(2, objCliente.getNombre());
            sentencia.setString(3, objCliente.getApellido());
            sentencia.setString(4, objCliente.getEmail());
            sentencia.setDate(5, new java.sql.Date(objCliente.getCreateAt().getTime()));
            sentencia.setInt(6, objCliente.getObjCategoria().getId());
            resultado = sentencia.executeUpdate();
            
            sentencia.close();
            conexionABaseDeDatos.desconectar();

        } catch (SQLException e) {
            System.out.println("error en la inserción: " + e.getMessage());
        }

       
        return objCliente;
    }

    public Optional<ClienteEntity> findById(Integer idCliente) {
        System.out.println("consultar cliente de base de datos");
        ClienteEntity objCliente = null;

        conexionABaseDeDatos.conectar();
        try {
            PreparedStatement sentencia = null;
            String consulta = "select * from clientes join categorias on clientes.idCategoria=categorias.id where clientes.id=?";
            sentencia = conexionABaseDeDatos.getConnection().prepareStatement(consulta);
            sentencia.setInt(1, idCliente);
            ResultSet res = sentencia.executeQuery();
            while (res.next()) {
                System.out.println("cliente encontrado");
                objCliente = new ClienteEntity();
                objCliente.setId(res.getInt("id"));
                objCliente.setNombre(res.getString("nombre"));
                objCliente.setApellido(res.getString("apellido"));
                objCliente.setEmail(res.getString("email"));
                objCliente.setCreateAt(res.getDate("createAt"));
                objCliente.setObjCategoria(new CategoriaEntity(res.getInt("idCategoria"), res.getString("nombreCategoria")));
            }
            sentencia.close();
            conexionABaseDeDatos.desconectar();

        } catch (SQLException e) {
            System.out.println("error en la consulta: " + e.getMessage());
        }

        return objCliente==null ? Optional.empty() : Optional.of(objCliente); 
    }
    
}
