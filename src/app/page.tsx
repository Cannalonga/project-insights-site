import { CompatibilitySection } from "@/components/CompatibilitySection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FeatureSection } from "@/components/FeaturesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MockupSection } from "@/components/MockupSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <HeroSection />
        <CompatibilitySection />
        <ProblemSection />
        <SolutionSection />
        <MockupSection />
        <DifferentialsSection />
        <FeatureSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
