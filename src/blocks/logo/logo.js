function logoLoad(animationStart) {
    let $logo = document.getElementsByClassName('logo')[0];
    let transition = parseInt((window.getComputedStyle($logo).transitionDuration.split('s')[0]) * 1000);
    let $wrapper = document.getElementsByClassName('scroll-wrapper')[0]
    let $header = document.getElementsByClassName('header')[0]
    let logoLoadClass = 'logo--load';
    let logoFixedClass = 'logo--fixed';
    let wrapperShowClass = 'scroll-wrapper--show';
    let headerShowClass = 'header--show';

    let timeLoadLogo = 0;
    let fixedLoadLogo = timeLoadLogo + transition + 500;

    if (!animationStart) {
        transition = 0;
        fixedLoadLogo = 0;
        $logo.style.transitionDuration = '0s';
    }

    timeoutCall($logo, logoLoadClass, timeLoadLogo);

    timeoutCall($logo, logoFixedClass, fixedLoadLogo);
    timeoutCall($wrapper, wrapperShowClass, fixedLoadLogo);
    timeoutCall($header, headerShowClass, fixedLoadLogo);

    function timeoutCall(element, elementAddClass, time) {
        setTimeout(() => {
            element.classList.add(elementAddClass);
        }, time);
    }

    this.getDuration = function () {
        return fixedLoadLogo + transition;
    };
}

export {logoLoad};