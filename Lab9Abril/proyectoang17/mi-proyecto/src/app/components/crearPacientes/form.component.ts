import { Component } from '@angular/core';
import { Paciente } from '../modelos/paciente';
import { PacienteService } from '../servicios/paciente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Categoria } from '../categorias/modelos/categoria';
import { categoriaService } from '../categorias/servicios/categoria.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, SweetAlert2Module, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public paciente: Paciente = new Paciente();
  public categorias: Categoria[] = [];
  public titulo: String = 'Crear paciente';

  constructor(private categoriaService: categoriaService, private pacienteService: PacienteService, private router:Router) { }

  ngOnInit(): void {
    this.paciente.objCategoria = null;
    this.categoriaService.getCategorias().subscribe(
      categorias => this.categorias = categorias      
    );    
  }

  public crearPaciente()
  {
    console.log("Creando paciente");
    this.pacienteService.create(this.paciente).subscribe(
     {
        next: (respose) => {
          console.log("Paciente creado exitosamente");
          console.log(this.paciente);
          this.router.navigate(['pacientes/listarPacientes']),
          Swal.fire('Nuevo paciente',`Paciente ${respose.nombre} creado con éxito!`, 'success');
        },
        error: (err) => {
          console.error('Error al crear paciente:', err.message);         
        }
      }
    )
      
  }
  
}