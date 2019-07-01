const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ROOT_DIR = path.resolve(__dirname)
const NODE_MODULES_DIR = path.join(ROOT_DIR, 'node_modules')
const SRC_DIR = path.join(ROOT_DIR, 'src')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      SRC_DIR,
      NODE_MODULES_DIR
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
}

