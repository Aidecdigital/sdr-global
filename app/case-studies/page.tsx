import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
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

          {/* Case Study 1: SaaS Startup */}
          <div className="mb-20">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                      CS
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">CloudSync</h3>
                      <p className="text-blue-600 font-semibold">SaaS Startup • 50 employees</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Background</h4>
                      <p className="text-gray-600">
                        Cloud-based data synchronization platform serving SMBs. Pre-Series A with aggressive growth targets.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-2">The Problem</h4>
                      <p className="text-gray-600">
                        No dedicated sales team, relying on product-led growth. CEO handling all outbound sales manually, limiting scale and missing quarterly targets.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">SDR Global Solution</h4>
                      <p className="text-gray-600">
                        Deployed 3 SDRs using our Outsourced Team model. Focused on enterprise SMB segment with personalized outreach sequences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-center mb-6">Results Achieved</h4>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                      <div className="text-sm text-gray-600">Qualified Meetings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                      <div className="text-sm text-gray-600">Pipeline Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$2.1M</div>
                      <div className="text-sm text-gray-600">New Pipeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">45 days</div>
                      <div className="text-sm text-gray-600">Time to Impact</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "SDR Global didn't just meet our expectations – they exceeded them. In 45 days, we went from zero outbound sales capacity to a healthy pipeline that funded our Series A."
                    </blockquote>
                    <div className="text-sm text-gray-600">
                      — Sarah Chen, CEO & Co-Founder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: Enterprise Tech */}
          <div className="mb-20">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                      DS
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">DataSecure</h3>
                      <p className="text-purple-600 font-semibold">Enterprise Cybersecurity • 500+ employees</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Background</h4>
                      <p className="text-gray-600">
                        Leading enterprise cybersecurity platform. Strong product but inconsistent lead generation across global sales teams.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-2">The Problem</h4>
                      <p className="text-gray-600">
                        12-month sales cycle with inconsistent MQL quality. Field sales team spending 60% of time on prospecting instead of closing.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">SDR Global Solution</h4>
                      <p className="text-gray-600">
                        Regional Pods model with 8 SDRs across North America and EMEA. Specialized in enterprise cybersecurity messaging and long-cycle nurturing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-center mb-6">Results Achieved</h4>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                      <div className="text-sm text-gray-600">MQL Quality Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Sales Cycle Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$18M</div>
                      <div className="text-sm text-gray-600">Pipeline Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">60 days</div>
                      <div className="text-sm text-gray-600">Time to Impact</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "The quality of MQLs improved dramatically. Our sales team can now focus on what they do best – closing deals – while SDR Global handles the heavy lifting of prospecting."
                    </blockquote>
                    <div className="text-sm text-gray-600">
                      — Michael Rodriguez, VP of Sales
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3: B2B Marketplace */}
          <div className="mb-20">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                      MT
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">MarketTech</h3>
                      <p className="text-orange-600 font-semibold">B2B Marketplace • 200 employees</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Background</h4>
                      <p className="text-gray-600">
                        Digital marketplace connecting manufacturers with distributors. Growing rapidly but struggling with international expansion.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-2">The Problem</h4>
                      <p className="text-gray-600">
                        Strong domestic growth but zero international traction. No local presence or understanding of European/Asian markets.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">SDR Global Solution</h4>
                      <p className="text-gray-600">
                        Regional Pods with native-speaking SDRs in Germany, UK, and Singapore. Localized market research and culturally-adapted messaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-center mb-6">Results Achieved</h4>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                      <div className="text-sm text-gray-600">New Markets Entered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
                      <div className="text-sm text-gray-600">International Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$4.2M</div>
                      <div className="text-sm text-gray-600">International Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">90 days</div>
                      <div className="text-sm text-gray-600">Time to Impact</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "International expansion was our biggest challenge. SDR Global's regional expertise made it possible to enter 5 new markets in 90 days with real traction."
                    </blockquote>
                    <div className="text-sm text-gray-600">
                      — Anna Liu, CMO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 4: Healthcare Tech */}
          <div className="mb-20">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                      HC
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">HealthConnect</h3>
                      <p className="text-teal-600 font-semibold">Healthcare Technology • 150 employees</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Background</h4>
                      <p className="text-gray-600">
                        Patient management platform for healthcare providers. Strong clinical adoption but weak sales execution.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-2">The Problem</h4>
                      <p className="text-gray-600">
                        Highly regulated industry with complex decision-making. Sales team lacked healthcare expertise and struggled with long, complex sales cycles.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">SDR Global Solution</h4>
                      <p className="text-gray-600">
                        Vertical Pod with healthcare-experienced SDRs. Specialized training in HIPAA compliance, healthcare buying processes, and medical terminology.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-center mb-6">Results Achieved</h4>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                      <div className="text-sm text-gray-600">Compliance Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                      <div className="text-sm text-gray-600">Win Rate Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$8.5M</div>
                      <div className="text-sm text-gray-600">New Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">75 days</div>
                      <div className="text-sm text-gray-600">Time to Impact</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "Healthcare sales is incredibly complex. SDR Global's specialized team understood our market better than our own salespeople initially."
                    </blockquote>
                    <div className="text-sm text-gray-600">
                      — Dr. James Wilson, Chief Medical Officer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">45-90</div>
              <div className="text-lg font-semibold">Days to Impact</div>
              <div className="text-sm opacity-75">Average time to first results</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">200%</div>
              <div className="text-lg font-semibold">Avg Pipeline Growth</div>
              <div className="text-sm opacity-75">Across all case studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">$8.2M</div>
              <div className="text-lg font-semibold">Avg New Pipeline</div>
              <div className="text-sm opacity-75">Per engagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">94%</div>
              <div className="text-lg font-semibold">Client Satisfaction</div>
              <div className="text-sm opacity-75">Based on post-engagement surveys</div>
            </div>
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
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Strategic Alignment</h3>
              <p className="text-gray-600">
                Deep discovery process ensures our SDRs understand your ICP, messaging, and sales process before deployment.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Rapid Execution</h3>
              <p className="text-gray-600">
                Pre-trained SDRs and established processes enable immediate productivity without ramp-up delays.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold mb-4">Continuous Optimization</h3>
              <p className="text-gray-600">
                Real-time performance tracking and weekly optimization calls ensure maximum ROI throughout the engagement.
              </p>
            </div>
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
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold mb-2">SaaS & Software</h3>
              <p className="text-gray-600 text-sm">300% pipeline growth, 45-day impact</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">85% MQL quality increase, 60-day impact</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">65% win rate increase, 75-day impact</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-bold mb-2">Marketplaces</h3>
              <p className="text-gray-600 text-sm">250% international growth, 90-day impact</p>
            </div>
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