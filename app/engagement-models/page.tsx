import Link from 'next/link';

type EngagementModel = {
  icon: string;
  title: string;
  description: string;
  theme: 'blue' | 'purple';
  highlighted: boolean;
  price: string;
  priceSub: string;
  buttonText: string;
  bestFor: string[];
  included: string[];
  commitment: string;
};

const engagementModels: EngagementModel[] = [
  {
    icon: '👤',
    title: 'Dedicated SDR Hire',
    description: 'Individual SDR placement for targeted campaigns',
    theme: 'blue',
    highlighted: false,
    price: 'Starting at $4,500/mo',
    priceSub: 'Per SDR placement',
    buttonText: 'Get Started',
    bestFor: [
      'Testing new markets or segments',
      'Filling specific skill gaps',
      'Starting small with low commitment',
      'Proof-of-concept initiatives',
    ],
    included: [
      'Certified, pre-trained SDR',
      'Full CRM and tool setup',
      'Performance reporting',
      'Management support',
    ],
    commitment: '30-day minimum, month-to-month thereafter',
  },
  {
    icon: '👥',
    title: 'Outsourced SDR Team',
    description: 'Dedicated teams for scalable pipeline generation',
    theme: 'blue',
    highlighted: true,
    price: 'Starting at $12,000/mo',
    priceSub: 'Per SDR (3 SDR minimum)',
    buttonText: 'Get Started',
    bestFor: [
      'Consistent pipeline requirements',
      'Scaling existing SDR function',
      'Enterprise-level deployments',
      'Multi-channel campaigns',
    ],
    included: [
      'Team of 3-10 certified SDRs',
      'Dedicated team management',
      'Advanced reporting & analytics',
      'SLA performance guarantees',
      'Weekly strategy optimization',
    ],
    commitment: '90-day minimum, quarterly thereafter',
  },
  {
    icon: '🌍',
    title: 'Regional / Vertical Pods',
    description: 'Specialized teams for specific markets or industries',
    theme: 'purple',
    highlighted: false,
    price: 'Custom Pricing',
    priceSub: 'Based on scope and specialization',
    buttonText: 'Learn More',
    bestFor: [
      'Geographic market expansion',
      'Industry-specific expertise',
      'Language or cultural requirements',
      'Complex, specialized campaigns',
    ],
    included: [
      'Region/industry specialized SDRs',
      'Local market intelligence',
      'Cultural and language alignment',
      'Specialized playbooks',
      'Regional performance optimization',
    ],
    commitment: '6-month minimum, semi-annual thereafter',
  },
];

const comparisonFeatures = [
  { feature: 'Team Size', values: ['1 SDR', '3-10 SDRs', '5-20 SDRs'] },
  { feature: 'Minimum Commitment', values: ['30 days', '90 days', '6 months'] },
  { feature: 'Management Level', values: ['Shared', 'Dedicated', 'Senior Team'] },
  { feature: 'Performance SLA', values: ['Standard', 'Guaranteed', 'Premium'] },
  { feature: 'Customization', values: ['Basic', 'Moderate', 'Full'] },
  { feature: 'Best For', values: ['Testing & POC', 'Scale & Consistency', 'Specialization'] },
];

const philosophyItems = [
    {
        icon: '💰',
        title: 'Value-Based Pricing',
        description: 'Costs scale with the value you receive. Higher-performing SDRs and more complex campaigns command premium rates.',
        quote: '"You pay for results, not just time. Our pricing reflects the quality and impact of our SDRs."',
    },
    {
        icon: '📊',
        title: 'Transparent Economics',
        description: 'No hidden fees, complex calculations, or surprise charges. Clear pricing with predictable monthly costs.',
        quote: '"What you see is what you pay. No nickel-and-diming or unexpected add-ons."',
    },
    {
        icon: '📈',
        title: 'ROI-Focused Structure',
        description: 'Pricing designed to ensure positive ROI from day one. We succeed when you succeed.',
        quote: '"Our fees are an investment in your growth. We only win when you win big."',
    },
];

const supportItems = [
    { icon: '🎯', title: 'Onboarding', description: 'Comprehensive product and process training for seamless integration.', bgColor: 'bg-blue-100' },
    { icon: '📊', title: 'Reporting', description: 'Real-time dashboards and weekly performance reviews with actionable insights.', bgColor: 'bg-green-100' },
    { icon: '🔄', title: 'Optimization', description: 'Continuous improvement through A/B testing, messaging refinement, and strategy adjustment.', bgColor: 'bg-purple-100' },
    { icon: '🛡️', title: 'Support', description: 'Dedicated account management with 24/7 availability for urgent needs.', bgColor: 'bg-orange-100' },
];

const faqItems = [
    {
        question: 'Can I start with one SDR and scale up?',
        answer: 'Absolutely. Many clients begin with our Dedicated SDR Hire model and scale to an Outsourced Team as their needs grow. We make scaling seamless with our existing SDRs and processes.',
    },
    {
        question: "What happens if an SDR doesn't perform?",
        answer: "We guarantee performance with all our models. If an SDR doesn't meet agreed-upon metrics within the first 30 days, we'll replace them at no additional cost. Our 94% retention rate reflects our commitment to quality.",
    },
    {
        question: 'Do you work with international companies?',
        answer: 'Yes, we serve companies in 50+ countries. Our Regional/Vertical Pods model is specifically designed for international expansion, with SDRs who understand local markets, languages, and business cultures.',
    },
    {
        question: 'How quickly can you deploy SDRs?',
        answer: 'Most deployments happen within 24 hours of finalizing requirements. Our pre-trained, certified SDRs are ready to start contributing immediately, unlike traditional hiring which can take 90+ days.',
    },
    {
        question: 'What tools and CRMs do you support?',
        answer: 'We support all major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. Our SDRs are proficient in outreach tools like Outreach, SalesLoft, and Reply.io, and communication platforms like Zoom and Microsoft Teams.',
    },
];

const ModelCard = ({ model }: { model: EngagementModel }) => {
  const themeClasses = {
    blue: {
      border: 'hover:border-blue-300',
      price: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      bestForBg: 'bg-blue-50',
      bestForTitle: 'text-blue-800',
      bestForText: 'text-blue-700',
      highlightedBestForBg: 'bg-blue-100',
    },
    purple: {
      border: 'hover:border-purple-300',
      price: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      bestForBg: 'bg-purple-50',
      bestForTitle: 'text-purple-800',
      bestForText: 'text-purple-700',
      highlightedBestForBg: 'bg-purple-100',
    },
  };

  const currentTheme = themeClasses[model.theme];

  const containerClasses = model.highlighted
    ? 'bg-blue-50 border-2 border-blue-300 rounded-lg p-8 relative'
    : `bg-white border-2 border-gray-200 rounded-lg p-8 ${currentTheme.border} transition-colors`;

  return (
    <div className={containerClasses}>
      {model.highlighted && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4" aria-hidden="true">{model.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
        <p className="text-gray-600">{model.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className={`${model.highlighted ? currentTheme.highlightedBestForBg : currentTheme.bestForBg} p-4 rounded-lg`}>
          <h4 className={`font-semibold mb-2 ${currentTheme.bestForTitle}`}>Best For:</h4>
          <ul className={`${currentTheme.bestForText} space-y-1 list-disc list-inside`}>
            {model.bestFor.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className={`${model.highlighted ? 'bg-white' : 'bg-gray-50'} p-4 rounded-lg`}>
          <h4 className="font-semibold mb-2">What's Included:</h4>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            {model.included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className={`${model.highlighted ? 'bg-green-100' : 'bg-green-50'} p-4 rounded-lg`}>
          <h4 className="font-semibold mb-2 text-green-800">Commitment:</h4>
          <p className="text-green-700">{model.commitment}</p>
        </div>
      </div>

      <div className="text-center">
        <div className={`text-3xl font-bold ${currentTheme.price} mb-2`}>{model.price}</div>
        <p className="text-sm text-gray-600 mb-4">{model.priceSub}</p>
        <Link
          href="/contact"
          className={`${currentTheme.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block`}
        >
          {model.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default function EngagementModels() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Choose Your Engagement Model</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Flexible commercial structures designed to match your business needs and growth stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#models" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Explore Models
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Request Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 bg-white" id="models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Three Ways to Engage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual SDRs to full regional teams, we have a model that fits your scale and objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {engagementModels.map((model) => <ModelCard key={model.title} model={model} />)}
          </div>

          {/* Model Comparison Table */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Model Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Dedicated SDR</th>
                    <th className="text-center py-4 px-4 font-semibold">Outsourced Team</th>
                    <th className="text-center py-4 px-4 font-semibold">Regional Pods</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={row.feature} className={index < comparisonFeatures.length - 1 ? "border-b border-gray-200" : ""}>
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      {row.values.map((value) => <td key={value} className="text-center py-4 px-4 text-sm">{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Pricing Philosophy</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              We believe pricing should reflect value delivered, not just hours worked. Our models are designed for predictable costs and measurable ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {philosophyItems.map(item => (
                <div key={item.title} className="text-center">
                    <div className="text-6xl mb-6" aria-hidden="true">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="opacity-90 mb-6">{item.description}</p>
                    <div className="bg-gray-800 p-4 rounded-lg"><p className="text-sm opacity-75">{item.quote}</p></div>
                </div>
            ))}
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Cost Comparison: SDR Global vs Traditional Hiring</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-400">Traditional Hiring (6 months)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Recruiting fees & advertising</span>
                    <span className="text-red-400">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Onboarding & training</span>
                    <span className="text-red-400">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lost productivity (ramp time)</span>
                    <span className="text-red-400">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failed hire replacement</span>
                    <span className="text-red-400">$20,000</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between font-semibold">
                    <span>Total first-year cost</span>
                    <span className="text-red-400">$90,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-400">SDR Global (6 months)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Certified SDR deployment</span>
                    <span className="text-green-400">$27,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Management & optimization</span>
                    <span className="text-green-400">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Performance guarantees</span>
                    <span className="text-green-400">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>24/7 availability</span>
                    <span className="text-green-400">Included</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between font-semibold">
                    <span>Total cost</span>
                    <span className="text-green-400">$27,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="text-3xl font-bold text-green-400 mb-2">70% Cost Savings</div>
              <p className="text-sm opacity-75">Compared to traditional SDR hiring over the first year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Implementation & Ongoing Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just deliver SDRs – we ensure your success with comprehensive support and optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {supportItems.map(item => (
                <div key={item.title} className="text-center">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqItems.map(item => (
                <div key={item.question} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Choose Your Model?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which engagement model best fits your business goals and start building your sales infrastructure.
          </p>

          <div className="bg-white text-blue-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Custom Proposal Process</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2" aria-hidden="true">📋</div>
                <div className="font-semibold">1. Requirements</div>
                <div className="text-sm text-gray-600">Share your goals and needs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2" aria-hidden="true">🎯</div>
                <div className="font-semibold">2. Recommendation</div>
                <div className="text-sm text-gray-600">We suggest the best model</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2" aria-hidden="true">📄</div>
                <div className="font-semibold">3. Proposal</div>
                <div className="text-sm text-gray-600">Custom pricing and terms</div>
              </div>
            </div>
          </div>

          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Request a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}