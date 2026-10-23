// 端末内への保存。設定・会話は localStorage、APIキーは暗号化、VRMファイルは IndexedDB に置く。
// どこにも送らない（クラウド同期はフェーズ5で、端末側で暗号化してから行う）。

const PREFIX = "yui.";

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? { ...fallbackShape(fallback), ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

// 配列や数値はそのまま、オブジェクトは新しく増えた項目を初期値で補う
function fallbackShape<T>(fallback: T): T {
  return fallback && typeof fallback === "object" && !Array.isArray(fallback) ? fallback : ({} as T);
}

export function loadList<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function save(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* 保存できない環境（プライベートモードなど）では何もしない */
  }
}

export function remove(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    /* 保存できない環境では何もしない */
  }
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("yui", 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore("keys");
      req.result.createObjectStore("files");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbGet<T>(store: string, key: string): Promise<T | undefined> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const r = db.transaction(store).objectStore(store).get(key);
    r.onsuccess = () => resolve(r.result as T | undefined);
    r.onerror = () => reject(r.error);
  });
}

async function dbPut(store: string, key: string, value: unknown): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readwrite");
    if (value === undefined) tx.objectStore(store).delete(key);
    else tx.objectStore(store).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// 取り出しできない（extractable: false）暗号鍵を端末内に作り、APIキーはこの鍵で暗号化して保存する
async function cryptoKey(): Promise<CryptoKey> {
  let key = await dbGet<CryptoKey>("keys", "aes");
  if (!key) {
    key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    await dbPut("keys", "aes", key);
  }
  return key;
}

const b64 = (bytes: ArrayBuffer | Uint8Array) => btoa(String.fromCharCode(...new Uint8Array(bytes)));
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

export async function saveSecret(name: string, value: string): Promise<void> {
  if (!value) {
    remove(`secret.${name}`);
    return;
  }
  const key = await cryptoKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(value));
  save(`secret.${name}`, { iv: b64(iv), data: b64(data) });
}

export async function loadSecret(name: string): Promise<string> {
  const stored = load<{ iv: string; data: string } | null>(`secret.${name}`, null);
  if (!stored) return "";
  try {
    const key = await cryptoKey();
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(stored.iv) }, key, unb64(stored.data));
    return new TextDecoder().decode(plain);
  } catch {
    return "";
  }
}

export const saveFile = (name: string, file: Blob | undefined) => dbPut("files", name, file);
export const loadFile = (name: string) => dbGet<Blob>("files", name).catch(() => undefined);
