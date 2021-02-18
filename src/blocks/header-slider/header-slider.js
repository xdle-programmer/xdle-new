$(window).on('load', overlayLoad());

function overlayLoad() {
    let logo = '.logo',
        logoLoad = 'logo--load',
        logoFixed = 'logo--fixed',
        overlayWrapper = '.header-slider__overlay',
        overlayWrapperHide = 'header-slider__overlay--hide',
        overlayCircle = '.header-slider__overlay-circle',
        overlayCircleActive = "header-slider__overlay-circle--active",
        timeLoadCircle = 1500,
        timeLoadLogo = 3000,
        fixedLoadLogo = 4500,
        overlayHide = 5000;

    timeOutCall(logo, logoLoad, timeLoadLogo);
    timeOutCall(overlayCircle, overlayCircleActive, timeLoadCircle);
    timeOutCall(logo, logoFixed, fixedLoadLogo);
    timeOutCall(overlayWrapper, overlayWrapperHide, overlayHide);

    function timeOutCall(element, elementAddClass, time) {
        setTimeout(function () {
            $(element).addClass(elementAddClass);
        }, time);
    }

}



function initSlider() {
    let $slides = $('.header-slider__item');
    let animationDelay = 300;
    let slideActiveClass = 'header-slider__item--active';
    let slideInActiveClass = 'header-slider__item--inactive';
    let $navigationButtons = $('.header-slider__navigation-item');
    let currentSlide = 0;
    showSlide(currentSlide);

    $navigationButtons.on('mouseenter', function () {
        let targetSlide = $navigationButtons.index($(this));

        if (targetSlide !== currentSlide) {
            changeSlide(targetSlide);
        }
    });

    function changeSlide(targetSlide) {
        hideSlide(currentSlide);

        setTimeout(function () {
            showSlide(targetSlide);
        }, animationDelay);
    }

    function showSlide(targetSlide) {
        let $slide = $slides.eq(targetSlide);
        $slides.removeClass(slideActiveClass);
        $slides.removeClass(slideInActiveClass);
        $slide.addClass(slideActiveClass);
        currentSlide = targetSlide;
    }

    function hideSlide(targetSlide) {
        let $slide = $slides.eq(targetSlide);

        $slide.removeClass(slideActiveClass);
        $slide.addClass(slideInActiveClass);
    }
}


initSlider();

