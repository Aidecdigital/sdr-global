import Link from 'next/link';
import Image from 'next/image';

export default function Companies() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Background.jpg" // Replace with actual image
            alt="SDR cohort in training at AIDEC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm mb-8 border border-white/20">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            For Startups, SMEs & Enterprises
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Build a high-performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ae] to-purple-600">sales engine</span> in days.
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Skip the 3-month hiring cycle. Access pre-vetted, certified SDR teams that integrate with your stack and start booking meetings immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#cta"
              className="px-8 py-4 bg-[#0055ae] text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg"
            >
              Start Hiring
            </Link>

            <Link
              href="#engagement-models"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all"
            >
              View Models
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y border-gray-100 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
            {[
              { label: 'Time to Hire', value: '24h', sub: 'vs 90 days avg' },
              { label: 'Cost Savings', value: '40%', sub: 'on overhead' },
              { label: 'Retention', value: '94%', sub: 'industry leading' },
              { label: 'Ramp Time', value: '0 Days', sub: 'fully trained' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl font-bold text-[#0055ae] mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four-Step Onboarding Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-blue-400 opacity-10 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onboarding in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From discovery to live deployment. Your sales team grows faster than traditional hiring—without the 90-day wait.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: 1,
                title: 'Discovery',
                description: 'We understand your ICP, sales process, and success metrics.',
                time: '1-2 hours',
                icon: '🔍',
                color: 'bg-blue-50 border-blue-200'
              },
              {
                step: 2,
                title: 'Matching',
                description: 'Certified SDRs perfectly aligned with your requirements.',
                time: '24 hours',
                icon: '🎯',
                color: 'bg-green-50 border-green-200',
                featured: true
              },
              {
                step: 3,
                title: 'Training',
                description: 'Product bootcamp and sales playbook integration.',
                time: '24 hours',
                icon: '📚',
                color: 'bg-purple-50 border-purple-200'
              },
              {
                step: 4,
                title: 'Live Deployment',
                description: 'Go live, book meetings, and start closing deals.',
                time: 'Day 3',
                icon: '🚀',
                color: 'bg-orange-50 border-orange-200'
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`p-6 rounded-2xl border-2 transition-all ${item.color} ${item.featured ? 'ring-2 ring-green-400 shadow-lg scale-105' : 'hover:shadow-lg'}`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className={`text-sm font-semibold ${item.featured ? 'text-green-700' : 'text-gray-700'}`}>
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-2">The Key Differentiator</div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                <span className="text-green-600">24-Hour Deployment</span>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl">
                While traditional hiring takes 90+ days, we deploy certified, ready-to-perform SDRs in 24 hours. That's your competitive advantage.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/how-it-works"
                  className="px-6 py-3 bg-[#0055ae] text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Learn How It Works
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison / Problem Solution */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Modern Way to Scale Sales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stop trading time for talent. Compare the traditional hiring model with our infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Old Way */}
            <div className="bg-white p-10 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 mr-3 text-sm">✕</span>
                Traditional Hiring
              </h3>
              <ul className="space-y-5">
                {[
                  'Spend months sourcing and interviewing',
                  'Pay recruiter fees (15-20% of salary)',
                  'Wait 3 months for ramp-up',
                  'High risk of turnover within 6 months',
                  'Manage training and coaching internally'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div className="bg-white p-10 rounded-3xl border border-blue-100 shadow-xl relative overflow-hidden ring-1 ring-blue-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0055ae]"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#0055ae] mr-3 text-sm">✓</span>
                SDR Global Infrastructure
              </h3>
              <ul className="space-y-5">
                {[
                  'Instant access to pre-vetted talent pool',
                  'Zero recruiting fees or overhead',
                  'Day 1 productivity (pre-trained)',
                  'Replacement guarantee included',
                  'Ongoing performance management & coaching'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-900 font-medium text-lg">
                    <svg className="w-6 h-6 mr-3 mt-0.5 text-[#0055ae] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Cost Comparison & Value Proposition */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cost Comparison & Value Proposition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clear breakdown of the fully loaded costs of traditional hiring versus our managed model over a 6-month period.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Cost Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-red-600 uppercase tracking-wider">Traditional Hiring</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#0055ae] uppercase tracking-wider">SDR Global Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Recruitment & Sourcing</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$15,000 (Agency fees & ads)</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">Included</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Training & Onboarding</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$25,000 (Tools + Time)</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">Included (Pre-trained)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Management & Leader Time</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$20,000 (20% of VP Sales time)</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">Included (Dedicated Team Lead)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Ramp Time / Lost Productivity</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$30,000 (3+ Months)</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0055ae]">Included (Day 1 Productivity)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-base font-bold text-gray-900">Total Estimated Cost (6 Months)</td>
                  <td className="px-6 py-4 text-base font-bold text-red-600">$90,000+</td>
                  <td className="px-6 py-4 text-base font-bold text-[#0055ae]">$27,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement-models" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Scale up or down based on your pipeline needs.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Direct Hire */}
            <div className="p-8 rounded-3xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-semibold text-gray-900 mb-2">Direct Placement</div>
              <div className="text-3xl font-bold text-gray-900 mb-6">One-time fee</div>
              <p className="text-gray-600 mb-8 text-sm">Best for companies building long-term internal culture who need vetted talent fast.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Pre-vetted candidates</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>90-day replacement guarantee</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Salary negotiation support</li>
              </ul>
              <Link href="/contact" className="block w-full py-3 px-4 bg-gray-50 text-gray-900 text-center rounded-xl font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Outsourced (Highlighted) */}
            <div className="p-8 rounded-3xl border-2 border-[#0055ae] bg-blue-50/30 relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-[#0055ae] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">MOST POPULAR</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Managed Team</div>
              <div className="text-3xl font-bold text-gray-900 mb-6">Monthly subscription</div>
              <p className="text-gray-600 mb-8 text-sm">Best for rapid scaling. We manage the team, you get the meetings.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Fully managed SDRs</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Tech stack included</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Weekly performance reports</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Dedicated Team Lead</li>
              </ul>
              <Link href="/contact" className="block w-full py-3 px-4 bg-[#0055ae] text-white text-center rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-3xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-semibold text-gray-900 mb-2">Enterprise</div>
              <div className="text-3xl font-bold text-gray-900 mb-6">Custom</div>
              <p className="text-gray-600 mb-8 text-sm">For global organizations needing multi-region coverage and custom integration.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Global deployment (50+ countries)</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Custom SLAs & Security</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-[#0055ae] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Dedicated Account Manager</li>
              </ul>
              <Link href="/contact" className="block w-full py-3 px-4 bg-gray-50 text-gray-900 text-center rounded-xl font-medium hover:bg-gray-100 transition-colors">
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
                  <div className="shrink-0 w-16 text-right">
                    <span className="text-blue-500 font-bold">{step.day}</span>
                  </div>
                  <div className="relative pb-8 border-l border-gray-800 pl-8 last:pb-0 last:border-0">
                    <div className="absolute left-0 top-0 -ml-1.25 w-2.5 h-2.5 rounded-full bg-[#0055ae]"></div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results from Real Companies</h2>
            <p className="text-xl text-gray-600">See how SDR Global has helped businesses like yours achieve remarkable growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0055ae] mb-2">300%</div>
              <p className="text-gray-600">Increase in qualified leads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0055ae] mb-2">50%</div>
              <p className="text-gray-600">Reduction in sales cycle</p>
            </div>
            <div className="text-center">
              <Link href="/case-studies" className="inline-block px-6 py-3 bg-[#0055ae] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 bg-[#0055ae]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop losing revenue to empty seats.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a fully operational sales development team this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="px-8 py-4 bg-white text-[#0055ae] rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="#"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0055ae] transition-colors"
            >
              Have Questions? View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
