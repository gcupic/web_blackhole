const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index.js'],
        page: ['./src/pages/page/page.js'],
    },
    output: {
        filename: '[name].app.js',
        path: path.resolve(__dirname, 'dist')
    },  
    devServer: {
        disableHostCheck: true
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: false
          }
        })
      ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './'),
        ]
    },
    module: {
        rules: [{
                test: /\.(html)$/,
                include: [
                    path.join(__dirname, 'src/partials'),
                    path.join(__dirname, 'src/pages')
                ],
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: (file) => {
                            let path = file.split("src/")[1];
                            return path
                        }
                    }
                }]
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: 'imports-loader?jQuery=jquery'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether',
            'window.Tether': 'tether',
            Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
            Button: 'exports-loader?Button!bootstrap/js/dist/button',
            Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
            Util: 'exports-loader?Util!bootstrap/js/dist/util',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'elements.html',
            template: 'src/pages/elements/elements.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-detail.html',
            template: 'src/pages/blog-detail/blog-detail.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-grid.html',
            template: 'src/pages/blog-grid/blog-grid.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-large-image.html',
            template: 'src/pages/blog-large-image/blog-large-image.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-list.html',
            template: 'src/pages/blog-list/blog-list.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-masonry.html',
            template: 'src/pages/blog-masonry/blog-masonry.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-sidebar.html',
            template: 'src/pages/blog-sidebar/blog-sidebar.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'carousel.html',
            template: 'src/pages/carousel/carousel.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: 'src/pages/cart/cart.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'src/pages/contact/contact.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact-compact.html',
            template: 'src/pages/contact-compact/contact-compact.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'faq.html',
            template: 'src/pages/faq/faq.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery-grid.html',
            template: 'src/pages/gallery-grid/gallery-grid.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery-masonry.html',
            template: 'src/pages/gallery-masonry/gallery-masonry.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'landing-page.html',
            template: 'src/pages/landing-page/landing-page.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'map.html',
            template: 'src/pages/map/map.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'message-detail.html',
            template: 'src/pages/message-detail/message-detail.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'message-list.html',
            template: 'src/pages/message-list/message-list.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'parallax-image.html',
            template: 'src/pages/parallax-image/parallax-image.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'product-detail.html',
            template: 'src/pages/product-detail/product-detail.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'product-list.html',
            template: 'src/pages/product-list/product-list.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'profile.html',
            template: 'src/pages/profile/profile.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'research.html',
            template: 'src/pages/research/research.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'resources.html',
            template: 'src/pages/resources/resources.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'testimonials.html',
            template: 'src/pages/testimonials/testimonials.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'page.html',
            template: 'src/pages/page/page.html',
            favicon: 'src/assets/media/favicon.png',
            chunks: ['page']
        }),
    ],
};