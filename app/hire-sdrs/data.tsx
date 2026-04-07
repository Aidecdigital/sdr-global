import { EngagementModel, ProcessStepData } from "./types";

export const faqItems = [
  {
    question: "How quickly can you deploy SDRs to my team?",
    answer: "We can have pre-vetted, certified SDRs deployed and active in your CRM within 24-48 hours of approval. This includes all onboarding, tool setup, and training on your sales process.",
  },
  {
    question: "What if it doesn't work out? Can we make changes?",
    answer: "Absolutely. We offer a replacement guarantee on all SDR placements. If an SDR isn't meeting expectations within the first 30 days, we'll replace them at no additional cost.",
  },
  {
    question: "How do you match SDRs to our specific needs?",
    answer: "We use a combination of data-driven analysis and human expertise, assessing your ICP, sales process, and team dynamics to find the best fit from our pool of vetted professionals.",
  },
  {
    question: "Do SDRs have access to our CRM and systems?",
    answer: "Yes, part of our first-day deployment includes full setup of your CRM (Salesforce, HubSpot, etc.), email, and calling software.",
  },
  {
    question: "Can we scale up or down if our needs change?",
    answer: "Yes. You can add SDRs or adjust team composition. Most tiers allow quarterly adjustments, while the Dedicated model can be adjusted monthly.",
  },
];

export const whyChooseUsFeatures = [
  {
    icon: "🎯",
    title: "Precision Matching",
    description: "We match your ICP and culture with the ideal SDR profile from our vetted pool of elite professionals."
  },
  {
    icon: "📊",
    title: "Radical Transparency",
    description: "Get real-time dashboards tracking every metric, from calls and emails to pipeline value."
  },
  {
    icon: "🔄",
    title: "Elastic Scaling",
    description: "Instantly scale your team up or down, add specialized skills, or target new markets on demand."
  },
  {
    icon: "🛡️",
    title: "Managed & Guaranteed",
    description: "Every engagement includes performance management, coaching, and our replacement guarantee."
  },
];

export const engagementModels: EngagementModel[] = [
  {
    icon: '👤',
    title: 'Dedicated SDR Hire',
    description: 'Individual SDR placement for targeted campaigns',
    theme: 'blue',
    highlighted: false,
    price: 'Starting at $4,500/mo',
    priceSub: 'Per SDR placement',
    pricing: {
      subscription: '$4,500/mo',
      setupFee: '$1,500 one-time',
      customOptions: ['Dedicated manager +$2,000/mo', 'Premium SLA +$1,500/mo'],
    },
    buttonText: 'Get Started',
    bestFor: ['Testing new markets', 'Filling skill gaps', 'Proof-of-concept'],
    included: ['1 Certified SDR', 'Basic CRM setup', 'Performance reporting'],
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
    pricing: {
      subscription: '$12,000/mo (3 SDRs)',
      setupFee: '$4,000 one-time',
      customOptions: ['Add SDR +$3,500/mo', 'Advanced analytics +$1,200/mo'],
    },
    buttonText: 'Get Started',
    bestFor: ['Consistent pipeline', 'Scaling existing functions', 'Enterprise deployments'],
    included: ['Team of 3-10 SDRs', 'Dedicated management', 'Custom CRM Setup'],
    commitment: '90-day minimum, quarterly thereafter',
  },
  {
    icon: '🌍',
    title: 'Regional / Vertical Pods',
    description: 'Specialized teams for specific markets',
    theme: 'purple',
    highlighted: false,
    price: 'Custom Investment',
    priceSub: 'Based on scope',
    pricing: {
      subscription: 'Custom',
      setupFee: 'Varies by scope',
      customOptions: ['Localization teams', 'Extended training'],
    },
    buttonText: 'Learn More',
    bestFor: ['Market expansion', 'Industry expertise', 'Language requirements'],
    included: ['Specialized SDRs', 'Local intelligence', ''],
    commitment: '6-month minimum, semi-annual thereafter',
  },
];

export const comparisonFeatures = [
  { feature: 'Team Size', values: ['1 SDR', '3-10 SDRs', '5-20 SDRs'] },
  { feature: 'Min Commitment', values: ['30 days', '90 days', '6 months'] },
  { feature: 'Management', values: ['Shared', 'Dedicated', 'Senior Team'] },
  { feature: 'Performance SLA', values: ['Standard', 'Guaranteed', 'Premium'] },
  { feature: 'Customization', values: ['Basic', 'Moderate', 'Full'] },
];

export const processSteps: ProcessStepData[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    description: 'We begin with a deep dive into your business model, ideal customer profile (ICP), and growth objectives to ensure our strategy aligns perfectly with your revenue goals.',
    details: { title: '', items: [] },
    timeline: { title: '', description: '' },
    checklist: { icon: '', title: '', items: [] },
    theme: { stepBg: 'bg-[#0055ae]', timelineBg: 'bg-blue-50', timelineTitle: 'text-blue-800', timelineText: 'text-blue-700' },
  },
  {
    step: 2,
    title: 'SDR Matching & Deployment',
    description: 'We match your needs with top talent from our vetted pool of Africa’s leading sales professionals. We handle technical setup and CRM integration to get your team live within 24-48 hours.',
    details: { title: '', items: [] },
    timeline: { title: '', description: '' },
    checklist: { icon: '', title: '', items: [] },
    theme: { stepBg: 'bg-green-600', timelineBg: 'bg-green-50', timelineTitle: 'text-green-800', timelineText: 'text-green-700' },
  },
  {
    step: 3,
    title: 'Performance Tracking',
    description: 'Gain radical transparency with real-time dashboards tracking every activity and outcome. We monitor key metrics from call volume to pipeline value to ensure consistent results.',
    details: { title: '', items: [] },
    timeline: { title: '', description: '' },
    checklist: { icon: '', title: '', items: [] },
    theme: { stepBg: 'bg-purple-600', timelineBg: 'bg-purple-50', timelineTitle: 'text-purple-800', timelineText: 'text-purple-700' },
  },
  {
    step: 4,
    title: 'Optimization & Scale',
    description: 'We continuously optimize sales playbooks through A/B testing and performance coaching. As you grow, our elastic infrastructure allows you to scale your team up or down instantly.',
    details: { title: '', items: [] },
    timeline: { title: '', description: '' },
    checklist: { icon: '', title: '', items: [] },
    theme: { stepBg: 'bg-orange-600', timelineBg: 'bg-orange-50', timelineTitle: 'text-orange-800', timelineText: 'text-orange-700' },
  },
];