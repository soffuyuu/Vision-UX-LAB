document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id^="contrastSwitch"]')) {
        const contrastSwitch = event.target;
        
        if (contrastSwitch.checked) {
            document.body.classList.add("high-contrast");
        } else {
            document.body.classList.remove("high-contrast");
        }
    }
});
