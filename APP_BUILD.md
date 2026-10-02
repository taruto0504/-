# スマホアプリ(iPhone / Android)としてビルドする手順

このリポジトリは [Capacitor](https://capacitorjs.com/) で、今のWebアプリをそのまま
iPhoneアプリ(`ios/`)とAndroidアプリ(`android/`)にできる構成になっています。

## アプリ版だけの機能

- **iPhone**:タイマーのアラーム音を「ミュージック」アプリの曲から選べる
  (iTunes Storeで購入した曲・パソコンから同期した曲。Apple Musicの聴き放題の曲は著作権保護のため不可)
- **iPhone**:消音モード(マナースイッチ)でもアラームが鳴る
- **Android**:「変更」で端末内の音楽ファイル(購入してダウンロードした曲など)を直接選べる

## 必要なもの

| | iPhone | Android |
|---|---|---|
| パソコン | Mac(必須) | Mac / Windows / Linux |
| ソフト | Xcode(App Storeから・最新版) | Android Studio(最新版) |
| 共通 | Node.js 22以上 | Node.js 22以上 |
| 自分のスマホで試す | Apple ID(無料でも可・7日ごとに再インストール) | 無料 |
| ストアで公開する | Apple Developer Program(有料・年額) | Google Play デベロッパー登録(有料・初回のみ) |

## はじめの準備(1回だけ)

```sh
git clone https://github.com/taruto0504/-.git medical-support-tool
cd medical-support-tool
npm install
npm run sync
```

## iPhoneで動かす

1. `npm run open:ios` で Xcode が開きます
2. 左のファイル一覧で「App」→「Signing & Capabilities」→「Team」に自分の Apple ID を選ぶ
3. iPhoneをケーブルでMacにつなぎ、上部の実行先で自分のiPhoneを選んで ▶(Run)
4. 初回はiPhoneの「設定 → 一般 → VPNとデバイス管理」で開発元を信頼する

## Androidで動かす

1. `npm run open:android` で Android Studio が開きます(初回は準備に数分かかります)
2. スマホの「開発者向けオプション」で「USBデバッグ」をオンにしてパソコンにつなぐ
3. 上部の実行先で自分のスマホを選んで ▶(Run)

## アプリの中身(HTML / CSS / JS)を変更したとき

```sh
npm run sync
```

を実行してから、Xcode / Android Studio で再度 ▶(Run)してください。

## メモ

- アプリID:`jp.medicalsupporttool.app`(`capacitor.config.json`)。ストア公開前に変える場合は iOS / Android のプロジェクト側も変更が必要です。
- アイコン・起動画面の元画像は `assets/` にあります。差し替えたら
  `npx @capacitor/assets generate --ios --android --iconBackgroundColor '#0b6e99' --splashBackgroundColor '#0b6e99'`
  で作り直せます。
- 現時点では、アプリを閉じている間・画面ロック中はタイマーのアラームが鳴りません(Web版と同じ)。
