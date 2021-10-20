const path = require('path');
const dotenv = require('dotenv');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/transform-runtime'],
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jp(e*)g)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000,
                name: 'images/[name]-[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(svg)$/,
          use: [
            '@svgr/webpack',
            {
              loader: 'url-loader',
              options: {
                limit: 8000,
                name: 'images/[name]-[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HTMLWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer()],
        },
      }),
    ],
  };
};
