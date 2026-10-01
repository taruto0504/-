# AI評価機能(サーバー側)のセットアップ

アプリの「🤖 AIで評価」ボタンは、この Cloud Functions(`evaluateReport`)を呼び出します。
AI(Claude)の API キーはブラウザに置けないため、必ずサーバー側から呼び出す仕組みにしています。

## 必要なもの
- Firebase の **Blaze プラン(従量課金)**:Cloud Functions の利用に必要です
- **Anthropic の API キー**:https://console.anthropic.com で発行します(利用量に応じて課金されます)
- パソコンに Node.js 22 と Firebase CLI(`npm install -g firebase-tools`)

## 手順
```bash
# 1. ログインとプロジェクトの選択
firebase login
firebase use hospitalapp-72871

# 2. 依存パッケージのインストール
cd functions && npm install && cd ..

# 3. API キーを Firebase に安全に保存(画面の指示に従ってキーを貼り付け)
firebase functions:secrets:set ANTHROPIC_API_KEY

# 4. デプロイ(サーバー処理とセキュリティルール)
firebase deploy --only functions,firestore:rules
```

## 設定を変えたいとき(`functions/index.js`)
- `DAILY_LIMIT`:1人が1日に評価できる回数(初期値 20 回)。費用の上限の目安になります
- `enforceAppCheck`:App Check で、このアプリ以外からの呼び出しを拒否します。
  reCAPTCHA の許可ドメインに公開先のドメインを追加していないと、評価が失敗します

評価の観点や出力の形は `functions/evaluate.js` の `SYSTEM_PROMPT` と `REVIEW_SCHEMA` で変えられます。

## テスト
```bash
cd functions && npm test
```
