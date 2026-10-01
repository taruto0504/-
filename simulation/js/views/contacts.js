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
    <ul class="contact-list" id="contact-list"></ul>
    <section class="card groups-card">
      <div class="section-head">
        <h2>グループ</h2>
        <button type="button" class="btn small primary" id="new-group">グループを作成</button>
      </div>
      <p class="small muted">よく一緒に送る相手をまとめておくと、送信時にグループを選ぶだけで全員を選べます。</p>
      <ul class="group-list" id="group-list"></ul>
    </section>`;

  function renderGroups() {
    const groups = store.listGroups();
    el.querySelector("#group-list").innerHTML = groups.length
      ? groups
          .map(
            (g) => `<li class="group-row">
          <span class="group-main"><strong>${esc(g.name)}</strong><span class="muted small">${g.members.length}人：${esc(g.members.map((m) => m.name).join("、") || "メンバーなし")}</span></span>
          <button type="button" class="btn small" data-edit-group="${g.id}">編集</button>
          <button type="button" class="btn small danger" data-del-group="${g.id}">削除</button>
        </li>`
          )
          .join("")
      : '<li class="muted small">グループはまだありません。</li>';
  }

  async function editGroup(group) {
    const contacts = store.listContacts();
    if (!contacts.length) return toast("先に送信相手を登録してください");
    const current = new Set(group ? group.members.map((m) => m.id) : []);
    await modal({
      title: group ? "グループを編集" : "グループを作成",
      wide: true,
      body: `
        <div class="field"><label for="group-name">グループ名</label><input id="group-name" maxlength="30" placeholder="例：研修A班" value="${esc(group ? group.name : "")}"></div>
        <div class="send-list-head"><span>メンバー</span></div>
        <div class="pick-list">${contacts
          .map(
            (c) => `<label class="pick-row"><input type="checkbox" value="${esc(c.id)}" ${current.has(c.id) ? "checked" : ""}>
              <span class="pick-name">${esc(c.name)}</span><span class="pick-id">${formatId(c.id)}</span></label>`
          )
          .join("")}</div>
        <p class="error-text" id="group-error" hidden></p>`,
      buttons: [
        { label: "キャンセル", value: false },
        {
          label: "保存",
          value: true,
          variant: "primary",
          onClick(root) {
            try {
              store.saveGroup({
                id: group && group.id,
                name: root.querySelector("#group-name").value,
                members: [...root.querySelectorAll(".pick-list input:checked")].map((i) => i.value),
              });
              toast("グループを保存しました", "success");
              return true;
            } catch (ex) {
              const err = root.querySelector("#group-error");
              err.textContent = ex.message;
              err.hidden = false;
              return false;
            }
          },
        },
      ],
    });
  }

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

  el.querySelector("#new-group").addEventListener("click", () => editGroup(null));
  el.querySelector("#group-list").addEventListener("click", async (e) => {
    const editBtn = e.target.closest("[data-edit-group]");
    const delBtn = e.target.closest("[data-del-group]");
    if (editBtn) editGroup(store.listGroups().find((g) => g.id === editBtn.dataset.editGroup));
    if (delBtn) {
      const g = store.listGroups().find((x) => x.id === delBtn.dataset.delGroup);
      if (await confirmDialog("グループの削除", `グループ「${g.name}」を削除しますか？（メンバーの送信相手登録はそのまま残ります）`, "削除", "danger")) {
        store.deleteGroup(g.id);
        toast("グループを削除しました", "success");
      }
    }
  });

  render();
  renderGroups();
  const off = store.onChange(() => {
    if (store.currentUser()) {
      render();
      renderGroups();
    }
  });
  return { destroy: off };
}
