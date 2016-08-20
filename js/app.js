'use strict'

// App
let appName = '.js-calc';
let desk = new Desk({
  el: document.querySelector(`${appName}`)
});
let calc = new Calc({
  el: document.querySelector(`${appName}__calc`)
});
