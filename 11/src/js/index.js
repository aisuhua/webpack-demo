require('../css/base.css');
require('../css/less.less');
require('../css/scss.scss');

const img = require('../img/suhua.jpg');
console.log(img.default);
document.getElementById('img').innerHTML = '<img src="'+ img.default +'" />';

const name = require('./module.js');
console.log(name);

let fn = (x, y) => x + y;
console.log(fn(10, 20));

class Person {
    #name;
    constructor() {
        this.#name = 'suhua';
    }
}

// var foo = bar;