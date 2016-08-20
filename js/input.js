'use strict';
// TODO getElement

// Class
class Input /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;

    this._number = '';
    this._symbolAcc = '';
    this._numberAcc = 0;
    this._total = 0;

    let _self = this;
    this._el.addEventListener('click', this._putInput.bind(_self));
  }

  _inputOption(option) {
    switch (option) {
      case 'reset':
      calc._output._clearOutput('reset', true, true);
      break;
    }
  }

  _putInput(e) {
    let target = e.target;

    if (target.dataset.number) {
      this._inputNumber(target.dataset.number);

    } else if (target.dataset.symbol) {
      if (target.dataset.symbol === 'dote') {
        return this._inputNumber('.');
      }
      this._inputSymbol(target.dataset.symbol);

    } else if (target.dataset.option) {
      this._inputOption(target.dataset.option);

    }
  }

  _inputNumber(number) {
    this._number += number;
    this._toOutput(this._number); /// ???
  }

  _inputSymbol(symbol) {
    console.log(
      symbol,
      this._number,
      this._symbolAcc,
      this._numberAcc,
      this._total
    );

    this._symbolAcc = symbol;
    this._numberAcc = this._number;
    this._number = '';

    // if (!this._symbolAcc) {
    //
    //   switch (symbol) {
    //     case 'division':
    //     case 'multiply':
    //     case 'minus':
    //     case 'plus':
    //       return;
    //   }
    // }

    this._inputToTotal(symbol);
  }

  _inputToTotal(operator) {

      console.log(
        operator,
        this._number,
        this._symbolAcc,
        this._numberAcc,
        this._total
      );

    switch (this._symbolAcc) {
      case 'division':
        this._total = Number(this._numberAcc) / Number(this._number);
        break;
      case 'multiply':
        this._total = Number(this._numberAcc) * Number(this._number);
        break;
      case 'minus':
        this._total = Number(this._numberAcc) - Number(this._number);
        break;
      case 'plus':
        this._total = Number(this._numberAcc) + Number(this._number);
        break;
      case 'square':
        this._total = Math.sqrt(Number(this._numberAcc));
        break;
    }

    this._numberAcc = this._total;

    if (operator === 'equally') {
      this._toOutput(this._total, false, true); /// ???
      // this._numberAcc = this._total;
    }


      console.log(
        operator,
        this._number,
        this._symbolAcc,
        this._numberAcc,
        this._total
      );
  }

  _toOutput(value) { /// ???
    if (value % 1 === 0) {
      value += '.';
    } else {
      value += '\u0020';
    }

    calc._output._clearOutput(value);
  }

  getElement() {
    return this._el;
  }
}
