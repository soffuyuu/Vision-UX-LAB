document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id="protectorVistaSwitch"]')) {
        const protectorSwitch = event.target;
        
        if (protectorSwitch.checked) {
            document.querySelectorAll(".herramienta").forEach(function(elemento) {
                elemento.classList.add("filtro-activado");
            });
        } else {
            document.querySelectorAll(".herramienta").forEach(function(elemento) {
                elemento.classList.remove("filtro-activado");
            });
        }
    }
});