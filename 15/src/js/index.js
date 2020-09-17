require('$css/base');
require('$css/less');
require('$css/scss');

// 载入 typescript
import { output } from './type';
console.log(output('suhuazizi123'));

Log('ssss');

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