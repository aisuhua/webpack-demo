const path = require('path');
const entryList = require('./config/entry');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 打包每个 HTML 页面
const entriesHtmlWebpackPlugin = entryList.map((entryItem) => {
    return new HtmlWebpackPlugin({
        template: './template/common.html',
        filename: `${entryItem.name}.html`,
        inject: true,
        title: entryItem.title,
        chunks: [entryItem.name]
    });
});

module.exports = {
    entry: () => {
        let entries = {};
        entryList.forEach((entryItem) => {
            entries[entryItem.name] = entryItem.path;
        });
        return entries;
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
    },

    resolve: {
        // 导入文件时查找的文件后缀名，默认是 .js、.json
        extensions: ['.js', '.ts', '.json', '.css', '.scss', '.less'],
        // 路径别名
        alias: {
            $pages: path.resolve(__dirname, './pages')
        },
        // 模块解析目录
        modules: [
            path.resolve(__dirname, './node_modules'),
            // 会自动往上一级找
            'node_modules'
        ]
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
            // {
            //     test: /\.html$/,
            //     use: ['html-loader']
            // },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
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
        ]
    },

    plugins: [
        // 打包 CSS 文件
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[chunkhash].css'
        }),
        ...entriesHtmlWebpackPlugin
    ]
};