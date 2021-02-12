let $sliderMain = $('.header-slider'),
    $sliderWrapper = $('.header-slider__wrapper'),
    $sliderContainer = $('.header-slider__container'),
    $sliderItems = $(' .header-slider__item'),
    heightPage = $(window).height(),
    resultHeight = 0,
    resultWidth = 0,
    countSection = $sliderItems.length;

resultHeight = countSection * heightPage;
$sliderMain.height(resultHeight)
 // console.log(heightPage)
 $(window).on('scroll', function () {
     let scrollOffset = $(window).scrollTop()

     // console.log(scrollOffset)
     // console.log(resultHeight)

     if(scrollOffset > 0) {
         $sliderWrapper.css('transform', 'translate(' + -50 + '%, -' + scrollOffset + 'px)');
     }

 });

$('.header-slider__navigation-item').on('click', function(){
    // console.log($(this).index());
    $('.header-slider__navigation-item').removeClass('header-slider__navigation-item--active');
    $(this).addClass('header-slider__navigation-item--active');

    // console.log($sliderItems.hasClass('header-slider__item--active'))
    if($sliderItems.hasClass('header-slider__item--active')) {
        $sliderItems.removeClass('header-slider__item--active');
        $sliderItems.addClass('header-slider__item--inactive');
    } else {
        $sliderItems.addClass('header-slider__item--active');
        $sliderItems.removeClass('header-slider__item--inactive');
    }
})

$(window).on('load', function (){
    $sliderItems.addClass('header-slider__item--active');
})

// let $slideImages = $('.header-slider__image-wrapper .header-slider__image');
// let numberRandom = 1 + Math.floor(Math.random() * 6);
// console.log(numberRandom)
// $slideImages.each(function() {
//     let currentImage = $(this);
//     $('body').on('mousemove', function(e){
//
//         let x = e.pageX - this.offsetLeft;
//         let y = e.pageY - this.offsetTop;
//
//         if(!currentImage.hasClass('header-slider__image-el-1')) {
//             currentImage.css({
//                 'transform': 'translate(' + x/1000 + '%, -' + y/100 + 'px)'
//             })
//         }
//
//     });
// });






