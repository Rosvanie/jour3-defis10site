//GENERAL
// Fonction pour vérifier si un élément est dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Fonction pour vérifier si un élément est dans le viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    // Fonction principale pour gérer les classes
    const handleScroll = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('visible'); // Ajoute "visible" si dans le viewport
            } else {
                section.classList.remove('visible'); // Retire "visible" si hors du viewport
            }
        });
    };

    // Exécute la fonction au chargement et lors du défilement
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});



//HERO INDEX.HTML
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const handleScroll = () => {
        if (isInViewport(heroContent)) {
            heroContent.style.opacity = '1'; // Déclenche l'animation
        }
    };

    // Vérification initiale et lors du scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});

//SERVICE INDEX.HTML
document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const handleScroll = () => {
        serviceItems.forEach((item, index) => {
            if (isInViewport(item)) {
                item.style.opacity = '1'; // Rendre visible
                item.style.animationDelay = `${index * 0.2}s`; // Ajout d'un délai pour chaque item
            }
        });
    };

    // Vérification initiale et lors du scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});


//PORTFOLIO INDEX.HTML
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const handleScroll = () => {
        projects.forEach((project, index) => {
            if (isInViewport(project)) {
                project.style.opacity = '1'; // Rendre visible
                project.style.animationDelay = `${index * 0.2}s`; // Délai d'animation pour chaque projet
            }
        });
    };

    // Vérification initiale et lors du scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});






//NAVBAR
// Sélection des éléments
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Ajout de l'événement clic sur le bouton burger
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Ajoute ou enlève la classe 'active'
});

// Fermer le menu lorsqu'un lien est cliqué
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active'); // Retire la classe 'active' après clic
    }
});










// Fonction de filtrage des projets et ajout de la classe active
function filterProjects(category) {
    let projects = document.querySelectorAll('.project-card');
    let buttons = document.querySelectorAll('.filter-button');

    // Réinitialisation des styles pour tous les boutons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Si la catégorie est "all", l'onglet "Tous" devient actif
    if (category === 'all') {
        document.querySelector('.filter-button[data-category="all"]').classList.add('active');
    } else {
        // Si une autre catégorie est sélectionnée, on active ce bouton
        document.querySelector(`.filter-button[data-category="${category}"]`).classList.add('active');
    }

    // Affichage des projets en fonction de la catégorie
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Définir "Tous" comme onglet actif par défaut au chargement de la page
window.onload = function() {
    filterProjects('all');
}















// JavaScript pour gérer le défilement du carousel
document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const carouselImages = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    let index = 0; // L'index de l'image actuellement affichée

    // Fonction pour afficher l'image suivante
    function showNextImage() {
        index++;
        if (index >= images.length) {
            index = 0; // Si on dépasse la dernière image, revenir à la première
        }
        updateCarousel();
    }

    // Fonction pour afficher l'image précédente
    function showPrevImage() {
        index--;
        if (index < 0) {
            index = images.length - 1; // Si on dépasse la première image, revenir à la dernière
        }
        updateCarousel();
    }

    // Fonction pour mettre à jour le carousel
    function updateCarousel() {
        const offset = -index * 100; // Calcule l'offset pour faire défiler les images
        carouselImages.style.transform = `translateX(${offset}%)`; // Applique l'offset aux images
    }

    // Ajout des événements de clic sur les boutons
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);

    // Facultatif : Avancer automatiquement toutes les 5 secondes
    setInterval(showNextImage, 5000); // Change l'image toutes les 5 secondes
});
