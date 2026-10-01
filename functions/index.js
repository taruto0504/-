// 医療教育アプリのサーバー側処理
// - evaluateReport:ログイン中の利用者からの依頼で、レポートを Claude に評価させる(AI評価)
// - getMyPlan     :自分の料金プランと、今日の利用状況を返す
// API キーはブラウザに置けないため、AI の呼び出しは必ずこのサーバー側(Cloud Functions)で行う。
// 費用がかかる機能(AI評価)の回数制限は、改ざんされないようサーバー側で判定する。
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const Anthropic = require("@anthropic-ai/sdk");
const { EvaluationError, normalizeReport, evaluateReport } = require("./evaluate");
const { PLANS, resolvePlan } = require("./plans");

initializeApp();
const db = getFirestore();

// firebase functions:secrets:set ANTHROPIC_API_KEY で登録する
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

const COMMON_OPTIONS = {
  region: "asia-northeast1",
  // このアプリ以外からの呼び出しを拒否する(App Check)。ローカルのエミュレータでのテスト時だけ無効
  enforceAppCheck: process.env.FUNCTIONS_EMULATOR !== "true",
};

function todayJst() {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

// entitlements/{uid}(サーバーや管理者だけが書き込める)から、いま有効なプランを取得する
async function getUserPlan(uid) {
  const snap = await db.collection("entitlements").doc(uid).get();
  return resolvePlan(snap.exists ? snap.data() : null);
}

async function getAiUsedToday(uid) {
  const snap = await db.collection("aiUsage").doc(uid).get();
  const data = snap.exists ? snap.data() : {};
  return data.day === todayJst() ? (data.count || 0) : 0;
}

// AI評価の回数を1つ使う。プランの上限に達していればエラー
async function consumeQuota(uid, plan) {
  if (plan.aiDailyLimit <= 0) {
    throw new HttpsError("permission-denied", `AI評価は${PLANS.pro.label}の機能です`, { reason: "upgrade_required", plan: plan.id });
  }
  const ref = db.collection("aiUsage").doc(uid);
  const day = todayJst();
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    const count = data.day === day ? (data.count || 0) : 0;
    if (count >= plan.aiDailyLimit) {
      const upgradeHint = plan.id === "free" ? `(${PLANS.pro.label}なら1日${PLANS.pro.aiDailyLimit}回まで使えます)` : "";
      throw new HttpsError("resource-exhausted", `AI評価は${plan.label}では1日${plan.aiDailyLimit}回までです。明日またお試しください${upgradeHint}`,
        { reason: "daily_limit", plan: plan.id, limit: plan.aiDailyLimit });
    }
    tx.set(ref, { day, count: count + 1, updatedAt: FieldValue.serverTimestamp() });
    return plan.aiDailyLimit - count - 1;
  });
}

// AIの呼び出しに失敗したときは、使った回数を戻す
async function refundQuota(uid) {
  const ref = db.collection("aiUsage").doc(uid);
  const day = todayJst();
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists && snap.data().day === day && snap.data().count > 0) {
      tx.update(ref, { count: FieldValue.increment(-1) });
    }
  }).catch((e) => console.error("refundQuota", e));
}

// アプリ側で表示に使うプラン情報(ブラウザに渡してよい項目だけ)
function publicPlan(p) {
  return { id: p.id, label: p.label, price: p.price, aiDailyLimit: p.aiDailyLimit, maxAttachments: p.maxAttachments, maxRecipients: p.maxRecipients, showAds: p.showAds };
}

exports.getMyPlan = onCall(COMMON_OPTIONS, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "ログインしてください");
  const uid = request.auth.uid;
  const [plan, aiUsed] = await Promise.all([getUserPlan(uid), getAiUsedToday(uid)]);
  return {
    plan: { ...publicPlan(plan), expiresAt: plan.expiresAt, expired: plan.expired },
    usage: { aiUsedToday: aiUsed, aiRemainingToday: Math.max(0, plan.aiDailyLimit - aiUsed) },
    plans: Object.values(PLANS).map(publicPlan), // プランの比較表に使う
  };
});

exports.evaluateReport = onCall(
  {
    ...COMMON_OPTIONS,
    secrets: [ANTHROPIC_API_KEY],
    timeoutSeconds: 540, // ガイドラインのWeb検索を含めると1〜3分ほどかかるため長めに
    memory: "512MiB",
    maxInstances: 10,
  },
  async (request) => {
    if (!request.auth) throw new HttpsError("unauthenticated", "ログインしてください");
    const uid = request.auth.uid;
    const data = request.data || {};

    const userSnap = await db.collection("users").doc(uid).get();
    if (!userSnap.exists) throw new HttpsError("permission-denied", "プロフィールが見つかりません");
    const me = userSnap.data();

    // 評価対象:保存済みレポート(reportId)か、作成中の下書き(draft)
    let source;
    let reportRef = null;
    if (typeof data.reportId === "string" && data.reportId) {
      reportRef = db.collection("reports").doc(data.reportId);
      const snap = await reportRef.get();
      if (!snap.exists) throw new HttpsError("not-found", "レポートが見つかりません");
      const r = snap.data();
      const isAuthor = r.authorUid === uid;
      const isRecipient = Array.isArray(r.recipientIdList) && r.recipientIdList.includes(me.personalId);
      if (!isAuthor && !isRecipient) throw new HttpsError("permission-denied", "このレポートを評価する権限がありません");
      source = r;
    } else if (data.draft) {
      source = data.draft;
    } else {
      throw new HttpsError("invalid-argument", "評価するレポートを指定してください");
    }

    let report;
    try {
      report = normalizeReport(source);
    } catch (e) {
      if (e instanceof EvaluationError) throw new HttpsError(e.code, e.message);
      throw e;
    }

    const plan = await getUserPlan(uid);
    const remaining = await consumeQuota(uid, plan);
    let result;
    try {
      const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });
      result = await evaluateReport(client, report, { occupation: me.occupation });
    } catch (e) {
      await refundQuota(uid);
      if (e instanceof EvaluationError) throw new HttpsError(e.code, e.message);
      console.error("evaluateReport failed", e);
      throw new HttpsError("internal", "AI評価に失敗しました");
    }

    // 保存済みレポートの評価は、作成者と受信者が後から見られるように保存する
    let reviewId = null;
    if (reportRef) {
      const saved = await reportRef.collection("aiReviews").add({
        review: result.review,
        model: result.model,
        requestedByUid: uid,
        requestedByName: me.name || "",
        reportTitle: report.title,
        createdAt: FieldValue.serverTimestamp(),
      });
      reviewId = saved.id;
    }
    console.log("evaluateReport ok", { uid, plan: plan.id, reportId: data.reportId || null, usage: result.usage });
    return { review: result.review, model: result.model, reviewId, remaining, plan: plan.id };
  }
);
