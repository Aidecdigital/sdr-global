import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-gray-400 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 mb-8 border border-gray-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-gray-600 mr-2 animate-pulse"></span>
              Global Sales Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              About SDR {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-blue-600">Global</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Building the world's most reliable sales development infrastructure, one SDR at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#mission" className="px-8 py-4 bg-gray-600 text-white rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all shadow-lg hover:shadow-gray-500/30 hover:-translate-y-1">
                Our Mission
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SDRs are the core revenue infrastructure for modern B2B companies. We're building a global system that ensures every business has access to elite, deployment-ready sales talent.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Reliability First</h3>
              <p className="text-gray-600">
                Every SDR we deploy meets rigorous standards and delivers consistent performance from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Global Scale</h3>
              <p className="text-gray-600">
                Operating across 50+ countries with localized expertise and global deployment capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold mb-4">Revenue Impact</h3>
              <p className="text-gray-600">
                Our SDRs don't just prospect – they build pipelines that drive measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SDR Global Exists */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why SDR Global Exists
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The global sales talent gap is widening, and traditional SDR hiring models are fundamentally broken.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">The Global Sales Talent Gap</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl font-bold">1M+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Open SDR Positions</h4>
                      <p className="text-gray-600">Companies worldwide are struggling to fill critical sales roles</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl font-bold">90+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Days to Hire</h4>
                      <p className="text-gray-600">Average time-to-fill for SDR positions is unacceptable</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl font-bold">60%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Failure Rate</h4>
                      <p className="text-gray-600">SDRs who don't meet performance expectations within 6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#0055ae]">Broken Hiring Models</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3">Traditional Recruiting</h4>
                  <p className="text-gray-600 text-sm">
                    90+ day hiring cycles, inconsistent quality, high turnover, and unpredictable ramp times.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3">Freelance Platforms</h4>
                  <p className="text-gray-600 text-sm">
                    Variable quality, no accountability, inconsistent availability, and limited scalability.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3">Training Programs</h4>
                  <p className="text-gray-600 text-sm">
                    Focus on education over deployment, no performance guarantees, and unclear ROI.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-3 text-blue-800">Our Solution</h4>
                  <p className="text-blue-700 text-sm">
                    End-to-end SDR infrastructure: train, certify, deploy, and manage – with guaranteed performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Operating Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in substance over style, systems over individuals, and accountability over hype.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4">Performance {'>'} Promises</h3>
              <p className="text-gray-600 mb-6">
                We don't make claims we can't back with data. Every SDR deployment includes measurable performance guarantees.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA-backed performance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time reporting
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance guarantees
                </li>
              </ul>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="text-6xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold mb-4">Systems {'>'} Individuals</h3>
              <p className="text-gray-600 mb-6">
                We build scalable systems and processes that work reliably, regardless of individual circumstances.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Standardized processes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quality assurance frameworks
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Scalable infrastructure
                </li>
              </ul>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold mb-4">Accountability {'>'} Hype</h3>
              <p className="text-gray-600 mb-6">
                We take responsibility for results. No excuses, no blame-shifting, just consistent execution.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Transparent reporting
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance guarantees
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Results-driven culture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership & Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders from enterprise sales, operations, and scaling successful businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">SJ</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <div className="text-[#0055ae] font-semibold mb-4">CEO & Co-Founder</div>
              <p className="text-gray-600 mb-4">
                Former VP of Sales Operations at Salesforce. Scaled sales teams from 50 to 500+ globally.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Experience:</div>
                <div>15+ years in enterprise sales</div>
                <div>$2B+ revenue scaled</div>
                <div>Fortune 500 leadership</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">MR</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Rodriguez</h3>
              <div className="text-green-600 font-semibold mb-4">CTO & Co-Founder</div>
              <p className="text-gray-600 mb-4">
                Ex-Engineering Director at HubSpot. Built sales enablement platforms serving 10M+ users.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Experience:</div>
                <div>12+ years in sales technology</div>
                <div>50+ enterprise deployments</div>
                <div>Patented sales methodologies</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">AL</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Anna Liu</h3>
              <div className="text-purple-600 font-semibold mb-4">Chief SDR Officer</div>
              <p className="text-gray-600 mb-4">
                Former Head of SDR Development at LinkedIn. Trained and deployed 1000+ SDRs globally.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Experience:</div>
                <div>10+ years SDR leadership</div>
                <div>Global team management</div>
                <div>Industry certification standards</div>
              </div>
            </div>
          </div>

          {/* Advisors */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Strategic Advisors</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold text-gray-600">DC</span>
                </div>
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <div className="text-[#0055ae] text-sm mb-2">Former CRO, ZoomInfo</div>
                  <p className="text-gray-600 text-sm">
                    Strategic advisor on sales intelligence and data-driven prospecting. 20+ years in B2B sales leadership.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold text-gray-600">RW</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rachel Williams</h4>
                  <div className="text-green-600 text-sm mb-2">VP Sales Operations, Salesforce</div>
                  <p className="text-gray-600 text-sm">
                    Advisor on global sales operations and enablement. Expert in scaling sales teams across international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SDR Global by the Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Building credibility through consistent execution and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2023</div>
              <div className="text-lg font-semibold">Founded</div>
              <div className="text-sm opacity-75">Mission-driven start</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-lg font-semibold">Countries</div>
              <div className="text-sm opacity-75">Global presence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1200+</div>
              <div className="text-lg font-semibold">SDRs Deployed</div>
              <div className="text-sm opacity-75">Active professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">94%</div>
              <div className="text-lg font-semibold">Retention Rate</div>
              <div className="text-sm opacity-75">Long-term success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0055ae] to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Sales Infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the companies that trust SDR Global for their most critical revenue function.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/for-companies"
              className="bg-white text-[#0055ae] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Hire SDR Talent
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0055ae] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}