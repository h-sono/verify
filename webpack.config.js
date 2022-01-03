const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV || 'dev';
const mode = {
  dev: 'development',
  stg: 'production',
  prd: 'production',
}[env]

module.exports = {
  mode: mode,
  entry: path.join(__dirname,'src', 'tsx', 'index.tsx'),
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
	},
  output: {
    path: path.join(__dirname,'webpack_relation'),
    filename: 'main.js'
  },
  resolve: {
    modules: [path.join(__dirname,'node_modules')],
    extensions: ['.js', '.ts', '.tsx'],
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
      {
        test:/\.(tsx|ts)$/,
        use:[
          {
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          'ts-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html',
    }),
  ],

};