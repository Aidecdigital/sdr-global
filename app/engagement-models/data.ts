import { EngagementModel } from './types';

export const engagementModels: EngagementModel[] = [
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

export const comparisonFeatures = [
  { feature: 'Team Size', values: ['1 SDR', '3-10 SDRs', '5-20 SDRs'] },
  { feature: 'Minimum Commitment', values: ['30 days', '90 days', '6 months'] },
  { feature: 'Management Level', values: ['Shared', 'Dedicated', 'Senior Team'] },
  { feature: 'Performance SLA', values: ['Standard', 'Guaranteed', 'Premium'] },
  { feature: 'Customization', values: ['Basic', 'Moderate', 'Full'] },
  { feature: 'Best For', values: ['Testing & POC', 'Scale & Consistency', 'Specialization'] },
];

export const philosophyItems = [
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

export const supportItems = [
    { icon: '🎯', title: 'Onboarding', description: 'Comprehensive product and process training for seamless integration.', bgColor: 'bg-blue-100' },
    { icon: '📊', title: 'Reporting', description: 'Real-time dashboards and weekly performance reviews with actionable insights.', bgColor: 'bg-green-100' },
    { icon: '🔄', title: 'Optimization', description: 'Continuous improvement through A/B testing, messaging refinement, and strategy adjustment.', bgColor: 'bg-purple-100' },
    { icon: '🛡️', title: 'Support', description: 'Dedicated account management with 24/7 availability for urgent needs.', bgColor: 'bg-orange-100' },
];

export const faqItems = [
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