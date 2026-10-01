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

## 設定を変えたいとき
- `functions/plans.js`:料金プランごとの上限(AI評価の回数、画像の枚数、送信先の人数、広告の有無)
- `functions/index.js` の `enforceAppCheck`:App Check で、このアプリ以外からの呼び出しを拒否します。
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

## 料金プラン(有料化の準備)
どのプランで何をどこまで使えるかは、**`functions/plans.js` の1か所**で決めています。
ここを変えてデプロイすると、アプリの表示(プラン画面・比較表・ボタンの鍵マーク)とサーバー側の制限の両方に反映されます。

| 項目 | 無料(初期値) | プロ(初期値) | 制限をかける場所 |
|---|---|---|---|
| `aiDailyLimit` AI評価の回数/日 | 3 | 30 | サーバー(改ざん不可) |
| `maxAttachments` 画像の枚数 | 3 | 6 | アプリ(上限6枚はセキュリティルールでも制限) |
| `maxRecipients` 送信先の人数 | 10 | 50 | アプリ(上限50名はセキュリティルールでも制限) |
| `showAds` 広告 | あり | なし | アプリ |

- **AI評価を有料プランだけにする**:無料の `aiDailyLimit` を `0` にします(アプリのAIボタンが🔒になり、押すとプラン画面が開きます)
- **料金の表示**:`price` に「月額 500円」などを入れます
- 費用がかかる AI評価はサーバー側で回数を数えるため、アプリを改造されても上限は超えられません

### いまプロプランを付与する方法(決済をつなぐ前の手動運用)
1. Firebase コンソール → Authentication で、対象ユーザーの「ユーザー UID」をコピー
2. Firestore → `entitlements` コレクション → ドキュメント ID に UID を指定して作成
3. フィールド:`plan`(文字列)= `pro`、`source`(文字列)= `manual`、
   期限をつける場合は `expiresAt`(タイムスタンプ)。期限を過ぎると自動で無料プランに戻ります

`entitlements` は本人が読めるだけで、アプリからは書き込めません(セキュリティルールで禁止)。

### 決済をつなぐとき(今後)
決済サービスの通知(Webhook)を受けたサーバー処理が、`entitlements/{uid}` を書き換えるだけで済む作りにしています。
- **Web版**:Stripe(定期課金)。Firebase 拡張機能「Run Payments with Stripe」も使えます
- **スマホアプリ(App Store / Google Play)**:アプリ内のデジタル機能の課金は、原則としてストアのアプリ内課金が必要です。
  RevenueCat などを使うと、iOS・Android・Web の契約状況をまとめて管理できます
- **公開前に必要なもの**:特定商取引法に基づく表記、利用規約の有料プラン条項の確定(現在はひな形)、解約・返金のルール

## テスト
```bash
cd functions && npm test
```
