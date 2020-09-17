const path = require('path');
// 合并配置文件
const { merge } = require('webpack-merge');
// 引入公共配置
const base = require('./base.config');

module.exports = merge(base, {

    // 开发工具
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000,
        stats: 'minimal'
    },

    // 当 js 脚本发生报错时，能对应到源文件所在位置
    // 开发环境用 eval-source-map，生产用 source-map
    devtool: "eval-source-map",

    mode: "development"
});