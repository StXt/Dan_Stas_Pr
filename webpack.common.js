const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


var config = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(css|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: "[name].html",
            template: "./src/index.pug"
        })
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: './src'
        }
    }

    if (argv.mode === 'production') {
        config.devServer = {
            contentBase: './dist'
        }
    }

    return config;
};