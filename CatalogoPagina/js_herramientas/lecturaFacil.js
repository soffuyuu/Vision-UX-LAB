document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id^="modoLecturaFacilSwitch"]')) {
        const modoLecturaSwitch = event.target;
        
        if (modoLecturaSwitch.checked) {
            document.body.classList.add("modo-lectura");
        } else {
            document.body.classList.remove("modo-lectura");
        }
    }
});