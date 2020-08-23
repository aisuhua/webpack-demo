const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    // devServer
    devServer: {
        port: 3000,
        stats: 'minimal',
        publicPath: "/dist"
    },

    devtool: "source-map",

    mode: 'development'
};