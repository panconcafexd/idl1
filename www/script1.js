// Esta función se ejecutará cuando el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento de clic al encabezado de la página
    document.querySelector("h1").addEventListener("click", function() {
        // Cambia el color de fondo del encabezado al hacer clic
        this.style.backgroundColor = "blue";
    });
});