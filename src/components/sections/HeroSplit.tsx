import Link from "next/link";
import { Tag } from "@/components/tokens/Tag";
import { DotGrid } from "@/components/tokens/DotGrid";

export function HeroSplit() {
  return (
    <section style={{ padding: "32px 40px 24px", position: "relative", overflow: "hidden", flex: 1 }}>
      <DotGrid color="#F1EDE5" spacing={28} opacity={0.05} />

      {/* Terminal window */}
      <div style={{
        position: "relative",
        border: "1px solid rgba(216,211,200,0.157)",
        background: "#14130E",
        height: "100%",
        display: "grid",
        gridTemplateRows: "34px 1fr",
        minHeight: 520,
      }}>
        {/* Terminal chrome */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "0 14px",
          borderBottom: "1px solid rgba(216,211,200,0.122)",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 9, height: 9, borderRadius: 5, background: "rgba(216,211,200,0.333)" }} />
            ))}
          </div>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10.5,
            letterSpacing: "0.22em",
            color: "#D8D3C8",
            opacity: 0.55,
            textTransform: "uppercase",
          }}>
            ~/superhuman-os/operator — 88×24
          </span>
          <span style={{
            marginLeft: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.22em",
            color: "#D8D3C8",
            opacity: 0.6,
          }}>
            <span style={{ width: 5, height: 5, background: "#C84B1D", display: "inline-block" }} />
            SESSION 037
          </span>
        </div>

        {/* Terminal body */}
        <div style={{
          padding: "40px 48px 40px",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>
          {/* Left — headline */}
          <div>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "#C84B1D",
              marginBottom: 22,
            }}>
              ~ $ whoami
            </div>
            <div style={{ marginBottom: 18 }}>
              <Tag>For the quietly overwhelmed expert</Tag>
            </div>
            <h1 style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 600,
              fontSize: 64,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              marginBottom: 22,
              color: "#F1EDE5",
              margin: "0 0 22px",
            }}>
              The system<br />
              that runs<br />
              <span style={{ color: "#C84B1D" }}>quietly</span> beneath<br />
              your business.
            </h1>
            <p style={{
              fontSize: 16,
              color: "#D8D3C8",
              opacity: 0.85,
              lineHeight: 1.55,
              maxWidth: 460,
              marginBottom: 28,
              margin: "0 0 28px",
            }}>
              Twelve weeks. We rebuild your inner operating state and your outer
              operating system at the same time. Then we make it compound.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Link
                href="/book"
                style={{
                  background: "#C84B1D",
                  color: "#F1EDE5",
                  padding: "12px 20px",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                &gt;&nbsp;&nbsp;BOOK_INTRO
              </Link>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                color: "#D8D3C8",
                opacity: 0.6,
              }}>
                30 MIN · NO PITCH
              </span>
            </div>
          </div>

          {/* Right — field note + install spec */}
          <div style={{ position: "relative" }}>
            {/* Cream field note */}
            <div style={{
              background: "#EDE6D2",
              color: "#0A0908",
              padding: "16px 18px 14px",
              position: "relative",
              overflow: "hidden",
              transform: "rotate(-1.2deg)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(0,0,0,0.2)",
              marginBottom: 22,
            }}>
              <DotGrid color="#C9BFA3" spacing={12} opacity={0.45} />
              <div style={{ position: "relative" }}>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "0.26em",
                  color: "#5B4A36",
                  opacity: 0.7,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <span>// From the notebook</span>
                  <span>037</span>
                </div>
                <div style={{
                  borderLeft: "2px solid #C84B1D",
                  paddingLeft: 12,
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                  color: "#0A0908",
                }}>
                  You cannot out-tool a nervous system that&apos;s still in survival mode.
                </div>
                <div style={{
                  marginTop: 10,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: "#5B4A36",
                  opacity: 0.7,
                }}>
                  READ THE LETTER →
                </div>
              </div>
            </div>

            {/* Install spec */}
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              lineHeight: 1.75,
              color: "#F1EDE5",
            }}>
              <div style={{ color: "#C84B1D", marginBottom: 8 }}>// the install</div>
              <div style={{ opacity: 0.6, marginBottom: 10 }}>~ $ specs --verbose</div>
              <div><span style={{ color: "#C84B1D" }}>[01]</span> <span style={{ color: "#D8D3C8" }}>nervous_system.diagnose()</span></div>
              <div><span style={{ color: "#C84B1D" }}>[02]</span> <span style={{ color: "#D8D3C8" }}>root_cause.attack()</span></div>
              <div><span style={{ color: "#C84B1D" }}>[03]</span> <span style={{ color: "#D8D3C8" }}>systems.install --calm</span></div>
              <div><span style={{ color: "#C84B1D" }}>[04]</span> <span style={{ color: "#D8D3C8" }}>leverage.compound()</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
