// ======================================
// GESTIÓN DE PEDIDOS
// ======================================

// Estados posibles de un pedido
const ESTADOS_PEDIDO = {
    PENDIENTE: "⏳ Pendiente",
    EN_CAMINO: "🚚 En camino",
    ENTREGADO: "✅ Entregado",
    CANCELADO: "❌ Cancelado"
};

// Arreglo para almacenar pedidos
let listaPedidos = [
    {
        id: "#001",
        cliente: "María López",
        fecha: "03/09/2026",
        productos: "2x Empanadas de Queso, 1x Jugo",
        total: 9700,
        estado: ESTADOS_PEDIDO.PENDIENTE
    }
];

// Cambiar estado de un pedido
function cambiarEstadoPedido(indice, nuevoEstado) {
    listaPedidos[indice].estado = nuevoEstado;
    guardarPedidos();
}

// Guardar en almacenamiento local
function guardarPedidos() {
    localStorage.setItem("pedidos", JSON.stringify(listaPedidos));
}

// Cargar pedidos guardados
function cargarPedidos() {
    let guardados = localStorage.getItem("pedidos");
    if (guardados) {
        listaPedidos = JSON.parse(guardados);
    }
}

// Cargar al iniciar
cargarPedidos();