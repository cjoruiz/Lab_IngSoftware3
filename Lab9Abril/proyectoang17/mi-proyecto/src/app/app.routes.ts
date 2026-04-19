import { Routes } from '@angular/router';
import { PacientesComponent } from './components/listarPacientes/pacientes.component';
import { FormComponent } from './components/crearPacientes/form.component';
import { FormActualizarComponent } from './components/actualizarPacientes/form-actualizar.component';

export const routes: Routes = [
    {path: '', redirectTo: '/pacientes/listarPacientes', pathMatch: 'full'},
    {path: 'pacientes/listarPacientes', component: PacientesComponent},
    {path: 'paciente/crearPacientes', component: FormComponent},
    {path: 'pacientes/actualizar/:id', component: FormActualizarComponent }
];
