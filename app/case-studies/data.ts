import { CaseStudy, SummaryStat, MethodologyItem, IndustryApp } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'cloudsync',
    initials: 'CS',
    initialsBg: 'bg-blue-600',
    title: 'CloudSync',
    subtitle: 'SaaS Startup • 50 employees',
    subtitleColor: 'text-blue-600',
    clientBackground: 'Cloud-based data synchronization platform serving SMBs. Pre-Series A with aggressive growth targets.',
    problem: 'No dedicated sales team, relying on product-led growth. CEO handling all outbound sales manually, limiting scale and missing quarterly targets.',
    solution: 'Deployed 3 SDRs using our Outsourced Team model. Focused on enterprise SMB segment with personalized outreach sequences.',
    results: [
      { value: '150+', label: 'Qualified Meetings', color: 'text-green-600' },
      { value: '300%', label: 'Pipeline Growth', color: 'text-blue-600' },
      { value: '$2.1M', label: 'New Pipeline', color: 'text-purple-600' },
      { value: '45 days', label: 'Time to Impact', color: 'text-orange-600' },
    ],
    quote: '"SDR Global didn\'t just meet our expectations – they exceeded them. In 45 days, we went from zero outbound sales capacity to a healthy pipeline that funded our Series A."',
    quoteAuthor: '— Sarah Chen, CEO & Co-Founder',
  },
  {
    id: 'datasecure',
    initials: 'DS',
    initialsBg: 'bg-purple-600',
    title: 'DataSecure',
    subtitle: 'Enterprise Cybersecurity • 500+ employees',
    subtitleColor: 'text-purple-600',
    clientBackground: 'Leading enterprise cybersecurity platform. Strong product but inconsistent lead generation across global sales teams.',
    problem: '12-month sales cycle with inconsistent MQL quality. Field sales team spending 60% of time on prospecting instead of closing.',
    solution: 'Regional Pods model with 8 SDRs across North America and EMEA. Specialized in enterprise cybersecurity messaging and long-cycle nurturing.',
    results: [
      { value: '85%', label: 'MQL Quality Increase', color: 'text-green-600' },
      { value: '40%', label: 'Sales Cycle Reduction', color: 'text-blue-600' },
      { value: '$18M', label: 'Pipeline Value', color: 'text-purple-600' },
      { value: '60 days', label: 'Time to Impact', color: 'text-orange-600' },
    ],
    quote: '"The quality of MQLs improved dramatically. Our sales team can now focus on what they do best – closing deals – while SDR Global handles the heavy lifting of prospecting."',
    quoteAuthor: '— Michael Rodriguez, VP of Sales',
  },
  {
    id: 'markettech',
    initials: 'MT',
    initialsBg: 'bg-orange-600',
    title: 'MarketTech',
    subtitle: 'B2B Marketplace • 200 employees',
    subtitleColor: 'text-orange-600',
    clientBackground: 'Digital marketplace connecting manufacturers with distributors. Growing rapidly but struggling with international expansion.',
    problem: 'Strong domestic growth but zero international traction. No local presence or understanding of European/Asian markets.',
    solution: 'Regional Pods with native-speaking SDRs in Germany, UK, and Singapore. Localized market research and culturally-adapted messaging.',
    results: [
      { value: '5', label: 'New Markets Entered', color: 'text-green-600' },
      { value: '250%', label: 'International Growth', color: 'text-blue-600' },
      { value: '$4.2M', label: 'International Revenue', color: 'text-purple-600' },
      { value: '90 days', label: 'Time to Impact', color: 'text-orange-600' },
    ],
    quote: '"International expansion was our biggest challenge. SDR Global\'s regional expertise made it possible to enter 5 new markets in 90 days with real traction."',
    quoteAuthor: '— Anna Liu, CMO',
  },
  {
    id: 'healthconnect',
    initials: 'HC',
    initialsBg: 'bg-teal-600',
    title: 'HealthConnect',
    subtitle: 'Healthcare Technology • 150 employees',
    subtitleColor: 'text-teal-600',
    clientBackground: 'Patient management platform for healthcare providers. Strong clinical adoption but weak sales execution.',
    problem: 'Highly regulated industry with complex decision-making. Sales team lacked healthcare expertise and struggled with long, complex sales cycles.',
    solution: 'Vertical Pod with healthcare-experienced SDRs. Specialized training in HIPAA compliance, healthcare buying processes, and medical terminology.',
    results: [
      { value: '95%', label: 'Compliance Rate', color: 'text-green-600' },
      { value: '65%', label: 'Win Rate Increase', color: 'text-blue-600' },
      { value: '$8.5M', label: 'New Bookings', color: 'text-purple-600' },
      { value: '75 days', label: 'Time to Impact', color: 'text-orange-600' },
    ],
    quote: '"Healthcare sales is incredibly complex. SDR Global\'s specialized team understood our market better than our own salespeople initially."',
    quoteAuthor: '— Dr. James Wilson, Chief Medical Officer',
  },
];

export const summaryStats: SummaryStat[] = [
  { value: '45-90', label: 'Days to Impact', sub: 'Average time to first results', color: 'text-green-400' },
  { value: '200%', label: 'Avg Pipeline Growth', sub: 'Across all case studies', color: 'text-blue-400' },
  { value: '$8.2M', label: 'Avg New Pipeline', sub: 'Per engagement', color: 'text-purple-400' },
  { value: '94%', label: 'Client Satisfaction', sub: 'Based on post-engagement surveys', color: 'text-orange-400' },
];

export const methodologyItems: MethodologyItem[] = [
  { icon: '🎯', title: 'Strategic Alignment', description: 'Deep discovery process ensures our SDRs understand your ICP, messaging, and sales process before deployment.' },
  { icon: '⚡', title: 'Rapid Execution', description: 'Pre-trained SDRs and established processes enable immediate productivity without ramp-up delays.' },
  { icon: '📈', title: 'Continuous Optimization', description: 'Real-time performance tracking and weekly optimization calls ensure maximum ROI throughout the engagement.' },
];

export const industryApps: IndustryApp[] = [
  { icon: '💻', title: 'SaaS & Software', description: '300% pipeline growth, 45-day impact' },
  { icon: '🔒', title: 'Cybersecurity', description: '85% MQL quality increase, 60-day impact' },
  { icon: '🏥', title: 'Healthcare', description: '65% win rate increase, 75-day impact' },
  { icon: '🌐', title: 'Marketplaces', description: '250% international growth, 90-day impact' },
];