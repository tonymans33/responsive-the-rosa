/*const selectElement =function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
*/

$(document).ready(function () {
    AOS.init({
        easing: 'ease',
        duration : 1800,
        once : true
    });

    $('.newsletter-btn').on('click' ,function () {
        $('html, body').animate({scrollTop: 0}, 4000)

    })
});
