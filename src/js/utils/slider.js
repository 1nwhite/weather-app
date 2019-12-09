export const slider = (wrapper) => {
    const container = document.querySelector(wrapper);

    const get = selector => container.querySelector(selector);
    const getAll = selector => container.querySelectorAll(selector);

    const slidesWrapper = get('.slides');
    const slides = getAll('.slide');
    const btnNext = get('.slider-btn__next');
    const btnPrev = get('.slider-btn__prev');

    const wrapperWidth = slidesWrapper.clientWidth;
    const slidesCount = slides.length;
    let slidesInWrapper = 3;
    if (window.matchMedia('(max-width: 768px)').matches) {
        slidesInWrapper = 1;
    }
    const slideWidth = wrapperWidth / slidesInWrapper;


    const transformElem = (elem, move = 0) => elem.style.transform = `translateX(${move}px)`;
    transformElem(slidesWrapper);

    let transformValue = 0;

    const slideNext = () => {
        if (transformValue < (slideWidth * slidesCount - wrapperWidth)) {
            transformValue += slideWidth;
            transformElem(slidesWrapper, `-${transformValue}`);
        }
    }

    const slidePrev = () => {
        if (transformValue > 0) {
            transformValue -= slideWidth;
            transformElem(slidesWrapper, `-${transformValue}`);
        }
    }

    btnNext.addEventListener('click', slideNext);
    btnPrev.addEventListener('click', slidePrev);
}
