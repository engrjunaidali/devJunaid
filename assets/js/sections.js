// Function to load HTML sections
async function loadSection(sectionName) {
    try {
        const response = await fetch(`/sections/${sectionName}.html`);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error(`Error loading ${sectionName} section:`, error);
        return '';
    }
}

// Function to initialize sections
async function initializeSections() {
    const mainContent = document.querySelector('.main-content');
    const sections = ['about', 'resume', 'portfolio', 'contact', 'skills'];

    // Load all sections
    for (const section of sections) {
        const content = await loadSection(section);
        if (content) {
            const div = document.createElement('div');
            div.innerHTML = content;
            mainContent.appendChild(div.firstChild);
        }
    }

    // Re-initialize event listeners and functionality
    setupNavigation();
    initializeContactForm();
    // initializeLightGallery();

    // Initialize animations
    animateOnScroll();
}

// Function to setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');

    // Show the default page (about)
    let lastActiveNav = navLinks[0];
    let lastActivePage = pages[0];

    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            if (lastActiveNav) lastActiveNav.classList.remove('active');
            lastActiveNav = this;
            this.classList.add('active');

            const pageName = this.textContent.trim().toLowerCase();

            if (lastActivePage) lastActivePage.classList.remove('active');
            lastActivePage = document.querySelector(`[data-page="${pageName}"]`);
            if (lastActivePage) lastActivePage.classList.add('active');
        });
    });
}

// Function to initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('[name="name"]').value.trim();
            const email = this.querySelector('[name="email"]').value.trim();
            const message = this.querySelector('[name="message"]').value.trim();

            const to = 'thejunaidali21@gmail.com';
            const subject = 'Contact from Portfolio Website';
            const body = `
Hello Junaid,

Message from: ${name}
Email: ${email}

${message}

Best regards,
${name}
      `.trim();

            window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
}

// Function to animate elements when they become visible
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe skill bars
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
        const progress = item.querySelector('.progress');
        if (progress) {
            progress.style.setProperty('--progress-width', progress.dataset.progress + '%');
        }
    });

    // Observe service items
    document.querySelectorAll('.service-item').forEach(item => {
        observer.observe(item);
    });

    // Observe portfolio items
    document.querySelectorAll('.project-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSections);
