import Link from "next/link";
import { Lockup } from "@/components/brand/Lockup";

const NAV_LINKS = [
  { href: "/work",       label: "WORK" },
  { href: "/notebook",   label: "NOTEBOOK" },
  { href: "/about",      label: "ABOUT" },
];

export function Nav() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 40px",
      height: 60,
      borderBottom: "1px solid rgba(216,211,200,0.094)",
      position: "relative",
      zIndex: 10,
      flexShrink: 0,
    }}>
      <Link href="/" style={{ textDecoration: "none" }} aria-label="Superhuman/OS — Home">
        <Lockup orientation="horizontal" size={0.8} dark={true} />
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Main navigation" style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "#D8D3C8",
              opacity: 0.85,
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/book"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.22em",
            color: "#F1EDE5",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid #F1EDE5",
            padding: "6px 14px",
          }}
        >
          BOOK
        </Link>
      </nav>
    </header>
  );
}
