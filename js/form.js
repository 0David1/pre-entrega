const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    if (!validateInput(name, "messageName", "Nombre requerido")) return
    if (!validateInput(email, "messageEmail", "Email requerido")) return

    if (!validateEmail(email)) {
        showMessage("messageEmail", "El correo no tiene un formato válido")
        return
    }

    showMessage("messageEmail", "")

    if (!validateInput(message, "messageText", "Mensaje requerido")) return

    showMessage("messageSubmit", "Formulario enviado correctamente")
})

function validateInput(input, idMessage, message){
    if (input === ""){
        showMessage(idMessage, message)
        return false
    }
    showMessage(idMessage, "")
    return true
}

function showMessage(id, text) {
    const message = document.getElementById(id)
    message.textContent = text
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}