function toggleMenu() {
    const menu = document.querySelector('.menu-links'); // Select the menu element
    const icon = document.querySelector('.hamburger-icon'); // Select the menu element
    // Toggle the 'open' class on the menu element
    menu.classList.toggle('open'); // This will add or remove the 'open' class
    icon.classList.toggle('open'); // This will add or remove the 'open' class
}

const titles = [
    "Software Developer",
    "IT Technician",
    "Full-Stack Engineer",
    "Web Developer",
    "Problem Solver"
  ];

  let index = 0;
const textElement = document.getElementById("changing-text");

function changeTitle() {
    // Fade out
    textElement.classList.remove("fade-in");
    textElement.classList.add("fade-out");
  
    setTimeout(() => {
      index = (index + 1) % titles.length;
      textElement.textContent = titles[index];
  
      // Fade back in
      textElement.classList.remove("fade-out");
      textElement.classList.add("fade-in");
    }, 400); // wait for fade out before switching
  }
  
  // Change every 2.5s
  setInterval(changeTitle, 2500);