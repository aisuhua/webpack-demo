const path = require('path');

module.exports = {
    entry: {
        index: './index.js',
        app: './app.js',
        vendor: ['@splidejs/splide']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]@[chunkhash].js',
        publicPath: "/dist/"
    },
    mode: 'development'
};