import * as store from "../store.js";
import { SECTIONS, VITAL_GROUPS, formatValue, scenarioTitle, scenarioSubtitle, gcsTotal, isVitalsEmpty, getField, fieldLabel } from "../fields.js";
import { esc, setTitle, formatDateTime, formatId, toast, modal, menu } from "../ui.js";
import { micButton, bindMics, stopVoice } from "../voice.js";
import { openSendDialog, runAiEvaluation, openOutputDialog, issuesByField, issueHtml, aiStatusHtml } from "../actions.js";
import { confirmDelete } from "./home.js";

function formatDateTimeLong(ts) {
  const d = new Date(ts);
  return `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()}時${String(d.getMinutes()).padStart(2, "0")}分`;
}

export function openHistory(scenario) {
  const entries = [...(scenario.history || [])].reverse();
  const body = entries.length
    ? entries
        .map(
          (h) => `
      <div class="history-entry">
        <p class="history-time">${esc(formatDateTimeLong(h.at))}</p>
        <table class="history-table">
          ${Object.entries(h.changes)
            .map(([key, c]) => {
              const f = getField(key);
              const from = f ? formatValue(f, c.from) : c.from;
              const to = f ? formatValue(f, c.to) : c.to;
              return `<tr><th>${esc(fieldLabel(key))}</th><td><span class="before-val">${esc(from) || "（未入力）"}</span> → <strong>${esc(to) || "（未入力）"}</strong></td></tr>`;
            })
            .join("")}
        </table>
      </div>`
        )
        .join("")
    : "<p>まだ編集されていません。</p>";
  return modal({ title: "編集履歴", body, wide: true, buttons: [{ label: "閉じる", value: true, variant: "primary" }] });
}

export function detailView(el, scenarioId, openPanel) {
  const me = store.currentUser();
  let scenario = store.getScenario(scenarioId);
  if (!scenario) {
    setTitle("シナリオ", { back: true });
    el.innerHTML = `<div class="empty"><p>このシナリオは見つかりません。削除された可能性があります。</p><a class="btn" href="#/home">ホームへ</a></div>`;
    return;
  }
  // 受信者が前回確認したバージョン。この画面を開いている間は、ここからの変更をハイライトする
  const seenAtOpen = scenario.isOwner ? scenario.version : (scenario.seen && scenario.seen[me.id]) || 0;
  let chatOpen = openPanel === "chat";

  setTitle(scenarioTitle(scenario.data), { back: true });
  el.classList.add("detail", "with-actionbar");
  el.innerHTML = `
    <div class="detail-grid">
      <div class="detail-content" id="detail-content"></div>
      <section class="chat-panel" id="chat-panel" aria-label="チャット" hidden>
        <div class="chat-head">
          <h2>チャット</h2>
          <span class="small muted" id="chat-members"></span>
          <button type="button" class="btn small" data-act="close-chat">閉じる</button>
        </div>
        <div class="chat-log" id="chat-log" aria-live="polite"></div>
        <form class="chat-form" id="chat-form">
          <textarea id="chat-input" rows="1" placeholder="メッセージを入力" aria-label="メッセージ"></textarea>
          ${micButton("chat-input")}
          <button type="submit" class="btn primary">送信</button>
        </form>
      </section>
    </div>
    <div class="actionbar" id="detail-actions"></div>`;
  bindMics(el);

  function actionsHtml() {
    const chatLabel = `チャット${scenario.unreadMessages ? `（${scenario.unreadMessages}）` : ""}`;
    const b = (act, label, variant = "") => `<button type="button" class="btn ${variant}" data-act="${act}">${label}</button>`;
    return scenario.isOwner
      ? [b("edit", "編集", "primary"), b("send", "送信", "primary"), b("chat", chatLabel), b("ai", "AI評価"), b("output", "PDF・印刷"), b("more", "その他")].join("")
      : [b("chat", chatLabel), b("ai", "AI評価"), b("history", "編集履歴"), b("output", "PDF・印刷"), b("delete", "削除", "danger")].join("");
  }

  function renderContent() {
    const s = scenario;
    const changes = s.isOwner ? {} : store.changesSince(s, seenAtOpen);
    const changedCount = Object.keys(changes).length;
    const ai = store.getAiResult(s.id);
    const byField = issuesByField(ai);
    const people = s.activeRecipients.map((id) => `<span class="chip">${esc(store.userName(id))}（${formatId(id)}）</span>`).join("");

    const row = (f) => {
      const c = changes[f.key];
      const val = formatValue(f, s.data[f.key]);
      if (!val && !c && !byField[f.key]) return "";
      return `
        <div class="data-row ${c ? "changed" : ""} ${f.type === "textarea" || f.wide ? "wide" : ""}">
          <dt>${esc(f.label)}${c ? '<span class="badge warn">更新</span>' : ""}</dt>
          <dd>${val ? `<span class="val">${esc(val)}</span>` : '<span class="muted">—</span>'}${
            c ? `<span class="before">変更前：${esc(formatValue(f, c.from)) || "（未入力）"}</span>` : ""
          }${issueHtml(byField[f.key])}</dd>
        </div>`;
    };

    const sections = SECTIONS.filter((sec) => !(sec.optional && isVitalsEmpty(s.data, sec.id)))
      .map((sec) => {
        if (sec.id === "basic") {
          return `<section class="card"><h2>${esc(sec.title)}</h2><dl class="data-list">${sec.fields.map((f) => row(f) || `
            <div class="data-row ${f.type === "textarea" || f.wide ? "wide" : ""}"><dt>${esc(f.label)}</dt><dd><span class="muted">—</span></dd></div>`).join("")}</dl></section>`;
        }
        const groups = VITAL_GROUPS.map((g) => {
          let rows = sec.fields.filter((f) => f.group === g).map(row).join("");
          if (g === "意識") {
            const total = gcsTotal(s.data, sec.id);
            if (total) rows += `<div class="data-row"><dt>GCS 合計</dt><dd><span class="val">${total}</span></dd></div>`;
          }
          return rows.trim() ? `<div class="vital-group"><h3>${g}</h3><dl class="data-list vitals">${rows}</dl></div>` : "";
        }).join("");
        return `<section class="card"><h2>${esc(sec.title)}</h2>${groups || '<p class="muted">未入力</p>'}</section>`;
      })
      .join("");

    el.querySelector("#detail-content").innerHTML = `
      <div class="card detail-head">
        <h2 class="detail-title">${esc(scenarioTitle(s.data))}</h2>
        <p class="muted">${esc(scenarioSubtitle(s.data))}</p>
        <p class="muted small">
          ${s.isOwner ? "あなたが作成" : `${esc(s.ownerName)}さん${s.ownerExists ? `（${formatId(s.ownerId)}）` : ""}から受信`}
          ・最終更新 ${formatDateTime(s.updatedAt)}
        </p>
        ${s.editedAfterSendAt ? `<p class="edited-note">✏️ ${esc(formatDateTimeLong(s.editedAfterSendAt))}に編集されました</p>` : ""}
        ${!s.isOwner && !s.ownerExists ? '<p class="small muted">送信者がこのシナリオを削除したか、退会しました。内容とチャットは引き続き閲覧できます。</p>' : ""}
      </div>
      ${changedCount ? `<div class="update-banner">🔔 前回確認したあとに <strong>${changedCount}項目</strong> が更新されました。変更箇所は黄色で表示しています。</div>` : ""}
      ${aiStatusHtml(ai, s.data)}
      ${s.isOwner && people ? `<div class="card"><h3 class="small-head">送信先</h3><div class="chips">${people}</div></div>` : ""}
      ${sections}`;
    el.querySelector("#detail-actions").innerHTML = actionsHtml();
  }

  function renderChat() {
    const log = el.querySelector("#chat-log");
    const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 60;
    const msgs = store.listMessages(scenario.id);
    const members = [scenario.ownerId, ...scenario.activeRecipients].map((id) => store.userName(id));
    el.querySelector("#chat-members").textContent = `参加者：${members.join("、")}`;
    log.innerHTML = msgs.length
      ? msgs
          .map(
            (m) => `
        <div class="msg ${m.mine ? "mine" : ""}">
          ${m.mine ? "" : `<span class="msg-name">${esc(m.name)}</span>`}
          <div class="bubble">${esc(m.text)}</div>
          <span class="msg-time">${m.mine && m.readCount ? `既読 ${m.readCount}　` : ""}${formatDateTime(m.at)}</span>
        </div>`
          )
          .join("")
      : `<p class="muted small chat-empty">${
          scenario.isOwner && !scenario.recipients.length
            ? "シナリオを送信すると、相手とここで意見交換できます。"
            : "まだメッセージはありません。気づいた点や質問を書いてみましょう。"
        }</p>`;
    if (nearBottom || !renderChat.done) log.scrollTop = log.scrollHeight;
    renderChat.done = true;
    if (chatOpen) store.markChatRead(scenario.id);
  }

  function setChat(open) {
    chatOpen = open;
    el.querySelector("#chat-panel").hidden = !open;
    el.querySelector(".detail-grid").classList.toggle("chat-open", open);
    document.body.classList.toggle("sheet-open", open);
    if (open) {
      renderChat.done = false;
      renderChat();
      history.replaceState(null, "", `#/s/${scenario.id}/chat`);
      if (window.matchMedia("(pointer: fine)").matches) el.querySelector("#chat-input").focus();
    } else {
      stopVoice();
      history.replaceState(null, "", `#/s/${scenario.id}`);
    }
  }

  function refresh() {
    const next = store.getScenario(scenarioId);
    if (!next) {
      document.body.classList.remove("sheet-open");
      el.innerHTML = `<div class="empty"><p>このシナリオは削除されました。</p><a class="btn" href="#/home">ホームへ</a></div>`;
      off();
      return;
    }
    const updated = next.version !== scenario.version;
    scenario = next;
    renderContent();
    if (updated) {
      setTitle(scenarioTitle(scenario.data), { back: true });
      if (!scenario.isOwner) toast("シナリオの内容が更新されました");
    }
    renderChat();
    store.markSeen(scenario.id);
    store.markScenarioNotificationsRead(scenario.id);
  }

  async function doDelete() {
    if (!(await confirmDelete([scenario]))) return;
    off();
    document.body.classList.remove("sheet-open");
    store.deleteScenarios([scenario.id]);
    store.clearDraft(scenario.id);
    toast("削除しました", "success");
    location.hash = "#/home";
  }

  el.addEventListener("click", async (e) => {
    const act = e.target.closest("[data-act]");
    if (!act) return;
    switch (act.dataset.act) {
      case "edit":
        location.hash = `#/edit/${scenario.id}`;
        break;
      case "send":
        if (await openSendDialog(scenario)) refresh();
        break;
      case "chat":
        setChat(!chatOpen);
        break;
      case "close-chat":
        setChat(false);
        break;
      case "ai":
        await runAiEvaluation(scenario.data, { scenarioId: scenario.id, canShare: true });
        refresh();
        break;
      case "history":
        openHistory(scenario);
        break;
      case "output":
        openOutputDialog(scenario);
        break;
      case "delete":
        await doDelete();
        break;
      case "more": {
        const choice = await menu("その他", [
          { label: "編集履歴", value: "history" },
          { label: "削除", value: "delete", variant: "danger" },
        ]);
        if (choice === "history") openHistory(scenario);
        else if (choice === "delete") await doDelete();
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
  if (chatOpen) setChat(true);
  store.markSeen(scenario.id);
  store.markScenarioNotificationsRead(scenario.id);
  const off = store.onChange(() => {
    if (store.currentUser()) refresh();
  });
  if (openPanel === "history") openHistory(scenario);
  return {
    destroy() {
      off();
      document.body.classList.remove("sheet-open");
    },
  };
}
