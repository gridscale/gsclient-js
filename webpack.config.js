const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'gridscale',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};