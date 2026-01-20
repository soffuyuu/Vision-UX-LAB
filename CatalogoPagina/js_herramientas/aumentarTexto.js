document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "escalaTextoButton") {
        aumentarTamanoTexto();
    }
});

function aumentarTamanoTexto() {
    const elementosTexto = document.querySelectorAll(".herramienta p, .herramienta li, .herramienta a");

    elementosTexto.forEach(elemento => {
        let tamañoActual = parseFloat(window.getComputedStyle(elemento).fontSize);
        let lineHeightActual = parseFloat(window.getComputedStyle(elemento).lineHeight);

        // calcular nuevos valores aumentando un 10%
        let nuevoTamaño = tamañoActual * 1.1;
        let nuevoLineHeight = lineHeightActual * 1.1;

        // aplicar los nuevos valores
        elemento.style.fontSize = nuevoTamaño + "px";
        elemento.style.lineHeight = nuevoLineHeight + "px";
    });
}