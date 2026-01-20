document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id="simuladorSwitch"]')) {
        if (event.target.checked) {
            document.body.classList.add("baja-vision");
        } else {
            document.body.classList.remove("baja-vision");
        }
    }
});