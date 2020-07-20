document.addEventListener("DOMContentLoaded", () => {
    let body = document.getElementsByTagName("body")[0];
    body.addEventListener("click", (event) => {
        console.log(event.target.tagName);
    });

    $(function () {
        $(".multiple-items").slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 3,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    },
                },
                {
                    breakpoint: 425,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    },
                },
            ],
        });
    });
});
