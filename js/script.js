
// window.addEventListener('DOMContentLoaded', () => {

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

if(animItems.length > 0) {
    window.addEventListener('scroll', showAnimation);
    function showAnimation(params) {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];          
            const animItemHeight = animItem.offsetHeight; // Высота оего объекта
            const animItemOffset = offset(animItem).top;  // Позиция моего объекта
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active__class');    
            }
            else {
                if(!animItem.classList.contains('no-anim')) {
                    animItem.classList.remove('active__class');    
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
}

setTimeout(showAnimation, 800);
  
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
// });

