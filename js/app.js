import { obtenerCarrito } from "./storage.js"
import { actualizarContador } from "./ui.js"
import { agregarAlCarrito } from "./funcionesCarrito.js"
import { actualizarPanelCarrito } from "./carrito.js"

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito()
    actualizarContador(carrito)

    const contenedorProductos = document.getElementById("contenedor-productos")

    if (contenedorProductos) {
        cargarProductos(contenedorProductos)
    }
})

function cargarProductos(contenedor) {
    fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res => res.json())
        .then(productos => renderizarProductos(productos, contenedor))
        .catch(err => console.error("Error cargando productos:", err))
}

function renderizarProductos(productos) {
    const contenedor = document.getElementById("contenedor-productos")
    contenedor.innerHTML = ""

    productos.forEach(p => {
        const card = document.createElement("article")
        card.classList.add("tarjeta")

        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}">
            <h3>${p.title}</h3>
            <span class="precio">$${p.price}</span>
            <button class="btn-agregar">
                <i class="fas fa-cart-plus"></i> Agregar al carrito
            </button>
        `

        // Evento del botón
        const btn = card.querySelector(".btn-agregar")
        btn.addEventListener("click", () => {
            agregarAlCarrito(p)
            
            // Actualizar contador y panel
            actualizarContador(obtenerCarrito())
            actualizarPanelCarrito()
        })

        contenedor.appendChild(card)
    })
}