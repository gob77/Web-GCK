document.addEventListener("DOMContentLoaded", () => {
    let body = document.getElementsByTagName("body")[0];

    /* new Splide(".splide", {
        type: loop,
        fixedWidth: 100,
        rewind: true,
        gap: 10,
        pagination: false,
        perPage: 5,
        perMove: 5,
    }).mount(); */

    $(".responsive").slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
