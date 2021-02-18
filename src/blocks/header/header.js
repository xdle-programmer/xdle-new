headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 0) {
            $topHeader.addClass(scrollClass);
        } else {
            $topHeader.removeClass(scrollClass);
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}

function mobileMenu() {
    let burgerButton = $('.burger-menu '),
        burgerButtonActive = 'burger-menu--active',
        wrapperMenu = $('.header__contact-wrapper'),
        wrapperMenuActive = 'header__contact-wrapper--active';

    burgerButton.on('click', function(){
        $(this).toggleClass(burgerButtonActive);
        wrapperMenu.toggleClass(wrapperMenuActive);
    });

    $(window).on('resize scroll', function(){
        burgerButton.removeClass(burgerButtonActive);
        wrapperMenu.removeClass(wrapperMenuActive);
    });


}
mobileMenu();

let catalogMenuName = 'headerMenu';

window.catalogMenu = new menu(
    {
        name: catalogMenuName,
        button: '.header__mobile-button, .header__bottom-mobile-header-button',
        buttonActiveClass: 'active',
        menuBlock: '.header__bottom-wrapper',
        menuActiveClass: 'active',
    }
);