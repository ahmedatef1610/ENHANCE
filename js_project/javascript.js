/*jslint browser: true, couch: true, devel: true, node: false, passfail: true, white: true, bitwise: true, closure: true, continue: true, debug: true, eqeq: true, evil: true, forin: true, newcap: true, nomen: true, plusplus: true, regexp: true, unparam: true, sloppy: true, stupid: true, sub: true, todo: true, vars: true,esnext: true*/

/* eslint-env browser */
/* eslint-env node */
/*global $ */
/******************************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    
    /******************************************************************************/
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
    /***************************************************************************/
    const loading = document.querySelector('.loading');
    setTimeout(function () {
        loading.classList.add('fade');
        window.onscroll = function () {};
        $("body").niceScroll({
            cursorborder: "",
            scrollspeed: 20,
            mousescrollstep: 20,
        });
    }, 2000);
    /*****************************************************************************/
    const toTop = document.querySelector(".toTop");

    var t1 = setInterval(function () {

        if (window.scrollY >= 300) {
            toTop.classList.add("fade2");
        }
        if (window.scrollY === 0) {
            toTop.classList.remove("fade2");
        }
    }, 10);

    toTop.onclick = function () {
        if (window.scrollY >= 300) {
            var t3 = setInterval(function () {
                window.scrollBy(0, -40);
                if (window.scrollY === 0) {
                    clearInterval(t3);
                }
            }, 10);

        }
    };
    /******************************************************************************/
    const form = document.querySelector(".search form");
    const inputSearch = document.querySelector(".search form input");
    form.addEventListener("submit", function () {
        var word = inputSearch.value;
        var link = "https://www.google.com/#q=";
        link += word;
        link += " courses";
        form.target = "_blank";
        form.action = link;
        inputSearch.value = '';
    });
    /******************************************************************************/
    new WOW().init();
    /******************************************************************************/

});
