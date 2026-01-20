const paletas = [
    ["#9a0966", "#f0c9c8"],
    ["#6cfc5f", "#195789"],
    ["#423fa6", "#f3df3f"],
    ["#7dcf7f", "#350565"],
    ["#9a1b18", "#d9d6bb"],
    ["#d5edc0", "#176419"],
    ["#91e8aa", "#07183e"],
    ["#132781", "#23f9f8"],
    ["#63abd4", "#6c1b0a"],
    ["#dee2be", "#8b1e2c"],
    ["#b0d38b", "#660d84"],
    ["#c18fba", "#0b0265"],
    ["#6e1ea7", "#91d6c4"],
    ["#4a0498", "#f18053"],
    ["#82b4ec", "#50033d"],
    ["#d1f89f", "#9a2b78"],
    ["#fbc6ee", "#484319"],
    ["#f28380", "#020c34"]
];

// función para obtener una paleta aleatoria
function paletaRandom() {
    const randomIndex = Math.floor(Math.random() * paletas.length);
    return paletas[randomIndex];
}

// función para aplicar la paleta de colores a todas las tarjetas
function aplicarPaleta(paleta) {
    const cards = document.querySelectorAll(".herramienta");
    console.log(paleta);
    const [bgColor, textColor] = paleta;

    // aplicar los colores a todas las tarjetas
    cards.forEach(card => {
        card.style.backgroundColor = bgColor;

        const p = card.querySelectorAll("p");
        p.forEach(parrafo => {
            parrafo.style.color = textColor;
        });

        const li = card.querySelectorAll("li");
        li.forEach(lista => {
            lista.style.color = textColor;
        });

        const a = card.querySelector("a");
        a.style.color = textColor;

        const img = card.querySelector(".img-herramienta");
        img.style.backgroundColor = textColor;

        const buttons = card.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.backgroundColor = textColor;
            button.style.color = bgColor;
        });

        const switches = card.querySelectorAll(".switch");
        switches.forEach(switchElement => {
            switchElement.style.setProperty("--switch-checked-bg", textColor);
            switchElement.style.setProperty("--switch-bg", textColor);
            switchElement.style.setProperty("--icon-checkmark-color", textColor);
            switchElement.style.setProperty("--icon-cross-color", textColor);

            switchElement.style.setProperty("--circle-bg", bgColor);

            const slider = switchElement.querySelector(".slider");
            if (slider) {
                slider.style.backgroundColor = textColor;
            }
        });
    });
}

document.addEventListener("click", function (event) {
    if (event.target && event.target.matches('button[id="paletaColoresButton"]')) {
        const paleta = paletaRandom();  // obtener una paleta aleatoria
        aplicarPaleta(paleta);  // aplicar la paleta de colores a todas las tarjetas
    }
});

