// 端末内OCR。アプリに同梱した Tesseract（vendor/tesseract）で画像を読み、画像は外部に送らない。

let workerPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (window.Tesseract) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("読み取りの部品を読み込めませんでした"));
    document.head.appendChild(s);
  });
}

async function getWorker(onProgress) {
  if (!workerPromise) {
    workerPromise = (async () => {
      await loadScript("vendor/tesseract/tesseract.min.js");
      const base = new URL("vendor/tesseract/", location.href).href;
      const worker = await window.Tesseract.createWorker(["jpn", "eng"], 1, {
        workerPath: `${base}worker.min.js`,
        corePath: base,
        langPath: `${base}lang`,
        workerBlobURL: false,
        gzip: true,
        logger: (m) => onProgress?.(m),
      });
      // 1枚の画像の中の文字のまとまりを自動で見つける
      await worker.setParameters({ tessedit_pageseg_mode: "3", preserve_interword_spaces: "1" });
      return worker;
    })().catch((e) => {
      workerPromise = null;
      throw e;
    });
  }
  return workerPromise;
}

// 小さいスクリーンショットは拡大、大きい写真は縮小してから読む（精度と速さのため）
async function prepareImage(file) {
  const bitmap = await createImageBitmap(file);
  const longSide = Math.max(bitmap.width, bitmap.height);
  const scale = longSide < 1200 ? 1200 / longSide : longSide > 2600 ? 2600 / longSide : 1;
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  return { canvas, scale };
}

// 戻り値: { lines: [{ text, bbox, words }], width, height }（位置は元の画像の座標）
export async function recognize(file, onProgress) {
  const worker = await getWorker(onProgress);
  const { canvas, scale } = await prepareImage(file);
  const { data } = await worker.recognize(canvas, {}, { blocks: true, text: true });
  const unscale = (b) => ({ x0: b.x0 / scale, y0: b.y0 / scale, x1: b.x1 / scale, y1: b.y1 / scale });
  const lines = [];
  for (const block of data.blocks ?? []) {
    for (const para of block.paragraphs) {
      for (const line of para.lines) {
        lines.push({
          text: line.text.trim(),
          bbox: unscale(line.bbox),
          confidence: line.confidence,
          words: line.words.map((w) => ({ text: w.text, bbox: unscale(w.bbox), confidence: w.confidence })),
        });
      }
    }
  }
  return { lines, width: canvas.width / scale, height: canvas.height / scale };
}
