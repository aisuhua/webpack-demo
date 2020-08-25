require('../css/base.css');
require('../css/less.less');
require('../css/scss.scss');

const img = require('../img/suhua.jpg');
console.log(img.default);
document.getElementById('img').innerHTML = '<img src="'+ img.default +'" />';

const name = require('./module.js');
console.log(name);