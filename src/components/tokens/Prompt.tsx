interface PromptProps {
  command: string;
  dark?: boolean;
}

export function Prompt({ command, dark = true }: PromptProps) {
  const dim    = dark ? "#D8D3C8" : "#75716A";
  const output = dark ? "#F1EDE5" : "#14130E";
  return (
    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14 }}>
      <span style={{ color: "#C84B1D" }}>$</span>
      <span style={{ color: dim, opacity: 0.6 }}>&nbsp;~/sh-os&nbsp;</span>
      <span style={{ color: output }}>{command}</span>
    </span>
  );
}
