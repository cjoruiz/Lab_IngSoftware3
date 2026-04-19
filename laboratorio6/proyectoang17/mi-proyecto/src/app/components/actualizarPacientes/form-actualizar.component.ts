import { Component } from '@angular/core';
import { Paciente } from '../modelos/paciente';
import { PacienteService } from '../servicios/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule, SweetAlert2Module, HttpClientModule],
  templateUrl: './form-actualizar.component.html',
  styleUrl: './form-actualizar.component.css'
})
export class FormActualizarComponent {
  public paciente: Paciente = new Paciente();
  public titulo: String = 'Actualizar paciente';

  constructor(
    private pacienteService: PacienteService, 
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const pacienteId = this.route.snapshot.paramMap.get('id');
  
  
      if (pacienteId) {
        this.pacienteService.getPacienteById(+pacienteId).subscribe(paciente => {
          this.paciente = paciente;
   
        });
      }
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