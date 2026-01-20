document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const cardsContainer = document.querySelector("#contenedor-herramientas");
    const bannerTitleElement = document.querySelector("#texto-categoria h2");
    const noResultados = document.querySelector("#no-resultados-contenedor");
    const contenedorHerramientas = document.querySelector("#probar-herramientas-seccion");
    const buscador = document.querySelector("#buscador");

    //Funcion para mapear el texto del enlace junto con la clave del JSON
    function mapCategoryLabel(label) {
        switch (label) {
            case "Pruebas de accesibilidad":
                return "accesibilidadWeb";
            case "Diseño de interfaces":
                return "disenoDeInterfaces";
            case "Desarrollo web":
                return "desarrolloWeb";
            case "Capacitación y recursos":
                return "capacitacion";
            default:
                return null;
        }
    }

    let isManualClick = false; //para detectar cuando hace click el usuario

    // Procesa cada enlace 
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            isManualClick = true;
            buscador.value = ""; //limpia el input

            if (window.desactivarLector ) {
                window.desactivarLector();
            }

            //quita la clase highcontrast al seleccionar otra categoria
            document.body.classList.remove("high-contrast");

            //quita la clase de daltonismo al seleccionar otra categoria
            document.body.classList.remove("protanopia", "deuteranopia", "tritanopia");

            //quita la clase al seleccionar otra categoria
            document.body.classList.remove("high-contrast");
            document.body.classList.remove("modo-lectura");
            document.querySelectorAll("input, button, select, textarea, a, .herramienta, .switch").forEach(function (elemento) {
                elemento.addEventListener("focus", function () {
                    elemento.classList.remove("enfoque-activado");
                });
            });

            // Extraer el label y la categoria correspondiente
            const categoryLabel = link.textContent.trim();
            const categoria = mapCategoryLabel(categoryLabel);

            // Actualizar el titulo del banner con el nombre de la categoria seleccionada
            bannerTitleElement.textContent = categoryLabel;

            // Limpiar el contenedor para preparar la nueva informacion
            cardsContainer.innerHTML = "";

            // buscar en el endpoint en la lista de endpoints.
            fetch("https://api-herramientas.onrender.com")
                .then((res) => res.json())
                .then((data) => {
                    let hasResults = false;
                    contenedorHerramientas.style.display = "flex"; //muestra la seccion del contenedor hasta que se hace el fetch

                    // data.endpoints es el arreglo de herramientas con su informacion basica
                    const endpointsFiltrados = data.endpoints.filter(item => item.categoria === categoria);

                    // Por cada herramienta hacemos una peticion a su endpoint para obtener detalles completos
                    endpointsFiltrados.forEach(item => {
                        fetch(item.endpoint)
                            .then(res => res.json())
                            .then(details => {

                                // Creamos el elemento tarjeta y armamos su contenido
                                const card = document.createElement("div");
                                card.className = "herramienta";
                                card.setAttribute('tabindex', '0');

                                // Generamos la lista de caracteristicas a partir del arreglo
                                let caracteristicasHTML = "";
                                details.caracteristicas.forEach(caracteristica => {
                                    caracteristicasHTML += `<li class="parrafo negro">${caracteristica}</li>`;
                                });

                                // Si la herramienta tiene un switch se lo incluye
                                let switchHTML = "";
                                let buttonHTML = "";

                                //url
                                let urlHTML = "";
                                if (details.url_herramienta) {
                                    urlHTML = `<p class="parrafo negro"><a href="${details.url_herramienta}" target="_blank" class="morado parrafo link">Saber más</a></p>`;
                                } else {
                                    urlHTML = "<p class='parrafo negro'>URL no disponible</p>"; 
                                }

                                if (details.switch_id) {
                                    switchHTML =
                                        `<label class="switch" tabindex="0">
                                    <input id="${details.switch_id}" type="checkbox">
                                    <div class="slider">
                                    <div class="circle">
                                    <svg class="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                </g>
                                            </svg>
                                            <svg class="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path class="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                </g>
                                            </svg>
                                    </div>
                                    </div>
                                    </label>`;
                                }

                                if (details.button_id) {
                                    buttonHTML = `
                                        <button id="${details.button_id}" class="btn-probar">Probar</button>`;
                                }

                                // Armamos el contenido interno de la tarjeta
                                card.innerHTML = `
                                <div id="img-switch-div">
                                <div class="img-herramienta"><img src="${details.imagen}"></div>
                                ${switchHTML}
                                ${buttonHTML}
                                </div>
                    <p class="morado titulo-3">${details.titulo}</p>
                    <p class="titulo-3 negro">${details.subtitulo}</p>
                    <p class="parrafo negro">${details.descripcion}</p>
                    <p class="parrafo negro">Características destacadas:</p>
                    <ul>${caracteristicasHTML}</ul>
                    ${urlHTML}`;

                                // Añadimos la tarjeta al contenedor de tarjetas
                                cardsContainer.appendChild(card);

                                //muestra y oculta el mensaje de no resultados
                                hasResults = true;
                                noResultados.style.display = hasResults ? "none" : "flex";

                                setTimeout(() => {
                                    card.classList.add("fade-in");
                                }, 200); // pequeño retraso para que el efecto se vea mejor

                                //hace scroll cuando se selecciona una categoría
                                if (isManualClick) {
                                    window.scrollBy({
                                        top: cardsContainer.getBoundingClientRect().top - 270,
                                        behavior: "smooth"
                                    });
                                }
                            })
                            .catch(err => console.error("Error al obtener los detalles de la herramienta:", err));
                    });
                })
                .catch(err => console.error("Error al obtener los endpoints:", err));
        });
    });

    // Cargar por defecto la categoria Diseño de interfaces al inicio
    const defaultLink = document.querySelector(".nav-link.active");
    if (defaultLink) {
        defaultLink.click();
        isManualClick = false;
    }

    // barra de búsqueda
    buscador.addEventListener("input", () => {
        const searchText = buscador.value.toLowerCase();
        let hasResults = false;

        const herramientasVisible = document.querySelectorAll(".herramienta");
        herramientasVisible.forEach(herramienta => {
            const titulo = herramienta.querySelector(".titulo-3").textContent.toLowerCase();
            if (titulo.includes(searchText)) {
                herramienta.style.display = "flex";
                hasResults = true;
            } else {
                herramienta.style.display = "none";
            }
        });

        // Mostrar u ocultar el mensaje de no resultados
        noResultados.style.display = hasResults ? "none" : "flex";
    });
});
