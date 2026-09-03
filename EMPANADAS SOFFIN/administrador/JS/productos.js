// ======================================
// GESTIÓN DE PRODUCTOS
// ======================================

// Arreglo para almacenar productos
let listaProductos = [
    { id: 1, nombre: "Empanada de Queso", precio: 3600, descripcion: "Queso derretido en masa crujiente" },
    { id: 2, nombre: "Empanada de Pollo", precio: 3800, descripcion: "Pollo desmechado bien sazonado" },
    { id: 3, nombre: "Empanada Arroz con Pollo", precio: 4000, descripcion: "Arroz, pollo y verduras" }
];

// Guardar en almacenamiento local
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(listaProductos));
}

// Cargar productos guardados
function cargarProductos() {
    let guardados = localStorage.getItem("productos");
    if (guardados) {
        listaProductos = JSON.parse(guardados);
    }
}

// Agregar nuevo producto
function agregarProducto(nombre, precio, descripcion) {
    let nuevo = {
        id: listaProductos.length + 1,
        nombre: nombre,
        precio: parseFloat(precio),
        descripcion: descripcion
    };
    listaProductos.push(nuevo);
    guardarProductos();
    return nuevo;
}

// Eliminar producto
function borrarProducto(indice) {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
        listaProductos.splice(indice, 1);
        guardarProductos();
        return true;
    }
    return false;
}

// Cargar al iniciar
cargarProductos();