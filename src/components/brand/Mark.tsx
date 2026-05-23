interface MarkProps {
  variant?: "v1" | "v2" | "v3";
  size?: number;
  dark?: boolean;
}

function MarkV1({ size, fg, accent }: { size: number; fg: string; accent: string }) {
  return (
    <svg viewBox="0 0 240 240" width={size} height={size} style={{ display: "block" }}>
      <rect x="20" y="20" width="200" height="200" fill="none" stroke={fg} strokeWidth="1.5" />
      <g stroke={fg} strokeWidth="1.5" fill="none">
        <path d="M20 40 L40 40 L40 20" />
        <path d="M200 20 L200 40 L220 40" />
        <path d="M220 200 L200 200 L200 220" />
        <path d="M40 220 L40 200 L20 200" />
      </g>
      <text
        x="120" y="158"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontWeight="600"
        fontSize="128"
        fill={fg}
        letterSpacing="-2"
      >S</text>
      <line x1="44" y1="120" x2="74" y2="120" stroke={fg} strokeWidth="1.5" />
      <line x1="166" y1="120" x2="196" y2="120" stroke={fg} strokeWidth="1.5" />
      <circle cx="200" cy="40" r="3.5" fill={accent} />
    </svg>
  );
}

function MarkV2({ size, fg, dim, accent }: { size: number; fg: string; dim: string; accent: string }) {
  const w = size;
  const h = size * (200 / 280);
  return (
    <svg viewBox="0 0 280 200" width={w} height={h} style={{ display: "block" }}>
      <rect x="10" y="10" width="260" height="180" rx="6" fill="none" stroke={fg} strokeWidth="1.5" />
      <line x1="10" y1="44" x2="270" y2="44" stroke={fg} strokeWidth="1" opacity="0.45" />
      <circle cx="26" cy="27" r="4" fill="none" stroke={fg} strokeWidth="1.2" />
      <circle cx="42" cy="27" r="4" fill="none" stroke={fg} strokeWidth="1.2" />
      <circle cx="58" cy="27" r="4" fill="none" stroke={fg} strokeWidth="1.2" />
      <text
        x="140" y="31"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="11"
        fill={dim}
        letterSpacing="3"
      >SUPERHUMAN.OS</text>
      <text
        x="28" y="125"
        fontFamily="'IBM Plex Mono', monospace"
        fontWeight="600"
        fontSize="56"
        fill={fg}
      >$ S/OS</text>
      <rect x="216" y="92" width="22" height="42" fill={accent} />
    </svg>
  );
}

function MarkV3({ size, fg, accent }: { size: number; fg: string; accent: string }) {
  return (
    <svg viewBox="0 0 240 240" width={size} height={size} style={{ display: "block" }}>
      <rect x="46" y="56"  width="148" height="22" fill={fg} />
      <rect x="46" y="109" width="148" height="22" fill={fg} />
      <rect x="46" y="162" width="148" height="22" fill={fg} />
      <rect x="46" y="78"  width="22"  height="31" fill={fg} />
      <rect x="172" y="131" width="22" height="31" fill={fg} />
      <rect x="194" y="34" width="14" height="14" fill={accent} />
    </svg>
  );
}

export function Mark({ variant = "v1", size = 64, dark = true }: MarkProps) {
  const fg     = dark ? "#F1EDE5" : "#0A0908";
  const dim    = dark ? "#D8D3C8" : "#75716A";
  const accent = "#C84B1D";

  if (variant === "v1") return <MarkV1 size={size} fg={fg} accent={accent} />;
  if (variant === "v2") return <MarkV2 size={size} fg={fg} dim={dim} accent={accent} />;
  return <MarkV3 size={size} fg={fg} accent={accent} />;
}
