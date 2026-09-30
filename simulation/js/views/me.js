import * as store from "../store.js";
import { esc, setTitle, formatId, formatDateTime, modal, confirmDialog, toast, copyText } from "../ui.js";
import { getApiKey, setApiKey } from "../ai.js";

export function meView(el) {
  const me = store.currentUser();
  setTitle("マイページ");

  function render() {
    const hasKey = !!getApiKey();
    el.innerHTML = `
      <section class="card profile">
        <div class="avatar" aria-hidden="true">${esc(me.name.slice(0, 1))}</div>
        <div>
          <p class="profile-name">${esc(me.name)}</p>
          <p class="muted small">登録日 ${formatDateTime(me.createdAt)}</p>
        </div>
      </section>
      <section class="card">
        <h2>個人ID</h2>
        <p class="big-id">${formatId(me.id)}</p>
        <p class="muted small">ログインに使います。相手にこのIDを伝えると、シナリオを受け取れます。</p>
        <button type="button" class="btn small" id="copy-id">IDをコピー</button>
      </section>
      <section class="card">
        <h2>AI評価の設定</h2>
        <p class="small">AI評価には Claude の APIキーが必要です。キーはこの端末のブラウザにだけ保存されます。</p>
        <p class="small muted">状態：${hasKey ? "✅ 設定済み" : "未設定"}</p>
        <div class="input-row">
          <input id="api-key" type="password" autocomplete="off" placeholder="sk-ant-..." aria-label="Claude APIキー">
          <button type="button" class="btn primary" id="save-key">保存</button>
        </div>
        ${hasKey ? '<button type="button" class="link-btn danger-text" id="clear-key">APIキーを削除</button>' : ""}
      </section>
      <section class="card">
        <h2>データの保存について</h2>
        <p class="small">現在は「端末内モード」です。データはこのブラウザの中だけに保存されます。送信・チャット・通知は、同じブラウザで登録したアカウント同士で動作します。ブラウザのデータを消去すると、作成物も消えます。</p>
      </section>
      <section class="card">
        <button type="button" class="btn block" id="logout">ログアウト</button>
      </section>
      <section class="card danger-zone">
        <h2>アカウント削除（退会）</h2>
        <p class="small">アカウントを削除すると、作成したシナリオとチャットもすべて削除され、元に戻せません。</p>
        <button type="button" class="btn danger" id="delete-account">アカウントを削除する</button>
      </section>`;
  }

  el.addEventListener("click", async (e) => {
    const id = e.target.id;
    if (id === "copy-id") copyText(me.id);
    else if (id === "save-key") {
      const v = el.querySelector("#api-key").value.trim();
      if (!v) return toast("APIキーを入力してください");
      setApiKey(v);
      toast("APIキーを保存しました", "success");
      render();
    } else if (id === "clear-key") {
      if (await confirmDialog("APIキーの削除", "保存したAPIキーを削除しますか？", "削除する", "danger")) {
        setApiKey("");
        render();
      }
    } else if (id === "logout") {
      if (await confirmDialog("ログアウト", "ログアウトしますか？", "ログアウト")) store.logout();
    } else if (id === "delete-account") {
      await modal({
        title: "アカウントを削除",
        body: `
          <p>本当に削除しますか？作成したシナリオ・チャットはすべて削除されます。</p>
          <div class="field">
            <label for="del-pass">確認のためパスワードを入力</label>
            <input id="del-pass" type="password" autocomplete="current-password">
          </div>
          <p class="error-text" id="del-error" hidden></p>`,
        buttons: [
          { label: "キャンセル", value: false },
          {
            label: "削除する",
            value: true,
            variant: "danger",
            async onClick(root) {
              try {
                await store.deleteAccount(root.querySelector("#del-pass").value);
                toast("アカウントを削除しました");
                return true;
              } catch (ex) {
                const err = root.querySelector("#del-error");
                err.textContent = ex.message;
                err.hidden = false;
                return false;
              }
            },
          },
        ],
      });
    }
  });

  render();
}
