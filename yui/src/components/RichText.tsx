// AIの返答を表示する。``` で囲まれた部分だけコードとして出し、それ以外はそのまま改行を活かす
export function RichText({ text }: { text: string }) {
  const parts = text.split(/```/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <pre key={i} className="code">
            <code>{part.replace(/^[\w+-]*\n/, "")}</code>
          </pre>
        ) : (
          <span key={i} className="prose">
            {part}
          </span>
        ),
      )}
    </>
  );
}
