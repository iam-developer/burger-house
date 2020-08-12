// Mobile menu ========================>>>>>>

let openBtn = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
let closeMenu = document.querySelector('.close-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('show-menu');
    if(mobileMenu.classList.contains("show-menu")) {
        document.getElementById('boody').style.position = "fixed";
    }
    if(!mobileMenu.classList.contains("show-menu")) {
        document.getElementById('boody').style.position = "relative";
    }
}
openBtn.onclick = toggleMenu;
closeMenu.onclick = toggleMenu;

