export function Footer() {
  return (
    <footer style={{
      padding: "14px 40px",
      background: "#0A0908",
      borderTop: "1px solid rgba(216,211,200,0.094)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "#D8D3C8",
      opacity: 0.55,
      flexShrink: 0,
    }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 5, height: 5, background: "#C84B1D", display: "inline-block" }} />
        SYSTEM ONLINE · ACCEPTING OPERATORS
      </span>
      <span>EST. 2024 · MATTVINCENTWALKER.COM</span>
    </footer>
  );
}
