// 各AIサービスの APIキーの取り方マニュアル。
// 各社の画面の名前は変わることがあるので、見つからない時は近い名前のメニューを探すよう添える。

import type { ProviderId } from "./settings";

export interface GuideStep {
  title: string;
  body: string;
  link?: { label: string; url: string };
}

export interface Guide {
  id: ProviderId;
  name: string;
  summary: string;
  cost: string;
  steps: GuideStep[];
  models: string;
  cautions: string[];
}

export const GUIDES: Guide[] = [
  {
    id: "gemini",
    name: "Gemini（Google）",
    summary: "Googleアカウントがあればすぐ作れて、無料枠があります。まず試すならこれがおすすめ。",
    cost: "無料枠あり（回数に上限）。上限を超えて使う時は Google Cloud で支払い設定をする。",
    steps: [
      {
        title: "Google AI Studio を開く",
        body: "スマホのブラウザでも開けます。Googleアカウントでログインし、初回は利用規約に同意します。",
        link: { label: "Google AI Studio を開く", url: "https://aistudio.google.com/apikey" },
      },
      { title: "キーを作る", body: "「Get API key」または「APIキーを作成」を押します。プロジェクトを聞かれたら、新しく作る方を選べばOKです。" },
      { title: "キーをコピーする", body: "「AIza」で始まる文字列が表示されるので、コピーボタンでコピーします。" },
      { title: "このアプリに貼る", body: "⚙ →「AI」→ 使うAIを「Gemini（Google）」にして、APIキーの欄に貼り付けて「保存」。" },
    ],
    models: "おすすめ：gemini-flash-latest（いつも最新の Flash。速くて安い）。よく考えてほしい時：gemini-pro-latest。キーを保存すると、使えるモデルを確かめて自動で選び直します。",
    cautions: [
      "無料枠で送った内容は、Googleのサービス改善に使われることがあります。個人情報や仕事の情報は入れないでください。",
    ],
  },
  {
    id: "anthropic",
    name: "Claude（Anthropic）",
    summary: "文章や考える力が強いAI。先にクレジット（前払い）を買う方式です。",
    cost: "前払い制（最低5ドル程度から）。使った分だけ減っていきます。Claude の有料プラン（Pro など）とは別の支払いです。",
    steps: [
      {
        title: "Claude Console を開いて登録する",
        body: "メールアドレスまたはGoogleアカウントで登録・ログインします。",
        link: { label: "Claude Console を開く", url: "https://console.anthropic.com/" },
      },
      {
        title: "クレジットを買う",
        body: "「Billing」（請求）からカードを登録し、クレジットを購入します。残高がないとAIは返事をしません。",
        link: { label: "Billing を開く", url: "https://console.anthropic.com/settings/billing" },
      },
      {
        title: "キーを作る",
        body: "「API Keys」→「Create Key」を押し、名前（例：YUI）を付けて作成します。",
        link: { label: "API Keys を開く", url: "https://console.anthropic.com/settings/keys" },
      },
      { title: "キーをコピーする", body: "「sk-ant-」で始まる文字列をコピーします。この画面を閉じると二度と表示されないので、必ずここでコピーしてください。" },
      { title: "このアプリに貼る", body: "⚙ →「AI」→ 使うAIを「Claude（Anthropic）」にして、APIキーの欄に貼り付けて「保存」。" },
      {
        title: "使いすぎ防止（おすすめ）",
        body: "「Limits」で1か月に使える上限額を決めておくと安心です。",
        link: { label: "Limits を開く", url: "https://console.anthropic.com/settings/limits" },
      },
    ],
    models: "おすすめ：claude-sonnet-5-5（バランス型）。安く速く：claude-haiku-5-5。いちばん賢い：claude-opus-5-5（高め）。キーを保存すると、使えるモデルを確かめて自動で選び直します。",
    cautions: [],
  },
  {
    id: "openai",
    name: "ChatGPT（OpenAI）",
    summary: "ChatGPT と同じ会社のAI。支払い設定をしてから使います。",
    cost: "前払い（クレジット購入）制。ChatGPT Plus などの月額プランとは別の支払いです。",
    steps: [
      {
        title: "OpenAI Platform を開いて登録する",
        body: "ChatGPT と同じアカウントでログインできます。",
        link: { label: "OpenAI Platform を開く", url: "https://platform.openai.com/" },
      },
      {
        title: "支払い設定をする",
        body: "「Settings」→「Billing」でカードを登録し、クレジットを購入します。",
        link: { label: "Billing を開く", url: "https://platform.openai.com/settings/organization/billing/overview" },
      },
      {
        title: "キーを作る",
        body: "「API keys」→「Create new secret key」を押し、名前（例：YUI）を付けて作成します。",
        link: { label: "API keys を開く", url: "https://platform.openai.com/api-keys" },
      },
      { title: "キーをコピーする", body: "「sk-」で始まる文字列をコピーします。閉じると二度と表示されないので、ここで必ずコピーしてください。" },
      { title: "このアプリに貼る", body: "⚙ →「AI」→ 使うAIを「ChatGPT（OpenAI）」にして、APIキーの欄に貼り付けて「保存」。" },
      {
        title: "使いすぎ防止（おすすめ）",
        body: "「Limits」で月の予算（上限）を決めておくと安心です。",
        link: { label: "Limits を開く", url: "https://platform.openai.com/settings/organization/limits" },
      },
    ],
    models: "おすすめ：gpt-5-mini（安くて速い）。よく考えてほしい時：gpt-5。キーを保存すると、使えるモデルを確かめて自動で選び直します。",
    cautions: [],
  },
];

// どのAIでも共通の注意
export const COMMON_CAUTIONS = [
  "APIキーはお金がかかる「合い鍵」です。人に見せたり、SNS・チャットに貼ったりしないでください。",
  "もし漏れたかもと思ったら、各サービスの管理画面でそのキーを削除して、新しく作り直してください。",
  "キーはこのアプリの中で暗号化して、この端末にだけ保存します。別の端末で使う時は、その端末でも設定が必要です。",
  "画面のボタン名は各社の変更で変わることがあります。見つからない時は「API Keys」「Billing」に近い名前のメニューを探してください。",
];
