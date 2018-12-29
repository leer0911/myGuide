import PropTypes from 'prop-types';

/**
 * Intro.js tooltip position proptype.
 * @type {Function}
 */
export const tooltipPosition = PropTypes.oneOf([
  'top',
  'right',
  'bottom',
  'left',
  'bottom-left-aligned',
  'bottom-middle-aligned',
  'bottom-right-aligned',
  'auto'
]);

export const options = PropTypes.shape({
  nextLabel: PropTypes.string,
  prevLabel: PropTypes.string,
  skipLabel: PropTypes.string,
  doneLabel: PropTypes.string,
  hidePrev: PropTypes.bool,
  hideNext: PropTypes.bool,
  tooltipPosition,
  tooltipClass: PropTypes.string,
  highlightClass: PropTypes.string,
  exitOnEsc: PropTypes.bool,
  exitOnOverlayClick: PropTypes.bool,
  showStepNumbers: PropTypes.bool,
  keyboardNavigation: PropTypes.bool,
  showButtons: PropTypes.bool,
  showBullets: PropTypes.bool,
  showProgress: PropTypes.bool,
  scrollToElement: PropTypes.bool,
  overlayOpacity: PropTypes.number,
  scrollPadding: PropTypes.number,
  positionPrecedence: PropTypes.arrayOf(PropTypes.string),
  disableInteraction: PropTypes.bool
});
