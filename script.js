document.addEventListener("DOMContentLoaded", function() {
    // Effet d'apparition au scroll (Fade-in)
    const projects = document.querySelectorAll('.project-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    projects.forEach(p => {
        p.style.opacity = "0";
        p.style.transform = "translateY(20px)";
        p.style.transition = "all 0.6s ease-out";
        observer.observe(p);
    });
});