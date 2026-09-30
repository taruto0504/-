import * as store from "../store.js";
import { esc, setTitle, formatId, confirmDialog, toast, copyText } from "../ui.js";
import { micButton, bindMics } from "../voice.js";

export function contactsView(el) {
  const me = store.currentUser();
  setTitle("送信相手");
  let favOnly = false;

  el.innerHTML = `
    <section class="card">
      <h2>相手を登録</h2>
      <form id="contact-form" class="input-row" novalidate>
        <input id="contact-id" inputmode="numeric" autocomplete="off" placeholder="相手の個人ID（8桁）" aria-label="相手の個人ID">
        ${micButton("contact-id")}
        <button type="submit" class="btn primary">登録</button>
      </form>
      <p class="error-text" id="contact-error" hidden></p>
      <p class="muted small">あなたのID：<strong>${formatId(me.id)}</strong>
        <button type="button" class="link-btn" id="copy-my-id">コピー</button></p>
    </section>
    <div class="segmented" role="tablist">
      <button type="button" role="tab" data-filter="all" aria-selected="true">すべて</button>
      <button type="button" role="tab" data-filter="fav" aria-selected="false">★ お気に入り</button>
    </div>
    <ul class="contact-list" id="contact-list"></ul>`;
  bindMics(el);

  function render() {
    const all = store.listContacts();
    const list = favOnly ? all.filter((c) => c.favorite) : all;
    el.querySelector("#contact-list").innerHTML = list.length
      ? list
          .map(
            (c) => `
        <li class="contact-row">
          <button type="button" class="star-btn ${c.favorite ? "on" : ""}" data-fav="${c.id}" aria-pressed="${c.favorite}" aria-label="${c.favorite ? "お気に入りから外す" : "お気に入りにする"}">★</button>
          <span class="contact-main">
            <span class="contact-name">${esc(c.name)}</span>
            <span class="muted small">ID ${formatId(c.id)}</span>
          </span>
          <button type="button" class="btn small danger-outline" data-del="${c.id}">削除</button>
        </li>`
          )
          .join("")
      : `<li class="empty"><p>${favOnly ? "お気に入りの相手はいません。★を押すと登録できます。" : "登録された相手はいません。相手の個人IDを入力して登録しましょう。"}</p></li>`;
  }

  el.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = el.querySelector("#contact-id");
    const err = el.querySelector("#contact-error");
    err.hidden = true;
    try {
      const user = store.addContact(input.value);
      input.value = "";
      toast(`${user.name}さんを登録しました`, "success");
    } catch (ex) {
      err.textContent = ex.message;
      err.hidden = false;
    }
  });

  el.querySelector("#copy-my-id").addEventListener("click", () => copyText(me.id));

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
      store.setFavorite(fav.dataset.fav, !fav.classList.contains("on"));
      return;
    }
    const del = e.target.closest("[data-del]");
    if (del) {
      const name = store.userName(del.dataset.del);
      if (await confirmDialog("送信相手の削除", `${name}さんを送信相手から削除しますか？`, "削除する", "danger")) {
        store.removeContact(del.dataset.del);
        toast("削除しました");
      }
    }
  });

  render();
  const off = store.onChange(() => {
    if (store.currentUser()) render();
  });
  return { destroy: off };
}
