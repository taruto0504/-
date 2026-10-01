// 使い方モード：各画面の上に「この画面でできること」を出し、説明している場所に番号を付ける。
// 画面の中身は描き直されることがあるので、変化を見張って番号を付け直す。

import { getDisplay, setDisplay } from "./settings.js";
import { icon } from "./icons.js";
import { esc } from "./ui.js";

// sel：番号を付ける場所（画面内 → 見つからなければページ全体から探す）
const HOWTO = {
  home: {
    title: "ホーム（作成したシナリオの一覧）",
    tips: [
      { sel: ".filter-tabs", text: "「下書き・作成済み・送信済み・受信」で一覧を絞り込めます。" },
      { sel: '[data-act="search"]', text: "「検索」で疾患名などから探せます。隣の欄で並び順も変えられます。" },
      { sel: '[data-act="select"]', text: "「選択」を押すと、複数のシナリオをまとめて削除できます。" },
      { sel: ".scenario-list", text: "シナリオを押すと、内容を1画面にまとめて表示します。「見本」は使い方の参考に自動で作られたもので、自由に編集・削除できます。" },
      { sel: '[data-nav="new"]', text: "「新規作成」から新しいシナリオを作ります。" },
    ],
  },
  editor: {
    title: "シナリオの作成・編集",
    tips: [
      { sel: '[data-section="basic"]', text: "疾患名・年齢・性別・概要・主訴を入力します。疾患名と主訴から、AI評価で使うガイドラインが選ばれます。" },
      { sel: '[data-section="v1"]', text: "バイタルサイン1を入力します。JCS・GCSは選ぶだけ、血圧は「収縮期/拡張期」を1行で入力します。酸素投与を選ぶと投与量の欄が出ます。" },
      { sel: '[data-section="v2"]', text: "急変後の状態を入れると急変シナリオになります（任意）。「バイタル1をコピー」で変わる所だけ直せます。" },
      { sel: ".mic-btn", text: "長い文章の欄は「音声」ボタンを押して話すと入力できます。" },
      { sel: '[data-act="ai"]', text: "「AI評価」で入力の矛盾をチェックし、医療ガイドラインに照らした解説を表示します。" },
      { sel: '[data-act="save"]', text: "途中でも保存できます（一覧では「下書き」）。保存前に、個人情報らしき入力がないか自動で確認します。" },
      { sel: '[data-act="send"]', text: "保存したシナリオを相手やグループに送ります。" },
    ],
  },
  detail: {
    title: "シナリオの表示",
    tips: [
      { sel: ".sheet", text: "完成したシナリオを1画面にまとめて表示します。バイタル1→2の変化は ↑↓、更新された項目は黄色で示します。" },
      { sel: '[data-act="edit"]', text: "編集すると、送信済みの相手にも自動で反映されます（変更箇所と履歴が残ります）。" },
      { sel: '[data-act="send"]', text: "送信相手やグループを選び、確認してから送ります。" },
      { sel: '[data-act="chat"]', text: "シナリオごとにチャットで話し合えます。何人が読んだかも表示されます。" },
      { sel: '[data-act="ai"]', text: "AIがガイドラインに照らして評価・解説します。結果はチャットに共有できます。" },
      { sel: '[data-act="output"]', text: "A4用紙1枚にまとめてPDF化・印刷できます。" },
      { sel: ".read-panel", text: "送信後は、相手ごとに確認したかどうかが分かり、「共有を解除」もできます。" },
    ],
  },
  inbox: {
    title: "受信（届いたシナリオ）",
    tips: [
      { sel: ".inbox-summary", text: "届いたシナリオのうち、まだ確認していないものの数が分かります。" },
      { sel: ".filter-tabs", text: "「未確認あり」で、まだ見ていない・更新があった・未読メッセージがあるものだけを表示します。" },
      { sel: ".inbox-list", text: "押すと内容とチャットを開きます。「NEW」「更新あり」で変化が分かります。" },
      { sel: "#receive-sample", text: "見本を受け取ると、届いたときの流れを試せます。" },
    ],
  },
  contacts: {
    title: "送信相手",
    tips: [
      { sel: "#contact-form", text: "相手のIDを入力して登録します。自分のIDを相手に伝えると、登録してもらえます。" },
      { sel: ".contact-list", text: "★でお気に入りにすると、送信時に上に表示されます。" },
      { sel: ".groups-card", text: "よく送る相手をグループにまとめると、送信時にまとめて選べます。" },
    ],
  },
  notifications: {
    title: "通知",
    tips: [
      { sel: ".notice-list", text: "受信・返信・更新のお知らせが並びます。押すとそのシナリオを開きます。" },
      { sel: ".permission", text: "端末の通知を許可すると、別の画面を見ているときも知らせます。" },
    ],
  },
  me: {
    title: "マイページ",
    tips: [
      { sel: ".profile", text: "あなたのIDです。相手に伝えると、送信相手に登録してもらえます。" },
      { sel: ".choice-row", text: "画面の色（ダークモード）と文字の大きさを変えられます。" },
      { sel: ".howto-toggle", text: "使い方モードのオン・オフはここで切り替えます。" },
      { sel: "#change-password", text: "パスワードを変更できます。" },
    ],
  },
};

let observer = null;
let pending = 0;
let currentKey = "";

export function isHowtoOn() {
  return getDisplay().howto !== false;
}

export function setHowto(on) {
  setDisplay({ howto: !!on });
}

// 閉じた説明は、次にその画面を開いたときも閉じたままにする
const foldKey = (key) => `medsim:howto-folded:${key}`;
function isFolded(key) {
  try {
    return localStorage.getItem(foldKey(key)) === "1";
  } catch {
    return false;
  }
}
function setFolded(key, folded) {
  try {
    if (folded) localStorage.setItem(foldKey(key), "1");
    else localStorage.removeItem(foldKey(key));
  } catch {}
}

function panelHtml(def, key) {
  return `
    <details class="howto-panel card" ${isFolded(key) ? "" : "open"}>
      <summary>${icon("ai")}<span><strong>使い方モード</strong>　この画面でできること</span></summary>
      <ol class="howto-list">
        ${def.tips.map((t, i) => `<li data-tip="${i + 1}"><span class="howto-num">${i + 1}</span><span>${esc(t.text)}</span></li>`).join("")}
      </ol>
      <div class="howto-foot">
        <span class="small muted">番号の付いた場所が説明の対象です。</span>
        <button type="button" class="btn small" data-howto-off>使い方モードをオフ</button>
      </div>
    </details>`;
}

function clearMarks() {
  document.querySelectorAll("[data-howto]").forEach((n) => n.removeAttribute("data-howto"));
  document.querySelectorAll(".howto-panel").forEach((n) => n.remove());
}

function apply() {
  pending = 0;
  const view = document.getElementById("view");
  const def = HOWTO[currentKey];
  if (!view || !def || !isHowtoOn()) {
    clearMarks();
    return;
  }
  let panel = view.querySelector(":scope > .howto-panel");
  if (!panel) {
    view.insertAdjacentHTML("afterbegin", panelHtml(def, currentKey));
    panel = view.querySelector(":scope > .howto-panel");
    const key = currentKey;
    panel.addEventListener("toggle", () => setFolded(key, !panel.open));
    panel.querySelector("[data-howto-off]").addEventListener("click", () => setHowto(false));
  }
  def.tips.forEach((t, i) => {
    const num = String(i + 1);
    // 画面内で見えている最初の要素に付ける（ナビは画面の外にあるので、なければページ全体から探す）
    const found = [...view.querySelectorAll(t.sel), ...document.querySelectorAll(t.sel)].filter(
      (n) => !panel.contains(n) && n.getClientRects().length
    );
    const target = found[0];
    document.querySelectorAll(`[data-howto="${num}"]`).forEach((n) => {
      if (n !== target) n.removeAttribute("data-howto");
    });
    if (target && target.dataset.howto !== num) target.dataset.howto = num;
    const item = panel.querySelector(`[data-tip="${num}"]`);
    if (item) item.classList.toggle("absent", !target);
  });
}

function schedule() {
  if (!pending) pending = requestAnimationFrame(apply);
}

// 画面を表示するたびに呼ぶ（key は HOWTO のキー。説明のない画面は空文字）
export function showHowto(key) {
  currentKey = key || "";
  if (observer) observer.disconnect();
  const view = document.getElementById("view");
  if (!view) return;
  observer = new MutationObserver(schedule);
  observer.observe(view, { childList: true, subtree: true });
  schedule();
}

window.addEventListener("medsim:display", schedule);
window.addEventListener("resize", schedule);
