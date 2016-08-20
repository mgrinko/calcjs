'use strict';
// TODO getElement

// Class
class Input /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;

    this._operators = ['+', '-', 'x', '÷'];
    this._decimalAdded = false;


    let _self = this;
    this._el.addEventListener('click', this._putInput.bind(_self));
  }

  _putInput(e) {
    let target = e.target;
    console.log(target.dataset);

    if (target.dataset.number) {
      console.log(target.dataset.number);
      // calc._output.getElement().innerHTML += target.dataset.number;

    } else if (target.dataset.symbol) {
      buttonValue = target.dataset.symbol;
      outputValue += buttonValue;

    } else if (target.dataset.option) {
      buttonValue = target.dataset.option;

      switch (buttonValue) {
        case 'reset':
          outputValue = '';
          break;
      }

    }
  }

  getElement() {
    return this._el;
  }
}
