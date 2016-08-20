'use strict';
// TODO getElement

// Class
class Output /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;
  }

  getElement() {
    return this._el;
  }
}
