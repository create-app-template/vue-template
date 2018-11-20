const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // filename: '[name].[hash].js'
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|less)$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader',
                    'postcss-loader'
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 data: `$color: blue;`
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new AutoDllPlugin({
            inject: true, // 将会打包到index.html
            debug: true,
            filename: '[name].js',
            path: './',
            entry: {
                vendor: ['vue', 'vue-router', 'vuex']
            }
        }),
        new VueLoaderPlugin()
    ]
};
