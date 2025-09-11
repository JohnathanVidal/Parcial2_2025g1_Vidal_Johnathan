// main.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const alertBox = document.getElementById("formAlert");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Ejemplo de validación simple: campos no vacíos y email básico
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // limpiar clases
        form.classList.remove("was-validated");
        alertBox.innerHTML = "";

        let ok = true;
        if (!name || !email || !subject || !message) ok = false;
        if (email && !emailRe.test(email)) ok = false;

        if (!ok) {
            form.classList.add("was-validated");
            alertBox.innerHTML = '<div class="text-danger">Por favor revisa los campos en rojo.</div>';
            return;
        }

        // Simulación de envío: aquí podrías usar fetch() a una API o usar formspree / correo
        alertBox.innerHTML = '<div class="text-success">Gracias, tu mensaje fue enviado (simulado).</div>';
        form.reset();
    });
});
