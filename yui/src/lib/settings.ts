// 利用者が変えられる設定の形と初期値

export type ProviderId = "anthropic" | "openai" | "gemini";
export type PurposeId = "schedule" | "documents" | "study" | "dev" | "invest" | "chat";
export type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface Persona {
  name: string;
  userCall: string; // ユーザーの呼び方
  tone: string; // 口調
  personality: string; // 性格（自由記述）
  purposes: PurposeId[];
}

export interface AiSettings {
  provider: ProviderId;
  models: Record<ProviderId, string>;
  // 利用料の目安を出すための単価（100万トークンあたり・円）。空なら量だけ表示
  priceIn: number | null;
  priceOut: number | null;
}

export interface DisplaySettings {
  clock: boolean;
  clockCorner: Corner;
  seconds: boolean;
  powerSave: boolean;
  voiceLines: boolean; // 時刻に合わせた声かけ
}

export const PURPOSES: { id: PurposeId; label: string }[] = [
  { id: "schedule", label: "日程管理" },
  { id: "documents", label: "書類" },
  { id: "study", label: "勉強" },
  { id: "dev", label: "アプリ開発" },
  { id: "invest", label: "投資ニュース" },
  { id: "chat", label: "雑談" },
];

export const DEFAULT_PERSONA: Persona = {
  name: "ユイ",
  userCall: "あなた",
  tone: "やわらかいタメ口",
  personality: "明るくて気が利く。相手のペースに合わせ、がんばりすぎていたら休むよう声をかける。",
  purposes: ["schedule", "documents", "study", "dev", "chat"],
};

export const DEFAULT_AI: AiSettings = {
  provider: "anthropic",
  models: { anthropic: "claude-sonnet-5-5", openai: "gpt-5", gemini: "gemini-2.5-flash" },
  priceIn: null,
  priceOut: null,
};

export const DEFAULT_DISPLAY: DisplaySettings = {
  clock: true,
  clockCorner: "top-left",
  seconds: true,
  powerSave: false,
  voiceLines: true,
};
