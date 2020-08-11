// Mobile menu ========================>>>>>>

let openBtn = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
let closeMenu = document.querySelector('.close-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('show-menu');
}
openBtn.onclick = toggleMenu;
closeMenu.onclick = toggleMenu;
