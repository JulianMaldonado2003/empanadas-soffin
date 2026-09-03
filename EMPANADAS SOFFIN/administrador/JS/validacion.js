// ======================================
// VALIDACIONES — Comprobaciones generales
// ======================================

// Verificar que ningún campo esté vacío
function validarCamposVacios(formulario) {
    let campos = formulario.querySelectorAll("input, textarea, select");
    let todosLlenos = true;

    campos.forEach(function(campo) {
        if (campo.value.trim() === "") {
            alert(`⚠️ El campo "${campo.previousElementSibling?.textContent || 'dato'}" está vacío`);
            todosLlenos = false;
            return false;
        }
    });

    return todosLlenos;
}

// Validar formato de correo electrónico
function validarCorreo(correo) {
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}

// Validar longitud de contraseña
function validarContraseña(contraseña) {
    return contraseña.length >= 6;
}

// Solo permitir números
function soloNumeros(event) {
    let codigo = event.which || event.keyCode;
    if (codigo < 48 || codigo > 57) {
        event.preventDefault();
    }
}