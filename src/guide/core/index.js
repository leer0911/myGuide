import { warn } from '../util/debug';
import { initMixin } from './init';

function Guide(options) {
  if (!this instanceof Guide) {
    warn('Guide is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Guide);

export default Guide;
