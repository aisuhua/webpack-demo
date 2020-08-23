const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './dist'),
    },

    // devServer
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000,
        stats: 'minimal',
    },

    // 模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: "./img/[name]_[hash].[ext]"
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        // 处理 CSS 和 Javascript 引用的图片资源，
                        // 并能将小图转换成 base64 格式，是 file-loader 的超集
                        loader: 'url-loader',
                        options: {
                            limit: 10240, // 小于 10K 则转换
                            name: "img/[name]_[hash].[ext]"
                        }
                    }
                ]
            },
            {
                // 对 HTML 进行打包，找出 html 页面所引用的图片，并交给 url-loader 处理
                test: /\.html$/,
                use: ['html-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],

    devtool: "inline-source-map",

    mode: 'development'
};