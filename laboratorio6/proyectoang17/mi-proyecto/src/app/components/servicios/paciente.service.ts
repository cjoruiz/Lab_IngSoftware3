import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Paciente } from '../modelos/paciente';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private urlEndPoint: string = 'http://localhost:5000/api/pacientes';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    console.log("Listando pacientes desde el servicio");
    return this.http.get<Paciente[]>(this.urlEndPoint);
  }

  create(paciente: Paciente): Observable<Paciente> {
    console.log("Creando desde el servicio");
    return this.http.post<Paciente>(this.urlEndPoint, paciente, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  update(paciente: Paciente): Observable<Paciente> {
    console.log("Actualizando paciente desde el servicio", paciente);
    return this.http.put<Paciente>(`${this.urlEndPoint}/${paciente.id}`, paciente, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  deletePaciente(id: number): Observable<void> {
    console.log("Eliminando paciente desde el servicio");
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  getPacienteById(id: number): Observable<Paciente> {
    console.log("Obteniendo paciente con ID:", id);
    return this.http.get<Paciente>(`${this.urlEndPoint}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400 || error.status === 404) {
      const codigoError = error.error.codigoError;
      const mensajeError = error.error.mensaje;
      const codigoHttp = error.error.codigoHttp;
      const url = error.error.url;
      const metodo = error.error.metodo

      console.error(`Error ${codigoHttp} en ${metodo} ${url}: ${mensajeError} (Código: ${codigoError})`);

      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: mensajeError,
        confirmButtonText: 'Cerrar'
      });

      return throwError(() => new Error(mensajeError));
    } else {
      return throwError(() => new Error('Ocurrió un error inesperado.'));
    }
  }
}