import { ProcessStepData } from './types';

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

export const performanceMetrics = [
  { label: 'Activity Volume', value: 98, color: 'bg-green-600', textColor: 'text-green-600' },
  { label: 'Meeting Quality', value: 92, color: 'bg-[#0055ae]', textColor: 'text-[#0055ae]' },
  { label: 'Response Rates', value: 87, color: 'bg-purple-600', textColor: 'text-purple-600' },
];

export const keyBenefits = [
  { icon: '⚡', title: 'Speed', description: 'From requirements to deployment in 24 hours – not 90+ days.', statistic: '97% Faster', color: 'text-[#0055ae]' },
  { icon: '🎯', title: 'Quality', description: 'Pre-certified SDRs with proven track records and skills.', statistic: '94% Success Rate', color: 'text-green-600' },
  { icon: '🔄', title: 'Flexibility', description: 'Scale up or down instantly without long-term commitments.', statistic: 'Instant Scaling', color: 'text-purple-600' },
];

export const commonConcerns = [
  { question: 'Will they understand our product/service?', solution: 'During discovery, we deeply understand your ICP and value proposition. SDRs receive comprehensive product training and can shadow your team before going live.' },
  { question: "What if they don't perform?", solution: 'All deployments include performance guarantees. We monitor daily and replace underperformers within 48 hours at no extra cost.' },
  { question: 'Can they integrate with our systems?', solution: 'We support all major CRMs (Salesforce, HubSpot, Pipedrive) and sales tools. Setup is included in deployment.' },
  { question: 'How do we manage remote SDRs?', solution: 'We provide management frameworks, reporting dashboards, and weekly strategy calls. You maintain full control while we handle execution.' },
  { question: "What about data security?", solution: 'SOC 2 compliant, NDA signed by all SDRs, encrypted communications, and regular security training.' },
  { question: 'Can we start small?', solution: 'Minimum 30-day commitment, start with 1 SDR, pay-as-you-grow model. No long-term contracts required.' },
];

export const timelineSummary = [
  { day: 'Day 1', title: 'Discovery Call', color: 'bg-[#0055ae]' },
  { day: 'Day 1-2', title: 'Requirements Finalized', color: 'bg-green-600' },
  { day: 'Day 2', title: 'SDR Matching', color: 'bg-purple-600' },
  { day: 'Day 2-3', title: 'Setup & Training', color: 'bg-orange-600' },
  { day: 'Day 3', title: 'Go Live', color: 'bg-red-600' },
  { day: 'Day 3-7', title: 'First Meetings', color: 'bg-indigo-600' },
  { day: 'Ongoing', title: 'Optimization', color: 'bg-pink-600' },
];