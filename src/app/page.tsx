import { CompatibilitySection } from "@/components/CompatibilitySection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FeatureSection } from "@/components/FeaturesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MockupSection } from "@/components/MockupSection";
import { NotReplacementSection } from "@/components/NotReplacementSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { StructuredDataSection } from "@/components/StructuredDataSection";
import { ValidationBeforePurchaseSection } from "@/components/ValidationBeforePurchaseSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <CompatibilitySection />
        <SolutionSection />
        <MockupSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <FeatureSection />
        <StructuredDataSection />
        <NotReplacementSection />
        <ValidationBeforePurchaseSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
