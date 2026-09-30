import * as store from "../store.js";
import { SECTIONS, formatValue, scenarioTitle, scenarioSubtitle } from "../fields.js";
import { esc, setTitle, formatDateTime, formatId, confirmDialog, toast } from "../ui.js";
import { micButton, bindMics } from "../voice.js";
import { openSendDialog, runAiEvaluation, printScenario } from "../actions.js";

export function detailView(el, scenarioId) {
  const me = store.currentUser();
  let scenario = store.getScenario(scenarioId);
  if (!scenario) {
    setTitle("シナリオ", { back: true });
    el.innerHTML = `<div class="empty"><p>このシナリオは見つかりません。削除された可能性があります。</p><a class="btn" href="#/home">ホームへ</a></div>`;
    return;
  }
  // 相手が前回確認したバージョン。この画面を開いている間は、ここからの変更をハイライトする
  const seenAtOpen = scenario.isOwner ? scenario.version : (scenario.seen && scenario.seen[me.id]) || 0;
  let pane = "content";

  setTitle(scenarioTitle(scenario.data), { back: true });
  el.classList.add("detail");
  el.innerHTML = `
    <div class="segmented only-mobile" role="tablist">
      <button type="button" role="tab" data-pane="content" aria-selected="true">内容</button>
      <button type="button" role="tab" data-pane="chat" aria-selected="false">チャット <span class="count" id="chat-count"></span></button>
    </div>
    <div class="detail-grid" data-pane="content">
      <div class="detail-content" id="detail-content"></div>
      <section class="card chat" aria-label="チャット">
        <h2>チャット</h2>
        <div class="chat-log" id="chat-log" aria-live="polite"></div>
        <form class="chat-form" id="chat-form">
          <textarea id="chat-input" rows="1" placeholder="メッセージを入力" aria-label="メッセージ"></textarea>
          ${micButton("chat-input")}
          <button type="submit" class="btn primary">送信</button>
        </form>
      </section>
    </div>`;
  bindMics(el);

  function renderContent() {
    const s = scenario;
    const changes = s.isOwner ? {} : store.changesSince(s, seenAtOpen);
    const changedCount = Object.keys(changes).length;
    const people = s.recipients.map((id) => `<span class="chip">${esc(store.userName(id))}（${formatId(id)}）</span>`).join("");
    const box = el.querySelector("#detail-content");
    box.innerHTML = `
      <div class="card detail-head">
        <div>
          <h2 class="detail-title">${esc(scenarioTitle(s.data))}</h2>
          <p class="muted">${esc(scenarioSubtitle(s.data))}</p>
          <p class="muted small">
            ${s.isOwner ? "あなたが作成" : `${esc(s.ownerName)}さん（${formatId(s.ownerId)}）から受信`}
            ・最終更新 ${formatDateTime(s.updatedAt)}
          </p>
        </div>
        <div class="detail-actions">
          ${s.isOwner ? `<a class="btn primary" href="#/edit/${s.id}">✏️ 編集</a><button type="button" class="btn" data-act="send">📤 送信</button>` : ""}
          <button type="button" class="btn" data-act="ai">🤖 AI評価</button>
          <button type="button" class="btn" data-act="print">🖨️ PDF・印刷</button>
          <button type="button" class="btn danger-outline" data-act="delete">🗑️ ${s.isOwner ? "削除" : "一覧から削除"}</button>
        </div>
      </div>
      ${
        changedCount
          ? `<div class="update-banner">🔔 前回確認したあとに <strong>${changedCount}項目</strong> が更新されました。変更箇所は黄色で表示しています。</div>`
          : ""
      }
      ${s.isOwner && s.recipients.length ? `<div class="card"><h3 class="small-head">送信先</h3><div class="chips">${people}</div></div>` : ""}
      ${SECTIONS.map(
        (sec) => `
        <section class="card">
          <h2>${esc(sec.title)}</h2>
          <dl class="data-list ${sec.id === "basic" ? "" : "vitals"}">
            ${sec.fields
              .map((f) => {
                const c = changes[f.key];
                const val = formatValue(f, s.data[f.key]);
                return `
                <div class="data-row ${c ? "changed" : ""} ${f.wide || f.type === "textarea" ? "wide" : ""}">
                  <dt>${esc(f.label)}${c ? '<span class="badge warn">更新</span>' : ""}</dt>
                  <dd>${val ? `<span class="val">${esc(val)}</span>` : '<span class="muted">—</span>'}${
                    c ? `<span class="before">変更前：${esc(formatValue(f, c.from)) || "（未入力）"}</span>` : ""
                  }</dd>
                </div>`;
              })
              .join("")}
          </dl>
        </section>`
      ).join("")}`;
  }

  function renderChat() {
    const log = el.querySelector("#chat-log");
    const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 60;
    const msgs = store.listMessages(scenario.id);
    log.innerHTML = msgs.length
      ? msgs
          .map(
            (m) => `
        <div class="msg ${m.mine ? "mine" : ""}">
          ${m.mine ? "" : `<span class="msg-name">${esc(m.name)}</span>`}
          <div class="bubble">${esc(m.text)}</div>
          <span class="msg-time">${formatDateTime(m.at)}</span>
        </div>`
          )
          .join("")
      : `<p class="muted small chat-empty">${
          scenario.isOwner && !scenario.recipients.length
            ? "シナリオを送信すると、相手とここで意見交換できます。"
            : "まだメッセージはありません。気づいた点や質問を書いてみましょう。"
        }</p>`;
    el.querySelector("#chat-count").textContent = msgs.length ? String(msgs.length) : "";
    if (nearBottom || !renderChat.done) log.scrollTop = log.scrollHeight;
    renderChat.done = true;
    if (pane === "chat" || window.matchMedia("(min-width: 900px)").matches) store.markChatRead(scenario.id);
  }

  function refresh() {
    const next = store.getScenario(scenarioId);
    if (!next) {
      el.innerHTML = `<div class="empty"><p>このシナリオは削除されました。</p><a class="btn" href="#/home">ホームへ</a></div>`;
      off();
      return;
    }
    const updated = next.version !== scenario.version;
    scenario = next;
    if (updated) {
      renderContent();
      setTitle(scenarioTitle(scenario.data), { back: true });
      if (!scenario.isOwner) toast("シナリオの内容が更新されました");
    }
    renderChat();
    store.markSeen(scenario.id);
    store.markScenarioNotificationsRead(scenario.id);
  }

  el.addEventListener("click", async (e) => {
    const paneBtn = e.target.closest("[data-pane]");
    if (paneBtn && paneBtn.tagName === "BUTTON") {
      pane = paneBtn.dataset.pane;
      el.querySelector(".detail-grid").dataset.pane = pane;
      el.querySelectorAll("button[data-pane]").forEach((b) => b.setAttribute("aria-selected", String(b === paneBtn)));
      if (pane === "chat") {
        const log = el.querySelector("#chat-log");
        log.scrollTop = log.scrollHeight;
        store.markChatRead(scenario.id);
      }
      return;
    }
    const act = e.target.closest("[data-act]");
    if (!act) return;
    switch (act.dataset.act) {
      case "send":
        await openSendDialog(scenario);
        scenario = store.getScenario(scenarioId);
        renderContent();
        renderChat();
        break;
      case "ai":
        runAiEvaluation(scenario.data);
        break;
      case "print":
        printScenario(scenario.data, { ownerName: scenario.ownerName, updatedAt: scenario.updatedAt });
        break;
      case "delete": {
        const msg = scenario.isOwner
          ? "このシナリオとチャットを削除しますか？送信した相手の画面からも削除されます。"
          : "このシナリオを自分の一覧から削除しますか？（送信者のデータは残ります）";
        if (!(await confirmDialog("削除の確認", msg, "削除する", "danger"))) return;
        off();
        store.deleteScenarios([scenario.id]);
        store.clearDraft(scenario.id);
        toast("削除しました");
        location.hash = "#/home";
        break;
      }
    }
  });

  const input = el.querySelector("#chat-input");
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    try {
      store.postMessage(scenario.id, text);
      input.value = "";
      input.style.height = "";
      const log = el.querySelector("#chat-log");
      log.scrollTop = log.scrollHeight;
    } catch (ex) {
      toast(ex.message);
    }
  }
  el.querySelector("#chat-form").addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage();
  });
  input.addEventListener("keydown", (e) => {
    // PCでは Enter で送信、Shift+Enter で改行。変換確定中の Enter は無視する
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing && window.matchMedia("(pointer: fine)").matches) {
      e.preventDefault();
      sendMessage();
    }
  });
  input.addEventListener("input", () => {
    input.style.height = "";
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  });

  renderContent();
  renderChat();
  store.markSeen(scenario.id);
  store.markScenarioNotificationsRead(scenario.id);
  const off = store.onChange(() => {
    if (store.currentUser()) refresh();
  });
  return { destroy: off };
}
