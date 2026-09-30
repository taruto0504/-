import * as store from "../store.js";
import { esc, setTitle, formatId, formatDateTime, modal, confirmDialog, toast, copyText } from "../ui.js";
import { getApiKey, setApiKey } from "../ai.js";
import { PREVIEW } from "../env.js";

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
        <button type="button" class="btn small" id="copy-id">IDコピー</button>
      </section>
      ${
        PREVIEW
          ? `<section class="card">
        <h2>AI評価</h2>
        <p class="small">このページでは、あなたの Claude アカウントで評価します（APIキーの設定は不要です）。初回だけ利用の許可を確認します。</p>
      </section>`
          : `<section class="card">
        <h2>AI評価の設定</h2>
        <p class="small">AI評価には Claude の APIキーが必要です。キーはこの端末のブラウザにだけ保存されます。</p>
        <p class="small muted">状態：${hasKey ? "設定済み" : "未設定"}</p>
        <div class="input-row">
          <input id="api-key" type="password" autocomplete="off" placeholder="sk-ant-..." aria-label="Claude APIキー">
          <button type="button" class="btn primary" id="save-key">保存</button>
        </div>
        ${hasKey ? '<button type="button" class="btn small danger" id="clear-key">APIキーを削除</button>' : ""}
      </section>`
      }
      <section class="card">
        <h2>データの保存について</h2>
        <p class="small">現在は「端末内モード」です。データはこのブラウザの中だけに保存されます。送信・チャット・通知は、同じブラウザで登録したアカウント同士で動作します。ブラウザのデータを消去すると、作成物も消えます。</p>
      </section>
      <section class="card">
        <button type="button" class="btn block" id="logout">ログアウト</button>
      </section>
      <section class="card danger-zone">
        <h2>アカウント削除（退会）</h2>
        <p class="small">作成したシナリオ・下書き・送信相手リストが削除されます。送信済みのシナリオは相手側に残ります。</p>
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
      if (await confirmDialog("APIキーの削除", "保存したAPIキーを削除しますか？", "削除", "danger")) {
        setApiKey("");
        render();
      }
    } else if (id === "logout") {
      if (await confirmDialog("ログアウト", "ログアウトしますか？", "ログアウト")) store.logout();
    } else if (id === "delete-account") {
      await deleteAccountFlow();
    }
  });

  render();
}

// 退会：消えるデータの確認 → パスワード再入力 → 最終確認 → 削除
async function deleteAccountFlow() {
  const sum = store.deletionSummary();
  const step1 = await modal({
    title: "アカウント削除（退会）",
    body: `
      <p>アカウントを削除すると、次のデータが削除され、元に戻せません。</p>
      <ul class="confirm-list">
        <li>作成したシナリオ ${sum.scenarios}件（うち送信済み ${sum.shared}件）</li>
        <li>下書き（端末に控えた入力内容）${sum.drafts}件</li>
        <li>送信相手リスト ${sum.contacts}人</li>
      </ul>
      <p class="small">送信済みのシナリオは相手側に残ります。送信者名とチャットの投稿者名は「Unknown」と表示されます。</p>
      <p class="small">他の人の送信相手リストからも外れます。削除したIDは再発行されません。</p>`,
    buttons: [
      { label: "キャンセル", value: false },
      { label: "次へ", value: true, variant: "danger" },
    ],
  });
  if (!step1) return;
  let password = "";
  const step2 = await modal({
    title: "本人確認",
    body: `
      <div class="field">
        <label for="del-pass">パスワードを入力してください</label>
        <input id="del-pass" type="password" autocomplete="current-password">
      </div>
      <p class="error-text" id="del-error" hidden></p>`,
    buttons: [
      { label: "キャンセル", value: false },
      {
        label: "次へ",
        value: true,
        variant: "danger",
        async onClick(root) {
          password = root.querySelector("#del-pass").value;
          if (await store.verifyPassword(password)) return true;
          const err = root.querySelector("#del-error");
          err.textContent = "パスワードが正しくありません";
          err.hidden = false;
          return false;
        },
      },
    ],
  });
  if (!step2) return;
  const final = await confirmDialog("最終確認", "本当に削除しますか？この操作は取り消せません。", "削除", "danger");
  if (!final) return;
  await store.deleteAccount(password);
  toast("アカウントを削除しました");
  location.hash = "#/login";
}
