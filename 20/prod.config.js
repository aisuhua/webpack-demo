// 合并配置文件
const { merge } = require('webpack-merge');
// 引入公共配置
const base = require('./base.config');
// 压缩 CSS文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 清理打包后的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    plugins: [
        // 清理打包文件
        new CleanWebpackPlugin(),
        // 压缩 CSS 文件
        new OptimizeCssAssetsWebpackPlugin()
    ],

    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                cache: false,
                terserOptions: {
                    compress: {
                        unused: true,
                        dead_code: true,
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },

    // 监听打包文件，变化后自动重新打包
    watch: true,

    // 监听选项
    watchOptions: {
        // 不监听的目录
        ignored: /node_modules/,
        // 更新频率，有变化后 500 毫秒再编译
        aggregateTimeout: 500,
        // 轮询间隔时间，默认1秒，询问系统文件是否变化
        poll: 1000
    },

    // 当 js 脚本发生报错时，能对应到源文件所在位置
    // 开发环境用 eval-source-map，生产用 source-map
    devtool: "source-map",

    mode: "production"
});