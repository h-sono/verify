## webpackの解説&メモ

```javascript
// pathモジュールを呼び出す(どの環境でもパスが読み取れるように)
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

// package.jsonのscriptsからNODE_ENVを取得。NODE_EVN未指定の場合dev。
const env = process.env.NODE_ENV || 'dev';
const mode = {
  dev: 'development',
  stg: 'production',
  prd: 'production',
}[env]

module.exports = {
  // modeはpackage.jsonのscriptsに定義
  mode: mode,
  // entryフィールド：実行の起点となるファイル(joinが環境に合わせてパスの間をいい感じに連結してくれている)
  entry: path.join(__dirname,'src', 'index.tsx'),
  devServer: {
    // webpack-dev-server実行時のサーバー起動の起点となるディレクトリを指定
    static: {
      directory: path.join(__dirname, 'src'),
    },
	},
  // outputフィールド：出力場所の指定(絶対パス)
  output: {
    path: path.join(__dirname,'webpack_relation'),
    // 出力先のファイル名を指定
    filename: 'main.js'
  },
  // importするモジュールを解決(指定されたモジュールを検索して該当するファイルを探す仕組み)
  resolve: {
    modules: [path.join(__dirname,'node_modules')],
    // 以下に指定した拡張子のファイルはimport時に拡張子を省略できる
    extensions: ['.js', '.ts', '.tsx'],
  },
  module:{
    // ファイルごとに適用するLoaderの設定をする
    rules:[
      {
        // testプロパティ⇒rulesに指定するファイルを正規表現で指定
        test:/\.css$/,
        // 指定されたファイルに対して使うLoaderを指定
        use:['style-loader','css-loader'],
      },
      {
        test:/\.(tsx|ts)$/,
        use:[
          {
            loader:'babel-loader',
            // optionsでLoaderに渡す設定を記述
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          // typescript用のLoader
          'ts-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'webpack_relation/index.html'),
    }),
  ],

};
```