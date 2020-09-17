const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },

    devtool: "eval-source-map",

    mode: 'development'
};