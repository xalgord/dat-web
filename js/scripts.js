// Custom JS can be added here for interactivity
document.addEventListener('DOMContentLoaded', function () {
    console.log('Daccountrust website is ready!');
});

// JavaScript to trigger fade-in animation on scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if(sectionTop < triggerBottom) {
            section.classList.add('active');
        }
    });
});
