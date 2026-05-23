interface MetaStripProps {
  left?: string;
  right?: string;
  color?: string;
  dim?: boolean;
}

export function MetaStrip({ left, right, color = "#F1EDE5", dim = false }: MetaStripProps) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10.5,
      letterSpacing: "0.28em",
      color,
      opacity: dim ? 0.55 : 0.85,
      textTransform: "uppercase",
    }}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
