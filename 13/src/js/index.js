require('../css/base.css');
require('../css/less.less');
require('../css/scss.scss');

// 载入 typescript
import { output } from './type';
console.log(output('suhuazizi'));

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