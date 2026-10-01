// 共有モード（claude.ai の公開版）：データをページの共有データベースに置き、
// 開いている全員の画面へリアルタイムに反映する。
// store.js はこれまでどおり「全データのオブジェクト」を読み書きし、ここで差分だけを書き込む。

const COLLECTIONS = ["users", "deleted", "scenarios", "messages", "notifications", "ai", "aiFeedback"];

let db = null;
let cache = null; // store.js と同じ形の全データ
const docs = Object.fromEntries(COLLECTIONS.map((c) => [c, new Map()])); // コレクション → (id → 本文)
let onRemoteChange = () => {};
let writeChain = Promise.resolve();

const clone = (v) => JSON.parse(JSON.stringify(v));
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const isMap = (v) => v && typeof v === "object" && !Array.isArray(v);

// 各コレクションの文書から、store.js が使う形のデータを組み立てる
function rebuild() {
  const d = { users: {}, deletedIds: [], scenarios: {}, messages: {}, notifications: [], ai: {}, aiFeedback: [] };
  for (const [id, u] of docs.users) d.users[id] = clone(u);
  d.deletedIds = [...docs.deleted.keys()];
  for (const [id, s] of docs.scenarios) d.scenarios[id] = clone(s);
  for (const m of docs.messages.values()) (d.messages[m.scenarioId] ||= []).push(clone(m));
  for (const list of Object.values(d.messages)) list.sort((a, b) => a.at - b.at || (a.id < b.id ? -1 : 1));
  d.notifications = [...docs.notifications.values()].map(clone);
  for (const [id, a] of docs.ai) d.ai[id] = clone(a);
  d.aiFeedback = [...docs.aiFeedback.values()].map(clone);
  cache = d;
}

// 共有データベースに接続し、最初のデータがそろうまで待つ。使えなければ false
export async function connect(dbNamespace, onChange) {
  db = dbNamespace;
  onRemoteChange = onChange;
  const firstLoads = COLLECTIONS.map(
    (name) =>
      new Promise((resolve, reject) => {
        let first = true;
        db.collection(name).onSnapshot(
          (snap) => {
            const map = docs[name];
            map.clear();
            for (const doc of snap.docs) if (doc.exists) map.set(doc.id, doc.data());
            if (first) {
              first = false;
              resolve();
            } else {
              rebuild();
              onRemoteChange();
            }
          },
          (err) => (first ? reject(err) : console.error("共有データの受信が止まりました", err))
        );
      })
  );
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 12000));
  try {
    await Promise.race([Promise.all(firstLoads), timeout]);
  } catch (e) {
    console.error("共有データベースに接続できませんでした", e);
    db = null;
    return false;
  }
  rebuild();
  return true;
}

export function read() {
  return clone(cache);
}

function queue(task) {
  writeChain = writeChain.then(task).catch((e) => {
    const msg =
      e && e.code === "quota_exceeded"
        ? "共有データの容量がいっぱいです。不要なシナリオを削除してください。"
        : e && e.code === "invalid_argument"
          ? "このページに書き込む権限がありません（閲覧のみで共有されています）。"
          : "共有データの保存に失敗しました。通信状態を確認してください。";
    window.dispatchEvent(new CustomEvent("medsim:error", { detail: msg }));
  });
}

// マップ型の項目（seen・opened など）は変わったキーだけを送り、ほかの人の書き込みを消さない
function patchOf(oldDoc, newDoc) {
  const patch = {};
  for (const key of new Set([...Object.keys(oldDoc), ...Object.keys(newDoc)])) {
    const a = oldDoc[key];
    const b = newDoc[key];
    if (same(a, b)) continue;
    if (isMap(a) && isMap(b)) {
      const sub = {};
      for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) if (!same(a[k], b[k])) sub[k] = b[k] === undefined ? null : b[k];
      patch[key] = sub;
    } else patch[key] = b === undefined ? null : b;
  }
  return patch;
}

function syncCollection(name, oldMap, newMap, { merge = false } = {}) {
  for (const [id, body] of Object.entries(newMap)) {
    const before = oldMap[id];
    if (!before) queue(() => db.collection(name).doc(id).set(body));
    else if (!same(before, body)) {
      const ref = db.collection(name).doc(id);
      queue(() => (merge ? ref.update(patchOf(before, body)) : ref.set(body)));
    }
  }
  for (const id of Object.keys(oldMap)) if (!(id in newMap)) queue(() => db.collection(name).doc(id).delete());
}

const byId = (list) => Object.fromEntries(list.map((x) => [x.id, x]));
// メッセージは「シナリオごとの一覧」を、どのシナリオのものかを添えた1件ずつの文書にする
const flatMessages = (m) => byId(Object.entries(m).flatMap(([sid, list]) => list.map((x) => ({ ...x, scenarioId: sid }))));

// store.js が変更した全データを受け取り、変わった文書だけを書き込む（画面にはすぐ反映）
export function write(next) {
  const prev = cache;
  cache = clone(next);
  syncCollection("users", prev.users, next.users);
  syncCollection(
    "deleted",
    Object.fromEntries(prev.deletedIds.map((id) => [id, { id }])),
    Object.fromEntries(next.deletedIds.map((id) => [id, { id }]))
  );
  syncCollection("scenarios", prev.scenarios, next.scenarios, { merge: true });
  syncCollection("messages", flatMessages(prev.messages), flatMessages(next.messages));
  syncCollection("notifications", byId(prev.notifications), byId(next.notifications), { merge: true });
  syncCollection("ai", prev.ai, next.ai);
  syncCollection("aiFeedback", byId(prev.aiFeedback), byId(next.aiFeedback));
}
