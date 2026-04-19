import { Component } from '@angular/core';
import { Paciente } from '../modelos/paciente';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule,SweetAlert2Module],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {

  pacientes: Paciente[]=[];

  constructor(private objPacienteService: PacienteService,private router: Router) {}
    
    ngOnInit(): void{
      this.objPacienteService.getPacientes().subscribe
      (
      pacientes => {
        console.log("listando pacientes");
        this.pacientes = pacientes;
      }
      );
    }

    editarPaciente(id: number): void {
      this.router.navigate(['/pacientes/actualizar', id]);
    }

    eliminarPaciente(id: number): void {
      Swal.fire({
        title: '¿Desea eliminar el paciente?',
        text: "La eliminación no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.objPacienteService.deletePaciente(id).subscribe(() => {
            this.pacientes = this.pacientes.filter(paciente => paciente.id !== id);//actualizar la lista
            Swal.fire(
              'Eliminado',
              'El paciente ha sido eliminado exitosamente',
              'success'
            );
          });
        }
        else{
          console.log("Eliminación cancelada");
        }
      });
}
      
 

}