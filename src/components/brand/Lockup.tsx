import { Mark } from "./Mark";

interface LockupProps {
  orientation?: "horizontal" | "stacked";
  size?: number;
  dark?: boolean;
}

export function Lockup({ orientation = "horizontal", size = 1, dark = true }: LockupProps) {
  const fg     = dark ? "#F1EDE5" : "#0A0908";
  const signal = "#C84B1D";

  if (orientation === "stacked") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 * size }}>
        <Mark variant="v3" size={120 * size} dark={dark} />
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 600,
          fontSize: 16 * size,
          color: fg,
          letterSpacing: "0.1em",
        }}>
          SUPERHUMAN<span style={{ color: signal }}>/OS</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 * size }}>
      <Mark variant="v3" size={64 * size} dark={dark} />
      <div style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: 600,
        fontSize: 20 * size,
        color: fg,
        letterSpacing: "-0.005em",
        lineHeight: 1,
      }}>
        SUPERHUMAN<span style={{ color: signal }}>/OS</span>
      </div>
    </div>
  );
}
