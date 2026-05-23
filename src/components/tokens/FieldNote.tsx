import { DotGrid } from "./DotGrid";

interface FieldNoteProps {
  n: number | string;
  date?: string;
  children: React.ReactNode;
}

export function FieldNote({ n, date, children }: FieldNoteProps) {
  const num = String(n).padStart(3, "0");
  return (
    <div style={{
      background: "#EDE6D2",
      color: "#0A0908",
      padding: "24px 24px 20px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <DotGrid color="#C9BFA3" spacing={14} opacity={0.45} />
      <div style={{ position: "relative" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.26em",
          color: "#5B4A36",
          opacity: 0.7,
          textTransform: "uppercase",
          marginBottom: 12,
        }}>
          <span>// FIELD NOTE</span>
          <span>{date ? `${num} / ${date}` : num}</span>
        </div>
        <div style={{
          fontSize: 15,
          lineHeight: 1.55,
          color: "#0A0908",
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
