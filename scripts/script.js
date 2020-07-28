document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            loop: true,
            items: 4,
            margin: 10,
        });
    });
});
