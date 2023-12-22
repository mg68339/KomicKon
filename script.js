const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const container = document.getElementById('content-box')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        container.classList.add('z-index');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        container.classList.remove('z-index');
    })
}





// document.addEventListener("DOMContentLoaded", function () {
//     var navbar = document.getElementById("navbar");
//     var prevScrollPos = window.pageYOffset;

//     window.onscroll = function () {
//         var currentScrollPos = window.pageYOffset;

//         if (prevScrollPos > currentScrollPos) {
//             // Scrolling up
//             navbar.classList.remove("opaque");
//             navbar.classList.add("transparent");
//         } else {
//             // Scrolling down
//             navbar.classList.remove("transparent");
//             navbar.classList.add("opaque");
//         }

//         prevScrollPos = currentScrollPos;
//     };
// });


