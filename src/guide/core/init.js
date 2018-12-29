export function initMixin(Guide) {
  Guide.prototype._init = function(options = {}) {
    this.options = Object.assign({}, options);
  };
}
