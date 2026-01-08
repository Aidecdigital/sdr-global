import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How SDR Global Works
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From discovery to deployment in 24 hours. Transparent, predictable, and results-driven.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#process"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                See the Process
              </Link>
              <Link
                href="/engagement-models"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We remove the complexity and risk from SDR hiring, so you can focus on growing your business.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

            <div className="space-y-16">
              {/* Step 1: Discovery & Requirements */}
              <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
                <div className="md:pr-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      1
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Discovery & Requirements</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    We start with a comprehensive understanding of your business, targets, and sales process to ensure perfect alignment.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">What We Cover:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Ideal Customer Profile (ICP) analysis</li>
                        <li>• Current sales process and tools</li>
                        <li>• Target accounts and territories</li>
                        <li>• Performance expectations and KPIs</li>
                        <li>• Timeline and budget requirements</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Timeline: 1-2 hours</h4>
                      <p className="text-blue-700">Virtual discovery call with your sales leadership team.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0">
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <div className="text-6xl mb-4">🔍</div>
                    <h4 className="text-xl font-semibold mb-4">Discovery Checklist</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Target market analysis</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Sales methodology review</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Technology stack assessment</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Success metrics definition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: SDR Matching & Deployment */}
              <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
                <div className="md:order-2 md:pl-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      2
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">SDR Matching & Deployment</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    We match and deploy certified SDRs who are perfectly aligned with your requirements and ready to perform.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Our Matching Process:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Industry and ICP expertise matching</li>
                        <li>• Geographic and timezone alignment</li>
                        <li>• Language and cultural fit assessment</li>
                        <li>• Experience level and skill verification</li>
                        <li>• Availability and commitment confirmation</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Timeline: 24 hours</h4>
                      <p className="text-green-700">From requirements approval to SDRs active in your systems.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 md:order-1">
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-xl font-semibold mb-4">Deployment Package</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Pre-configured CRM access</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Target account lists loaded</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Sales playbooks and scripts</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Communication tools setup</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Manager introductions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Performance Tracking */}
              <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
                <div className="md:pr-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      3
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Performance Tracking</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Real-time visibility into SDR performance with comprehensive reporting and proactive management.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Daily Metrics Tracked:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Calls and conversations completed</li>
                        <li>• Qualified meetings booked</li>
                        <li>• Response rates and engagement</li>
                        <li>• Pipeline contribution</li>
                        <li>• Follow-up activities</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800">Reporting: Real-time</h4>
                      <p className="text-purple-700">Daily performance dashboards and weekly strategy calls.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0">
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <div className="text-6xl mb-4">📊</div>
                    <h4 className="text-xl font-semibold mb-4">Performance Dashboard</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Activity Volume</span>
                        <span className="font-semibold text-green-600">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <span>Meeting Quality</span>
                        <span className="font-semibold text-blue-600">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <span>Response Rates</span>
                        <span className="font-semibold text-purple-600">87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Optimization & Scale */}
              <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
                <div className="md:order-2 md:pl-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      4
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Optimization & Scale</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Continuous improvement and seamless scaling as your business grows and requirements evolve.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Optimization Services:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Weekly performance reviews and strategy sessions</li>
                        <li>• A/B testing of messaging and approaches</li>
                        <li>• Target account list expansion and refinement</li>
                        <li>• Tool and technology optimization</li>
                        <li>• SDR coaching and skill development</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-800">Scaling: Instant</h4>
                      <p className="text-orange-700">Add SDRs or expand territories with 24-hour deployment.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 md:order-1">
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <div className="text-6xl mb-4">⚡</div>
                    <h4 className="text-xl font-semibold mb-4">Scaling Capabilities</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Add SDRs instantly</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Expand to new territories</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Adjust team composition</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Scale down seamlessly</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Maintain quality standards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We eliminate the friction and risk of traditional SDR hiring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Speed</h3>
              <p className="text-gray-600 mb-4">
                From requirements to deployment in 24 hours – not 90+ days.
              </p>
              <div className="text-3xl font-bold text-blue-600">97% Faster</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600 mb-4">
                Pre-certified SDRs with proven track records and skills.
              </p>
              <div className="text-3xl font-bold text-green-600">94% Success Rate</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-6xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold mb-4">Flexibility</h3>
              <p className="text-gray-600 mb-4">
                Scale up or down instantly without long-term commitments.
              </p>
              <div className="text-3xl font-bold text-purple-600">Instant Scaling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections Addressed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Addressing Common Concerns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the objections – here's how we address them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">"Will they understand our product/service?"</h4>
                <p className="text-red-700">
                  <strong>Our solution:</strong> During discovery, we deeply understand your ICP and value proposition. SDRs receive comprehensive product training and can shadow your team before going live.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">"What if they don't perform?"</h4>
                <p className="text-red-700">
                  <strong>Our solution:</strong> All deployments include performance guarantees. We monitor daily and replace underperformers within 48 hours at no extra cost.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">"Can they integrate with our systems?"</h4>
                <p className="text-red-700">
                  <strong>Our solution:</strong> We support all major CRMs (Salesforce, HubSpot, Pipedrive) and sales tools. Setup is included in deployment.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">"How do we manage remote SDRs?"</h4>
                <p className="text-red-700">
                  <strong>Our solution:</strong> We provide management frameworks, reporting dashboards, and weekly strategy calls. You maintain full control while we handle execution.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">"What about data security?"</h4>
                <p className="text-red-700">
                  <strong>Our solution:</strong> SOC 2 compliant, NDA signed by all SDRs, encrypted communications, and regular security training.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">"Can we start small?"</h4>
                <p className="text-red-700">
                  <strong>Our solution:</strong> Minimum 30-day commitment, start with 1 SDR, pay-as-you-grow model. No long-term contracts required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Timeline to Success
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From first contact to generating pipeline in just 7 days.
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-4 text-center">
            <div className="bg-blue-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Day 1</div>
              <div className="text-sm">Discovery Call</div>
            </div>
            <div className="bg-green-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Day 1-2</div>
              <div className="text-sm">Requirements Finalized</div>
            </div>
            <div className="bg-purple-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Day 2</div>
              <div className="text-sm">SDR Matching</div>
            </div>
            <div className="bg-orange-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Day 2-3</div>
              <div className="text-sm">Setup & Training</div>
            </div>
            <div className="bg-red-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Day 3</div>
              <div className="text-sm">Go Live</div>
            </div>
            <div className="bg-indigo-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Day 3-7</div>
              <div className="text-sm">First Meetings</div>
            </div>
            <div className="bg-pink-600 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">Ongoing</div>
              <div className="text-sm">Optimization</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-6xl mb-4">🚀</div>
            <p className="text-xl opacity-90">
              Most clients see their first qualified meetings within 7 days of starting with SDR Global.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how SDR Global's proven process can transform your sales development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/engagement-models"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              See Engagement Options
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}