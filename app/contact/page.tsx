import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-teal-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-green-700 bg-green-50 mb-8 border border-green-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
              Let's Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Build Your Sales {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your sales performance? Connect with SDR Global's experts and discover how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact-form" className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1">
                Get Started Today
              </Link>
              <Link href="#book-call" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Sales Inquiries */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Inquiries</h3>
              <p className="text-gray-600 mb-6">
                Companies looking to scale their sales teams with SDR Global's managed services.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Dedicated SDR teams</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Outsourced sales development</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Regional market expansion</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Performance guarantees</span>
                </div>
              </div>

              <Link
                href="#sales-form"
                className="bg-[#0055ae] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Start Sales Inquiry
              </Link>
            </div>

            {/* Talent Applications */}
            <div className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Talent Applications</h3>
              <p className="text-gray-600 mb-6">
                Ambitious sales professionals ready to join SDR Global's elite talent network.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Competitive compensation</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Global career opportunities</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Professional development</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Performance-based bonuses</span>
                </div>
              </div>

              <Link
                href="#talent-form"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Apply for SDR Role
              </Link>
            </div>

            {/* Partnerships */}
            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnerships</h3>
              <p className="text-gray-600 mb-6">
                Technology providers, agencies, and organizations interested in strategic alliances.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Technology integrations</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Referral partnerships</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Co-marketing opportunities</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Channel partnerships</span>
                </div>
              </div>

              <Link
                href="#partnership-form"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                Explore Partnership
              </Link>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sales Inquiry Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg" id="sales-form">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sales Inquiry</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select company size</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are your sales goals?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your current sales challenges and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0055ae] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Sales Inquiry
                </button>
              </form>
            </div>

            {/* Talent Application Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg" id="talent-form">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Our Talent Network</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Sales Experience
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select experience level</option>
                    <option>0-1 years</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select location</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia Pacific</option>
                    <option>Latin America</option>
                    <option>Remote/Global</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join SDR Global?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your career goals and why SDR Global..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* Partnership Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg" id="partnership-form">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partnership Inquiry</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@organization.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select partnership type</option>
                    <option>Technology Integration</option>
                    <option>Referral Partnership</option>
                    <option>Co-Marketing</option>
                    <option>Channel Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your partnership idea
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your partnership proposal and how we can work together..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch Directly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to speak with someone immediately? Here are the fastest ways to reach us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our sales team for immediate assistance.
              </p>
              <div className="text-lg font-semibold text-[#0055ae] mb-4">
                +1 (555) SDR-GLOBAL
              </div>
              <div className="text-sm text-gray-600">
                Mon-Fri: 9AM-6PM EST<br />
                Response within 2 hours
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our team in real-time for quick questions and guidance.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Start Live Chat
              </button>
              <div className="text-sm text-gray-600 mt-4">
                Available 24/7<br />
                Average response: 30 seconds
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us detailed inquiries and we'll respond within 4 hours.
              </p>
              <div className="text-lg font-semibold text-[#0055ae] mb-4">
                hello@sdrglobal.com
              </div>
              <div className="text-sm text-gray-600">
                Enterprise inquiries<br />
                partnerships@sdrglobal.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SDR Global operates across multiple continents to serve your local market needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">New York</h3>
              <p className="text-gray-600 mb-4">Headquarters<br />East Coast Operations</p>
              <div className="text-sm text-gray-600">
                123 Business Ave<br />
                New York, NY 10001
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">London</h3>
              <p className="text-gray-600 mb-4">European Hub<br />EMEA Operations</p>
              <div className="text-sm text-gray-600">
                456 Commerce Street<br />
                London, EC2A 1AA
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🇸🇬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Singapore</h3>
              <p className="text-gray-600 mb-4">Asia Pacific Hub<br />APAC Operations</p>
              <div className="text-sm text-gray-600">
                789 Marina Bay<br />
                Singapore 018956
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🇧🇷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">São Paulo</h3>
              <p className="text-gray-600 mb-4">Latin America Hub<br />LATAM Operations</p>
              <div className="text-sm text-gray-600">
                Av. Paulista 1000<br />
                São Paulo, SP 01310-100
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-r from-green-600 to-green-800 text-white" id="book-call">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a 30-minute call with our sales experts. No pitch, just a conversation about your goals and how we can help achieve them.
          </p>

          <div className="bg-white text-green-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Book a Call</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-semibold">Flexible Scheduling</div>
                <div className="text-sm text-gray-600">Book at your convenience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Customized Discussion</div>
                <div className="text-sm text-gray-600">Tailored to your specific needs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">Quick Response</div>
                <div className="text-sm text-gray-600">Confirmation within 1 hour</div>
              </div>
            </div>
          </div>

          <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Book a Call
          </button>

          <p className="text-sm opacity-75 mt-4">
            No commitment required. Just a conversation to explore possibilities.
          </p>
        </div>
      </section>
    </div>
  );
}