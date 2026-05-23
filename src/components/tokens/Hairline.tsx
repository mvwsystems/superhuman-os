interface HairlineProps {
  color?: string;
  opacity?: number;
}

export function Hairline({ color = "#D8D3C8", opacity = 0.25 }: HairlineProps) {
  return <div style={{ height: 1, background: color, opacity, width: "100%" }} aria-hidden="true" />;
}
