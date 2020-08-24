const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // 指定访问静态文件时的 uri，相当于 nginx 的 location
        // 自动在打包结果中寻找该资源
        // publicPath: '/suhua',
        // 默认为空字符串，则不需要任何前缀就可以访问静态资源
        // publicPath: '',
        // 当访问 /dist 时，自动从打包结果中寻找资源
        publicPath: '/dist'
    },
    mode: 'development'
};