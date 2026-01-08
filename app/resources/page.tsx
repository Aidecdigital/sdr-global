import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sales Development Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Data-driven insights, benchmarks, and trends from SDR Global's global sales operations. Positioned as the authority in B2B sales development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#insights"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Insights
              </Link>
              <Link
                href="#subscribe"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Subscribe for Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Hiring Insights */}
      <section className="py-20 bg-white" id="insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sales Hiring Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-backed strategies for building high-performing SDR teams based on our experience hiring and training 500+ SDRs globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills vs. Experience</h3>
              <p className="text-gray-600 mb-6">
                Our research shows that trainable skills (communication, curiosity, resilience) outweigh experience in predicting SDR success.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-sm text-gray-600">of top performers had 0-2 years sales experience</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interview Effectiveness</h3>
              <p className="text-gray-600 mb-6">
                Traditional interviews predict only 25% of SDR success. Behavioral assessments and role-playing exercises are 3x more predictive.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">25%</div>
                <div className="text-sm text-gray-600">accuracy of traditional interviews</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time to Productivity</h3>
              <p className="text-gray-600 mb-6">
                With proper training, SDRs reach 80% of peak performance in 45 days. Poor onboarding extends this to 6+ months.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">45 days</div>
                <div className="text-sm text-gray-600">to 80% productivity with good training</div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">SDR Hiring Success Factors</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">✅ High Predictors of Success</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Growth mindset and learning agility</li>
                  <li>• Strong communication skills</li>
                  <li>• Resilience and rejection handling</li>
                  <li>• Coachability and feedback acceptance</li>
                  <li>• Basic business acumen</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-4">❌ Low Predictors of Success</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Prior sales experience</li>
                  <li>• College GPA or major</li>
                  <li>• Extroversion personality traits</li>
                  <li>• Technical certifications</li>
                  <li>• Industry knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDR Performance Benchmarks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SDR Performance Benchmarks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry benchmarks based on data from 200+ SDRs across 50+ companies. Know where you stand and how to improve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Activity Metrics</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Daily Emails</div>
                    <div className="text-sm text-gray-600">Outbound emails per day</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">75-100</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Daily Calls</div>
                    <div className="text-sm text-gray-600">Outbound calls per day</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">35-50</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">LinkedIn Connections</div>
                    <div className="text-sm text-gray-600">Weekly connection requests</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">50-75</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Meetings Booked</div>
                    <div className="text-sm text-gray-600">Qualified meetings per month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">12-18</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conversion Metrics</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Email Response Rate</div>
                    <div className="text-sm text-gray-600">Percentage of emails that get replies</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">8-12%</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Call Connect Rate</div>
                    <div className="text-sm text-gray-600">Percentage of calls that reach prospects</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">15-25%</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Meeting Show-Up Rate</div>
                    <div className="text-sm text-gray-600">Percentage of booked meetings that occur</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">75-85%</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">SQL Qualification Rate</div>
                    <div className="text-sm text-gray-600">Percentage of meetings that become SQLs</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">65-80%</div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Distribution</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">20%</div>
                <div className="text-lg font-semibold text-gray-900">Top Performers</div>
                <div className="text-sm text-gray-600">Exceed benchmarks by 50%+</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-lg font-semibold text-gray-900">Solid Performers</div>
                <div className="text-sm text-gray-600">Meet or slightly exceed benchmarks</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">20%</div>
                <div className="text-lg font-semibold text-gray-900">Underperformers</div>
                <div className="text-sm text-gray-600">Fall below benchmarks consistently</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sales Trends */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Global Sales Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emerging trends shaping B2B sales in 2026, based on our global operations and market intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Prospecting</h3>
                <p className="text-gray-600 mb-4">
                  AI tools now handle 60% of initial research and lead scoring. SDRs focus on relationship-building and qualification.
                </p>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-blue-600 mr-4">60%</div>
                  <div className="text-sm text-gray-600">of prospecting tasks AI-automated</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Video-First Outreach</h3>
                <p className="text-gray-600 mb-4">
                  Personalized video messages see 40% higher response rates than text-only emails. Mobile video consumption up 300%.
                </p>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-green-600 mr-4">40%</div>
                  <div className="text-sm text-gray-600">higher response rates with video</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account-Based Everything</h3>
                <p className="text-gray-600 mb-4">
                  ABM adoption increased 250% in 2025. SDRs now focus on target accounts rather than broad prospecting.
                </p>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-purple-600 mr-4">250%</div>
                  <div className="text-sm text-gray-600">ABM adoption increase</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Remote-First Sales Teams</h3>
                <p className="text-gray-600 mb-4">
                  85% of SDR teams are fully remote. Productivity increased 25% with flexible work arrangements.
                </p>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-orange-600 mr-4">85%</div>
                  <div className="text-sm text-gray-600">of teams fully remote</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Privacy Compliance</h3>
                <p className="text-gray-600 mb-4">
                  GDPR, CCPA, and emerging regulations require specialized compliance training. Non-compliant SDRs risk legal issues.
                </p>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-red-600 mr-4">100%</div>
                  <div className="text-sm text-gray-600">of our SDRs compliance certified</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel Orchestration</h3>
                <p className="text-gray-600 mb-4">
                  SDRs now manage 8+ touchpoints per prospect. Orchestrated sequences outperform single-channel approaches by 300%.
                </p>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-teal-600 mr-4">8+</div>
                  <div className="text-sm text-gray-600">touchpoints per prospect</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">2026 Sales Predictions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">✅ High Confidence</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI will handle 80% of administrative SDR tasks</li>
                  <li>• Video becomes the primary communication channel</li>
                  <li>• Skills shortages will drive SDR compensation up 25%</li>
                  <li>• Compliance requirements will double training time</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">🤔 Emerging Trends</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Virtual reality sales presentations</li>
                  <li>• Blockchain-based lead verification</li>
                  <li>• AI-powered objection handling</li>
                  <li>• Predictive analytics for prospect behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth guides, research reports, and tools to help you build better sales teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2026 SDR Compensation Report</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of SDR salaries, bonuses, and equity across industries and regions.
              </p>
              <div className="text-sm text-gray-500 mb-4">Published: January 2026 • 45 pages</div>
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
                Download Report →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SDR Onboarding Playbook</h3>
              <p className="text-gray-600 mb-4">
                8-week training program template with scripts, role-plays, and performance milestones.
              </p>
              <div className="text-sm text-gray-500 mb-4">Published: December 2025 • 120 pages</div>
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
                Get Playbook →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Sales Operations Study</h3>
              <p className="text-gray-600 mb-4">
                Research on sales team structures, productivity metrics, and scaling strategies across 50 companies.
              </p>
              <div className="text-sm text-gray-500 mb-4">Published: November 2025 • 85 pages</div>
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
                Access Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white" id="subscribe">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Ahead of Sales Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly insights, benchmarks, and research delivered directly to your inbox. Join 2,500+ sales leaders who rely on SDR Global's expertise.
          </p>

          <div className="bg-white text-purple-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Subscribe for Insights</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold">Weekly Digest</div>
                <div className="text-sm text-gray-600">Latest benchmarks and trends</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold">Exclusive Research</div>
                <div className="text-sm text-gray-600">Early access to reports and studies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💡</div>
                <div className="font-semibold">Expert Analysis</div>
                <div className="text-sm text-gray-600">Deep dives on sales strategies</div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Subscribe for Insights
          </Link>

          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}