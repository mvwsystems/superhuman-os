type PillState = "operating" | "signal" | "session" | "principle";

interface StatusPillProps {
  children: React.ReactNode;
  state?: PillState;
  color?: string;
  fg?: string;
}

const STATE_COLORS: Record<PillState, string> = {
  operating: "#C84B1D",
  signal:    "#C84B1D",
  session:   "#D8D3C8",
  principle: "#D8D3C8",
};

export function StatusPill({ children, state = "operating", color, fg = "#F1EDE5" }: StatusPillProps) {
  const dotColor = color ?? STATE_COLORS[state];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: fg,
      textTransform: "uppercase",
    }}>
      <span style={{ width: 6, height: 6, background: dotColor, display: "inline-block", flexShrink: 0 }} />
      {children}
    </span>
  );
}
