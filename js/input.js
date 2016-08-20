'use strict';
// TODO getElement

// Class
class Input /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;

    this._operators = [
      '+', '-', 'x', '÷' //, '√'
    ];
    this._decimalAdded = false;
    this._operatorAdded = false;

    let _self = this;
    this._el.addEventListener('click', this._putInput.bind(_self));
  }

  _putInput(e) {
    e.preventDefault();

    let target = e.target;
    let buttonData = target.dataset;
    if (calc._output.getElement().innerHTML === '0') {
      calc._output.getElement().innerHTML = '';
    }

    if (buttonData.number) {
      this._renderOutput(buttonData.number);

    } else if (buttonData.symbol) {
      this._addSymbol(buttonData.symbol);

    } else if (buttonData.option) {
      switch (buttonData.option) {
        case 'backspace':
          this._backspace();
          break;
        case 'reset':
          this._renderOutput('0', true);
          this._decimalAdded = false;
          break;
      }

    }
  }

  _addSymbol(symbol) {
    switch (symbol) {
      case '=':
        this._operatorAdded = false;
        return this._toTotal();

      case '.':
        if (!this._decimalAdded) {
          this._decimalAdded = true;
          this._operatorAdded = false;
          return this._renderOutput(symbol);
        }
        return;
    }

    if (this._operatorAdded) {
      this._backspace();
    }
    this._decimalAdded = false;
    this._operatorAdded = true;
    this._renderOutput(symbol);
  }

  _backspace() {
    let outputNow = calc._output.getElement().innerHTML;
    
    if (outputNow.length <= 1) {
      calc._output.getElement().innerHTML = '0';
      return;
    }
    calc._output.getElement().innerHTML = outputNow.slice(0, -1);
  }

  _toTotal() {
    let equation = calc._output.getElement().innerHTML;
    let lastChar = equation[equation.length - 1];

    equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

    if (this._operators.indexOf(lastChar) > -1 || lastChar == '.') {
      equation = equation.replace('dote', '');
    }

    if (equation) {
      this._renderOutput(eval(equation), true);
      this._decimalAdded = false;
    }
  }

  _renderOutput(value = '0', render = false) {
    if (render) {
      calc._output.getElement().innerHTML = value;
      return;
    }
    calc._output.getElement().innerHTML += value;
  }

  getElement() {
    return this._el;
  }
}
