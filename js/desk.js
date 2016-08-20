'use strict';
// TODO getElement

// Class
class Desk {
  constructor(options) {
    this._el = options.el;

    this._calc = new Calc({
      el: document.querySelector(`${appName}__calc`)
    });

    this._icon = new Icon({
      el: document.querySelector(`${appName}__icon`)
    });
  }

  getElement() {
    return this._el;
  }
}
