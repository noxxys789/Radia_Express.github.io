const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.1)'; // Change l'échelle de l'élément sur lequel on passe la souris
  });

  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)'; // Rétablit l'échelle à la valeur par défaut quand la souris quitte l'élément
  });
});

navLinks.forEach(link => {
  const navbarBar = document.createElement('div');
  navbarBar.classList.add('navbar-bar');

  // Ajoutez la barre en dessous de chaque lien de la navbar
  link.parentNode.appendChild(navbarBar);

  // Ajoutez les écouteurs d'événements pour le survol de la souris
  link.addEventListener('mouseover', () => {
    const linkWidth = link.offsetWidth;
    navbarBar.style.width = `${linkWidth}px`;

    // Ajoutez la classe "active" au lien survolé
    link.classList.add('active');
  });

  link.addEventListener('mouseout', () => {
    navbarBar.style.width = '0';

    // Supprimez la classe "active" de tous les liens lorsque la souris quitte la navbar
    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });
  });
});

// Fonction pour mettre en surbrillance l'élément de la navbar correspondant à la section visible dans la fenêtre
function highlightNavbarItem() {
    const sections = document.querySelectorAll('.container h1');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Réinitialiser tous les navlinks à blanc
    navLinks.forEach(navLink => {
        navLink.classList.remove('text_grey');
        navLink.classList.add('text_white');
    });


    sections.forEach((section, index) => {
        const sectionId = section.getAttribute('id');
        const navLink = document.getElementById(`nav-${sectionId}`);

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Calcul de la position de la section par rapport au bas de la fenêtre
        const sectionBottom = sectionTop + sectionHeight;

        // Hauteur de la fenêtre
        const windowHeight = window.innerHeight;

        // Position du bas de la fenêtre
        const windowBottom = window.pageYOffset + windowHeight;


        // Si le bas de la section est dans la fenêtre visible
        if (sectionBottom <= windowBottom) {
            navLink.classList.remove('text_white');
            navLink.classList.add('text_grey');
        }
    });
}

// Écouteur d'événement pour détecter le défilement de la page
window.addEventListener('scroll', highlightNavbarItem);