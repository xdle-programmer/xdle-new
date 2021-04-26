import {mainSlider} from '../header-slider/header-slider';
import {logoLoad} from '../logo/logo';

document.addEventListener("DOMContentLoaded", () => {
    window.pageScroll = new pageScroll();
    window.pageScroll.init();
});

function pageScroll() {
    let $pageWrapper = document.getElementsByClassName('scroll-wrapper')[0];
    let $slider = document.getElementsByClassName('header-slider')[0];
    let $header = document.getElementsByClassName('header')[0];
    let $headerCircle = document.getElementsByClassName('header-slider__circle')[0];
    let $headerDots = document.getElementsByClassName('header-slider__dots')[0];
    let headerScrollClass = 'header--scroll';
    let $navigationButtons = Array.from(document.getElementsByClassName('header-slider__navigation-item'));
    let navigationButtonActiveClass = 'header-slider__navigation-item--active';
    let sliderHeight = $slider.getBoundingClientRect().height * 1.5;
    let navigationChangeEvent;

    let sliderPositions = [sliderHeight / 3, (sliderHeight / 3) * 2, (sliderHeight / 3) * 3];

    this.init = function () {
        if (pageYOffset > 0) {
            window.logoLoad = new logoLoad(false);
        } else {
            window.logoLoad = new logoLoad(true);
        }

        setTimeout(() => {
            window.mainSlider = new mainSlider();

            scrollHandler();

            window.addEventListener('scroll', () => {
                scrollHandler();
            });
        }, window.logoLoad.getDuration());


    };

    function scrollHandler() {
        if (pageYOffset > sliderHeight) {
            setTranslateY($pageWrapper, pageYOffset - sliderHeight);
            $header.classList.add(headerScrollClass);
        } else {
            $headerCircle.setAttribute("style", `transform: translateY(-${pageYOffset / 4}px)`);
            $headerDots.setAttribute("style", `transform: translateY(-${pageYOffset / 4}px)`);
            setTranslateY($pageWrapper, 0);
            $header.classList.remove(headerScrollClass);
            let sliderSectionHeight = sliderHeight / 3;

            if (pageYOffset < sliderPositions[0]) {
                window.mainSlider.changeSlide(0);
                $navigationButtons[0].classList.add(navigationButtonActiveClass);
                $navigationButtons[1].classList.remove(navigationButtonActiveClass);
                $navigationButtons[2].classList.remove(navigationButtonActiveClass);
            } else if (pageYOffset < sliderPositions[1]) {
                window.mainSlider.changeSlide(1);
                $navigationButtons[0].classList.remove(navigationButtonActiveClass);
                $navigationButtons[1].classList.add(navigationButtonActiveClass);
                $navigationButtons[2].classList.remove(navigationButtonActiveClass);
            } else {
                window.mainSlider.changeSlide(2);
                $navigationButtons[0].classList.remove(navigationButtonActiveClass);
                $navigationButtons[1].classList.remove(navigationButtonActiveClass);
                $navigationButtons[2].classList.add(navigationButtonActiveClass);
            }
        }
    }

    function setTranslateY($elem, px) {
        $elem.setAttribute("style", `transform: translateY(-${px}px)`);
    }


    if (viewportOptions.hoverAvailability) {
        navigationChangeEvent = 'mouseenter';
    } else {
        navigationChangeEvent = 'click';
    }

    for (let index = 0; index < $navigationButtons.length; index++) {
        let $navigationButton = $navigationButtons[index];
        $navigationButton.addEventListener(navigationChangeEvent, () => {
            window.scrollTo(0, sliderPositions[index] - 30);
        });
    }

}
