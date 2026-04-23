import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background" data-ocid="landing.page">
      <HeroSection />
      <MetricsSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <CTABannerSection />
    </div>
  );
}
