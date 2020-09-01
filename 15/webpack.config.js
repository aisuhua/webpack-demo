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

    resolve: {
        // 导入文件时查找的文件后缀名，默认是 .js、.json
        extensions: ['.js', '.ts', '.json', '.css', '.scss', '.less'],
        // 路径别名
        alias: {
            $css: path.resolve(__dirname, './src/css')
        },
        // 模块解析目录
        modules: [
            path.resolve(__dirname, '../node_modules'),
            'node_modules'
        ]
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
            {
                // TypeScript
                test: /\.ts$/,
                use: ['ts-loader']
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
        // new OptimizeCssAssetsWebpackPlugin()
    ],

    // 当 js 脚本发生报错时，能对应到源文件所在位置
    // 开发环境用 eval-source-map，生产用 source-map
    devtool: "eval-source-map",

    mode: "development"
};