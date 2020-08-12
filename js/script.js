
// =============== BURGER MENU ============== 

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


// ============ ANIMATION ===================

const animItems = document.querySelectorAll('.anim-item');
const animScale = document.querySelectorAll('.anim-scale');

function showAnimation() {
    for(let i = 0; i < animItems.length; i ++) {
        animItems[i].classList.add('active__class');    
    }
    for(let x = 0; x < animScale.length; x ++) {
        animScale[x].classList.add('active__scale');    
    }
}
setTimeout(showAnimation, 800);

function scrollWin() {
    window.scrollTo(0, 500);
  }
  scrollWin();

  
// =============== Scroll to Top ===============

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0)
            $("#toTop").fadeIn();
        else
            $("#toTop").fadeOut();
    });

    $("#toTop").click(function() {
        $('body, html').animate({
            scrollTop:0
        }, 800);
    });
});