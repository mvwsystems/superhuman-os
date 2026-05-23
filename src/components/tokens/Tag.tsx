interface TagProps {
  children: React.ReactNode;
  color?: string;
}

export function Tag({ children, color = "#C84B1D" }: TagProps) {
  return (
    <span style={{
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.25em",
      color,
      textTransform: "uppercase",
    }}>
      // {children}
    </span>
  );
}
