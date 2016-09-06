'use strict';

const path              = require('path');
const webpack           = require('webpack');
const json              = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        './src/App.jsx'
    ],
    output: {
        path    : `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /global\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.scss$/,
                exclude: /global\.scss/,
                loaders: ['style', 'css?modules', 'sass']
            },
            {
                test: /\.(eot|svg|ttf|otf|woff|woff2)(\?v=.*)?$/,
                exclude: /assets\/.*/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /assets\/.*\.(jpg|png|svg|mp4)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title   : json.name,
            template: './src/index.ejs'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __dirname             : JSON.stringify(__dirname)
        })
    ],
    resolve: {
        root: path.resolve('./src')
    }
};

if (!process.env.NODE_ENV) {
    config.devServer = {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8000/api',
                secure: false
            }
        },
        historyApiFallback: true
    };
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]);
} else {
    config.devtool = 'eval-source-map';
}

module.exports = config;
