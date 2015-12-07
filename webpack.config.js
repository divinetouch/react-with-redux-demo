var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('app'), 
    entry: './main.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: 'dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/bower_components/],
                loader: 'babel',
                query: { 
                    presets: ['react', 'stage-2', 'es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|svg|eot|ttf|svg|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }) 
    ],
    eslint: {
        configFile: '/.eslintrc'
    }
};

