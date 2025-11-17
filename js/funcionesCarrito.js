import { guardarCarrito, obtenerCarrito, eliminarCarrito } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js"

export const agregarAlCarrito = (productoNuevo) => {
    const carrito = obtenerCarrito()

    const existente = carrito.find(item => item.product.id === productoNuevo.id)

    if (existente) {
        existente.cantidad++
    } else {
        carrito.push({
            product: productoNuevo,
            cantidad: 1 
        })
    }

    guardarCarrito(carrito)
    actualizarContador(carrito)
    mostrarMensaje("Producto agregado al carrito")
}

export const sumarCantidad = (index) => {
    const carrito = obtenerCarrito()
    carrito[index].cantidad++
    guardarCarrito(carrito)
    actualizarContador(carrito)
}

export const restarCantidad = (index) => {
    const carrito = obtenerCarrito()
    carrito[index].cantidad--

    if (carrito[index].cantidad <= 0) carrito.splice(index, 1)

    guardarCarrito(carrito)
    actualizarContador(carrito)
}

export const eliminarProducto = index => {
    const carrito = obtenerCarrito()
    carrito.splice(index, 1)
    guardarCarrito(carrito)
    actualizarContador(carrito)
}

export const vaciarCarrito = () => {
    eliminarCarrito()
    actualizarContador([])
    mostrarMensaje("Producto eliminado")
}
