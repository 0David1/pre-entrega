import { actualizarPanelCarrito } from "./carrito.js"

const iconoCarrito = document.querySelector(".carrito-icon")
const panelCarrito = document.getElementById("panel-carrito")
const overlay = document.getElementById("overlay")
const cerrarCarritoBtn = document.getElementById("cerrar-carrito")

export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito")
    if (contador) {
        contador.textContent = carrito.length
    }
}

export const mostrarMensaje = (texto) => {
    const msg = document.createElement("div")
    msg.className = "toast"
    msg.textContent = texto

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.classList.add("visible")
    }, 10)

    setTimeout(() => {
        msg.classList.remove("visible")
        msg.addEventListener("transitionend", () => msg.remove())
    }, 2000)
}

export function abrirCarrito() {
    panelCarrito.classList.add("abierto")
    overlay.classList.add("activo")
    actualizarPanelCarrito()
}

export function cerrarCarrito() {
    panelCarrito.classList.remove("abierto")
    overlay.classList.remove("activo")
}

iconoCarrito.addEventListener("click", abrirCarrito)
iconoCarrito.addEventListener("keydown", abrirCarrito)
cerrarCarritoBtn.addEventListener("click", cerrarCarrito)
overlay.addEventListener("click", cerrarCarrito)