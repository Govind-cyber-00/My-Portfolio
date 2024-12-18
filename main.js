var typed = new Typed(".text", {
    strings:["Frontend Developer", "Mobile Cinematographer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('show');
});
// document.querySelectorAll('.navbar i').forEach(icon =>{
//     icon.computedStyleMap.display ='none';
// });


// Navbar activation steps

const navLinks = document.querySelectorAll('.nav-link');

// Har link pe click event listener lagao
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Pehle se active link ko hatao
    document.querySelector('.nav-link.active')?.classList.remove('active');
    
    // Current clicked link ko active class do
    link.classList.add('active');
  });
});