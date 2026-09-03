// ======================================
// GESTIÓN DE CATEGORÍAS
// ======================================

// Arreglo para almacenar categorías
let listaCategorias = [
    { id: 1, nombre: "Empanadas de Carne", descripcion: "Rellenas de carne de res sazonada" },
    { id: 2, nombre: "Empanadas de Pollo", descripcion: "Rellenas de pollo desmechado" },
    { id: 3, nombre: "Bebidas", descripcion: "Jugos y refrescos" }
];

// Guardar en almacenamiento local
function guardarCategorias() {
    localStorage.setItem("categorias", JSON.stringify(listaCategorias));
}

// Cargar categorías guardadas
function cargarCategorias() {
    let guardadas = localStorage.getItem("categorias");
    if (guardadas) {
        listaCategorias = JSON.parse(guardadas);
    }
}

// Agregar nueva categoría
function agregarCategoria(nombre, descripcion) {
    let nueva = {
        id: listaCategorias.length + 1,
        nombre: nombre,
        descripcion: descripcion
    };
    listaCategorias.push(nueva);
    guardarCategorias();
    return nueva;
}

// Eliminar categoría
function borrarCategoria(indice) {
    if (confirm("¿Seguro que deseas eliminar esta categoría?")) {
        listaCategorias.splice(indice, 1);
        guardarCategorias();
        return true;
    }
    return false;
}

// Cargar al iniciar
cargarCategorias();