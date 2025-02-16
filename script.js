const roleElement = document.getElementById("role");
const roles = [
    "Full-Stack Developer",
    "Game Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
    "Horror Game Creator",
    "Founder of astronova",
    "Creative Coder",
    "Indie Game Developer",
    "Web & Game Engineer",
    "Digital Experience Builder",
    "Immersive Storyteller",
    "Software Developer",
    "Gameplay Programmer",
    "Frontend & Backend Engineer",
    "Passionate Problem Solver"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        // Typing mode: add one character at a time
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        // If the text is fully typed, switch to deleting mode after a pause
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000); // Pause before deleting
        } else {
            setTimeout(typeWriter, 100); // Typing speed
        }
    } else {
        // Deleting mode: remove one character at a time
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        // If the text is fully deleted, move to the next role
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // Cycle to the next role
            setTimeout(typeWriter, 500); // Pause before typing the next role
        } else {
            setTimeout(typeWriter, 50); // Deleting speed
        }
    }
}

// Start the typewriter effect
typeWriter();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            const offset = 80; // Offset for the sticky header (adjust as needed)
            const targetPosition = targetElement.offsetTop - offset; // Calculate the target position
            const viewportHeight = window.innerHeight; // Get the viewport height
            const sectionHeight = targetElement.offsetHeight; // Get the target section height

            // Calculate the scroll position to center the section
            const scrollPosition = targetPosition - (viewportHeight / 2) + (sectionHeight / 2);

            // Smoothly scroll to the calculated position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});