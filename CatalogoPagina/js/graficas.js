document.addEventListener("DOMContentLoaded", function () {
    const graficas = document.querySelectorAll(".grafica-1, .grafica-2, .grafica-3, .grafica-4");
    
    function verificarScroll() {
        graficas.forEach(grafica => {
            const rect = grafica.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.6) { 
                grafica.style.width = grafica.dataset.width;
                setTimeout(() => {
                    const p = grafica.querySelector("p");
                    if (p) {
                        p.style.opacity = "1";
                    }
                }, 1000); 
            }
        });
    }

    graficas.forEach(grafica => {
        grafica.dataset.width = getComputedStyle(grafica).width; 
        grafica.style.width = "0"; 
        grafica.style.transition = "width 1s ease-out"; 
        
        const p = grafica.querySelector("p");
        if (p) {
            p.style.opacity = "0"; 
            p.style.transition = "opacity 0.5s ease-in";
        }
    });
    
    window.addEventListener("scroll", verificarScroll);
    verificarScroll(); 
});
