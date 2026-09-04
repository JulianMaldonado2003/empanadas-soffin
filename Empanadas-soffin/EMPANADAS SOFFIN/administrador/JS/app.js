// ======================================
// EMPANADAS SOFFIN — Archivo Principal
// ======================================

// Mensaje de bienvenida en consola
console.log("✅ Empanadas Soffin — Sistema cargado correctamente");

// Datos simulados del administrador
const USUARIO_ADMIN = {
    usuario: "admin",
    contraseña: "admin123",
    nombre: "Administrador"
};

// Verificar sesión activa
function verificarSesion() {
    let sesion = localStorage.getItem("sesionAdmin");
    return sesion === "activa";
}

// Iniciar sesión
function iniciarSesion(usuario, contraseña) {
    if (usuario === USUARIO_ADMIN.usuario && contraseña === USUARIO_ADMIN.contraseña) {
        localStorage.setItem("sesionAdmin", "activa");
        localStorage.setItem("nombreAdmin", USUARIO_ADMIN.nombre);
        return true;
    }
    return false;
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("sesionAdmin");
    localStorage.removeItem("nombreAdmin");
    window.location.href = "login.html";
}

// Redirigir si no hay sesión
function protegerPagina() {
    if (!verificarSesion()) {
        alert("⚠️ Debes iniciar sesión primero");
        window.location.href = "login.html";
    }
}