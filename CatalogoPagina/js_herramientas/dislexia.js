document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id="dislexiaSwitch"]')) {
        const dislexiaSwitch = event.target;
        
        document.querySelectorAll(".herramienta p, .herramienta li, .herramienta a").forEach(function(elemento) {
            elemento.classList.toggle("fuente-dislexia", dislexiaSwitch.checked);
        });
    }
});