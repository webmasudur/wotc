// Get titles from the DOM
var titleMain = $("#slick-wrapper");

if (titleMain.length) {
    titleMain.slick({
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        // centerPadding: "10px",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: true,
        vertical: true,
        speed: 500,
        autoplaySpeed: 500,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        // adaptiveHeight: true,
        arrows: false,
        // prevArrow: '<i class="fa fa-chevron-circle-up" style="font-size:30px;color:#f79007"></i>',
        // nextArrow: '<i class="fa fa-chevron-circle-down" style="font-size:30px;color:#f79007"></i>'
    });

    // On init
    $(".slick-item").each(function(index, el) {
        $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
    });

    // Manually refresh positioning of slick
    titleMain.slick('slickPlay');

};