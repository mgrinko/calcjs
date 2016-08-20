'use strict';
// TODO getElement

// Class
class Panel /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;

    this._el.addEventListener('click', this._closeCalc);
    this._el.addEventListener('mousedown', this._dndCalc);
  }

  _dndCalc(e) {
    dragNdrop(e, {
      elem  : calc.getElement(),
      parent: desk.getElement(),
      ifTarget(target) {
        if (
           target.closest(`${appName}__top-button`) ||
          !target.closest(`${appName}__top-panel`)
        ) {
          return;
        }
      }
    });
  }

  _closeCalc(e) {
    if (e.target.closest(`${appName}__top-button--close`)) {
      calc.getElement().hidden = true;
    }
  }
}
