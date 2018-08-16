プレイド8月研修 - 1日目

## 目次

* [1日目](https://qiita.com/n0bisuke/private/4ff76b79de723fe46f66)
* [2日目](https://qiita.com/n0bisuke/private/33f3c9bb6277a24652f4)
* [3日目](https://qiita.com/n0bisuke/private/965ae0e8fd18294e6120)
* [4日目](https://qiita.com/n0bisuke/private/4735dd8ec86afa6a1a17)
* [5日目](https://qiita.com/n0bisuke/private/913689b002fd2a92966e)

## 全体

```
* 1日目
    * IT/Webリテラシ基礎
    * 開発環境
    * UNIXコマンド
    * Webサイトを作る(HTML/CSS/JS)
    * jqueryを使ってみる[注5]
    * ローカルサーバー
    * ホスティング (感動ポイント[注1])
    * 課題
        * ポートフォリオサイトを作成してホスティング

* 2日目
    * Node.jsの生まれる背景
    * JavaScriptの歴史
    * Node.jsの環境構築
    * Node.jsのハローワールド
    * Git[注2] (感動ポイント[注1])
        * ローカルリポジトリで基本操作
        * GitHubでプルリク
    * 課題
        * 指定リポジトリにプルリク
* 3日目
    * HTTPサーバー
        * JSでプログラム練習
        * Node.jsでサーバー
        * Expressの利用
    * HTTPクライアント
        * GET/POST
        * フォーム
        * Node.jsでSlack BOT (感動ポイント[注1])
        * Node.jsで天気API
    * 課題
        * サーバーとクライアントを両方作って通信

* 4日目
    * DOMの理解[注3]
    * データベース概要[注4]
        * データベースの種類
        * SQLとCRUD
        * Node.jsからデータベースを扱う
    * Socket.io/Websocket
        * Socket.ioでチャット作成(感動ポイント[注1])
    * 課題
        * チャットログをデータベースに保存

* 5日目
    * クッキー/セッション
        * セッション
        * ログイン実装
    * スクレイピング (感動ポイント[注1])
        * 正規表現
        * 非同期処理
    * 課題
```


## 1日目 - 基礎編

* ゴール `Webの概念を知り、Webサイトを作ってみること`

### IT/Webリテラシ基礎

- 簡単な歴史（ARPANET, プロトコル(TCP/IP, HTTP), メール, www, ブラウザ, 検索エンジン, SNS)
- ネットワーク
- webサーバー・クライアント
- グーグルで検索をすると何が起きるか?

---

### Web開発最初の1歩

- Macの環境設定（ターミナルとその設定、エディタ、拡張子表示設定等）
- UNIXコマンドの習得: https://dotinstall.com/lessons/basic_unix_v2 
- htmlの表示: https://dotinstall.com/lessons/basic_html_v4 (14まで)
- cssを当てる: https://dotinstall.com/lessons/basic_css_v4 (2まで)
  - CSS基礎文法入門: https://dotinstall.com/lessons/basic_css_styles
  - CSSレイアウト入門: https://dotinstall.com/lessons/basic_css_layout
- ブラウザでjavascriptを実行: https://dotinstall.com/lessons/basic_javascript_v2 (10まで)
- Chrome Developer tools: https://dotinstall.com/lessons/basic_chrome_dev_v2

---

## Webの基礎

---

### インターネットの歴史

[稲盛さんの資料](https://www.slideshare.net/inamoly/gtb2015springweb)

---

### HTTP

* http://www.system-dev.jp/beans/001.html
* http://nyumon-info.com/web/websystem.html
* [HTML初心者必見！Webページの仕組みをわかりやすく説明！](https://blog.codecamp.jp/html_web_base)

![](https://s3-ap-northeast-1.amazonaws.com/mash-jp/staging/uploads/1701/8c10a6b59c03e198cb8f0915642d0052f00792b9.1728.original.png?1488163543)

> 応用: [【翻訳】リッチなWebアプリケーションのための7つの原則](http://yosuke-furukawa.hatenablog.com/entry/2014/11/14/141415)

---

### Webのサーバーとクライアント

* [Webの仕組みとWebサーバの構造 (1/2)](http://www.atmarkit.co.jp/ait/articles/0101/16/news003.html)

![](http://image.itmedia.co.jp/ait/articles/0101/16/r12a1.gif)

---

### HTML/CSS/JavaScript

WebサイトやWebアプリケーションを

* HTML - Webサイトの文書や構造
* CSS - Webサイトの見栄えや装飾
* JavaScript - 振る舞いやデータの処理

---

### サーバーサイドの言語

* Perl
* PHP
* Ruby
* Python
* Java
* Go
* Node.js

---

## 環境構築

* ターミナル
	* パソコンの操作をコマンドで行えるようにしたもの
* コマンド ( https://dotinstall.com/lessons/basic_unix_v2 )
	* [【Mac向け】「黒い画面」の苦手意識を克服しよう！コマンドラインインタフェースの基本操作](https://dotstud.io/blog/how-to-use-cli/)
* エディタ
* Chrome Dev Tools ( https://dotinstall.com/lessons/basic_chrome_dev_v2 )

---

## Webサイトを作ってみる(ドットインストール参照)

Webサイトの作り方を覚えよう。

- htmlの表示: https://dotinstall.com/lessons/basic_html_v4
- cssを当てる: https://dotinstall.com/lessons/basic_css_v4
  - CSS基礎文法入門: https://dotinstall.com/lessons/basic_css_styles
  - CSSレイアウト入門: https://dotinstall.com/lessons/basic_css_layout
- ブラウザでjavascriptを実行: https://dotinstall.com/lessons/basic_javascript_v2

---

## ローカルサーバーの起動

通常、サービスを公開する際にはサーバーとクライアントは別々のPCですが、ローカルサーバーを使うとサーバーとクライアントを自分のPC内で試すことができます。

サイトのファイルがあるフォルダに移動 (例えばlesson2など）

```
cd lesson2
```

pythonでサーバーを起動。Macならデフォルトで使えます。


```
python -m SimpleHTTPServer 3000
```

http://localhost:3000にブラウザでアクセスするとWebサイトが表示されます。

## ホスティング

Webサイトを作ってホスティングしよう。

* https://www.netlify.com/

![](https://i.gyazo.com/742e34103899825a611e680bb112ac97.jpg)

## 課題

* 課題: ポートフォリオサイトを作ろう
	* ページを二つ以上作る
		* xxx.htmlを新しく作ってその場所へのリンクを作る
	* リンクを二つ以上　
	* 画像を二つ以上
	* リストを２つ以上利用
	* 2段組み以上

### ヒント

* aタグ
* imgタグ
* ul/liタグ
* css float flexbox

