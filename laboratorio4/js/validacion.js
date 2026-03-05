// ─── Funciones de validación individuales ───────────────────────────────────

function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    const len = campo.value.trim().length;
    if (len < min || len > max) {
        errorElement.textContent = mensaje;
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validarCorreo(campo, errorElement, mensaje) {
    // Acepta cualquier correo válido (no restringido a un dominio específico)
    const correoRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(campo.value.trim())) {
        errorElement.textContent = mensaje;
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validarTelefono(campo, errorElement, mensaje) {
    // Exactamente 10 dígitos numéricos
    const telRegex = /^[0-9]{10}$/;
    if (!telRegex.test(campo.value.trim())) {
        errorElement.textContent = mensaje;
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validarGenero(genero, errorElement, mensaje) {
    const seleccionado = Array.from(genero).some(r => r.checked);
    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validarTerminos(campo, errorElement, mensaje) {
    if (!campo.checked) {
        errorElement.textContent = mensaje;
        return false;
    }
    errorElement.textContent = '';
    return true;
}

// ─── Notificación de éxito ───────────────────────────────────────────────────

function mostrarMensajeExito() {
    Toastify({
        text: "✅ ¡Registro exitoso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}

// ─── Validación principal al enviar el formulario ────────────────────────────

function validarFormulario() {
    // Campos
    const inputTipoIdentificacion   = document.getElementById('identificacion');
    const inputIdentificacion       = document.getElementById('numero-identificacion');
    const inputNombres              = document.getElementById('nombres');
    const inputApellidos            = document.getElementById('apellidos');
    const inputCorreoElectronico    = document.getElementById('correo-electronico');
    const inputTelefono             = document.getElementById('telefono');
    const inputGenero               = document.getElementsByName('genero');
    const inputTerminos             = document.getElementById('terminos');

    // Labels de error
    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const labelErrorNumeroIdentificacion= document.getElementById('errorNumeroIdentificacion');
    const labelErrorNombres            = document.getElementById('errorNombres');
    const labelErrorApellidos          = document.getElementById('errorApellidos');
    const labelErrorCorreo             = document.getElementById('errorCorreo');
    const labelErrorTelefono           = document.getElementById('errorTelefono');
    const labelErrorGenero             = document.getElementById('errorGenero');
    const labelErrorTerminos           = document.getElementById('errorTerminos');

    // Ejecutar todas las validaciones
    const tipoIdentificacionValida = validarCampoObligatorio(
        inputTipoIdentificacion, labelErrorTipoIdentificacion,
        'El tipo de identificación es obligatorio.');

    const identificacionValida = validarCampoObligatorio(
        inputIdentificacion, labelErrorNumeroIdentificacion,
        'El número de identificación es obligatorio.');

    const nombresValidos = validarLongitud(
        inputNombres, labelErrorNombres, 1, 20,
        'El nombre debe tener entre 1 y 20 caracteres.');

    const apellidosValidos = validarLongitud(
        inputApellidos, labelErrorApellidos, 1, 20,
        'El apellido debe tener entre 1 y 20 caracteres.');

    const correoValido = validarCorreo(
        inputCorreoElectronico, labelErrorCorreo,
        'Ingrese un correo electrónico válido.');

    const telefonoValido = validarTelefono(
        inputTelefono, labelErrorTelefono,
        'El teléfono debe tener exactamente 10 dígitos numéricos.');

    const generoValido = validarGenero(
        inputGenero, labelErrorGenero,
        'El género es obligatorio.');

    const terminosValidos = validarTerminos(
        inputTerminos, labelErrorTerminos,
        'Debe aceptar los términos y condiciones.');

    // Si todo es válido → éxito
    if (tipoIdentificacionValida && identificacionValida && nombresValidos &&
        apellidosValidos && correoValido && telefonoValido && generoValido && terminosValidos) {

        mostrarMensajeExito();

        const formulario = document.getElementById('formularioContacto');
        formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
        formulario.classList.add('was-validated');

        setTimeout(() => {
            formulario.reset();
            formulario.classList.remove('was-validated');
        }, 2500);

    } else {
        alert('Por favor, complete correctamente el formulario.');
    }

    return false;
}

// ─── Validación en tiempo real al perder el foco (blur) ──────────────────────

function validarCamposAlCambiarFoco() {
    const inputTipoIdentificacion   = document.getElementById('identificacion');
    const inputIdentificacion       = document.getElementById('numero-identificacion');
    const inputNombres              = document.getElementById('nombres');
    const inputApellidos            = document.getElementById('apellidos');
    const inputCorreoElectronico    = document.getElementById('correo-electronico');
    const inputTelefono             = document.getElementById('telefono');
    const inputGenero               = document.getElementsByName('genero');
    const inputTerminos             = document.getElementById('terminos');

    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const labelErrorNumeroIdentificacion= document.getElementById('errorNumeroIdentificacion');
    const labelErrorNombres            = document.getElementById('errorNombres');
    const labelErrorApellidos          = document.getElementById('errorApellidos');
    const labelErrorCorreo             = document.getElementById('errorCorreo');
    const labelErrorTelefono           = document.getElementById('errorTelefono');
    const labelErrorGenero             = document.getElementById('errorGenero');
    const labelErrorTerminos           = document.getElementById('errorTerminos');

    inputTipoIdentificacion.addEventListener('blur', () =>
        validarCampoObligatorio(inputTipoIdentificacion, labelErrorTipoIdentificacion,
            'El tipo de identificación es obligatorio.'));

    inputIdentificacion.addEventListener('blur', () =>
        validarCampoObligatorio(inputIdentificacion, labelErrorNumeroIdentificacion,
            'El número de identificación es obligatorio.'));

    inputNombres.addEventListener('blur', () =>
        validarLongitud(inputNombres, labelErrorNombres, 1, 20,
            'El nombre debe tener entre 1 y 20 caracteres.'));

    inputApellidos.addEventListener('blur', () =>
        validarLongitud(inputApellidos, labelErrorApellidos, 1, 20,
            'El apellido debe tener entre 1 y 20 caracteres.'));

    inputCorreoElectronico.addEventListener('blur', () =>
        validarCorreo(inputCorreoElectronico, labelErrorCorreo,
            'Ingrese un correo electrónico válido.'));

    inputTelefono.addEventListener('blur', () =>
        validarTelefono(inputTelefono, labelErrorTelefono,
            'El teléfono debe tener exactamente 10 dígitos numéricos.'));

    Array.from(inputGenero).forEach(input =>
        input.addEventListener('blur', () =>
            validarGenero(inputGenero, labelErrorGenero, 'El género es obligatorio.')));

    inputTerminos.addEventListener('change', () =>
        validarTerminos(inputTerminos, labelErrorTerminos,
            'Debe aceptar los términos y condiciones.'));
}

// ─── Inicialización ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);