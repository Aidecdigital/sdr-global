import {
  HeroSection,
  ModelsSection,
  InvestmentPhilosophySection,
  SupportSection,
  FaqSection,
  FinalCtaSection,
} from './components';

export default function EngagementModelsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ModelsSection />
      <InvestmentPhilosophySection />
      <SupportSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}