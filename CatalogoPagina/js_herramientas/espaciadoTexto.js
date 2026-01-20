document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"][id="espaciadoTextoSwitch"]')) {
        const espaciadoSwitch = event.target;
        
        if (espaciadoSwitch.checked) {
            document.querySelectorAll('.herramienta').forEach(function(card) {
                card.style.letterSpacing = "0.12em";
                card.style.wordSpacing = "0.16em";
            });
        } else {
            document.querySelectorAll('.herramienta').forEach(function(card) {
                card.style.letterSpacing = "0";
                card.style.wordSpacing = "0";
            });
        }
    }
});

