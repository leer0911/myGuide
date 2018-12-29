import { defaultOptions } from '../config';
const { debug } = defaultOptions;

const error = msg => {
  if (debug) {
    console.error(`[Guide error]: ${msg}`);
  }
};

const warn = msg => {
  if (debug) {
    console.error(`[Guide warn]: ${msg}`);
  }
};

const log = msg => {
  if (debug) {
    console.log(`[Guide log]: ${msg}`);
  }
};

export { error, warn, log };
