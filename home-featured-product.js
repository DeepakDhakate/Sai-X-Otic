
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            // spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 40,
        },

    },
});