import { EngagementModel, ProcessStepData } from "./types";

export const testimonials = [
  {
    quote:
      "We went from having one SDR to a team of four in 48 hours. The impact on our pipeline was immediate. Within the first month, we had generated $500K+ in qualified opportunities.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechVenture Inc",
  },
  {
    quote:
      "Hiring and training SDRs internally was taking 4+ months and costing us a fortune. With SDR Global, we deployed three certified SDRs in two days. Game changer for our growth.",
    author: "Michael Torres",
    role: "Founder & CEO",
    company: "Growth Labs",
  },
  {
    quote:
      "The quality of the SDRs is exceptional. They came pre-trained, integrated seamlessly with our tools, and hit their KPIs from day one. This is the future of hiring.",
    author: "Jennifer Wang",
    role: "Chief Revenue Officer",
    company: "NextGen Solutions",
  },
];

export const faqItems = [
  {
    question: "How quickly can you deploy SDRs to my team?",
    answer:
      "We can have pre-vetted, certified SDRs deployed and active in your CRM within 24-48 hours of approval. This includes all onboarding, tool setup, and training on your sales process.",
  },
  {
    question: "What if it doesn't work out? Can we make changes?",
    answer:
      "Absolutely. We offer a replacement guarantee on all SDR placements. If an SDR isn't meeting expectations within the first 30 days, we'll replace them at no additional cost. We also manage performance continuously with weekly check-ins.",
  },
  {
    question: "How do you match SDRs to our specific needs?",
    answer:
      "We use a combination of data-driven analysis and human expertise. We assess your ICP, sales process, tools, team dynamics, and growth goals. Then our AI-supported matching system identifies SDRs with the best skill fit from our pool of 500+ certified professionals.",
  },
  {
    question: "Do SDRs have access to our CRM and systems?",
    answer:
      "Yes, part of our first-day deployment includes full setup and configuration of your CRM (Salesforce, HubSpot, Pipedrive, etc.), email, calling software, and any custom tools you use. SDRs are ready to work immediately.",
  },
  {
    question: "Can we scale up or down if our needs change?",
    answer:
      "Yes. You can add SDRs or adjust your team composition on a flexible schedule. Most contract tiers allow quarterly adjustments. For the Dedicated SDR model, changes can happen monthly. Our platform makes scaling seamless.",
  },
  {
    question: "What kind of training do SDRs receive?",
    answer:
      "All our SDRs complete our comprehensive certification program covering sales methodology, objection handling, prospect research, and technology. When deployed to your team, they receive an additional product bootcamp and sales playbook training specific to your business.",
  },
  {
    question: "How do you measure SDR performance?",
    answer:
      "We track daily metrics including calls, conversations, meetings booked, and pipeline value created. You get real-time dashboard access and weekly performance reports. We hold ourselves accountable with guaranteed SLAs on our team models.",
  },
  {
    question: "What happens to continuity if an SDR leaves?",
    answer:
      "Our replacement guarantee covers any departures. We have backup capacity and can deploy a replacement within 24-48 hours. For our team models, we maintain bench capacity specifically for continuity.",
  },
];

export const clientLogos = [
    { name: 'TechVenture', logo: '/logo-placeholder.svg' },
    { name: 'Growth Labs', logo: '/logo-placeholder.svg' },
    { name: 'NextGen', logo: '/logo-placeholder.svg' },
    { name: 'Innovate Co', logo: '/logo-placeholder.svg' },
    { name: 'Quantum Inc', logo: '/logo-placeholder.svg' },
];

export const keyMetrics = [
  {
    metric: "48 Hours",
    label: "Time to Productivity",
    detail: "Deploy fully-ramped SDRs and start booking meetings in under two days.",
    icon: "⚡"
  },
  {
    metric: "320%",
    label: "Average ROI",
    detail: "Clients see an average of 320% return on investment within the first year.",
    icon: "📈"
  },
  {
    metric: "40%+",
    label: "Cost Reduction",
    detail: "Save on recruitment, overhead, and management costs vs. traditional hiring.",
    icon: "💰"
  },
  {
    metric: "2.8x",
    label: "Faster Pipeline Growth",
    detail: "Build qualified pipeline faster compared to internal teams.",
    icon: "🚀"
  },
  {
    metric: "94%",
    label: "Client Retention",
    detail: "Our performance and flexibility lead to industry-leading client satisfaction.",
    icon: "⭐"
  },
  {
    metric: "150+",
    label: "Global Teams Deployed",
    detail: "We support your growth with expert teams across 25+ countries.",
    icon: "🌍"
  },
];

export const whyChooseUsFeatures = [
  {
    icon: "🎯",
    title: "Precision Matching",
    description: "Our AI-supported platform matches your ICP, industry, and culture with the ideal SDR profile from our vetted talent pool."
  },
  {
    icon: "📊",
    title: "Radical Transparency",
    description: "Get real-time dashboards tracking every metric that matters, from calls and emails to pipeline value and booked meetings."
  },
  {
    icon: "🔄",
    title: "Elastic Scaling",
    description: "Instantly scale your team up or down, add specialized skills, or target new markets on demand."
  },
  {
    icon: "🛡️",
    title: "Managed & Guaranteed",
    description: "Every engagement includes performance management, ongoing coaching, and our replacement guarantee for total peace of mind."
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
    pricing: {
      subscription: '$12,000/mo (3 SDRs)',
      setupFee: '$4,000 one-time',
      customOptions: ['Add SDR +$3,500/mo', 'Advanced analytics +$1,200/mo'],
    },
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
    price: 'Custom Investment',
    priceSub: 'Based on scope and specialization',
    pricing: {
      subscription: 'Custom',
      setupFee: 'Varies based on scope',
      customOptions: ['Localization & language teams (custom pricing)', 'Extended SLA & training (custom)'],
    },
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

export const processSteps: ProcessStepData[] = [
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
    theme: { stepBg: 'bg-[#0055ae]', timelineBg: 'bg-blue-50', timelineTitle: 'text-blue-800', timelineText: 'text-blue-700' },
  },
  {
    step: 2,
    title: 'SDR Matching & Deployment',
    description: 'We match and deploy certified SDRs who are perfectly aligned with your requirements and ready to perform. Our data-driven, AI-supported approach ensures precise matching of ICP, market, language, and deal complexity to the right SDR profiles.',
    details: {
      title: 'Our Intelligent Matching Criteria:',
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