import { name, add, obj } from './demo.js';

// 用 Webpack 打包后可以这样做，但是 ES Modules 不支持
name = name + '...';
console.log(name);

// 可以修改
console.log(obj.name);
obj.name = 'bbb';
console.log(obj.name);