import * as store from "../store.js";
import { esc, setTitle, formatId, confirmDialog, toast, copyText, modal } from "../ui.js";

export function contactsView(el) {
  const me = store.currentUser();
  setTitle("送信相手");
  let favOnly = false;
  let query = "";

  el.innerHTML = `
    <section class="card">
      <h2>相手を追加</h2>
      <form id="contact-form" novalidate>
        <div class="input-row">
          <input id="contact-id" inputmode="numeric" autocomplete="off" placeholder="相手の個人ID（8桁）" aria-label="相手の個人ID">
          <button type="submit" class="btn primary">追加</button>
        </div>
      </form>
      <p class="error-text" id="contact-error" hidden></p>
      <p class="muted small">あなたのID：<strong>${formatId(me.id)}</strong>
        <button type="button" class="btn small" id="copy-my-id">IDコピー</button></p>
    </section>
    <div class="list-toolbar">
      <input type="search" id="contact-search" placeholder="名前・IDで検索" aria-label="送信相手を検索">
    </div>
    <div class="filter-tabs two" role="tablist">
      <button type="button" role="tab" data-filter="all" aria-selected="true">すべて</button>
      <button type="button" role="tab" data-filter="fav" aria-selected="false">お気に入り</button>
    </div>
    <ul class="contact-list" id="contact-list"></ul>`;

  function render() {
    const q = query.trim().toLowerCase();
    const list = store
      .listContacts()
      .filter((c) => !favOnly || c.favorite)
      .filter((c) => !q || c.name.toLowerCase().includes(q) || c.id.includes(q.replace(/\D/g, "") || "\u0000"));
    el.querySelector("#contact-list").innerHTML = list.length
      ? list
          .map(
            (c) => `
        <li class="contact-row">
          <span class="contact-main">
            <span class="contact-name">${c.favorite ? '<span class="star on" aria-hidden="true">★</span>' : ""}${esc(c.name)}</span>
            <span class="muted small">ID ${formatId(c.id)}</span>
          </span>
          <button type="button" class="btn small fav-btn ${c.favorite ? "on" : ""}" data-fav="${c.id}" aria-pressed="${c.favorite}">${c.favorite ? "★ お気に入り解除" : "☆ お気に入り"}</button>
          <button type="button" class="btn small danger" data-del="${c.id}">削除</button>
        </li>`
          )
          .join("")
      : `<li class="empty"><p>${
          q ? "該当する相手はいません。" : favOnly ? "お気に入りの相手はいません。「☆ お気に入り」を押すと設定できます。" : "登録された相手はいません。相手の個人IDを入力して追加しましょう。"
        }</p></li>`;
  }

  el.querySelector("#contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = el.querySelector("#contact-id");
    const err = el.querySelector("#contact-error");
    err.hidden = true;
    let user;
    try {
      user = store.lookupContact(input.value);
    } catch (ex) {
      err.textContent = ex.message;
      err.hidden = false;
      return;
    }
    const ok = await modal({
      title: "この相手を登録しますか？",
      body: `<p class="confirm-person"><strong>${esc(user.name)}</strong> さん<br><span class="muted">ID ${formatId(user.id)}</span></p>`,
      buttons: [
        { label: "キャンセル", value: false },
        { label: "登録", value: true, variant: "primary" },
      ],
    });
    if (!ok) return;
    store.addContact(user.id);
    input.value = "";
    toast(`${user.name}さんを登録しました`, "success");
  });

  el.querySelector("#copy-my-id").addEventListener("click", () => copyText(me.id));
  el.querySelector("#contact-search").addEventListener("input", (e) => {
    query = e.target.value;
    render();
  });

  el.addEventListener("click", async (e) => {
    const filter = e.target.closest("[data-filter]");
    if (filter) {
      favOnly = filter.dataset.filter === "fav";
      el.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-selected", String(b === filter)));
      render();
      return;
    }
    const fav = e.target.closest("[data-fav]");
    if (fav) {
      const on = !fav.classList.contains("on");
      store.setFavorite(fav.dataset.fav, on);
      toast(on ? "お気に入りに設定しました" : "お気に入りを解除しました");
      return;
    }
    const del = e.target.closest("[data-del]");
    if (del) {
      const name = store.userName(del.dataset.del);
      if (await confirmDialog("送信相手の削除", `${name}さんを送信相手から削除しますか？（過去に送受信したシナリオとチャットは残ります）`, "削除", "danger")) {
        store.removeContact(del.dataset.del);
        toast("削除しました", "success");
      }
    }
  });

  render();
  const off = store.onChange(() => {
    if (store.currentUser()) render();
  });
  return { destroy: off };
}
