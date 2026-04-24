import { CompatibilitySection } from "@/components/CompatibilitySection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MockupSection } from "@/components/MockupSection";
import { ProblemSection } from "@/components/ProblemSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <HeroSection />
        <CompatibilitySection />
        <ProblemSection />
        <MockupSection />
        <DifferentialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
