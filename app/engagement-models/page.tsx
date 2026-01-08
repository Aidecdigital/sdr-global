import Link from 'next/link';

export default function EngagementModels() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your Engagement Model
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Flexible commercial structures designed to match your business needs and growth stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#models"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Models
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Request Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 bg-white" id="models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Three Ways to Engage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual SDRs to full regional teams, we have a model that fits your scale and objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Dedicated SDR Hire */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-2xl font-bold mb-2">Dedicated SDR Hire</h3>
                <p className="text-gray-600">Individual SDR placement for targeted campaigns</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best For:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Testing new markets or segments</li>
                    <li>• Filling specific skill gaps</li>
                    <li>• Starting small with low commitment</li>
                    <li>• Proof-of-concept initiatives</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Certified, pre-trained SDR</li>
                    <li>• Full CRM and tool setup</li>
                    <li>• Performance reporting</li>
                    <li>• Management support</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Commitment:</h4>
                  <p className="text-green-700">30-day minimum, month-to-month thereafter</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Starting at $4,500/mo</div>
                <p className="text-sm text-gray-600 mb-4">Per SDR placement</p>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Outsourced SDR Team */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 relative">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>

              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-2">Outsourced SDR Team</h3>
                <p className="text-gray-600">Dedicated teams for scalable pipeline generation</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Best For:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Consistent pipeline requirements</li>
                    <li>• Scaling existing SDR function</li>
                    <li>• Enterprise-level deployments</li>
                    <li>• Multi-channel campaigns</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Team of 3-10 certified SDRs</li>
                    <li>• Dedicated team management</li>
                    <li>• Advanced reporting & analytics</li>
                    <li>• SLA performance guarantees</li>
                    <li>• Weekly strategy optimization</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Commitment:</h4>
                  <p className="text-green-700">90-day minimum, quarterly thereafter</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Starting at $12,000/mo</div>
                <p className="text-sm text-gray-600 mb-4">Per SDR (3 SDR minimum)</p>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Regional / Vertical Pods */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-purple-300 transition-colors">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-2">Regional / Vertical Pods</h3>
                <p className="text-gray-600">Specialized teams for specific markets or industries</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-800">Best For:</h4>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Geographic market expansion</li>
                    <li>• Industry-specific expertise</li>
                    <li>• Language or cultural requirements</li>
                    <li>• Complex, specialized campaigns</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Region/industry specialized SDRs</li>
                    <li>• Local market intelligence</li>
                    <li>• Cultural and language alignment</li>
                    <li>• Specialized playbooks</li>
                    <li>• Regional performance optimization</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Commitment:</h4>
                  <p className="text-green-700">6-month minimum, semi-annual thereafter</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Custom Pricing</div>
                <p className="text-sm text-gray-600 mb-4">Based on scope and specialization</p>
                <Link
                  href="/contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Model Comparison Table */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Model Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Dedicated SDR</th>
                    <th className="text-center py-4 px-4 font-semibold">Outsourced Team</th>
                    <th className="text-center py-4 px-4 font-semibold">Regional Pods</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium">Team Size</td>
                    <td className="text-center py-4 px-4">1 SDR</td>
                    <td className="text-center py-4 px-4">3-10 SDRs</td>
                    <td className="text-center py-4 px-4">5-20 SDRs</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium">Minimum Commitment</td>
                    <td className="text-center py-4 px-4">30 days</td>
                    <td className="text-center py-4 px-4">90 days</td>
                    <td className="text-center py-4 px-4">6 months</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium">Management Level</td>
                    <td className="text-center py-4 px-4">Shared</td>
                    <td className="text-center py-4 px-4">Dedicated</td>
                    <td className="text-center py-4 px-4">Senior Team</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium">Performance SLA</td>
                    <td className="text-center py-4 px-4">Standard</td>
                    <td className="text-center py-4 px-4">Guaranteed</td>
                    <td className="text-center py-4 px-4">Premium</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium">Customization</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4">Moderate</td>
                    <td className="text-center py-4 px-4">Full</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Best For</td>
                    <td className="text-center py-4 px-4 text-sm">Testing & POC</td>
                    <td className="text-center py-4 px-4 text-sm">Scale & Consistency</td>
                    <td className="text-center py-4 px-4 text-sm">Specialization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Pricing Philosophy
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              We believe pricing should reflect value delivered, not just hours worked. Our models are designed for predictable costs and measurable ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-4">Value-Based Pricing</h3>
              <p className="opacity-90 mb-6">
                Costs scale with the value you receive. Higher-performing SDRs and more complex campaigns command premium rates.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm opacity-75">
                  "You pay for results, not just time. Our pricing reflects the quality and impact of our SDRs."
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4">Transparent Economics</h3>
              <p className="opacity-90 mb-6">
                No hidden fees, complex calculations, or surprise charges. Clear pricing with predictable monthly costs.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm opacity-75">
                  "What you see is what you pay. No nickel-and-diming or unexpected add-ons."
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold mb-4">ROI-Focused Structure</h3>
              <p className="opacity-90 mb-6">
                Pricing designed to ensure positive ROI from day one. We succeed when you succeed.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm opacity-75">
                  "Our fees are an investment in your growth. We only win when you win big."
                </p>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Cost Comparison: SDR Global vs Traditional Hiring</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-400">Traditional Hiring (6 months)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Recruiting fees & advertising</span>
                    <span className="text-red-400">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Onboarding & training</span>
                    <span className="text-red-400">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lost productivity (ramp time)</span>
                    <span className="text-red-400">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failed hire replacement</span>
                    <span className="text-red-400">$20,000</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between font-semibold">
                    <span>Total first-year cost</span>
                    <span className="text-red-400">$90,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-400">SDR Global (6 months)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Certified SDR deployment</span>
                    <span className="text-green-400">$27,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Management & optimization</span>
                    <span className="text-green-400">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Performance guarantees</span>
                    <span className="text-green-400">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>24/7 availability</span>
                    <span className="text-green-400">Included</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between font-semibold">
                    <span>Total cost</span>
                    <span className="text-green-400">$27,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="text-3xl font-bold text-green-400 mb-2">70% Cost Savings</div>
              <p className="text-sm opacity-75">Compared to traditional SDR hiring over the first year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Implementation & Ongoing Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just deliver SDRs – we ensure your success with comprehensive support and optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Onboarding</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive product and process training for seamless integration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Reporting</h3>
              <p className="text-gray-600 text-sm">
                Real-time dashboards and weekly performance reviews with actionable insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous improvement through A/B testing, messaging refinement, and strategy adjustment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated account management with 24/7 availability for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Can I start with one SDR and scale up?</h3>
              <p className="text-gray-600">
                Absolutely. Many clients begin with our Dedicated SDR Hire model and scale to an Outsourced Team as their needs grow. We make scaling seamless with our existing SDRs and processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What happens if an SDR doesn't perform?</h3>
              <p className="text-gray-600">
                We guarantee performance with all our models. If an SDR doesn't meet agreed-upon metrics within the first 30 days, we'll replace them at no additional cost. Our 94% retention rate reflects our commitment to quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Do you work with international companies?</h3>
              <p className="text-gray-600">
                Yes, we serve companies in 50+ countries. Our Regional/Vertical Pods model is specifically designed for international expansion, with SDRs who understand local markets, languages, and business cultures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How quickly can you deploy SDRs?</h3>
              <p className="text-gray-600">
                Most deployments happen within 24 hours of finalizing requirements. Our pre-trained, certified SDRs are ready to start contributing immediately, unlike traditional hiring which can take 90+ days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What tools and CRMs do you support?</h3>
              <p className="text-gray-600">
                We support all major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. Our SDRs are proficient in outreach tools like Outreach, SalesLoft, and Reply.io, and communication platforms like Zoom and Microsoft Teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Choose Your Model?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which engagement model best fits your business goals and start building your sales infrastructure.
          </p>

          <div className="bg-white text-blue-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Custom Proposal Process</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2">📋</div>
                <div className="font-semibold">1. Requirements</div>
                <div className="text-sm text-gray-600">Share your goals and needs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">2. Recommendation</div>
                <div className="text-sm text-gray-600">We suggest the best model</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📄</div>
                <div className="font-semibold">3. Proposal</div>
                <div className="text-sm text-gray-600">Custom pricing and terms</div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}