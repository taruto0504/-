import * as store from "../store.js";
import { icon } from "../icons.js";
import { esc, setTitle, formatDateTime, toast } from "../ui.js";

export const TERMS_HTML = `
  <h3>第1条（目的）</h3>
  <p>本アプリは、医療従事者・教育担当者・学生が、教育や振り返りのための<strong>架空の症例シナリオ</strong>を作成・共有し、意見交換するためのものです。</p>
  <h3>第2条（禁止事項）</h3>
  <ul>
    <li>実在する患者を特定できる情報（氏名、生年月日、住所、電話番号、カルテ番号・患者ID、顔写真など）を入力すること</li>
    <li>本アプリの内容やAIの評価を、実際の診療・看護・救急活動の判断に使うこと</li>
    <li>他人になりすますこと、他の利用者を誹謗中傷すること</li>
  </ul>
  <h3>第3条（AI評価）</h3>
  <p>AI評価は教育用の参考情報であり、正確性を保証しません。AI評価を使うと、その時点のシナリオの内容がAIサービスに送られます。</p>
  <h3>第4条（データの共有）</h3>
  <p>送信したシナリオとチャットは、送信先の相手が閲覧できます。送信後に編集した内容も相手に反映されます。退会すると自分の作成物は削除されますが、送信済みのものは相手側に残ります。</p>
  <h3>第5条（免責）</h3>
  <p>本アプリの利用により生じた損害について、提供者は責任を負いません。所属施設の規程や個人情報保護のルールに従って利用してください。</p>
  <h3>第6条（変更）</h3>
  <p>本規約は必要に応じて変更することがあります。変更後に利用を続けた場合、変更に同意したものとみなします。</p>`;

// 利用規約。同意していないアカウントは、ここで同意してから使い始める
export function termsView(el) {
  const me = store.currentUser();
  setTitle("利用規約", { back: !!me.termsAcceptedAt });
  el.innerHTML = `
    <section class="card terms">
      ${me.termsAcceptedAt ? "" : '<p class="notice">使い始める前に、利用規約を確認して同意してください。</p>'}
      <div class="terms-body">${TERMS_HTML}</div>
      ${
        me.termsAcceptedAt
          ? `<p class="small muted">${formatDateTime(me.termsAcceptedAt)} に同意済みです。</p>`
          : `<label class="check-row"><input type="checkbox" id="terms-agree"> 上記の利用規約に同意します</label>
             <div class="stack">
               <button type="button" class="btn primary block" id="terms-accept" disabled>同意して始める</button>
               <button type="button" class="btn block" id="terms-logout">同意せずにログアウト</button>
             </div>`
      }
    </section>`;
  if (me.termsAcceptedAt) return;
  const box = el.querySelector("#terms-agree");
  const btn = el.querySelector("#terms-accept");
  box.addEventListener("change", () => (btn.disabled = !box.checked));
  btn.addEventListener("click", () => {
    store.acceptTerms();
    toast("ようこそ！見本のシナリオを用意しました", "success");
    location.hash = "#/guide";
  });
  el.querySelector("#terms-logout").addEventListener("click", () => store.logout());
}

// 使い方ガイド：見本シナリオへのリンク付き
export function guideView(el) {
  setTitle("使い方ガイド", { back: true });
  const all = store.listScenarios();
  const find = (word) => all.find((s) => s.isSample && s.isOwner && (s.data.disease || "").includes(word));
  const link = (s, label) => (s ? `<a class="btn small" href="#/s/${s.id}">${esc(label)}</a>` : "");
  const draft = find("喘息");
  const ami = find("心筋梗塞");
  const sepsis = find("敗血症");
  const steps = [
    {
      icon: "edit",
      title: "シナリオを作る",
      body: "「新規作成」から、基本情報とバイタルサインを入力します。途中でも「一時保存」でき、一覧では「下書き」と表示されます。バイタル1まで入れると「作成済み」になります。",
      action: draft ? `<a class="btn small" href="#/edit/${draft.id}">下書きの見本を開く</a>` : "",
    },
    {
      icon: "doc",
      title: "完成したシナリオを見る・印刷する",
      body: "作成済みのシナリオは1画面にまとめて表示されます。バイタル1と2を並べて比べられ、「PDF・印刷」でA4用紙1枚に出力できます。",
      action: link(ami, "完成例を開く"),
    },
    {
      icon: "users",
      title: "相手に送る",
      body: "「送信相手」で相手のIDを登録し、よく送る相手は「グループ」にまとめておくと便利です。送信後は「確認状況」で何人が確認したか分かり、相手ごとに「共有を解除」もできます。",
      action: '<a class="btn small" href="#/contacts">送信相手を開く</a>',
    },
    {
      icon: "ai",
      title: "出題モードで訓練する",
      body: "作成画面の「出題設定」で出題モードをオンにして送ると、受け取った人はバイタル1を見て回答 → 急変（バイタル2）を見て回答 → 処置と模範解答で答え合わせ、の順に進みます。送った人は全員の回答を見られます。",
      action: `${link(sepsis, "出題の見本を開く")}<a class="btn small" href="#/inbox">受け取る側を体験する</a>`,
    },
    {
      icon: "chat",
      title: "チャットで話し合う・通知を受け取る",
      body: "シナリオごとにチャットでやりとりできます。届いたものは画面上部の知らせ、「受信」「通知」のバッジで分かります。",
      action: "",
    },
    {
      icon: "alert",
      title: "安全に使うために",
      body: "保存・送信の前に、生年月日や電話番号など個人情報らしき入力がないかを自動でチェックします。実在の患者の情報は入力しないでください。",
      action: '<a class="btn small" href="#/terms">利用規約を見る</a>',
    },
  ];
  el.innerHTML = `
    <p class="guide-lead">見本のシナリオを開きながら、使い方を確かめてみましょう。見本は「見本」と表示され、自由に編集・削除できます。</p>
    <ol class="guide-steps">
      ${steps
        .map(
          (st, i) => `
        <li class="card guide-step">
          <div class="guide-head"><span class="guide-num">${i + 1}</span>${icon(st.icon)}<h2>${st.title}</h2></div>
          <p>${st.body}</p>
          ${st.action ? `<div class="btn-row">${st.action}</div>` : ""}
        </li>`
        )
        .join("")}
    </ol>
    <a class="btn primary block" href="#/home">ホームへ</a>`;
}
