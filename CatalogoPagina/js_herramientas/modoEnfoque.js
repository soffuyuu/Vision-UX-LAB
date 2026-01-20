document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id="enfoqueSwitch"]')) {
        const enfoqueSwitch = event.target;

        if (enfoqueSwitch.checked) {
            document.querySelectorAll("input, button, select, textarea, a, .herramienta, .switch").forEach(function (elemento) {
                elemento.addEventListener("focus", function () {
                    elemento.classList.add("enfoque-activado");
                });

                elemento.addEventListener("blur", function () {
                    elemento.classList.remove("enfoque-activado");
                });
            });
        } else {
            document.querySelectorAll("input, button, select, textarea, a, .herramienta, .switch").forEach(function (elemento) {
                elemento.addEventListener("focus", function () {
                    elemento.classList.remove("enfoque-activado");
                });
            });
        }
    }
});
