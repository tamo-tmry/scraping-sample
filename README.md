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

4. `.env` ファイルを作成し、環境変数を設定します。

   ```
   LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token
   LINE_CHANNEL_SECRET=your_channel_secret
   LINE_USER_ID=your_user_id
   ```

## 使用方法

スクレイピング対象のウェブサイトを設定し、プロジェクトを実行します。

    node sample.js

以上で、設定した LINE ユーザーにスクレイピング結果のメッセージが送られます。
