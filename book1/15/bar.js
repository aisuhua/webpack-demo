import foo from './foo.js';

// Value of foo:  undefined
// Webpack 打包后的输出结果
// node index.js 执行报错：
// ReferenceError: Cannot access 'foo' before initialization
console.log('Value of foo: ', foo);

export default 'This is bar.js';