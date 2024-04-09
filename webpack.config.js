const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const basePath = '/';

module.exports = {
  performance : {
    hints : false
  },
  mode: 'development',
  stats: {
    children: true,
  },
  devServer: {
    watchFiles: ['./src/**/*'],
    port: 8010,
    hot: true,
    open: {
      app: {
        name: 'Google Chrome'
      }
    } 
  },
  entry: {
    index: {
      import:'./src/js/index.js',
      filename: 'js/index.js'
    },
    home: {
      import:'./src/js/home.js',
      filename: 'js/home.js'
    },
    menu: {
      import:'./src/js/menu.js',
      filename: 'js/menu.js'
    },
    library_detail: {
      import:'./src/js/library_detail.js',
      filename: 'js/library_detail.js'
    },
  },
  output: {
    publicPath: basePath,
    path: path.join(__dirname, "/build"), 
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {filename: "fonts/[name][ext]",},
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {filename: "images/[name][ext]",},
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
       new HtmlMinimizerPlugin(),
       new CssMinimizerPlugin(),
       new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin(
      'Name: Web-demo ; Version-Deployment : v1.0; Version-Test: v1.0'
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'home', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'event.html',
      template: './src/views/event.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'library.html',
      template: './src/views/library.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'library_detail.html',
      template: './src/views/library_detail.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'library_detail', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'blog_detail.html',
      template: './src/views/blog_detail.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'event_detail.html',
      template: './src/views/event_detail.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/views/blog.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/views/contact.html',
      favicon: './src/img/header-footer/favicon.ico',
      inject: "body",
      chunks: ['index', 'home', 'menu'],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    
  ],
};