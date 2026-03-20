import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, FormGroup,
  Validators, AbstractControl, ValidationErrors
} from '@angular/forms';

function telefonoValidator(control: AbstractControl): ValidationErrors | null {
  const telRegex = /^[0-9]{10}$/;
  return telRegex.test(control.value?.trim() ?? '') ? null : { telefonoInvalido: true };
}

function correoValidator(control: AbstractControl): ValidationErrors | null {
  const correoRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return correoRegex.test(control.value?.trim() ?? '') ? null : { correoInvalido: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  formulario!: FormGroup;
  enviado = false;
  registroExitoso = false;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      tipoIdentificacion:   ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      nombres:              ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      apellidos:            ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      correoElectronico:    ['', [Validators.required, correoValidator]],
      telefono:             ['', [Validators.required, telefonoValidator]],
      genero:               ['', Validators.required],
      fechaNacimiento:      ['', Validators.required],
      terminos:             [false, Validators.requiredTrue]
    });
  }

  get f() { return this.formulario.controls; }

  campoInvalido(campo: string): boolean {
    const ctrl = this.formulario.get(campo);
    return !!(ctrl && ctrl.invalid && (ctrl.touched || this.enviado));
  }

  onSubmit(): void {
    this.enviado = true;
    this.formulario.markAllAsTouched();

    if (this.formulario.invalid) {
      alert('Por favor, complete correctamente el formulario.');
      return;
    }

    // Mostrar toast
    this.registroExitoso = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.registroExitoso = false;
      this.enviado = false;
      this.formulario.reset({ terminos: false });
      this.cdr.detectChanges();
    }, 3000);
  }
}