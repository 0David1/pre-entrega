const KEY = "carrito"

export const guardarCarrito = (carrito) => {
    localStorage.setItem(KEY, JSON.stringify(carrito))
}

export const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem(KEY)) || []
}

export const eliminarCarrito = () => {
    localStorage.removeItem(KEY)
}