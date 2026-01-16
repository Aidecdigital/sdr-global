import {
  HeroSection,
  ModelsSection,
  PricingPhilosophySection,
  SupportSection,
  FaqSection,
  FinalCtaSection,
} from './components';

export default function EngagementModelsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ModelsSection />
      <PricingPhilosophySection />
      <SupportSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}