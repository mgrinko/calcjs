'use strict';
// TODO getElement

// Class
class Icon /*extends Desk*/ {
  constructor(options) {
    // super();
    this._el = options.el;
    this._el.addEventListener('dblclick', this._openCalc);
    this._el.addEventListener('mousedown', this._dndDesktopIcon);
  }

  _openCalc(e) {
    if (e.target.closest(`${appName}__icon`)) {
      calc.getElement().hidden = false;
    }
  }
  _dndDesktopIcon(e) {
    dragNdrop(e, {
      elem  : desk._icon.getElement(),
      parent: desk.getElement(),
      ifTarget(target) {
        if (!target.closest(`${appName}__icon`)) {
          return;
        }
      }
    });
  }

  getElement() {
    return this._el;
  }
}
