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

// JavaScript to trigger the fade-in effect on scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeIns = document.querySelectorAll('.fade-in');

    const onScroll = () => {
        fadeIns.forEach(fadeIn => {
            const rect = fadeIn.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                fadeIn.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on load
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to hide the loading spinner once the page is fully loaded
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
