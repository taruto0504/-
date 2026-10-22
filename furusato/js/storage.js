// 端末内の保存。履歴は数字だけ、AIのAPIキーは暗号化して保存する。
// 暗号鍵は取り出せない形（extractable: false）で IndexedDB に置き、localStorage には暗号文だけを置く。

const PREFIX = "furusato.";

export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    /* 保存できない環境では何もしない */
  }
}

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("furusato-secure", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("keys");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function cryptoKey() {
  const db = await openDb();
  const get = () =>
    new Promise((resolve, reject) => {
      const r = db.transaction("keys").objectStore("keys").get("aes");
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });
  let key = await get();
  if (!key) {
    key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    await new Promise((resolve, reject) => {
      const tx = db.transaction("keys", "readwrite");
      tx.objectStore("keys").put(key, "aes");
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }
  return key;
}

const b64 = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

export async function saveSecret(name, value) {
  if (!value) {
    remove(`secret.${name}`);
    return;
  }
  const key = await cryptoKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(value));
  save(`secret.${name}`, { iv: b64(iv), data: b64(data) });
}

export async function loadSecret(name) {
  const stored = load(`secret.${name}`, null);
  if (!stored) return "";
  try {
    const key = await cryptoKey();
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(stored.iv) }, key, unb64(stored.data));
    return new TextDecoder().decode(plain);
  } catch {
    return "";
  }
}
