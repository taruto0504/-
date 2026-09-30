// データ層（端末内モード）。
// すべてのデータをこのブラウザの localStorage に保存する。
// 同じブラウザ内のアカウント同士であれば、送信・チャット・通知がそのまま動く。
// サーバー版に置き換えるときは、このファイルと同じ関数を持つモジュールを用意すればよい。

import { ALL_FIELDS, normalizeData } from "./fields.js";

const DB_KEY = "medsim:db";
const SESSION_KEY = "medsim:session";
const channel = "BroadcastChannel" in window ? new BroadcastChannel("medsim") : null;
const listeners = new Set();

export const MODE = "local";

function emptyDb() {
  return { users: {}, scenarios: {}, messages: {}, notifications: [] };
}

function load() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    return raw ? { ...emptyDb(), ...JSON.parse(raw) } : emptyDb();
  } catch {
    return emptyDb();
  }
}

function commit(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  emit();
  if (channel) channel.postMessage("change");
}

function emit() {
  for (const fn of listeners) {
    try {
      fn();
    } catch (e) {
      console.error(e);
    }
  }
}

if (channel) channel.onmessage = emit;
window.addEventListener("storage", (e) => {
  if (e.key === DB_KEY || e.key === SESSION_KEY) emit();
});

// ログイン状態はタブごと（sessionStorage）に持ち、新しいタブでは最後にログインしたアカウントを引き継ぐ。
// こうすると、1台のPCでもタブごとに別のアカウントで送受信を試せる。
function sessionId() {
  let id = null;
  try {
    id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = localStorage.getItem(SESSION_KEY);
      if (id) sessionStorage.setItem(SESSION_KEY, id);
    }
  } catch {
    id = localStorage.getItem(SESSION_KEY);
  }
  return id;
}

function setSession(id) {
  try {
    if (id) sessionStorage.setItem(SESSION_KEY, id);
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {}
  if (id) localStorage.setItem(SESSION_KEY, id);
  else localStorage.removeItem(SESSION_KEY);
}

export function onChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function uid(prefix) {
  const rand = crypto.getRandomValues(new Uint32Array(2));
  return `${prefix}${Date.now().toString(36)}${rand[0].toString(36)}${rand[1].toString(36)}`;
}

async function hashPassword(password, salt) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${salt}:${password}`));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function requireUser(db) {
  const id = sessionId();
  const user = id && db.users[id];
  if (!user) throw new Error("ログインが必要です");
  return user;
}

function publicUser(u) {
  return u ? { id: u.id, name: u.name, createdAt: u.createdAt } : null;
}

function notify(db, to, type, scenarioId, from, text) {
  db.notifications.push({ id: uid("n"), to, type, scenarioId, from, text, at: Date.now(), read: false });
}

function participants(s) {
  return [s.ownerId, ...s.recipients];
}

// ---------- アカウント ----------

export function normalizeId(input) {
  return String(input || "")
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/\D/g, "");
}

export function currentUser() {
  const db = load();
  const id = sessionId();
  return publicUser(id && db.users[id]);
}

export async function register(name, password) {
  name = String(name || "").trim();
  if (!name) throw new Error("名前を入力してください");
  if (!password || password.length < 6) throw new Error("パスワードは6文字以上にしてください");
  const db = load();
  let id;
  do {
    id = String(10000000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 90000000));
  } while (db.users[id]);
  const salt = uid("s");
  db.users[id] = {
    id,
    name,
    salt,
    hash: await hashPassword(password, salt),
    createdAt: Date.now(),
    contacts: [],
  };
  setSession(id);
  commit(db);
  return publicUser(db.users[id]);
}

export async function login(id, password) {
  id = normalizeId(id);
  const db = load();
  const user = db.users[id];
  if (!user || (await hashPassword(password, user.salt)) !== user.hash) {
    throw new Error("IDまたはパスワードが正しくありません");
  }
  setSession(id);
  emit();
  return publicUser(user);
}

export function logout() {
  setSession(null);
  emit();
}

export async function deleteAccount(password) {
  const db = load();
  const me = requireUser(db);
  if ((await hashPassword(password, me.salt)) !== me.hash) throw new Error("パスワードが正しくありません");
  for (const s of Object.values(db.scenarios)) {
    if (s.ownerId === me.id) {
      delete db.scenarios[s.id];
      delete db.messages[s.id];
    } else {
      s.recipients = s.recipients.filter((r) => r !== me.id);
      s.hiddenFor = s.hiddenFor.filter((r) => r !== me.id);
    }
  }
  db.notifications = db.notifications.filter((n) => n.to !== me.id && db.scenarios[n.scenarioId]);
  for (const u of Object.values(db.users)) u.contacts = u.contacts.filter((c) => c.id !== me.id);
  delete db.users[me.id];
  setSession(null);
  commit(db);
}

export function getUser(id) {
  return publicUser(load().users[id]);
}

export function userName(id) {
  const u = load().users[id];
  return u ? u.name : "退会済みユーザー";
}

// ---------- 送信相手 ----------

export function listContacts() {
  const db = load();
  const me = requireUser(db);
  return me.contacts
    .map((c) => ({ ...c, name: db.users[c.id] ? db.users[c.id].name : "退会済みユーザー", exists: !!db.users[c.id] }))
    .sort((a, b) => Number(b.favorite) - Number(a.favorite) || a.name.localeCompare(b.name, "ja"));
}

export function addContact(rawId) {
  const id = normalizeId(rawId);
  const db = load();
  const me = requireUser(db);
  if (!id) throw new Error("IDを入力してください");
  if (id === me.id) throw new Error("自分のIDは登録できません");
  if (!db.users[id]) throw new Error(`ID ${id} のユーザーは見つかりません`);
  if (me.contacts.some((c) => c.id === id)) throw new Error(`${db.users[id].name}さんはすでに登録されています`);
  me.contacts.push({ id, favorite: false, addedAt: Date.now() });
  commit(db);
  return publicUser(db.users[id]);
}

export function removeContact(id) {
  const db = load();
  const me = requireUser(db);
  me.contacts = me.contacts.filter((c) => c.id !== id);
  commit(db);
}

export function setFavorite(id, favorite) {
  const db = load();
  const me = requireUser(db);
  const c = me.contacts.find((x) => x.id === id);
  if (c) c.favorite = favorite;
  commit(db);
}

// ---------- シナリオ ----------

function view(db, s, meId) {
  const msgs = db.messages[s.id] || [];
  const lastRead = (s.chatRead && s.chatRead[meId]) || 0;
  return {
    ...s,
    data: { ...s.data },
    isOwner: s.ownerId === meId,
    ownerName: db.users[s.ownerId] ? db.users[s.ownerId].name : "退会済みユーザー",
    messageCount: msgs.length,
    unreadMessages: msgs.filter((m) => m.from !== meId && m.at > lastRead).length,
    hasUpdate: s.ownerId !== meId && s.version > ((s.seen && s.seen[meId]) || 0),
  };
}

export function listMine() {
  const db = load();
  const me = requireUser(db);
  return Object.values(db.scenarios)
    .filter((s) => s.ownerId === me.id)
    .map((s) => view(db, s, me.id))
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

export function listReceived() {
  const db = load();
  const me = requireUser(db);
  return Object.values(db.scenarios)
    .filter((s) => s.recipients.includes(me.id) && !s.hiddenFor.includes(me.id))
    .map((s) => view(db, s, me.id))
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getScenario(id) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[id];
  if (!s || !participants(s).includes(me.id)) return null;
  return view(db, s, me.id);
}

// 作成・更新。送信済みの場合は変更点を履歴に残し、相手に通知する。
export function saveScenario(id, rawData) {
  const db = load();
  const me = requireUser(db);
  const data = normalizeData(rawData);
  const now = Date.now();
  if (!id) {
    id = uid("sc");
    db.scenarios[id] = {
      id,
      ownerId: me.id,
      data,
      createdAt: now,
      updatedAt: now,
      version: 1,
      recipients: [],
      hiddenFor: [],
      seen: {},
      chatRead: {},
      history: [],
    };
    commit(db);
    return view(db, db.scenarios[id], me.id);
  }
  const s = db.scenarios[id];
  if (!s || s.ownerId !== me.id) throw new Error("このシナリオは編集できません");
  const changes = {};
  for (const f of ALL_FIELDS) {
    if ((s.data[f.key] || "") !== data[f.key]) changes[f.key] = { from: s.data[f.key] || "", to: data[f.key] };
  }
  if (!Object.keys(changes).length) return view(db, s, me.id);
  s.version += 1;
  s.data = data;
  s.updatedAt = now;
  s.history.push({ version: s.version, at: now, changes });
  for (const r of s.recipients) {
    notify(db, r, "updated", id, me.id, `${me.name}さんが「${data.disease || "無題のシナリオ"}」を更新しました`);
  }
  commit(db);
  return view(db, s, me.id);
}

// 相手が最後に確認したバージョン以降の変更点をまとめる
export function changesSince(scenario, version) {
  const merged = {};
  for (const h of scenario.history || []) {
    if (h.version <= version) continue;
    for (const [key, c] of Object.entries(h.changes)) {
      merged[key] = merged[key] ? { from: merged[key].from, to: c.to } : { ...c };
    }
  }
  for (const key of Object.keys(merged)) if (merged[key].from === merged[key].to) delete merged[key];
  return merged;
}

export function markSeen(id) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[id];
  if (!s || s.ownerId === me.id || (s.seen[me.id] || 0) >= s.version) return;
  s.seen[me.id] = s.version;
  commit(db);
}

export function deleteScenarios(ids) {
  const db = load();
  const me = requireUser(db);
  for (const id of ids) {
    const s = db.scenarios[id];
    if (!s) continue;
    if (s.ownerId === me.id) {
      delete db.scenarios[id];
      delete db.messages[id];
      db.notifications = db.notifications.filter((n) => n.scenarioId !== id);
    } else if (s.recipients.includes(me.id) && !s.hiddenFor.includes(me.id)) {
      // 受信したシナリオは自分の一覧から外すだけ（送信者側のデータは残る）
      s.hiddenFor.push(me.id);
      db.notifications = db.notifications.filter((n) => !(n.scenarioId === id && n.to === me.id));
    }
  }
  commit(db);
}

export function sendScenario(id, rawIds) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[id];
  if (!s || s.ownerId !== me.id) throw new Error("このシナリオは送信できません");
  const ids = [...new Set(rawIds.map(normalizeId).filter(Boolean))];
  if (!ids.length) throw new Error("送信相手を選んでください");
  const missing = ids.filter((x) => !db.users[x]);
  if (missing.length) throw new Error(`見つからないID：${missing.join("、")}`);
  if (ids.includes(me.id)) throw new Error("自分には送信できません");
  const added = [];
  for (const r of ids) {
    s.hiddenFor = s.hiddenFor.filter((x) => x !== r);
    if (!s.recipients.includes(r)) {
      s.recipients.push(r);
      added.push(r);
    }
    s.seen[r] = s.version;
    notify(db, r, "received", id, me.id, `${me.name}さんから「${s.data.disease || "無題のシナリオ"}」が届きました`);
  }
  s.sentAt = Date.now();
  commit(db);
  return { sent: ids.length, added: added.length };
}

// ---------- チャット ----------

export function listMessages(scenarioId) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[scenarioId];
  if (!s || !participants(s).includes(me.id)) return [];
  return (db.messages[scenarioId] || []).map((m) => ({
    ...m,
    mine: m.from === me.id,
    name: db.users[m.from] ? db.users[m.from].name : "退会済みユーザー",
  }));
}

export function postMessage(scenarioId, text) {
  text = String(text || "").trim();
  if (!text) return;
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[scenarioId];
  if (!s || !participants(s).includes(me.id)) throw new Error("このシナリオにはメッセージを送れません");
  const now = Date.now();
  (db.messages[scenarioId] ||= []).push({ id: uid("m"), from: me.id, text, at: now });
  s.chatRead[me.id] = now;
  const title = s.data.disease || "無題のシナリオ";
  for (const p of participants(s)) {
    if (p !== me.id) notify(db, p, "reply", scenarioId, me.id, `${me.name}さん（${title}）：${text.slice(0, 60)}`);
  }
  commit(db);
}

export function markChatRead(scenarioId) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[scenarioId];
  if (!s) return;
  const msgs = db.messages[scenarioId] || [];
  const latest = msgs.length ? msgs[msgs.length - 1].at : 0;
  if ((s.chatRead[me.id] || 0) >= latest) return;
  s.chatRead[me.id] = latest;
  commit(db);
}

// ---------- 通知 ----------

export function listNotifications() {
  const db = load();
  const me = requireUser(db);
  return db.notifications
    .filter((n) => n.to === me.id)
    .sort((a, b) => b.at - a.at)
    .slice(0, 200);
}

export function unreadNotificationCount() {
  const db = load();
  const id = sessionId();
  if (!id) return 0;
  return db.notifications.filter((n) => n.to === id && !n.read).length;
}

export function markNotificationsRead(ids) {
  const db = load();
  const me = requireUser(db);
  let changed = false;
  for (const n of db.notifications) {
    if (n.to === me.id && !n.read && (!ids || ids.includes(n.id))) {
      n.read = true;
      changed = true;
    }
  }
  if (changed) commit(db);
}

export function markScenarioNotificationsRead(scenarioId) {
  const db = load();
  const me = requireUser(db);
  const ids = db.notifications.filter((n) => n.to === me.id && n.scenarioId === scenarioId && !n.read).map((n) => n.id);
  if (ids.length) markNotificationsRead(ids);
}

// ---------- 下書き（入力途中のデータを失わないための自動退避） ----------

function draftKey(scenarioId) {
  const id = sessionId();
  return `medsim:draft:${id}:${scenarioId || "new"}`;
}

export function saveDraft(scenarioId, data) {
  try {
    localStorage.setItem(draftKey(scenarioId), JSON.stringify({ data, at: Date.now() }));
  } catch {
    // 容量不足などで退避できなくても入力は続けられるようにする
  }
}

export function loadDraft(scenarioId) {
  try {
    const raw = localStorage.getItem(draftKey(scenarioId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearDraft(scenarioId) {
  localStorage.removeItem(draftKey(scenarioId));
}
