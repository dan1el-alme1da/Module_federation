const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:9001/',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        historyApiFallback: true,  // Corrigindo 'HistoyFallbackApi' para 'historyApiFallback'
        port: 9001,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            title: 'App',
        }),
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                HomeApp: 'HomeApp@http://localhost:9002/remoteEntry.js', // Verifique a porta
                ContactApp: 'contactApp@http://localhost:9003/remoteEntry.js' // Verifique a porta
            }
        }),
    ],
};
