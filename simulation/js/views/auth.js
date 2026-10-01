import * as store from "../store.js";
import { icon } from "../icons.js";
import { esc, setTitle, formatId, copyText, passwordField, bindPasswordToggles, modal } from "../ui.js";
import { TERMS_HTML } from "./guide.js";

// 保存場所の説明（共有モードでは、このページを開いている人同士でやりとりできる）
const modeNote = () =>
  store.getMode() === "shared"
    ? `<p class="muted small auth-note">このページを開いている人同士で、シナリオの送信やチャットがリアルタイムにできます。</p>`
    : `<p class="muted small auth-note">現在は「端末内モード」です。データはこのブラウザの中だけに保存され、送信やチャットは同じブラウザで登録したアカウント同士で行えます。</p>`;

export function loginView(el, presetId) {
  setTitle("ログイン");
  el.innerHTML = `
    <div class="auth-card">
      <div class="auth-brand">${icon("cross", "brand-icon")}<h2>医療シミュレーション</h2><p>症例シナリオを作って、共有して、話し合う</p></div>
      <form id="login-form" novalidate>
        <div class="field">
          <label for="login-id">個人ID</label>
          <input id="login-id" inputmode="numeric" autocomplete="username" placeholder="8桁の数字" value="${esc(presetId || "")}" required>
        </div>
        ${passwordField("login-pass", "パスワード", "current-password")}
        <p class="error-text" id="login-error" hidden></p>
        <button class="btn primary block" type="submit">ログイン</button>
      </form>
      <div class="auth-switch"><span>はじめての方は</span><a class="btn block" href="#/register">新規登録</a></div>
      ${modeNote()}
    </div>`;
  bindPasswordToggles(el);
  if (presetId) el.querySelector("#login-pass").focus();
  el.querySelector("#login-form").addEventListener("submit", async (e) => {
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
      <div class="auth-brand">${icon("cross", "brand-icon")}<h2>新規登録</h2><p>名前とパスワードだけで登録できます</p></div>
      <form id="reg-form" novalidate>
        <div class="field">
          <label for="reg-name">名前</label>
          <input id="reg-name" autocomplete="name" maxlength="40" placeholder="例：山田 花子" required>
        </div>
        ${passwordField("reg-pass", "パスワード（6文字以上）", "new-password")}
        ${passwordField("reg-pass2", "パスワード（確認のためもう一度）", "new-password")}
        <div class="terms-check">
          <label class="check-row"><input type="checkbox" id="reg-terms"> 利用規約に同意します</label>
          <button type="button" class="btn small" id="show-terms">利用規約を読む</button>
        </div>
        <p class="error-text" id="reg-error" hidden></p>
        <button class="btn primary block" type="submit">登録</button>
      </form>
      <div class="auth-switch"><span>IDをお持ちの方は</span><a class="btn block" href="#/login">ログイン</a></div>
      ${modeNote()}
    </div>`;
  bindPasswordToggles(el);
  el.querySelector("#show-terms").addEventListener("click", async () => {
    const ok = await modal({
      title: "利用規約",
      wide: true,
      body: `<div class="terms-body">${TERMS_HTML}</div>`,
      buttons: [
        { label: "閉じる", value: false },
        { label: "同意する", value: true, variant: "primary" },
      ],
    });
    if (ok) el.querySelector("#reg-terms").checked = true;
  });
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
      const user = await store.register(el.querySelector("#reg-name").value, pass, el.querySelector("#reg-terms").checked);
      location.hash = `#/welcome/${user.id}`;
    } catch (ex) {
      err.textContent = ex.message;
      err.hidden = false;
    }
  });
}

// 個人ID発行完了画面
export function welcomeView(el, id) {
  const user = store.getUser(id);
  setTitle("登録完了");
  if (!user) {
    location.replace("#/login");
    return;
  }
  el.innerHTML = `
    <div class="auth-card">
      <div class="auth-brand">${icon("ok", "brand-icon")}<h2>登録が完了しました</h2><p>${esc(user.name)}さんの個人IDを発行しました</p></div>
      <p class="big-id" id="new-id">${formatId(user.id)}</p>
      <p class="small center">このIDは、ログインと、相手からシナリオを受け取るときに使います。<br>マイページでいつでも確認できます。</p>
      <div class="stack">
        <button type="button" class="btn block" id="copy-id">IDをコピー</button>
        <a class="btn primary block" href="#/login/${user.id}">ログインへ進む</a>
      </div>
    </div>`;
  el.querySelector("#copy-id").addEventListener("click", () => copyText(user.id));
}
