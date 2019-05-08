/*jslint browser: true, couch: true, devel: true, node: false, passfail: true, white: true, bitwise: true, closure: true, continue: true, debug: true, eqeq: true, evil: true, forin: true, newcap: true, nomen: true, plusplus: true, regexp: true, unparam: true, sloppy: true, stupid: true, sub: true, todo: true, vars: true,esnext: true*/

/* eslint-env browser */
/* eslint-env node */
/******************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    /**************************************************************************/
    const cart = document.querySelector('.cart');
    const popUp = document.querySelector('.popUp');
    popUp.style.marginTop = (window.scrollY + 50) + "px";
    window.onscroll = function () {
        popUp.style.marginTop = (window.scrollY + 50) + "px";
    };
    cart.onclick = function () {
        if (popUp.className.indexOf('fadeIn') > -1) {
            popUp.classList.remove('fadeIn');
            popUp.classList.add('fadeOut');
        } else {
            popUp.classList.add('fadeIn');
            popUp.classList.remove('fadeOut');
        }
    };
    /**************************************************************************/
    const close = document.querySelector('.close');
    close.onclick = function () {
        close.parentNode.classList.remove('fadeIn');
        close.parentNode.classList.add('fadeOut');
    };
    /**************************************************************************/

    /**************************************************************************/
});
