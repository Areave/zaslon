const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const miniCss = new MiniCss({
    filename: 'main.css'
});

const terserPlugin = new TerserPlugin({
    extractComments: false
});

const tsRule = {
    test: /\.tsx$/,
    use: ['babel-loader', 'ts-loader']
}

const cssRule = {
    test: /\.s?css$/,
    exclude: /node_modules/,
    use: [MiniCss.loader, 'css-loader', 'sass-loader']
}


module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: "./js/[name]_[hash:base64].js",
        clean: true
    },
    module: {
        rules: [tsRule, cssRule]
    },
    optimization: {
        minimizer: [terserPlugin],
    },
    plugins: [htmlWebpackPlugin,  miniCss],

    // watch: true
};

