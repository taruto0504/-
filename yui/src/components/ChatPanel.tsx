import { useEffect, useRef, useState, type FormEvent } from "react";
import { RichText } from "./RichText";

export interface LogMessage {
  role: "user" | "assistant";
  content: string;
  at: number;
  error?: boolean;
}

interface Props {
  name: string;
  messages: LogMessage[];
  busy: boolean;
  open: boolean;
  onToggle: () => void;
  onSend: (text: string) => void;
  onStop: () => void;
  onHeight: (px: number) => void;
}

// 画面下の会話パネル。閉じている時は入力欄だけ、開くと履歴も出す
export function ChatPanel({ name, messages, busy, open, onToggle, onSend, onStop, onHeight }: Props) {
  const [text, setText] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const composing = useRef(false);

  useEffect(() => {
    const el = panel.current!;
    const ro = new ResizeObserver(() => onHeight(el.getBoundingClientRect().height));
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeight]);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [messages, open]);

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    const t = text.trim();
    if (!t || busy) return;
    onSend(t);
    setText("");
  };

  return (
    <div className={`chat glass ${open ? "open" : ""}`} ref={panel}>
      {open && (
        <div className="chat-log" ref={log}>
          {messages.length === 0 && <p className="chat-empty">ここに会話の履歴が残ります</p>}
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.role} ${m.error ? "error" : ""}`}>
              <div className="msg-who">{m.role === "user" ? "YOU" : name}</div>
              <div className="msg-body">
                <RichText text={m.content || "…"} />
              </div>
            </div>
          ))}
        </div>
      )}
      <form className="chat-input" onSubmit={submit}>
        <button type="button" className="icon-btn" onClick={onToggle} aria-label={open ? "履歴を閉じる" : "履歴を開く"} aria-expanded={open}>
          {open ? "▾" : "▴"}
        </button>
        <textarea
          rows={1}
          value={text}
          placeholder={`${name}に話しかける…`}
          onChange={(e) => setText(e.target.value)}
          onCompositionStart={() => (composing.current = true)}
          onCompositionEnd={() => (composing.current = false)}
          onKeyDown={(e) => {
            // Enter で送信、Shift+Enter で改行。日本語の変換中は送らない
            if (e.key === "Enter" && !e.shiftKey && !composing.current && !e.nativeEvent.isComposing) {
              e.preventDefault();
              submit();
            }
          }}
        />
        {busy ? (
          <button type="button" className="send-btn stop" onClick={onStop}>
            停止
          </button>
        ) : (
          <button type="submit" className="send-btn" disabled={!text.trim()}>
            送信
          </button>
        )}
      </form>
      <p className="chat-note">患者情報など業務上の個人情報は入力しないでください</p>
    </div>
  );
}
