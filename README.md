# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## npm init
package.json初回作成時。フォルダ名がnameとなる。

## webpack
$ `npm install --save-dev webpack`
$ `npm install --save-dev webpack-cli`
※`npm install --save-dev` = `npm i -D`

webpack実行
$ `npx webpack`
developmentモード（モジュールを圧縮しない）、productionモード（モジュールを圧縮＝改行なしで出力）
を指定する場合↓
$ `npx webpack --mode development`
↓
毎回指定するのは面倒なのでpackage.jsonのscriptsに指定する。
```
"scripts": {
    // 開発用
    "dev": "webpack --mode development",
    
    // 本番用
    "prd": "webpack --mode production",
    省略
  },
```
devやprdがコマンドとして使えるようになる。
例）npm run dev や npm run prd⇒webpackが成功したかの確認のみ

## webpack設定関連
https://dev-yakuza.posstree.com/react/start/
https://qiita.com/takano-h/items/1a6a5a0b9d25a677f7d2
https://zenn.dev/ichigo_dev/articles/d061205249e6db364c2a
https://qiita.com/ftyabu/items/240280617a69777a2fd4
https://www.webdesignleaves.com/pr/jquery/webpack_basic_01.html

## webpack-dev-server関連
webpack-dev-server：webpackを開発サーバーで起動。
https://webpack.js.org/configuration/dev-server/

## nodeバージョン切り替え(volta使用)
https://symfoware.blog.fc2.com/blog-entry-2535.html
voltaインストール
$ `sudo curl https://get.volta.sh | bash`
node.jsの安定版インストール
$ `volta install node`
node.jsの最新版インストール
$ `volta install node@latest`
※バージョンを戻す
$ `apt install nodejs`

## webpackでビルド(開発用ビルド)
$ `npm run dev`
↓
package.jsonの設定
```
"scripts": {
    "dev": "NODE_ENV=dev webpack-dev-server",
    省略
```
