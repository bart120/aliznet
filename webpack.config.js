var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        main: './src/index/index.js',
        ratefinder: './src/ratefinder/ratefinder.js',
        game: './src/game/game.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    /*module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },*/
    stats: {
        colors: true
    },
    devtool: 'source-map'
};