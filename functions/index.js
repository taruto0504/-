// 医療教育アプリのサーバー側処理
// AI評価(evaluateReport):ログイン中の利用者からの依頼で、レポートを Claude に評価させる。
// API キーはブラウザに置けないため、必ずこのサーバー側(Cloud Functions)から呼び出す。
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const Anthropic = require("@anthropic-ai/sdk");
const { EvaluationError, normalizeReport, evaluateReport } = require("./evaluate");

initializeApp();
const db = getFirestore();

// firebase functions:secrets:set ANTHROPIC_API_KEY で登録する
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

// 1人あたり1日に評価できる回数(費用の使いすぎ防止)。必要に応じて変更する
const DAILY_LIMIT = 20;

function todayJst() {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

// 回数を1つ使う。上限に達していればエラー
async function consumeQuota(uid) {
  const ref = db.collection("aiUsage").doc(uid);
  const day = todayJst();
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    const count = data.day === day ? (data.count || 0) : 0;
    if (count >= DAILY_LIMIT) {
      throw new HttpsError("resource-exhausted", `AI評価は1日${DAILY_LIMIT}回までです。明日またお試しください`);
    }
    tx.set(ref, { day, count: count + 1, updatedAt: FieldValue.serverTimestamp() });
    return DAILY_LIMIT - count - 1;
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

exports.evaluateReport = onCall(
  {
    region: "asia-northeast1",
    secrets: [ANTHROPIC_API_KEY],
    // このアプリ以外からの呼び出しを拒否する(App Check)。ローカルのエミュレータでのテスト時だけ無効
    enforceAppCheck: process.env.FUNCTIONS_EMULATOR !== "true",
    timeoutSeconds: 300,
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

    const remaining = await consumeQuota(uid);
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
    console.log("evaluateReport ok", { uid, reportId: data.reportId || null, usage: result.usage });
    return { review: result.review, model: result.model, reviewId, remaining };
  }
);
