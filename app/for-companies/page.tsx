import Link from 'next/link';

export default function Companies() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-8 border border-blue-100">
              For Startups, SMEs & Enterprises
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Build a high-performance <br />
              <span className="text-blue-600">sales engine</span> in days.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Skip the 3-month hiring cycle. Access pre-vetted, certified SDR teams that integrate with your stack and start booking meetings immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Start Hiring
              </Link>
              <Link
                href="/engagement-models"
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all"
              >
                View Pricing Models
              </Link>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Time to Hire', value: '24h', sub: 'vs 90 days avg' },
              { label: 'Cost Savings', value: '40%', sub: 'on overhead' },
              { label: 'Retention', value: '94%', sub: 'industry leading' },
              { label: 'Ramp Time', value: '0 Days', sub: 'fully trained' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Problem Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Modern Way to Scale Sales</h2>
            <p className="text-xl text-gray-600">Stop trading time for talent.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Old Way */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 opacity-75">
              <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Traditional Hiring
              </h3>
              <ul className="space-y-4">
                {[
                  'Spend months sourcing and interviewing',
                  'Pay recruiter fees (15-20% of salary)',
                  'Wait 3 months for ramp-up',
                  'High risk of turnover within 6 months',
                  'Manage training and coaching internally'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-500">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                SDR Global Infrastructure
              </h3>
              <ul className="space-y-4">
                {[
                  'Instant access to pre-vetted talent pool',
                  'Zero recruiting fees or overhead',
                  'Day 1 productivity (pre-trained)',
                  'Replacement guarantee included',
                  'Ongoing performance management & coaching'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-900 font-medium">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-xl text-gray-600">Scale up or down based on your pipeline needs.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Direct Hire */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition-colors">
              <div className="text-lg font-semibold text-gray-900 mb-2">Direct Placement</div>
              <div className="text-3xl font-bold text-gray-900 mb-6">One-time fee</div>
              <p className="text-gray-600 mb-8 text-sm">Best for companies building long-term internal culture who need vetted talent fast.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Pre-vetted candidates</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>90-day replacement guarantee</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Salary negotiation support</li>
              </ul>
              <Link href="/contact" className="block w-full py-3 px-4 bg-gray-50 text-gray-900 text-center rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Outsourced (Highlighted) */}
            <div className="p-8 rounded-2xl border-2 border-blue-600 bg-blue-50/50 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Managed Team</div>
              <div className="text-3xl font-bold text-gray-900 mb-6">Monthly subscription</div>
              <p className="text-gray-600 mb-8 text-sm">Best for rapid scaling. We manage the team, you get the meetings.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Fully managed SDRs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Tech stack included</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Weekly performance reports</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Dedicated Team Lead</li>
              </ul>
              <Link href="/contact" className="block w-full py-3 px-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition-colors">
              <div className="text-lg font-semibold text-gray-900 mb-2">Enterprise</div>
              <div className="text-3xl font-bold text-gray-900 mb-6">Custom</div>
              <p className="text-gray-600 mb-8 text-sm">For global organizations needing multi-region coverage and custom integration.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Global deployment (50+ countries)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Custom SLAs & Security</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Dedicated Account Manager</li>
              </ul>
              <Link href="/contact" className="block w-full py-3 px-4 bg-gray-50 text-gray-900 text-center rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Process */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Deployment in Days, Not Months</h2>
              <p className="text-gray-400 text-lg mb-8">
                Our infrastructure is built for speed. While others are still writing job descriptions, we are booking your first meetings.
              </p>
              <Link href="/contact" className="text-blue-400 font-semibold hover:text-blue-300 flex items-center">
                Start your deployment <span className="ml-2">→</span>
              </Link>
            </div>
            
            <div className="space-y-8">
              {[
                { day: 'Day 1', title: 'Strategy Kickoff', desc: 'We align on your ICP, value prop, and territories.' },
                { day: 'Day 2', title: 'Team Selection', desc: 'Review and select from our certified talent pool.' },
                { day: 'Day 3', title: 'Tech & Training', desc: 'Systems integration and product-specific bootcamp.' },
                { day: 'Day 5', title: 'Go Live', desc: 'Campaigns launch and first calls are made.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-blue-500 font-bold">{step.day}</span>
                  </div>
                  <div className="relative pb-8 border-l border-gray-800 pl-8 last:pb-0 last:border-0">
                    <div className="absolute left-0 top-0 -ml-[5px] w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop losing revenue to empty seats.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a fully operational sales development team this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
