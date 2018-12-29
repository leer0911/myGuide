const defaultOptions = {
  debug: true,
  nextLabel: 'Next &rarr;',
  prevLabel: '&larr; Back',
  skipLabel: 'Skip',
  doneLabel: 'Done',
  hidePrev: false,
  hideNext: false,
  tooltipPosition: 'bottom',
  tooltipClass: '',
  highlightClass: '',
  exitOnEsc: true,
  exitOnOverlayClick: true,
  showStepNumbers: true,
  keyboardNavigation: true,
  showButtons: true,
  showBullets: true,
  showProgress: false,
  scrollToElement: true,
  scrollTo: 'element',
  scrollPadding: 30,
  overlayOpacity: 0.8,
  positionPrecedence: ['bottom', 'top', 'right', 'left'],
  disableInteraction: false,
  helperElementPadding: 10,
  hintPosition: 'top-middle',
  hintButtonLabel: 'Got it',
  hintAnimation: true,
  buttonClass: 'introjs-button'
};

const steps = [
  {
    el: '',
    info: '',
    position: '',
    scrollTo: '',
    disableInteraction: ''
  }
];

const noop = function() {};

export { defaultOptions, steps, noop };

export default 11;
