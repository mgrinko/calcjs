'use strict';
// TODO getElement

// Class
class Output /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;
  }

  _clearOutput(text, reset = false, resetAcc = false, ms = 1000) {
    if (text) {
      this.getElement().innerHTML = text;
    }

    if (reset) {
      setTimeout(function() {
        this.getElement().innerHTML = '0.';
      }.bind(this), ms);
    }
    
    if (resetAcc) {
      calc._input._number = calc._input._symbolAcc = '';
      calc._input._numberAcc = calc._input._total = 0;
    }
  }

  getElement() {
    return this._el;
  }
}
