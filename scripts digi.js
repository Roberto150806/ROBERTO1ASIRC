// Validación del formulario y confirmación de envío
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Obtención de valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Verificación de campos vacíos
    if (!name || !email || !message) {
        alert("Por favor, rellena todos los campos antes de enviar el formulario.");
        return;
    }

    // Simulación de envío exitoso
    alert(`¡Gracias, ${name}! Tu solicitud ha sido enviada correctamente.`);
    document.getElementById("contactForm").reset(); // Limpia el formulario
});

// Scroll suave entre secciones (si se añaden enlaces de navegación)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
