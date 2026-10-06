# Stock Cockpit(株式取引アプリ デモ版)

「すべての口座を、1つのコックピットで」。企画書のフェーズ1(デモ版)を、
Web・iPhone・Android・タブレットで動くアプリにしたものです。

> 証券会社・銘柄・株価・ニュースはすべて架空です。実際の注文は行われません。

## できること

| 画面 | 内容 |
|---|---|
| ホーム | 総資産(チャート/カード/ゲージ/レーダーの4種類)、本日の損益、指数、口座別、保有銘柄 |
| 銘柄 | 検索(名前・コード・業種)、ウォッチ、国内株/米国株の絞り込み、どの証券で買えるかの表示 |
| 取引 | ローソク足と移動平均、板、歩み値、取扱証券と手数料(最安の表示つき) |
| 発注 | 口座の選択(取扱のない口座は選べない)、買い・売り、成行・指値、確認画面 |
| 注文・約定 | 全口座の注文を表示、口座・状態での絞り込み、取消 |
| ニュース | 保有銘柄・ウォッチ銘柄・すべてで絞り込み |
| 設定 | 上昇・下落の色(日本式/米国式)、演出の強さ、約定音、振動、デモのリセット、料金プラン |

- 株価は1秒ごとに更新され、値が変わった数字が光ります。約定すると波紋・通知・効果音・振動が出ます。
- スマホは下部タブ、タブレット(縦)は2列、PC・タブレット(横)は3列のマルチパネルです。
- デモ口座と注文は端末内(localStorage)にだけ保存されます。

## 開発

```sh
cd stock-cockpit
npm install
npm run dev        # ブラウザで確認(http://localhost:5173)
```

## Web で公開する(GitHub Pages)

```sh
npm run build:pages
```

リポジトリ直下の `stock/` にWeb版が書き出されます。コミットして GitHub Pages に反映されると
`https://<ユーザー名>.github.io/<リポジトリ名>/stock/` で開けます。

## スマホアプリ(iPhone / Android)にする

[Capacitor](https://capacitorjs.com/) で `ios/` と `android/` を作成済みです。
必要なもの(Mac・Xcode・Android Studio など)はリポジトリ直下の `APP_BUILD.md` と同じです。

```sh
npm run sync           # Webの中身をビルドしてアプリ側に反映
npm run open:ios       # Xcode が開く → Team を選んで ▶
npm run open:android   # Android Studio が開く → ▶
```

画面の中身を変えたら、毎回 `npm run sync` してから ▶ し直してください。

- アプリID:`jp.stockcockpit.app`(`capacitor.config.json`)
- アイコン・起動画面の元画像は `assets/`。作り直すとき:
  `npx @capacitor/assets generate --ios --android --iconBackgroundColor '#050a18' --splashBackgroundColor '#050a18'`

## 構成

| 場所 | 役割 |
|---|---|
| `src/data/market.ts` | 架空の証券会社・銘柄・口座・ニュース |
| `src/data/feed.ts` | 株価の配信。`MarketFeed` を実装した `DemoFeed`(乱数)を使用。本番ではここを証券会社・データ配信会社用の実装(アダプター)に差し替える |
| `src/store.tsx` | 状態管理、注文の約定処理、端末への保存 |
| `src/lib/portfolio.ts` | 資産・損益・買付余力・手数料の計算 |
| `src/components/` | 各画面 |

## 次のフェーズに向けて

- 本物の株価は取引所・データ配信会社との契約が必要です(まずは遅延株価から)。
- 口座連携・発注は、証券会社との提携と金融の登録が前提です(企画書「法規制・証券会社連携」参照)。
- ストアで公開するときは、金融アプリの審査に備えて法人名義での登録を想定してください。
