$(window).on('load', overlayLoad());

function overlayLoad() {
    let logo = '.logo';
    let logoLoad = 'logo--load';
    let logoFixed = 'logo--fixed';
    let overlayWrapper = '.header-slider__overlay';
    let overlayWrapperHide = 'header-slider__overlay--hide';
    let overlayCircle = '.header-slider__overlay-circle';
    let overlayCircleActive = "header-slider__overlay-circle--active";
    let timeLoadCircle = 1500;
    let timeLoadLogo = 3000;
    let fixedLoadLogo = 4500;
    let overlayHide = 5000;

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

window.slider = new initSlider()

function initSlider() {
    let $slides = $('.header-slider__item');
    let animationDelay = 300;
    let slideActiveClass = 'header-slider__item--active';
    let slideInActiveClass = 'header-slider__item--inactive';
    let $navigationButtons = $('.header-slider__navigation-item');
    let navigationButtonActiveClass = 'header-slider__navigation-item--active';
    let currentSlide = 0;
    let changeEvent;

    this.test = function (text) {
        console.log(text)
    }

    showSlide(currentSlide);

    if (viewportWidth > mobileWidth) {
        changeEvent = 'mouseenter';
    } else {
        changeEvent = 'click';
    }

    $navigationButtons.on(changeEvent, function () {
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
        $navigationButtons.removeClass(navigationButtonActiveClass)
        $navigationButtons.eq(targetSlide).addClass(navigationButtonActiveClass)
        $slide.addClass(slideActiveClass);
        currentSlide = targetSlide;
    }

    function hideSlide(targetSlide) {
        let $slide = $slides.eq(targetSlide);
        $slide.removeClass(slideActiveClass);
        $slide.addClass(slideInActiveClass);
    }
}


