$('.testimonial_area').owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    smartSpeed: 500,
    paginationSpeed: 1000,
    singleItem: true,
    loop: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

new WOW().init();

$('body').height($(window).height());
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'Linear',
    updateURL: false,

});
