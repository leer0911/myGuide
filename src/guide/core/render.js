import { warn } from '../util';

function render(el, group) {
  const { options } = this;
  const {
    steps,
    scrollTo: optionScrollTo,
    disableInteraction: optionDisableInteraction
  } = options;

  // 处理用户传入的 steps
  this.steps = steps
    .map((step, index) => {
      const {
        el,
        scrollTo = optionScrollTo,
        disableInteraction = optionDisableInteraction
      } = step;
      if (!el || typeof el !== 'string') {
        warn(`el in step option must be string`);
        return;
      }
      return {
        id: index,
        el: document.querySelector(el),
        scrollTo,
        disableInteraction
      };
    })
    .filter(item => {
      return !(!item || item === '');
    })
    .sort((prev, next) => {
      return prev.id - next.id;
    });
}

function addMaskLayer(container) {
  const maskDOM = document.createElement('div');

  container.appendChild(maskDOM);
}
