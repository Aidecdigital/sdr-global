import Link from 'next/link';
import { caseStudies, summaryStats, methodologyItems, industryApps } from './data';
import { CaseStudyCard } from './components';

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
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
                href="#"
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

          {caseStudies.map(study => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
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
            {summaryStats.map(stat => (
              <div key={stat.label}>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.sub}</div>
              </div>
            ))}
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
            {methodologyItems.map(item => (
              <div key={item.title} className="text-center">
                <div className="text-6xl mb-6" aria-hidden="true">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
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
            {industryApps.map(app => (
              <div key={app.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{app.icon}</div>
                <h3 className="text-lg font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
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
            href="#"
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get Similar Results
          </Link>
        </div>
      </section>
    </div>
  );
}