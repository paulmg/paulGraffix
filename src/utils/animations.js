const hideAnim = function(el, t) {
  let tween = TweenLite.to(el, t, {
    scale: 0.8,
    autoAlpha: 0,
    transformOrigin: 'center bottom',
    ease: Expo.easeInOut
  });

  return tween;
};

const showAnim = function(el) {
  let tween = TweenLite.to(el, 0.4, {
    scale: 1,
    autoAlpha: 1,
    clearProps: 'all',
    ease: Expo.easeInOut
  });

  return tween;
};

const floatContainer = function(el) {
  document.body.classList.add('body--hidden');

  let rect = el.parentElement.getBoundingClientRect();
  let windowW = window.innerWidth;

  let tl = new TimelineLite;

  tl.set(el, {
    width: rect.width,
    height: rect.height,
    x: rect.left,
    y: rect.top,
    position: 'fixed',
    overflow: 'hidden'
  });

  tl.to(el, 1.2, {
    width: windowW,
    height: '100%',
    x: windowW / 2,
    y: 0,
    xPercent: -50,
    ease: Expo.easeInOut,
    clearProps: 'all',
    className: '-=ProjectWrapper-container--closed'
  });

  return tl;
};

const floatCloseContainer = function(el) {
  let tl = new TimelineLite();

  let windowW = window.innerWidth;
  let rect = el.parentElement.getBoundingClientRect();

  tl.set(el, {
    width: rect.width,
    height: rect.height,
    x: rect.left,
    y: rect.top,
    position: 'fixed',
    overflow: 'hidden'
  });

  tl.set([el.parentElement], {
    clearProps: 'all'
  });

  tl.to([el], 1.2, {
    width: windowW,
    height: '100%',
    x: windowW / 2,
    y: 0,
    xPercent: -50,
    clearProps: 'all',
    ease: Expo.easeInOut
  });

  tl.eventCallback('onReverseComplete', () => {
    el.classList.add('ProjectWrapper-container--closed');

    TweenLite.set([el], {
      clearProps: 'all'
    });
  });

  return tl;
};

const floatNextContainer = function(el) {
  let tl = new TimelineLite;

  let windowW = window.innerWidth;

  tl.set([el], {
    width: windowW,
    height: '100%',
    x: windowW / 2,
    y: 0,
    xPercent: -50,
    ease: Expo.easeInOut,
    clearProps: 'all',
    className: '-=ProjectWrapper-container--closed'
  });

  return tl;
};

const slideContentUp = function(el, t) {
  let tween = TweenLite.to(el, t, {
    y: 0,
    clearProps: 'all',
    ease: Expo.easeInOut,
    className: '-=hide'
  });

  return tween;
};

const slideContentDown = function(el, t) {
  let tween = TweenLite.to(el, t, {
    y: window.innerHeight,
    ease: Expo.easeInOut,
    className: '-=hide'
  });

  return tween;
};

const clipImageIn = function(el, t, r) {
  console.log('in')
  let tween = TweenLite.to(el, t, {
    attr: {
      r: r
    },
    ease: Expo.easeInOut
  });

  return tween;
};

const clipImageOut = function(el, t) {
  console.log('out')
  let tween = TweenLite.to(el, t, {
    attr: {
      r: 992
    },
    ease: Expo.easeInOut
  });

  return tween;
};

const resetWrapper = function(el) {
  let tween = TweenLite.set([el.parentElement], {
    clearProps: 'all'
  });

  return tween;
};

export default {
  hideAnim,
  showAnim,
  floatContainer,
  floatCloseContainer,
  floatNextContainer,
  slideContentUp,
  slideContentDown,
  clipImageIn,
  clipImageOut,
  resetWrapper
};
