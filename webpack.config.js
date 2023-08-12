const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
	filename: 'main.js',
	path: path.resolve(__dirname, "dist") 
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg)$/i,
        use: ["file-loader?name=public/assets/[name].[ext]"]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './index.html',
      filename: 'index.html'
    })
  ]
}