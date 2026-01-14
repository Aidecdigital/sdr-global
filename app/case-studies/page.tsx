import Link from 'next/link';

type CaseStudyResult = {
  value: string;
  label: string;
  color: string;
};

type CaseStudy = {
  id: string;
  initials: string;
  initialsBg: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  clientBackground: string;
  problem: string;
  solution: string;
  results: CaseStudyResult[];
  quote: string;
  quoteAuthor: string;
};

type SummaryStat = {
  value: string;
  label: string;
  sub: string;
  color: string;
};

type MethodologyItem = {
  icon: string;
  title: string;
  description: string;
};

type IndustryApp = {
  icon: string;
  title: string;
  description: string;
};

const caseStudies: CaseStudy[] = [
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

const summaryStats: SummaryStat[] = [
  { value: '45-90', label: 'Days to Impact', sub: 'Average time to first results', color: 'text-green-400' },
  { value: '200%', label: 'Avg Pipeline Growth', sub: 'Across all case studies', color: 'text-blue-400' },
  { value: '$8.2M', label: 'Avg New Pipeline', sub: 'Per engagement', color: 'text-purple-400' },
  { value: '94%', label: 'Client Satisfaction', sub: 'Based on post-engagement surveys', color: 'text-orange-400' },
];

const methodologyItems: MethodologyItem[] = [
  { icon: '🎯', title: 'Strategic Alignment', description: 'Deep discovery process ensures our SDRs understand your ICP, messaging, and sales process before deployment.' },
  { icon: '⚡', title: 'Rapid Execution', description: 'Pre-trained SDRs and established processes enable immediate productivity without ramp-up delays.' },
  { icon: '📈', title: 'Continuous Optimization', description: 'Real-time performance tracking and weekly optimization calls ensure maximum ROI throughout the engagement.' },
];

const industryApps: IndustryApp[] = [
  { icon: '💻', title: 'SaaS & Software', description: '300% pipeline growth, 45-day impact' },
  { icon: '🔒', title: 'Cybersecurity', description: '85% MQL quality increase, 60-day impact' },
  { icon: '🏥', title: 'Healthcare', description: '65% win rate increase, 75-day impact' },
  { icon: '🌐', title: 'Marketplaces', description: '250% international growth, 90-day impact' },
];

const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <div className="mb-20 last:mb-0">
    <div className="bg-gray-50 rounded-lg p-8 md:p-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 ${study.initialsBg} rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4`}>
              {study.initials}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
              <p className={`${study.subtitleColor} font-semibold`}>{study.subtitle}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Background</h4>
              <p className="text-gray-600">{study.clientBackground}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-2">The Problem</h4>
              <p className="text-gray-600">{study.problem}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">SDR Global Solution</h4>
              <p className="text-gray-600">{study.solution}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-center mb-6">Results Achieved</h4>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {study.results.map((result, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-bold ${result.color} mb-2`}>{result.value}</div>
                <div className="text-sm text-gray-600">{result.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <blockquote className="text-gray-700 italic mb-4">{study.quote}</blockquote>
            <div className="text-sm text-gray-600">{study.quoteAuthor}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results, Real Companies
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              See how SDR Global has transformed sales performance for companies just like yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#studies"
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors"
              >
                Get Similar Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white" id="studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Performance Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprise, SDR Global delivers measurable results that drive revenue growth.
            </p>
          </div>

          {caseStudies.map(study => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Consistent Results Across All Cases
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              SDR Global delivers predictable, measurable outcomes regardless of industry or company size.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {summaryStats.map(stat => (
              <div key={stat.label}>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Results-Driven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every engagement follows a proven framework designed for maximum impact and measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologyItems.map(item => (
              <div key={item.title} className="text-center">
                <div className="text-6xl mb-6" aria-hidden="true">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SDR Global's methodology works across B2B sectors with consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryApps.map(app => (
              <div key={app.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{app.icon}</div>
                <h3 className="text-lg font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the companies that have transformed their sales performance with SDR Global's proven methodology.
          </p>

          <div className="bg-white text-green-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Your Success Story Starts Here</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold">1. Discovery Call</div>
                <div className="text-sm text-gray-600">Share your goals and challenges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold">2. SDR Deployment</div>
                <div className="text-sm text-gray-600">24-hour setup and activation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="font-semibold">3. Results & Growth</div>
                <div className="text-sm text-gray-600">Measurable pipeline and revenue impact</div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get Similar Results
          </Link>
        </div>
      </section>
    </div>
  );
}