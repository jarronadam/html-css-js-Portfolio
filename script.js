function toggleMenu() {
    const menu = document.querySelector('.menu-links'); // Select the menu element
    const icon = document.querySelector('.hamburger-icon'); // Select the menu element
    // Toggle the 'open' class on the menu element
    menu.classList.toggle('open'); // This will add or remove the 'open' class
    icon.classList.toggle('open'); // This will add or remove the 'open' class
}