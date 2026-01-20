const volverArriba = document.getElementById('volver-arriba');
const footer = document.querySelector('footer'); 

function checkScroll() {
    const scrollPosition = window.scrollY; 
    const windowHeight = window.innerHeight;

    const footerPosition = footer.getBoundingClientRect().top + window.scrollY; 

    if (scrollPosition > 350 && scrollPosition + windowHeight < footerPosition) {
        volverArriba.style.opacity = 1;
        volverArriba.style.pointerEvents = 'auto'; 
    } else {
        volverArriba.style.opacity = 0;
        volverArriba.style.pointerEvents = 'none'; 
    }

    if (scrollPosition + windowHeight >= footerPosition) {
        volverArriba.style.opacity = 0;
        volverArriba.style.pointerEvents = 'none'; 
    }
}

window.addEventListener('scroll', checkScroll);

checkScroll();

function scrollArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


