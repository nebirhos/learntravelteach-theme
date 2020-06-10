document.addEventListener('DOMContentLoaded', event => {

  const targetEl = document.querySelector('.hide-show-fixed-header');
  // Element past which header changes to solid filling
  const boundaryEl = document.querySelector('header');

  let targetHeight;
  let solidColorBoundaryOffset;
  let lastWindowScrollY = window.scrollY;

  // Only set initially, and on page resize
  const setOffsets = () => {
    targetHeight = targetEl.offsetHeight;
    solidColorBoundaryOffset = boundaryEl.offsetTop + boundaryEl.offsetHeight
      - targetEl.offsetHeight;
  };

  const handleScroll = (event) => {
    const isScrollUp = (window.scrollY < lastWindowScrollY);
    lastWindowScrollY = window.scrollY;

    if (isScrollUp) {
      targetEl.style.top = 0;
    }
    else {
      targetEl.style.top = `-${targetHeight}px`;
    }

    if (window.scrollY > solidColorBoundaryOffset) {
      targetEl.classList.add('hide-show-fixed-header--solid');
    }
    else {
      targetEl.classList.remove('hide-show-fixed-header--solid');
    }
  };

  setOffsets();

  document.addEventListener('scroll', handleScroll, {
    capture: true,
    passive: true
  });

  window.addEventListener('resize', setOffsets);

});
