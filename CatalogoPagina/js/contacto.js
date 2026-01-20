var contacto = document.querySelector('#contacto');
var textoMorado = document.querySelectorAll('#contacto .morado');

document.querySelectorAll("#formulario input[type='text'], #formulario textarea, #formulario input[type='email']").forEach(element => {
    element.addEventListener("focus", () => {
        contacto.style.backgroundColor = "var(--morado)";
        textoMorado.forEach(texto => {
            texto.style.color = "var(--blanco)";
        });
    });
    element.addEventListener("blur", () => {
        contacto.style.backgroundColor = "var(--blanco)";
        textoMorado.forEach(texto => {
            texto.style.color = "var(--morado)";
        });
    });
});