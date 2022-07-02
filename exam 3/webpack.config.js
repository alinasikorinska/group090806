const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {
            overlay: true
        }
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ],
        }]
    },
    plugins: [
        new miniCss({
            filename: './style.css'
        }),
    ]
}

