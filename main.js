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


// JavaScript for skill box hover effect
const skillBoxes = document.querySelectorAll('.skill-box-a','skill-box-b','skill-box-c','skill-box-d','skill-box-e','skill-box-f','skill-box-g','skill-box-h','skill-box-i','skill-box-j','skill-box-k');

skillBoxes.forEach(skillBox => {
  skillBox.addEventListener('mouseenter', () => {
    skillBox.style.transform = 'translateY(-5px)';
  });
  
  skillBox.addEventListener('mouseleave', () => {
    skillBox.style.transform = 'translateY(0)';
  });
});



