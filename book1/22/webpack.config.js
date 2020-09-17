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
                test: /\.js$/,
                use: [
                    {
                        loader: 'force-strict-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    devtool: "eval-source-map",

    mode: 'development'
};