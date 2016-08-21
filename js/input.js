'use strict';
// TODO getElement

// Template
let calcBtns = [
  {data: `option="backspace"`, text: 'Backspace'},
  {data: `null`, text: ''},
  {data: `option="reset"`, text: 'C'},

  {data: `number="7"`, text: '7'},
  {data: `number="8"`, text: '8'},
  {data: `number="9"`, text: '9'},
  {data: `symbol="÷"`, text: '/'},
  {data: `null`, text: ''},

  {data: `number="4"`, text: '4'},
  {data: `number="5"`, text: '5'},
  {data: `number="6"`, text: '6'},
  {data: `symbol="x"`, text: '*'},
  {data: `null`, text: ''},

  {data: `number="1"`, text: '1'},
  {data: `number="2"`, text: '2'},
  {data: `number="3"`, text: '3'},
  {data: `symbol="-"`, text: '-'},
  {data: `null`, text: ''},

  {data: `number="0"`, text: '0'},
  {data: `null`, text: ''},
  {data: `symbol="."`, text: '.'},
  {data: `symbol="+"`, text: '+'},
  {data: `symbol="="`, text: '='}
];

// Class
class Input /*extends Calc*/ {
  constructor(options) {
    // super();
    this._el = options.el;

    // Template
    this._template = _.template(document.getElementById('calcBtnTemplate').innerHTML);
    this._el.innerHTML = this._template({option : calcBtns});

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
      this._operatorAdded = false;
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
