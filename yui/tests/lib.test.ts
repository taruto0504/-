import { describe, expect, it } from "vitest";
import { estimateYen, readSse, trimHistory, type ChatMessage } from "../src/lib/ai";
import { breakLine, formatClock, greeting, timedLine } from "../src/lib/clock";
import { buildSystemPrompt } from "../src/lib/prompt";
import { DEFAULT_PERSONA } from "../src/lib/settings";

describe("時計", () => {
  it("日付・曜日・秒を2桁で出す", () => {
    const c = formatClock(new Date(2026, 9, 3, 7, 5, 9), true);
    expect(c).toEqual({ time: "07:05:09", date: "2026.10.03", week: "SAT", weekJa: "土" });
    expect(formatClock(new Date(2026, 9, 3, 7, 5, 9), false).time).toBe("07:05");
  });
  it("時間帯であいさつを変える", () => {
    expect(greeting(new Date(2026, 0, 1, 6), "マスター")).toContain("おはよう、マスター");
    expect(greeting(new Date(2026, 0, 1, 13), "あなた")).toContain("こんにちは");
    expect(greeting(new Date(2026, 0, 1, 20), "あなた")).toContain("おかえり");
    expect(greeting(new Date(2026, 0, 1, 2), "あなた")).toContain("無理しないで");
  });
  it("決まった時刻ちょうどだけ声をかける", () => {
    expect(timedLine(new Date(2026, 0, 1, 15, 0), "あなた")).toContain("休憩");
    expect(timedLine(new Date(2026, 0, 1, 15, 1), "あなた")).toBeNull();
    expect(breakLine(90)).toContain("90分");
    expect(breakLine(91)).toBeNull();
    expect(breakLine(0)).toBeNull();
  });
});

describe("AIへの指示", () => {
  it("名前・呼び方・選んだ目的・安全のルールを入れる", () => {
    const s = buildSystemPrompt({ ...DEFAULT_PERSONA, name: "ミカ", userCall: "先輩", purposes: ["study", "invest"] }, new Date(2026, 9, 23, 9, 30));
    expect(s).toContain("「ミカ」");
    expect(s).toContain("「先輩」と呼ぶ");
    expect(s).toContain("勉強：");
    expect(s).toContain("投資ニュース：");
    expect(s).not.toContain("書類：");
    expect(s).toContain("診断・治療");
    expect(s).toContain("売買の助言はしない");
    expect(s).toContain("2026年10月23日（金）09:30");
    expect(s).not.toMatch(/\n\n\n/);
  });
  it("目的を1つも選ばなければ雑談にする", () => {
    expect(buildSystemPrompt({ ...DEFAULT_PERSONA, purposes: [] })).toContain("雑談：");
  });
});

describe("会話の送り方", () => {
  it("直近の分だけ送り、最初はユーザーの発言にする", () => {
    const ms: ChatMessage[] = Array.from({ length: 25 }, (_, i) => ({ role: i % 2 ? "assistant" : "user", content: `m${i}` }));
    const out = trimHistory(ms, 20);
    expect(out[0].role).toBe("user");
    expect(out.at(-1)!.content).toBe("m24");
    expect(out.length).toBe(19);
    expect(trimHistory([{ role: "assistant", content: "" }, { role: "user", content: "hi" }])).toEqual([{ role: "user", content: "hi" }]);
  });

  it("途中で区切られて届いた SSE も1件ずつ読む", async () => {
    const chunks = ['data: {"a":1}\n\nda', 'ta: {"a":2}\r\n\r\n', "event: x\ndata: [DONE]\n\n", 'data: {"a":3}'];
    const body = new ReadableStream({
      start(c) {
        for (const ch of chunks) c.enqueue(new TextEncoder().encode(ch));
        c.close();
      },
    });
    const got: unknown[] = [];
    await readSse(new Response(body), (d) => got.push(d));
    expect(got).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]); // 最後の空行がなくても終わりで読む
  });

  it("単価が入っている時だけ利用料の目安を出す", () => {
    expect(estimateYen({ input: 1_000_000, output: 500_000 }, 450, 2250)).toBeCloseTo(1575);
    expect(estimateYen({ input: 10, output: 10 }, null, 100)).toBeNull();
  });
});
