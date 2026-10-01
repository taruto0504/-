// 料金プランの定義(どのプランで、どの機能を、どこまで使えるか)
// ここを書き換えてデプロイすれば、アプリの表示とサーバー側の制限の両方に反映される。
//
// 例:AI評価を有料プランだけにしたい → free の aiDailyLimit を 0 にする
const PLANS = {
  free: {
    id: "free",
    label: "無料プラン",
    price: "無料",
    aiDailyLimit: 3,      // AI評価:1日に使える回数(0 にすると無料プランでは使えない)
    maxAttachments: 3,    // 1つのレポートに添付できる画像の数
    maxRecipients: 10,    // 1回で送信できる相手の数
    showAds: true,        // 広告を表示するか
  },
  pro: {
    id: "pro",
    label: "プロプラン",
    price: "準備中",       // 料金が決まったら表示用の文字を入れる(例: "月額 500円")
    aiDailyLimit: 30,
    maxAttachments: 6,
    maxRecipients: 50,
    showAds: false,
  },
};

const DEFAULT_PLAN = "free";

// entitlements/{uid} の内容から、いま有効なプランを決める
//   { plan: "pro", expiresAt: Timestamp(省略可=無期限), source: "manual" | "stripe" | "apple" | "google" }
// 期限切れ・不明なプラン・記録なしは無料プランとして扱う
function resolvePlan(entitlement, now = Date.now()) {
  const e = entitlement || {};
  const id = typeof e.plan === "string" && PLANS[e.plan] ? e.plan : DEFAULT_PLAN;
  let expiresAtMs = null;
  if (e.expiresAt) {
    expiresAtMs = typeof e.expiresAt.toMillis === "function" ? e.expiresAt.toMillis() : Number(new Date(e.expiresAt));
    if (!Number.isFinite(expiresAtMs)) expiresAtMs = 0; // 読めない期限は無効扱い
  }
  if (id !== DEFAULT_PLAN && expiresAtMs !== null && expiresAtMs <= now) {
    return { ...PLANS[DEFAULT_PLAN], expired: true, expiresAt: null };
  }
  return { ...PLANS[id], expired: false, expiresAt: id === DEFAULT_PLAN ? null : expiresAtMs };
}

module.exports = { PLANS, DEFAULT_PLAN, resolvePlan };
