require('../css/base.css');

import addContent from './add-content.js';

document.write('My first webpack app <br>');
addContent();

// 加载 html 文件
import header from '../header.html';
console.log(header);

