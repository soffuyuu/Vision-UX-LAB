document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    let lastActiveSection = null;

    function isSectionInView(section) {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
    }

    function updateActiveLink() {
        let currentSection = null;

        sections.forEach((section) => {
            if (isSectionInView(section)) {
                currentSection = section;
            }
        });

        if (currentSection) {
            lastActiveSection = currentSection;
        }

        if (lastActiveSection) {
            navLinks.forEach((link) => link.parentElement.classList.remove("active-li"));

            const activeLink = document.querySelector(`nav ul li a[href="#${lastActiveSection.id}"]`);
            if (activeLink) {
                activeLink.parentElement.classList.add("active-li");
            }
        }
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});