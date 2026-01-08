import Link from 'next/link';

export default function SDR() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Sales Career Globally
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join SDR Global's elite talent network. Get trained, certified, and deployed with top companies worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#apply"
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Apply to the SDR Program
              </Link>
              <Link
                href="/training-certification"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors"
              >
                Learn About Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SDR Global Talent Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SDR Global Talent Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured entry into global sales roles with performance-based opportunities and elite company partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Join Our Network?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Global Opportunities</div>
                    <div className="text-gray-600">Work with companies across 50+ countries</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Performance-Based Growth</div>
                    <div className="text-gray-600">Clear path to promotions and higher earnings</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Elite Company Partnerships</div>
                    <div className="text-gray-600">Work with industry-leading organizations</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Continuous Development</div>
                    <div className="text-gray-600">Ongoing training and skill enhancement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Network Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-lg font-semibold">Countries</div>
                  <div className="text-sm text-gray-600">Global reach</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-lg font-semibold">Hiring Partners</div>
                  <div className="text-sm text-gray-600">Elite companies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-lg font-semibold">Placement Rate</div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$85K</div>
                  <div className="text-lg font-semibold">Avg Starting Salary</div>
                  <div className="text-sm text-gray-600">Competitive pay</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hiring Partners Showcase */}
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Our Hiring Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold">TECHCORP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">CLOUDTECH</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">ENTERPRISE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">STARTUP</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm opacity-75">And 200+ more leading companies worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry-Aligned Training & Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sales development training with certification tied to real-world deployment and performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Training Curriculum</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold">Sales Fundamentals</h4>
                  </div>
                  <p className="text-gray-600 ml-11">BANT qualification, buyer psychology, value proposition development</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold">Outbound Prospecting</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Cold outreach, email sequences, LinkedIn strategies, call techniques</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold">CRM & Tools Mastery</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Salesforce, HubSpot, Outreach, ZoomInfo, and sales enablement tools</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <h4 className="text-lg font-semibold">Advanced Sales Development</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Account-based marketing, multi-threading, pipeline management</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Certification Standards</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4">SDR Global Certification Requirements</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Complete 8-week training program</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Pass comprehensive written exam</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Demonstrate live prospecting skills</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Complete mock sales scenarios</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Maintain 85%+ quiz scores throughout</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Certification Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Preferred placement with top companies</li>
                  <li>• Higher starting salaries ($75K-$95K)</li>
                  <li>• Faster career progression</li>
                  <li>• Industry-recognized credentials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Clear Career Progression Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SDR to Senior SDR to Account Executive, Sales Operations, or Leadership roles.
            </p>
          </div>

          <div className="relative">
            {/* Career Path Timeline */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-96"></div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">SDR</h3>
                <p className="text-gray-600 mb-4">Entry-level sales development</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold">$75K-$95K</div>
                  <div className="text-sm text-gray-600">Starting salary</div>
                </div>
              </div>

              <div className="text-center md:mt-16">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Senior SDR</h3>
                <p className="text-gray-600 mb-4">Advanced prospecting & team leadership</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold">$95K-$120K</div>
                  <div className="text-sm text-gray-600">6-12 months</div>
                </div>
              </div>

              <div className="text-center md:mt-32">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Account Executive</h3>
                <p className="text-gray-600 mb-4">Full-cycle sales & closing</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold">$120K-$180K</div>
                  <div className="text-sm text-gray-600">12-18 months</div>
                </div>
              </div>

              <div className="text-center md:mt-48">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership Roles</h3>
                <p className="text-gray-600 mb-4">Sales Ops, Management, or Executive</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold">$150K+</div>
                  <div className="text-sm text-gray-600">2-3 years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Metrics */}
          <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Career Advancement Metrics</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-lg font-semibold">Promotion Rate</div>
                <div className="text-sm opacity-75">SDRs promoted within 12 months</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">6 months</div>
                <div className="text-lg font-semibold">Avg Time to Senior</div>
                <div className="text-sm opacity-75">From SDR to Senior SDR</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">92%</div>
                <div className="text-lg font-semibold">Retention Rate</div>
                <div className="text-sm opacity-75">Long-term career success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations & Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Performance Accountability & Professional Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain high standards for performance and conduct to ensure success for our SDRs and our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Performance Expectations</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">Activity Metrics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100+ touches per day (calls, emails, social)</li>
                    <li>• 50+ conversations per week</li>
                    <li>• 10+ qualified meetings per month</li>
                    <li>• Consistent pipeline contribution</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">Quality Standards</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 85%+ qualification accuracy</li>
                    <li>• Professional communication</li>
                    <li>• Data hygiene and compliance</li>
                    <li>• Continuous skill development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Professional Conduct</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">Code of Conduct</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Integrity in all interactions</li>
                    <li>• Respect for clients and colleagues</li>
                    <li>• Confidentiality and data protection</li>
                    <li>• Ethical sales practices</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">Development Commitment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Weekly coaching sessions</li>
                    <li>• Monthly performance reviews</li>
                    <li>• Ongoing training programs</li>
                    <li>• Career planning discussions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-16 bg-green-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">SDR Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-800 font-bold mr-4">
                    AJ
                  </div>
                  <div>
                    <div className="font-semibold">Alex Johnson</div>
                    <div className="text-sm opacity-75">Senior SDR at TechCorp</div>
                  </div>
                </div>
                <p className="text-sm italic mb-4">
                  "Started as an SDR with SDR Global and was promoted to Senior SDR in 8 months. Now leading a team of 5."
                </p>
                <div className="text-sm opacity-75">Started: $80K → Now: $110K + leadership bonus</div>
              </div>

              <div className="bg-green-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-800 font-bold mr-4">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="text-sm opacity-75">Account Executive at CloudTech</div>
                  </div>
                </div>
                <p className="text-sm italic mb-4">
                  "The training and certification gave me the foundation to transition into closing deals. Best career move ever."
                </p>
                <div className="text-sm opacity-75">Started: $85K → Now: $140K + commissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Sales Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join SDR Global's elite talent network and start your journey to sales leadership.
          </p>

          <div className="bg-white text-green-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Application Process</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold">1. Apply Online</div>
                <div className="text-sm text-gray-600">Submit your application</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">2. Assessment</div>
                <div className="text-sm text-gray-600">Skills and fit evaluation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold">3. Start Training</div>
                <div className="text-sm text-gray-600">Begin your journey</div>
              </div>
            </div>
          </div>

          <Link
            href="#apply"
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            id="apply"
          >
            Apply to the SDR Program
          </Link>
        </div>
      </section>
    </div>
  );
}
