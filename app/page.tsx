import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-[#0055ae] bg-blue-50 mb-8 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-[#0055ae] mr-2"></span>
              Now deploying in 50+ countries
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              The Global Infrastructure for <span className="text-[#0055ae]">Sales Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Instant access to performance-ready SDR talent. We build, train, and certify your sales team so you can focus on closing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/for-companies"
                className="w-full sm:w-auto px-8 py-4 bg-[#0055ae] text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Hire SDR Talent
              </Link>
              <Link
                href="/for-sdrs"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Become an SDR
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 inset-x-0 h-full bg-linear-to-b from-blue-50/50 to-white -z-10" />
      </section>

      {/* Stats / Trust Bar */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">24h</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Avg. Deployment</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">SDRs Deployed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Countries</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">94%</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stop building sales teams from scratch.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Traditional hiring is slow, expensive, and risky. You spend months recruiting and training, only to face high turnover and inconsistent results.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Slow Ramp-up', desc: '90+ days to hire and train a productive SDR.' },
                  { title: 'High Costs', desc: '$50k+ average cost to replace a failed hire.' },
                  { title: 'Management Drain', desc: 'Countless hours spent on coaching basics.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The SDR Global Standard</h3>
              <div className="space-y-6">
                {[
                  { title: 'Instant Deployment', desc: 'Pre-vetted, certified talent ready in 24 hours.' },
                  { title: 'Zero Ramp Time', desc: 'SDRs arrive trained on your stack and methodology.' },
                  { title: 'Global Scale', desc: 'Hire in any time zone, language, or region.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-gray-100">
                <Link href="/how-it-works" className="text-[#0055ae] font-semibold hover:text-blue-700 flex items-center">
                  View our vetting process <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Audience Section - Clean Split */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Connecting world-class companies with world-class talent.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Companies */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-10 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0055ae] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For Companies</h3>
              <p className="text-gray-600 mb-8 h-12">
                Scale your sales team without the headache. Hire pre-trained, certified SDRs instantly.
              </p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0055ae] rounded-full mr-2"></span>Reduce hiring time by 90%</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0055ae] rounded-full mr-2"></span>Eliminate training costs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0055ae] rounded-full mr-2"></span>Flexible engagement models</li>
              </ul>
              <Link href="/for-companies" className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0055ae] hover:bg-blue-700 transition-colors">
                Hire Talent
              </Link>
            </div>

            {/* For Talent */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-10 hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For SDRs</h3>
              <p className="text-gray-600 mb-8 h-12">
                Launch your global sales career. Get certified and matched with top tech companies.
              </p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>World-class sales training</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>Global job opportunities</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>Career mentorship & growth</li>
              </ul>
              <Link href="/for-sdrs" className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to modernize your sales infrastructure?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the companies scaling faster with SDR Global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#0055ae] text-white rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
            >
              Talk to Sales
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}