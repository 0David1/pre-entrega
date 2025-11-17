import { obtenerCarrito } from "./storage.js"
import { sumarCantidad, restarCantidad, eliminarProducto } from "./funcionesCarrito.js"

const listaCarrito = document.getElementById("carrito-lista")
const totalCarrito = document.getElementById("total-carrito")

export function actualizarPanelCarrito() {
    const carrito = obtenerCarrito()
    listaCarrito.innerHTML = ""
    let total = 0

    carrito.forEach((item, index) => {
        const p = item.product
        total += p.price * item.cantidad

        const li = document.createElement("li")
        li.classList.add("item-carrito")

        li.innerHTML = `
            <span class="carrito-nombre">${p.title}</span>
            <span class="carrito-precio-unit">$${p.price}</span>

            <div class="cantidad-controls">
                <button class="menos">-</button>
                <span class="cantidad">${item.cantidad}</span>
                <button class="mas">+</button>
            </div>

            <span class="carrito-precio-total">$${p.price * item.cantidad}</span>
            <button class="btn-eliminar">X</button>
        `

        li.querySelector(".mas").onclick = () => {
            sumarCantidad(index)
            actualizarPanelCarrito()
        }

        li.querySelector(".menos").onclick = () => {
            restarCantidad(index)
            actualizarPanelCarrito()
        }

        li.querySelector(".btn-eliminar").onclick = () => {
            eliminarProducto(index)
            actualizarPanelCarrito()
        }

        listaCarrito.appendChild(li)
    })

    totalCarrito.textContent = total
}