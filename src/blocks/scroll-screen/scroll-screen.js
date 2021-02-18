let scrollState = false;
let scrollDuration = 500;

$(window).on('scroll', function () {
    if (!scrollState) {
        scrollState = true;

        setTimeout(function () {
            scrollState = false;
        }, scrollDuration);

        slider.test('bingo!!!');
    }


});