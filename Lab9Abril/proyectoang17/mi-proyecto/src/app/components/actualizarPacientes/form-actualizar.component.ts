import { Component } from '@angular/core';
import { Paciente } from '../modelos/paciente';
import { PacienteService } from '../servicios/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Categoria } from '../categorias/modelos/categoria';
import { categoriaService } from '../categorias/servicios/categoria.service';

@Component({
  selector: 'app-form-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule, SweetAlert2Module, HttpClientModule],
  templateUrl: './form-actualizar.component.html',
  styleUrl: './form-actualizar.component.css'
})
export class FormActualizarComponent {
  public paciente: Paciente = new Paciente();
  public categorias: Categoria[] = [];
  public titulo: String = 'Actualizar paciente';

  constructor(
    private categoriaService: categoriaService, 
    private pacienteService: PacienteService, 
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const pacienteId = this.route.snapshot.paramMap.get('id');
  
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
  
      if (pacienteId) {
        this.pacienteService.getPacienteById(+pacienteId).subscribe(paciente => {
          // Reasignar la categoría del paciente con la misma instancia del arreglo
          this.paciente = paciente;
          if (paciente.objCategoria !== null && paciente.objCategoria !== undefined) {
            this.paciente.objCategoria = this.categorias.find(cat => cat.id === paciente.objCategoria?.id) || null;
          }
        });
      }
    });
  }
  

  public actualizarPaciente(): void {
    console.log("Actualizando paciente", this.paciente);
    this.pacienteService.update(this.paciente).subscribe(
      response => {
        console.log("Paciente actualizado exitosamente");
        this.router.navigate(['pacientes/listarPacientes']);
        Swal.fire('Paciente actualizado', `Paciente ${response.nombre} actualizado con éxito!`, 'success');
      },
      error => {
        console.error('Error al actualizar el paciente:', error);       
      }
    );
  }
}

