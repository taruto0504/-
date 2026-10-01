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

## ネットの医療ガイドラインの取り込み
評価は2段階で行います。
1. **ガイドライン調査**:Claude の Web 検索で、許可したサイトだけを検索します(`GUIDELINE_DOMAINS`)。
   初期設定は Minds ガイドラインライブラリ、厚生労働省、PMDA、総務省消防庁、日本蘇生協議会、主要学会、J-STAGE、PubMed、WHO、CDC、AHA です。
2. **評価**:調査結果を参考にして、根拠の正しさ・提案・参考資料を作ります。
   参考資料のリンクは、**検索で実際に見つかったページだけ**を表示します(AIが作ったURLは表示しません)。

- 検索サイトを増やす・減らすときは `GUIDELINE_DOMAINS` を編集してデプロイし直してください
- Web 検索は検索1回ごとに追加料金がかかります(1回の評価で最大5回まで検索します)
- Anthropic の Console で、組織の設定により Web 検索が無効になっていると調査が失敗します。
  その場合も評価は止まらず、「AIの知識だけで評価しています」と表示されます

## テスト
```bash
cd functions && npm test
```
