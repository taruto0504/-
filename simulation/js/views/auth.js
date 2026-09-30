import * as store from "../store.js";
import { esc, modal, setTitle, formatId, copyText } from "../ui.js";

const LOCAL_NOTE = `<p class="muted small auth-note">現在は「端末内モード」です。データはこのブラウザの中だけに保存され、送信やチャットは同じブラウザで登録したアカウント同士で行えます。</p>`;

export function loginView(el) {
  setTitle("ログイン");
  el.innerHTML = `
    <div class="auth-card">
      <div class="auth-brand"><span aria-hidden="true">🩺</span><h2>医療シミュレーション</h2><p>症例シナリオを作って、共有して、話し合う</p></div>
      <form id="login-form" novalidate>
        <div class="field">
          <label for="login-id">個人ID</label>
          <input id="login-id" inputmode="numeric" autocomplete="username" placeholder="8桁の数字" required>
        </div>
        <div class="field">
          <label for="login-pass">パスワード</label>
          <input id="login-pass" type="password" autocomplete="current-password" required>
        </div>
        <p class="error-text" id="login-error" hidden></p>
        <button class="btn primary block" type="submit">ログイン</button>
      </form>
      <p class="auth-switch">はじめての方は <a href="#/register">新規登録</a></p>
      ${LOCAL_NOTE}
    </div>`;
  const form = el.querySelector("#login-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const err = el.querySelector("#login-error");
    err.hidden = true;
    try {
      await store.login(el.querySelector("#login-id").value, el.querySelector("#login-pass").value);
      location.hash = "#/home";
    } catch (ex) {
      err.textContent = ex.message;
      err.hidden = false;
    }
  });
}

export function registerView(el) {
  setTitle("新規登録");
  el.innerHTML = `
    <div class="auth-card">
      <div class="auth-brand"><span aria-hidden="true">🩺</span><h2>新規登録</h2><p>登録が終わると個人IDが発行されます</p></div>
      <form id="reg-form" novalidate>
        <div class="field">
          <label for="reg-name">名前</label>
          <input id="reg-name" autocomplete="name" maxlength="40" placeholder="例：山田 花子" required>
        </div>
        <div class="field">
          <label for="reg-pass">パスワード（6文字以上）</label>
          <input id="reg-pass" type="password" autocomplete="new-password" minlength="6" required>
        </div>
        <div class="field">
          <label for="reg-pass2">パスワード（確認）</label>
          <input id="reg-pass2" type="password" autocomplete="new-password" required>
        </div>
        <p class="error-text" id="reg-error" hidden></p>
        <button class="btn primary block" type="submit">登録する</button>
      </form>
      <p class="auth-switch">IDをお持ちの方は <a href="#/login">ログイン</a></p>
      ${LOCAL_NOTE}
    </div>`;
  el.querySelector("#reg-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const err = el.querySelector("#reg-error");
    err.hidden = true;
    const pass = el.querySelector("#reg-pass").value;
    if (pass !== el.querySelector("#reg-pass2").value) {
      err.textContent = "確認用のパスワードが一致しません";
      err.hidden = false;
      return;
    }
    try {
      const user = await store.register(el.querySelector("#reg-name").value, pass);
      await modal({
        title: "登録が完了しました",
        body: `
          <p>${esc(user.name)}さんの個人IDは次のとおりです。<br>ログインと、相手からの送信に使います。</p>
          <p class="big-id">${formatId(user.id)}</p>
          <p class="muted small">IDはマイページでいつでも確認できます。</p>`,
        buttons: [
          { label: "IDをコピー", onClick: () => (copyText(user.id), false) },
          { label: "はじめる", value: true, variant: "primary" },
        ],
      });
      location.hash = "#/home";
    } catch (ex) {
      err.textContent = ex.message;
      err.hidden = false;
    }
  });
}
