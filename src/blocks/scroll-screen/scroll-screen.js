let viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
let viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

customScroll();

function customScroll() {
    let scrollState = false;
    let scrollDuration = 500;

    let scrollPosition = 0;

    let $scrollWrapper = '.scroll-wrapper';
    let $workWrapper = '.work';

    let $slider = '.header-slider';
    let $sliderContainer = '.header-slider__container';
    let $sliderElementsCount = $('.header-slider__item').length;

    // let sliderHeight = 0;
    let scroll = $(window).scrollTop();

    let heightSlide = viewport_height;
    // let heightSlide = viewport_height * $sliderElementsCount;
    let heightBody = heightSlide + $($workWrapper).height();

    $('body').css('height', heightBody + 'px');

    setPosition()

    $(window).on('scroll', function () {

        if (!scrollState) {
            scrollState = true;
            setTimeout(function () {
                scrollState = false;
            }, scrollDuration);
            // slider.test('bingo!!!');

        }
        setPosition()


    });

    function setPosition() {
        let scroll = $(window).scrollTop();
        if (scroll > scrollPosition) {
            console.log('Вниз')
            slider.nextSlide('NextSlide');
        } else {
            console.log('Вверх')
            slider.prevSlide('prevSlide');
        }
        scrollPosition = scroll;
    }
}

