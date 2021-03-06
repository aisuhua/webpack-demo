const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './dist'),
        // 发布到 CDN 时采用的方式
        // publicPath: "http://localhost/webpack/07/dist/"
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000,
        stats: 'minimal',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                            // 发布到 CDN 时采用的方式
                            // publicPath: 'http://localhost/webpack/07/dist/'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                            // 发布到 CDN 时采用的方式
                            // publicPath: 'http://localhost/webpack/07/dist/'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: "img/[name]-[hash].[ext]",
                            // 不止是 CSS，也会影响 index.html 和 js 中引用的的图片路径
                            // publicPath: '../'
                            // 发布到 CDN 时采用的方式
                            // publicPath: 'http://localhost/webpack/07/dist/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash].css'
        })
    ],

    devtool: "inline-source-map",

    mode: 'development'
};