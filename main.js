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
