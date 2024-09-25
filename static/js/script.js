document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content-section .selected-projects .internships .education');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeSection(newActiveLink) {
        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to the new section
        const targetSection = document.querySelector(newActiveLink.getAttribute('href'));
        targetSection.classList.add('active');

        // Update active nav item
        document.querySelector('nav ul li.active').classList.remove('active');
        newActiveLink.parentNode.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            changeSection(this); // Change the section based on clicked link
        });

        link.addEventListener('mouseenter', () => {
            link.style.fontSize = '20px'; // Enlarging the font on hover
        });

        link.addEventListener('mouseleave', () => {
            link.style.fontSize = ''; // Resetting the font size
        });
    });
});
