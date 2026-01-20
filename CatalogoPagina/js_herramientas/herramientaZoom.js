document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id="zoomFuncionalSwitch"]')) {
        const zoomSwitch = event.target;

        if (zoomSwitch.checked) {
            document.body.style.zoom = "130%";
        }else{
            document.body.style.zoom = "100%";
        }
    }
});