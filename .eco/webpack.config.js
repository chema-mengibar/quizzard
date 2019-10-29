const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

// https://webpack.js.org/configuration/dev-server/

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'app.js'
  },
  resolve: {
    extensions: [".jsx",".js"]
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'] 
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    allowedHosts: ['localhost'],
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: path.resolve( __dirname, 'dist/index.html' ),
       filename: 'index.html',
       inject: false 
    })
 ]
};