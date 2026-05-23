interface DotGridProps {
  color?: string;
  spacing?: number;
  dotSize?: number;
  opacity?: number;
  className?: string;
}

export function DotGrid({
  color = "#C9BFA3",
  spacing = 16,
  dotSize = 1.2,
  opacity = 0.55,
  className,
}: DotGridProps) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${spacing}' height='${spacing}'><circle cx='${spacing / 2}' cy='${spacing / 2}' r='${dotSize}' fill='${color}' opacity='${opacity}'/></svg>`;
  const enc = encodeURIComponent(svg);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,${enc}")`,
        backgroundSize: `${spacing}px ${spacing}px`,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
