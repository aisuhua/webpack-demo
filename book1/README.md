# 《Webpack实战：入门、进阶与调优》

- https://item.jd.com/12623590.html

## 常见问题

### 如何引入 jquery 文件，参考示例 17

```js
// 方式1
window.$ = window.jQuery = require('./jquery.js');
// 方式2
global.$ = global.jQuery = require('./jquery.js');
```

- [Webpack gives $ is not defined or jQuery is not defined error in console](https://github.com/webpack/webpack/issues/4258#issuecomment-393718024)

### publicPath 的含义

```
output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js',
    // 进行 HTML 打包时，会给静态资源添加上该前缀，CDN 时有用
    publicPath: ''
},
devServer: {
    port: 3000,
    // 返回静态资源的前缀，匹配时会直接进入输出的静态资源目录
    // 一般与 ouput 的 publicPath 一致
    publicPath: ''
}
```

## 疑问

使用 ES Modules 方式引入 CommonJS 的模块时，会产出 `bundle.js` 和 `0.bundle.js` 两个文件。

```
a.js
module.exports = {

};

b.js
import('./a.js');
```

## 解释

npm 所管理的模块有些是遵循 CommonJS 规范，有些是 ES Modules，使用时要注意。