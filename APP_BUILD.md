# スマホアプリ(iPhone / Android)としてビルドする手順

このリポジトリは [Capacitor](https://capacitorjs.com/) で、今のWebアプリをそのまま
iPhoneアプリ(`ios/`)とAndroidアプリ(`android/`)にできる構成になっています。

## アプリ版だけの機能

- **iPhone**:タイマーのアラーム音を「ミュージック」アプリの曲から選べる
  (iTunes Storeで購入した曲・パソコンから同期した曲。Apple Musicの聴き放題の曲は著作権保護のため不可)
- **iPhone**:消音モード(マナースイッチ)でもアラームが鳴る
- **Android**:「変更」で端末内の音楽ファイル(購入してダウンロードした曲など)を直接選べる
- 画面上部のステータスバー・下部のホームバーを避けて表示し、どの画面も1画面に収まるように調整(縦向き固定)

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

## 広告の設定

広告枠はホーム画面の一番下(注意書きの下)に1つあります。計算・タイマー・CPAの画面には出しません。
設定は `js/ads.js` 先頭の `AD_CONFIG` で切り替えます。

| mode | 内容 |
|---|---|
| `"off"` | 表示しない(初期設定) |
| `"preview"` | 位置確認用のグレーの枠。URLに `?ads=preview` を付けても確認できる |
| `"adsense"` | Google AdSense。審査後に `client`(ca-pub-…)と `slots.home` を入れる |
| `"custom"` | 自分で用意したバナー画像とリンク(アフィリエイト等)。`custom.home` に画像URL・リンク先を入れる |

- 枠の大きさは 320×50 固定です(1画面に収まるように)。
- スマホアプリ内ではWeb用の広告は表示されません(AdSenseの規約でアプリ内表示は禁止)。アプリで広告を出す場合は AdMob を別途組み込みます。
- 広告を出し始めるときは、利用規約 第6条(広告について)の内容と合っているか確認してください。
- Web版の各HTMLには、読み込めるスクリプトの配信元を制限するセキュリティ設定(Content-Security-Policy)が入っています。AdSenseと画像バナーはそのまま使えますが、別の広告会社のスクリプトを使う場合は、各HTML先頭の `Content-Security-Policy` にその配信元を追加してください(アプリ版のビルドではこの設定は自動で外れます)。
