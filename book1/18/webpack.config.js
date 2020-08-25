const path = require('path');

module.exports = {
    entry: {
        index: './index.js',
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'bundle.js'
    },
    mode: 'development'
};