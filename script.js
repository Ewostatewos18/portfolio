
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
const navbarLinks = navbar.querySelectorAll('a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active');
    }
});
const tabletBreakpoint = 895; 
function handleResize() {
    if (window.innerWidth > tabletBreakpoint) {
        navbar.classList.remove('active');
    }
}
window.addEventListener('resize', handleResize);


