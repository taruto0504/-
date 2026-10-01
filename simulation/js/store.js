// データ層。
// ・端末内モード：すべてのデータをこのブラウザの localStorage に保存する。
//   同じブラウザ内のアカウント同士であれば、送信・チャット・通知がそのまま動く。
// ・共有モード（claude.ai の公開版）：ページの共有データベースに保存し、
//   別の端末で開いている人ともリアルタイムにやりとりできる（remote.js）。

import { ALL_FIELDS, normalizeData, isComplete, scenarioTitle } from "./fields.js";
import { PREVIEW } from "./env.js";
import * as remote from "./remote.js";
import { STARTER_SAMPLES, SAMPLE_SEPSIS, DEFAULT_Q1, DEFAULT_Q2 } from "./samples.js";

const DB_KEY = "medsim:db";
const SESSION_KEY = "medsim:session";
const UNKNOWN = "Unknown";
const channel = "BroadcastChannel" in window ? new BroadcastChannel("medsim") : null;
const listeners = new Set();

let mode = "local";
export function getMode() {
  return mode;
}

// 起動時に一度呼ぶ。公開版で共有データベースが使えれば共有モードにする
export async function init() {
  if (!PREVIEW || !window.claude || !window.claude.use) return mode;
  let dbNs = null;
  try {
    dbNs = await window.claude.use("db");
  } catch {
    dbNs = null;
  }
  if (dbNs && (await remote.connect(dbNs, emit))) mode = "shared";
  return mode;
}

function emptyDb() {
  return { users: {}, deletedIds: [], scenarios: {}, messages: {}, notifications: [], ai: {}, aiFeedback: [] };
}

function load() {
  if (mode === "shared") return { ...emptyDb(), ...remote.read() };
  try {
    const raw = localStorage.getItem(DB_KEY);
    return raw ? { ...emptyDb(), ...JSON.parse(raw) } : emptyDb();
  } catch {
    return emptyDb();
  }
}

function commit(db) {
  if (mode === "shared") {
    remote.write(db);
    emit();
    return;
  }
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  } catch {
    throw new Error("端末の保存容量がいっぱいのため保存できませんでした。不要なシナリオを削除してから、もう一度お試しください。");
  }
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
  if (!(window.crypto && crypto.subtle)) {
    throw new Error("このページは https:// で始まるURLで開いてください（安全な接続でないとパスワードを扱えません）");
  }
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
  return u ? { id: u.id, name: u.name, createdAt: u.createdAt, termsAcceptedAt: u.termsAcceptedAt || 0, starterSeeded: !!u.starterSeeded } : null;
}

function nameOf(db, id) {
  return db.users[id] ? db.users[id].name : UNKNOWN;
}

function notify(db, to, type, scenarioId, from) {
  db.notifications.push({ id: uid("n"), to, type, scenarioId, from, at: Date.now(), read: false });
}

function participants(s) {
  return [s.ownerId, ...s.recipients];
}

// 受信者が1人も見ていない、送信者が削除済みのシナリオは完全に消す
function cleanup(db, s) {
  const activeRecipients = s.recipients.filter((r) => db.users[r] && !s.hiddenFor.includes(r));
  const ownerActive = db.users[s.ownerId] && !s.ownerDeleted;
  if (!ownerActive && !activeRecipients.length) {
    delete db.scenarios[s.id];
    delete db.messages[s.id];
    db.notifications = db.notifications.filter((n) => n.scenarioId !== s.id);
    for (const key of Object.keys(db.ai)) if (key.startsWith(`${s.id}:`)) delete db.ai[key];
  }
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

// 登録してIDを発行する（ログインはまだしない。企画書の流れ：登録 → ID発行完了 → ログイン）
export async function register(name, password, acceptedTerms = false) {
  name = String(name || "").trim();
  if (!name) throw new Error("名前を入力してください");
  if (!password || password.length < 6) throw new Error("パスワードは6文字以上にしてください");
  if (!acceptedTerms) throw new Error("利用規約に同意してください");
  const db = load();
  let id;
  do {
    id = String(10000000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 90000000));
  } while (db.users[id] || db.deletedIds.includes(id));
  const salt = uid("s");
  db.users[id] = { id, name, salt, hash: await hashPassword(password, salt), createdAt: Date.now(), contacts: [], groups: [], termsAcceptedAt: Date.now() };
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

// 退会で消えるデータの件数（確認画面用）
export function deletionSummary() {
  const db = load();
  const me = requireUser(db);
  const mine = Object.values(db.scenarios).filter((s) => s.ownerId === me.id && !s.ownerDeleted);
  const shared = mine.filter((s) => s.recipients.some((r) => db.users[r] && !s.hiddenFor.includes(r)));
  let drafts = 0;
  for (let i = 0; i < localStorage.length; i++) if (localStorage.key(i).startsWith(`medsim:draft:${me.id}:`)) drafts++;
  return { scenarios: mine.length, shared: shared.length, contacts: me.contacts.length, drafts };
}

export async function verifyPassword(password) {
  const db = load();
  const me = requireUser(db);
  return (await hashPassword(password, me.salt)) === me.hash;
}

export function acceptTerms() {
  const db = load();
  const me = requireUser(db);
  me.termsAcceptedAt = Date.now();
  commit(db);
}

export async function changePassword(currentPassword, nextPassword) {
  if (!(await verifyPassword(currentPassword))) throw new Error("現在のパスワードが正しくありません");
  if (!nextPassword || nextPassword.length < 6) throw new Error("新しいパスワードは6文字以上にしてください");
  if (nextPassword === currentPassword) throw new Error("新しいパスワードが現在のものと同じです");
  const db = load();
  const me = requireUser(db);
  me.salt = uid("s");
  me.hash = await hashPassword(nextPassword, me.salt);
  me.passwordChangedAt = Date.now();
  commit(db);
}

export async function deleteAccount(password) {
  if (!(await verifyPassword(password))) throw new Error("パスワードが正しくありません");
  const db = load();
  const me = requireUser(db);
  delete db.users[me.id];
  db.deletedIds.push(me.id);
  for (const u of Object.values(db.users)) u.contacts = u.contacts.filter((c) => c.id !== me.id);
  db.notifications = db.notifications.filter((n) => n.to !== me.id);
  for (const key of Object.keys(db.ai)) if (key.endsWith(`:${me.id}`)) delete db.ai[key];
  for (const s of Object.values(db.scenarios)) {
    if (s.ownerId !== me.id) {
      s.recipients = s.recipients.filter((r) => r !== me.id);
      s.hiddenFor = s.hiddenFor.filter((r) => r !== me.id);
    }
    // 送信済みで相手が見ているものは相手側に残す（送信者名は Unknown になる）
    cleanup(db, s);
  }
  const drafts = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k.startsWith(`medsim:draft:${me.id}:`)) drafts.push(k);
  }
  drafts.forEach((k) => localStorage.removeItem(k));
  setSession(null);
  commit(db);
}

export function getUser(id) {
  return publicUser(load().users[id]);
}

export function userName(id) {
  return nameOf(load(), id);
}

// ---------- 送信相手 ----------

export function listContacts() {
  const db = load();
  const me = requireUser(db);
  return me.contacts
    .filter((c) => db.users[c.id])
    .map((c) => ({ ...c, name: db.users[c.id].name }))
    .sort((a, b) => Number(b.favorite) - Number(a.favorite) || a.name.localeCompare(b.name, "ja"));
}

// 登録前の確認用：IDから相手を調べる（エラーなら理由を投げる）
export function lookupContact(rawId) {
  const id = normalizeId(rawId);
  const db = load();
  const me = requireUser(db);
  if (!id) throw new Error("IDを入力してください");
  if (id === me.id) throw new Error("自分のIDは登録できません");
  if (!db.users[id]) throw new Error(`ID ${id} のユーザーは見つかりません`);
  if (me.contacts.some((c) => c.id === id)) throw new Error(`${db.users[id].name}さんはすでに登録されています`);
  return publicUser(db.users[id]);
}

export function addContact(rawId) {
  const user = lookupContact(rawId);
  const db = load();
  const me = requireUser(db);
  me.contacts.push({ id: user.id, favorite: false, addedAt: Date.now() });
  commit(db);
  return user;
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

// ---------- グループ（まとめて送信する相手） ----------

export function listGroups() {
  const db = load();
  const me = requireUser(db);
  return (me.groups || []).map((g) => ({
    ...g,
    members: g.members.filter((id) => db.users[id]).map((id) => ({ id, name: db.users[id].name })),
  }));
}

export function saveGroup({ id, name, members }) {
  name = String(name || "").trim();
  if (!name) throw new Error("グループ名を入力してください");
  const db = load();
  const me = requireUser(db);
  const valid = [...new Set(members)].filter((m) => db.users[m] && m !== me.id);
  if (!valid.length) throw new Error("メンバーを1人以上選んでください");
  me.groups ||= [];
  const existing = id && me.groups.find((g) => g.id === id);
  if (existing) Object.assign(existing, { name, members: valid });
  else me.groups.push({ id: uid("g"), name, members: valid, createdAt: Date.now() });
  commit(db);
}

export function deleteGroup(id) {
  const db = load();
  const me = requireUser(db);
  me.groups = (me.groups || []).filter((g) => g.id !== id);
  commit(db);
}

// ---------- シナリオ ----------

function view(db, s, meId) {
  const msgs = db.messages[s.id] || [];
  const lastRead = (s.chatRead && s.chatRead[meId]) || 0;
  const isOwner = s.ownerId === meId;
  const lastEdit = s.sentAt ? [...s.history].reverse().find((h) => h.at > s.sentAt) : null;
  return {
    ...s,
    data: { ...s.data },
    isOwner,
    status: isOwner ? (s.recipients.length ? "sent" : isComplete(s.data) ? "done" : "draft") : "received",
    ownerName: nameOf(db, s.ownerId),
    ownerExists: !!db.users[s.ownerId] && !s.ownerDeleted,
    activeRecipients: s.recipients.filter((r) => db.users[r]),
    messageCount: msgs.length,
    unreadMessages: msgs.filter((m) => m.from !== meId && m.at > lastRead).length,
    hasUpdate: !isOwner && s.version > ((s.seen && s.seen[meId]) || 0),
    // 受信者がまだ一度も開いていない
    isNew: !isOwner && !(s.opened && s.opened[meId]),
    receivedAt: isOwner ? null : (s.receivedAt && s.receivedAt[meId]) || s.sentAt,
    lastMessageAt: msgs.length ? msgs[msgs.length - 1].at : 0,
    lastMessage: msgs.length ? { text: msgs[msgs.length - 1].text, from: msgs[msgs.length - 1].from, name: nameOf(db, msgs[msgs.length - 1].from) } : null,
    isSample: !!s.sample,
    quiz: normalizeQuiz(s.quiz),
    myAnswer: (s.answers && s.answers[meId]) || null,
    quizStep: quizStep(s, meId),
    // 送信者向け：相手ごとの確認状況（opened: 開いた日時、latest: 最新の内容まで確認済み）
    readStatus: isOwner
      ? s.recipients
          .filter((r) => db.users[r])
          .map((r) => ({
            id: r,
            name: nameOf(db, r),
            opened: (s.opened && s.opened[r]) || 0,
            latest: !!(s.opened && s.opened[r]) && (s.seen[r] || 0) >= s.version,
            hidden: s.hiddenFor.includes(r),
            answer: (s.answers && s.answers[r]) || null,
          }))
      : [],
    editedAfterSendAt: lastEdit ? lastEdit.at : null,
  };
}

// 受信一覧：新しい動き（受信・更新・メッセージ）があった順
export function listReceived() {
  return listScenarios()
    .filter((s) => !s.isOwner)
    .sort((a, b) => activityAt(b) - activityAt(a));
}

function activityAt(s) {
  return Math.max(s.receivedAt || 0, s.updatedAt || 0, s.lastMessageAt || 0);
}

// 受信で確認が必要な件数（未読・更新あり・新着メッセージ）
export function inboxAlertCount() {
  if (!sessionId() || !currentUser()) return 0;
  return listReceived().filter((s) => s.isNew || s.hasUpdate || s.unreadMessages).length;
}

// ホーム画面用：自分が作成したもの（削除していないもの）と受信したもの
export function listScenarios() {
  const db = load();
  const me = requireUser(db);
  return Object.values(db.scenarios)
    .filter((s) => (s.ownerId === me.id && !s.ownerDeleted) || (s.recipients.includes(me.id) && !s.hiddenFor.includes(me.id)))
    .map((s) => view(db, s, me.id));
}

export function getScenario(id) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[id];
  if (!s) return null;
  if (s.ownerId === me.id ? s.ownerDeleted : !s.recipients.includes(me.id) || s.hiddenFor.includes(me.id)) return null;
  return view(db, s, me.id);
}

// 作成・更新。変更点を履歴に残し、送信済みなら相手に通知する。
export function saveScenario(id, rawData, rawQuiz) {
  const db = load();
  const me = requireUser(db);
  const data = normalizeData(rawData);
  const now = Date.now();
  const quiz = rawQuiz === undefined ? undefined : normalizeQuiz(rawQuiz);
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
      sentAt: null,
      ownerDeleted: false,
      quiz: quiz || normalizeQuiz(null),
      answers: {},
    };
    commit(db);
    return view(db, db.scenarios[id], me.id);
  }
  const s = db.scenarios[id];
  if (!s || s.ownerId !== me.id || s.ownerDeleted) throw new Error("このシナリオは編集できません");
  const changes = {};
  for (const f of ALL_FIELDS) {
    if ((s.data[f.key] || "") !== data[f.key]) changes[f.key] = { from: s.data[f.key] || "", to: data[f.key] };
  }
  const quizChanged = quiz !== undefined && JSON.stringify(quiz) !== JSON.stringify(normalizeQuiz(s.quiz));
  if (quizChanged) s.quiz = quiz;
  if (!Object.keys(changes).length) {
    if (quizChanged) commit(db);
    return view(db, s, me.id);
  }
  s.version += 1;
  s.data = data;
  s.updatedAt = now;
  s.history.push({ version: s.version, at: now, changes });
  for (const r of s.recipients) if (db.users[r] && !s.hiddenFor.includes(r)) notify(db, r, "updated", id, me.id);
  commit(db);
  return view(db, s, me.id);
}

// 指定バージョン以降の変更点をまとめる（受信者の「更新」マーク用）
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
  if (!s || s.ownerId === me.id) return;
  s.opened ||= {};
  const firstOpen = !s.opened[me.id];
  if (!firstOpen && (s.seen[me.id] || 0) >= s.version) return;
  if (firstOpen) s.opened[me.id] = Date.now();
  s.seen[me.id] = s.version;
  commit(db);
}

// 削除。送信済みのものは相手側に残し、自分の一覧からだけ消える。
export function deleteScenarios(ids) {
  const db = load();
  const me = requireUser(db);
  for (const id of ids) {
    const s = db.scenarios[id];
    if (!s) continue;
    if (s.ownerId === me.id) s.ownerDeleted = true;
    else if (s.recipients.includes(me.id) && !s.hiddenFor.includes(me.id)) s.hiddenFor.push(me.id);
    db.notifications = db.notifications.filter((n) => !(n.scenarioId === id && n.to === me.id));
    delete db.ai[`${id}:${me.id}`];
    cleanup(db, s);
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
  for (const r of ids) {
    s.hiddenFor = s.hiddenFor.filter((x) => x !== r);
    if (!s.recipients.includes(r)) s.recipients.push(r);
    s.seen[r] = s.version;
    // 再送したときも「未読」に戻し、受信日時を更新する
    (s.receivedAt ||= {})[r] = Date.now();
    if (s.opened) s.opened[r] = 0;
    notify(db, r, "received", id, me.id);
  }
  s.sentAt = s.sentAt || Date.now();
  commit(db);
  return { sent: ids.length };
}

// 送信の取り消し：特定の相手だけ共有を解除する（相手の一覧から消え、以後は見られない）
export function revokeRecipient(id, recipientId) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[id];
  if (!s || s.ownerId !== me.id) throw new Error("このシナリオの共有は変更できません");
  s.recipients = s.recipients.filter((r) => r !== recipientId);
  s.hiddenFor = s.hiddenFor.filter((r) => r !== recipientId);
  db.notifications = db.notifications.filter((n) => !(n.scenarioId === id && n.to === recipientId));
  delete db.ai[`${id}:${recipientId}`];
  commit(db);
}

// ---------- 出題モード ----------

export function normalizeQuiz(q) {
  const str = (v, d = "") => (typeof v === "string" ? v.trim() : d);
  return {
    enabled: !!(q && q.enabled),
    q1: str(q && q.q1) || DEFAULT_Q1,
    q2: str(q && q.q2) || DEFAULT_Q2,
    model: str(q && q.model),
  };
}

// 受け取った人が今どの段階か（1：最初の回答 → 2：急変後の回答 → 3：答え合わせ）
function quizStep(s, uid) {
  const quiz = normalizeQuiz(s.quiz);
  if (!quiz.enabled || s.ownerId === uid) return 3;
  const a = (s.answers && s.answers[uid]) || {};
  if (!a.a1) return 1;
  const hasV2 = Object.keys(s.data).some((k) => k.startsWith("v2.") && s.data[k]);
  if (hasV2 && !a.a2) return 2;
  return 3;
}

export function submitAnswer(id, step, text) {
  text = String(text || "").trim();
  if (!text) throw new Error("回答を入力してください");
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[id];
  if (!s || !s.recipients.includes(me.id)) throw new Error("このシナリオには回答できません");
  s.answers ||= {};
  const a = { ...(s.answers[me.id] || {}) };
  if (step === 1) Object.assign(a, { a1: text, at1: Date.now() });
  else Object.assign(a, { a2: text, at2: Date.now() });
  s.answers[me.id] = a;
  if (db.users[s.ownerId] && !s.ownerDeleted) notify(db, s.ownerId, "answered", id, me.id);
  commit(db);
}

function addScenario(db, ownerId, sample, extra = {}) {
  const now = Date.now();
  const id = uid("sc");
  db.scenarios[id] = {
    id, ownerId, data: normalizeData(sample.data), createdAt: now, updatedAt: now, version: 1,
    recipients: [], hiddenFor: [], seen: {}, chatRead: {}, history: [], sentAt: null, ownerDeleted: false,
    quiz: normalizeQuiz(sample.quiz), answers: {}, sample: true, ...extra,
  };
  return db.scenarios[id];
}

// 初めてログインしたときに、使い方の参考になる見本シナリオを自分の一覧に作る（1回だけ）
export function seedStarterSamples() {
  const db = load();
  const me = requireUser(db);
  if (me.starterSeeded) return false;
  for (const sample of STARTER_SAMPLES) addScenario(db, me.id, sample);
  me.starterSeeded = true;
  commit(db);
  return true;
}

// お試し用：サンプルの送信者から、サンプルのシナリオを自分あてに届ける
// （端末内モードでは、受信を試すのに別アカウントが必要なため）
export function receiveSample() {
  const db = load();
  const me = requireUser(db);
  let senderId;
  do {
    senderId = String(10000000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 90000000));
  } while (db.users[senderId] || db.deletedIds.includes(senderId));
  const now = Date.now();
  // ログインには使わない送信専用のアカウント（パスワードは誰にもわからない値）
  db.users[senderId] = { id: senderId, name: "サンプル指導医", salt: uid("s"), hash: uid("x"), createdAt: now, contacts: [], sample: true };
  const s = addScenario(db, senderId, SAMPLE_SEPSIS, {
    recipients: [me.id], seen: { [me.id]: 1 }, chatRead: { [senderId]: now },
    sentAt: now, receivedAt: { [me.id]: now }, opened: {},
  });
  const id = s.id;
  db.messages[id] = [{ id: uid("m"), from: senderId, text: "出題モードで送りました。まずはバイタル1を見て、対応を回答してみてください。", at: now }];
  notify(db, me.id, "received", id, senderId);
  commit(db);
  return id;
}

// ---------- チャット ----------

export function listMessages(scenarioId) {
  const db = load();
  const me = requireUser(db);
  const s = db.scenarios[scenarioId];
  if (!s || !participants(s).includes(me.id)) return [];
  const others = (from) => participants(s).filter((p) => p !== from && db.users[p]);
  return (db.messages[scenarioId] || []).map((m) => ({
    ...m,
    mine: m.from === me.id,
    name: nameOf(db, m.from),
    readCount: others(m.from).filter((p) => (s.chatRead[p] || 0) >= m.at).length,
    readTotal: others(m.from).length,
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
  for (const p of participants(s)) {
    const active = db.users[p] && !(p === s.ownerId ? s.ownerDeleted : s.hiddenFor.includes(p));
    if (p !== me.id && active) notify(db, p, "reply", scenarioId, me.id);
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

const NOTICE_TEXT = {
  received: (name) => `${name}さんからシナリオが届きました`,
  reply: (name) => `${name}さんが返信しました`,
  updated: (name) => `${name}さんがシナリオを更新しました`,
  answered: (name) => `${name}さんが出題に回答しました`,
};

export function listNotifications() {
  const db = load();
  const me = requireUser(db);
  return db.notifications
    .filter((n) => n.to === me.id)
    .sort((a, b) => b.at - a.at)
    .slice(0, 200)
    .map((n) => {
      const s = db.scenarios[n.scenarioId];
      return { ...n, text: NOTICE_TEXT[n.type](nameOf(db, n.from)), title: s ? scenarioTitle(s.data) : "" };
    });
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

// ---------- AI評価の保存（作成物ごと・利用者ごと） ----------

export function saveAiResult(scenarioId, snapshot, result) {
  const db = load();
  const me = requireUser(db);
  db.ai[`${scenarioId}:${me.id}`] = { at: Date.now(), snapshot, result };
  commit(db);
}

export function getAiResult(scenarioId) {
  if (!scenarioId) return null;
  const db = load();
  const me = requireUser(db);
  return db.ai[`${scenarioId}:${me.id}`] || null;
}

// 「役に立った / 誤りがある」の評価。精度向上のために蓄積する
export function addAiFeedback(scenarioId, verdict, reason) {
  const db = load();
  const me = requireUser(db);
  db.aiFeedback.push({ id: uid("f"), scenarioId, from: me.id, verdict, reason: reason || "", at: Date.now() });
  commit(db);
}

// ---------- 下書き（入力途中のデータを失わないための自動退避） ----------

function draftKey(scenarioId) {
  return `medsim:draft:${sessionId()}:${scenarioId || "new"}`;
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
