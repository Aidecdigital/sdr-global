import Link from 'next/link';

type ProcessStepData = {
  step: number;
  title: string;
  description: string;
  details: {
    title: string;
    items: string[];
  };
  timeline: {
    title: string;
    description: string;
  };
  checklist: {
    icon: string;
    title: string;
    items: string[];
  };
  theme: {
    stepBg: string;
    timelineBg: string;
    timelineTitle: string;
    timelineText: string;
  };
};

const processSteps: ProcessStepData[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    description: 'We start with a comprehensive understanding of your business, targets, and sales process to ensure perfect alignment.',
    details: {
      title: 'What We Cover:',
      items: ['Ideal Customer Profile (ICP) analysis', 'Current sales process and tools', 'Target accounts and territories', 'Performance expectations and KPIs', 'Timeline and budget requirements'],
    },
    timeline: { title: 'Timeline: 1-2 hours', description: 'Virtual discovery call with your sales leadership team.' },
    checklist: { icon: '🔍', title: 'Discovery Checklist', items: ['Target market analysis', 'Sales methodology review', 'Technology stack assessment', 'Success metrics definition'] },
    theme: { stepBg: 'bg-blue-600', timelineBg: 'bg-blue-50', timelineTitle: 'text-blue-800', timelineText: 'text-blue-700' },
  },
  {
    step: 2,
    title: 'SDR Matching & Deployment',
    description: 'We match and deploy certified SDRs who are perfectly aligned with your requirements and ready to perform.',
    details: {
      title: 'Our Matching Process:',
      items: ['Industry and ICP expertise matching', 'Geographic and timezone alignment', 'Language and cultural fit assessment', 'Experience level and skill verification', 'Availability and commitment confirmation'],
    },
    timeline: { title: 'Timeline: 24 hours', description: 'From requirements approval to SDRs active in your systems.' },
    checklist: { icon: '🚀', title: 'Deployment Package', items: ['Pre-configured CRM access', 'Target account lists loaded', 'Sales playbooks and scripts', 'Communication tools setup', 'Manager introductions'] },
    theme: { stepBg: 'bg-green-600', timelineBg: 'bg-green-50', timelineTitle: 'text-green-800', timelineText: 'text-green-700' },
  },
  {
    step: 3,
    title: 'Performance Tracking',
    description: 'Real-time visibility into SDR performance with comprehensive reporting and proactive management.',
    details: {
      title: 'Daily Metrics Tracked:',
      items: ['Calls and conversations completed', 'Qualified meetings booked', 'Response rates and engagement', 'Pipeline contribution', 'Follow-up activities'],
    },
    timeline: { title: 'Reporting: Real-time', description: 'Daily performance dashboards and weekly strategy calls.' },
    checklist: { icon: '📊', title: 'Performance Dashboard', items: [] }, // Special case for progress bars
    theme: { stepBg: 'bg-purple-600', timelineBg: 'bg-purple-50', timelineTitle: 'text-purple-800', timelineText: 'text-purple-700' },
  },
  {
    step: 4,
    title: 'Optimization & Scale',
    description: 'Continuous improvement and seamless scaling as your business grows and requirements evolve.',
    details: {
      title: 'Optimization Services:',
      items: ['Weekly performance reviews and strategy sessions', 'A/B testing of messaging and approaches', 'Target account list expansion and refinement', 'Tool and technology optimization', 'SDR coaching and skill development'],
    },
    timeline: { title: 'Scaling: Instant', description: 'Add SDRs or expand territories with 24-hour deployment.' },
    checklist: { icon: '⚡', title: 'Scaling Capabilities', items: ['Add SDRs instantly', 'Expand to new territories', 'Adjust team composition', 'Scale down seamlessly', 'Maintain quality standards'] },
    theme: { stepBg: 'bg-orange-600', timelineBg: 'bg-orange-50', timelineTitle: 'text-orange-800', timelineText: 'text-orange-700' },
  },
];

const performanceMetrics = [
  { label: 'Activity Volume', value: 98, color: 'bg-green-600', textColor: 'text-green-600' },
  { label: 'Meeting Quality', value: 92, color: 'bg-blue-600', textColor: 'text-blue-600' },
  { label: 'Response Rates', value: 87, color: 'bg-purple-600', textColor: 'text-purple-600' },
];

const keyBenefits = [
  { icon: '⚡', title: 'Speed', description: 'From requirements to deployment in 24 hours – not 90+ days.', statistic: '97% Faster', color: 'text-blue-600' },
  { icon: '🎯', title: 'Quality', description: 'Pre-certified SDRs with proven track records and skills.', statistic: '94% Success Rate', color: 'text-green-600' },
  { icon: '🔄', title: 'Flexibility', description: 'Scale up or down instantly without long-term commitments.', statistic: 'Instant Scaling', color: 'text-purple-600' },
];

const commonConcerns = [
  { question: 'Will they understand our product/service?', solution: 'During discovery, we deeply understand your ICP and value proposition. SDRs receive comprehensive product training and can shadow your team before going live.' },
  { question: "What if they don't perform?", solution: 'All deployments include performance guarantees. We monitor daily and replace underperformers within 48 hours at no extra cost.' },
  { question: 'Can they integrate with our systems?', solution: 'We support all major CRMs (Salesforce, HubSpot, Pipedrive) and sales tools. Setup is included in deployment.' },
  { question: 'How do we manage remote SDRs?', solution: 'We provide management frameworks, reporting dashboards, and weekly strategy calls. You maintain full control while we handle execution.' },
  { question: "What about data security?", solution: 'SOC 2 compliant, NDA signed by all SDRs, encrypted communications, and regular security training.' },
  { question: 'Can we start small?', solution: 'Minimum 30-day commitment, start with 1 SDR, pay-as-you-grow model. No long-term contracts required.' },
];

const timelineSummary = [
  { day: 'Day 1', title: 'Discovery Call', color: 'bg-blue-600' },
  { day: 'Day 1-2', title: 'Requirements Finalized', color: 'bg-green-600' },
  { day: 'Day 2', title: 'SDR Matching', color: 'bg-purple-600' },
  { day: 'Day 2-3', title: 'Setup & Training', color: 'bg-orange-600' },
  { day: 'Day 3', title: 'Go Live', color: 'bg-red-600' },
  { day: 'Day 3-7', title: 'First Meetings', color: 'bg-indigo-600' },
  { day: 'Ongoing', title: 'Optimization', color: 'bg-pink-600' },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ProcessStep = ({ step, index }: { step: ProcessStepData; index: number }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
      <div className={isReversed ? 'md:order-2 md:pl-8' : 'md:pr-8'}>
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 ${step.theme.stepBg} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>{step.step}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">{step.description}</p>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{step.details.title}</h4>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">{step.details.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className={`${step.theme.timelineBg} p-4 rounded-lg`}>
            <h4 className={`font-semibold mb-2 ${step.theme.timelineTitle}`}>{step.timeline.title}</h4>
            <p className={step.theme.timelineText}>{step.timeline.description}</p>
          </div>
        </div>
      </div>
      <div className={`mt-8 md:mt-0 ${isReversed ? 'md:order-1' : ''}`}>
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="text-6xl mb-4" aria-hidden="true">{step.checklist.icon}</div>
          <h4 className="text-xl font-semibold mb-4">{step.checklist.title}</h4>
          {step.step === 3 ? (
            <div className="space-y-3">
              {performanceMetrics.map(metric => (
                <div key={metric.label}>
                  <div className="flex justify-between items-center">
                    <span>{metric.label}</span>
                    <span className={`font-semibold ${metric.textColor}`}>{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className={`${metric.color} h-2 rounded-full`} style={{ width: `${metric.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {step.checklist.items.map(item => (
                <div key={item} className="flex items-center"><CheckIcon /><span>{item}</span></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How SDR Global Works
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From discovery to deployment in 24 hours. Transparent, predictable, and results-driven.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#process"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                See the Process
              </Link>
              <Link
                href="/engagement-models"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We remove the complexity and risk from SDR hiring, so you can focus on growing your business.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.step} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We eliminate the friction and risk of traditional SDR hiring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyBenefits.map(benefit => (
              <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-6xl mb-6" aria-hidden="true">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className={`text-3xl font-bold ${benefit.color}`}>{benefit.statistic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Objections Addressed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Addressing Common Concerns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the objections – here's how we address them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1].map(col => (
              <div key={col} className="space-y-6">
                {commonConcerns.filter((_, i) => i % 2 === col).map(concern => (
                  <div key={concern.question} className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">"{concern.question}"</h4>
                    <p className="text-red-700"><strong>Our solution:</strong> {concern.solution}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Timeline to Success
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From first contact to generating pipeline in just 7 days.
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-4 text-center">
            {timelineSummary.map(item => (
              <div key={item.title} className={`${item.color} p-4 rounded-lg`}>
                <div className="text-2xl font-bold mb-2">{item.day}</div>
                <div className="text-sm">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-6xl mb-4" aria-hidden="true">🚀</div>
            <p className="text-xl opacity-90">
              Most clients see their first qualified meetings within 7 days of starting with SDR Global.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how SDR Global's proven process can transform your sales development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/engagement-models"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              See Engagement Options
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}