# スクレイピングサンプル

## 概要

このプロジェクトは特定のウェブサイトをスクレイピングし、その結果を LINE メッセージとして送信する Node.js アプリケーションです。

## 必要な環境

- Node.js (v18 以上)

## 環境設定

次の環境変数を設定する必要があります。

- `LINE_CHANNEL_ACCESS_TOKEN`: LINE Messaging API のアクセストークンです。LINE developer console から取得できます。
- `LINE_CHANNEL_SECRET`: LINE Messaging API のシークレットです。LINE developer console から取得できます。
- `LINE_USER_ID`: メッセージを送信したい LINE ユーザーの ID です。

## インストール

以下の手順でプロジェクトをセットアップしてください。

1. プロジェクトをクローンします。

   ```
   git clone git@github.com:tamo-tmry/scraping-sample.git
   ```

2. プロジェクトのディレクトリに移動します。

   ```
   cd scraping-sample
   ```

3. 必要なパッケージをインストールします。

   ```
   npm install
   ```
