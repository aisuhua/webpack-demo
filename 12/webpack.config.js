const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './dist'),
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
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            },
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     // 编译前执行
            //     enforce: 'pre',
            //     // 不检查的目录
            //     exclude: /node_modules/
            // }
        ]
    },

    plugins: [
        // 打包 HTML 文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: false, // 删除空格
                removeComments: false // 删除注释
            }
        }),
        // 打包 CSS 文件
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash].css'
        }),
        // 压缩 CSS 文件
        new OptimizeCssAssetsWebpackPlugin()
    ],

    devtool: "inline-source-map",

    mode: "development"
};