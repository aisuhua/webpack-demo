方式1

```shell
npm install webpack webpack-cli --save-dev
npx webpack ./src/index.js -o ./dist/bundle.js --mode=development
```

方式2 

```shell
npm init -y

"scripts": {
    "build": "webpack ./src/index.js -o ./dist/bundle.js --mode=development"
}
```

方式3

新增 webpack.config.js 文件

```shell
vim webpack.config.js

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development'
};

webpack
```
