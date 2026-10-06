import type { ReactNode } from "react";
import { useStore } from "../store";

/**
 * 値が変わると一瞬光る数字。key を値にして作り直すことで CSS アニメーションを再生する。
 */
export function Num({ value, text, dir, className = "" }: { value: number; text: string; dir?: "up" | "down" | "flat"; className?: string }) {
  const { state } = useStore();
  const glow = state.settings.effects !== "off" && dir && dir !== "flat";
  return (
    <span key={value} className={`num ${dir ?? ""} ${glow ? `flash-${dir}` : ""} ${className}`}>
      {text}
    </span>
  );
}

export function Delta({ v, children, className = "" }: { v: number; children: ReactNode; className?: string }) {
  return <span className={`num ${v > 0 ? "up" : v < 0 ? "down" : "flat"} ${className}`}>{children}</span>;
}
