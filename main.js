const navbar = document.querySelector('nav');
const navbarMenu = document.querySelector('#navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');
const toggleBtn = document.querySelector('.navbar-toggler');

// smena klasa na meniju kada se strana scroll-uje
window.addEventListener('scroll', function() {
    if (this.pageYOffset > 100) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-light');
    } else {
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-transparent');
    }
})

// zatvaranje menija klikom na stavku menija na malim rezolucijama
navLinks.forEach(item => item.addEventListener('click', function() {
    navbarMenu.classList.remove('show');
}))

// uklanjanje transparent menija klikom na toggle btn
toggleBtn.addEventListener('click', function() {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-light');
})

// inicijalizacija wow.js biblioteke
new WOW().init();