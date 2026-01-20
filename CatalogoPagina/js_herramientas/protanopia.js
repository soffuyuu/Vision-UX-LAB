document.addEventListener("change", function (event) {
    // Protanopia Switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="protanopiaSwitch"]')) {
        const protanopiaSwitch = event.target;

        if (protanopiaSwitch.checked) {
            document.body.classList.add("protanopia");
            document.body.classList.remove("deuteranopia", "tritanopia");
        } else {
            document.body.classList.remove("protanopia");
        }
    }

    // Deuteranopia Switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="deuteranopiaSwitch"]')) {
        const deuteranopiaSwitch = event.target;

        if (deuteranopiaSwitch.checked) {
            document.body.classList.add("deuteranopia");
            document.body.classList.remove("protanopia", "tritanopia");
        } else {
            document.body.classList.remove("deuteranopia");
        }
    }

    // Tritanopia Switch
    if (event.target && event.target.matches('input[type="checkbox"][id^="tritanopiaSwitch"]')) {
        const tritanopiaSwitch = event.target;

        if (tritanopiaSwitch.checked) {
            document.body.classList.add("tritanopia");
            document.body.classList.remove("protanopia", "deuteranopia");
        } else {
            document.body.classList.remove("tritanopia");
        }
    }
});

