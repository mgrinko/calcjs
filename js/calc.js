'use strict';
// TODO getElement

// Class
class Calc /*extends Desk*/ {
  constructor(options) {
    // super();
    this._el = options.el;

    this._panel = new Panel({
      el: document.querySelector(`${appName}__top-panel`)
    });

    this._output = new Output({
      el: document.querySelector(`${appName}__output`)
    });

    this._input = new Input({
      el: document.querySelector(`${appName}__input`)
    });
  }

  getElement() {
    return this._el;
  }
}
