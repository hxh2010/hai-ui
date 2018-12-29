import normalizeWheel from 'normalize-wheel';

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const mousewheel = function(el, callback) {
  if (el && el.addEventListener) {
    el.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function(event) {
      const normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
      event.preventDefault && event.preventDefault()
    });
  }
};

export default {
  bind(el, binding) {
    mousewheel(el, binding.value);
  }
};
