const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const terserJsPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        'index': './src/index.js',
        'about': './src/about.js',
        'contact': './src/contact.js',
        'galleries': './src/galleries.js',
        'merci': './src/merci.js',
        'singleGallery': './src/singleGallery.js',
    },//end entry object
    output: {
        filename: "js/[name]-[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },//end output object
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader', 
                        options: {
                            limit: 51200,
                            name: '[name]-[contenthash].[ext]',
                            outputPath: '/images'
                        } 
                    }
                ]
            }, //end images rule
            {
                test: /\.css$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    }
                    , 'css-loader', {
                    loader: 'postcss-loader', 
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')()
                        ]
                    }
                }]
            }//end css rule
        ]//end rules array
    },//end module object
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: './src/images', to: 'images' }
          ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new htmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            template: 'src/html/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new htmlWebpackPlugin({
            template: 'src/html/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
        new htmlWebpackPlugin({
            template: 'src/html/galleries.html',
            filename: 'galleries.html',
            chunks: ['galleries']
        }),
        new htmlWebpackPlugin({
            template: 'src/html/singleGallery.html',
            filename: 'singleGallery.html',
            chunks: ['singleGallery']
        }),
        new htmlWebpackPlugin({
            template: 'src/html/merci.html',
            filename: 'merci.html',
            chunks: ['merci']
        }),
        new miniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        }),

    ],//end plugins array
    optimization: {
        minimizer: [new optimizeCssPlugin(), new terserJsPlugin({parallel: true})],
        splitChunks: {
            chunks: 'all'
        }
    }//end optimization object  
};