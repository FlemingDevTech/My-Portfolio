console.log('Script loaded successfully');

// Toggle Navigation Menu
function toggleMenu() {
    console.log('Toggle menu');
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

document.querySelector('nav').addEventListener('click', toggleMenu);

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter Projects
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

// Lightbox Effect for Project Images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Project Image">
            <span class="close-lightbox">&times;</span>
        </div>
    `;
    document.body.appendChild(lightbox);

    document.querySelector('.close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

// Form Validation
document.querySelector('#contact form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});