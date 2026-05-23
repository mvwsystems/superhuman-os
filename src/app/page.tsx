import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroSplit } from "@/components/sections/HeroSplit";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <HeroSplit />
      </main>
      <Footer />
    </>
  );
}
