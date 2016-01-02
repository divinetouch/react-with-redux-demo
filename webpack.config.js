var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('app'), 
    devtool: 'eval',
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: 'dist',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/bower_components/],
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
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

