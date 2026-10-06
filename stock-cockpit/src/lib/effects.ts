import { Capacitor } from "@capacitor/core";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

let ctx: AudioContext | null = null;

/** 約定時の短い効果音(Web Audio で合成するので音声ファイル不要) */
export function playFillSound(side: "buy" | "sell") {
  try {
    ctx ??= new AudioContext();
    const t = ctx.currentTime;
    const notes = side === "buy" ? [660, 990] : [880, 587];
    notes.forEach((f, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      osc.type = "sine";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.0001, t + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.12, t + i * 0.09 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.18);
      osc.connect(gain).connect(ctx!.destination);
      osc.start(t + i * 0.09);
      osc.stop(t + i * 0.09 + 0.2);
    });
  } catch {
    // 音が出せない環境では何もしない
  }
}

export function vibrate() {
  if (Capacitor.isNativePlatform()) {
    Haptics.impact({ style: ImpactStyle.Medium }).catch(() => {});
  } else if ("vibrate" in navigator) {
    navigator.vibrate?.(40);
  }
}
