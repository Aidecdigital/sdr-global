import Link from 'next/link';
import { ProcessStepData } from './types';
import { processSteps, keyBenefits, commonConcerns, timelineSummary } from './data';
import { ProcessStep } from './components';



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
              {processSteps.map((step, index) => (
                <ProcessStep key={step.step} step={step} index={index} />
              ))}
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
            {keyBenefits.map(benefit => (
              <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-6xl mb-6" aria-hidden="true">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className={`text-3xl font-bold ${benefit.color}`}>{benefit.statistic}</div>
              </div>
            ))}
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
            {[0, 1].map(col => (
              <div key={col} className="space-y-6">
                {commonConcerns.filter((_, i) => i % 2 === col).map(concern => (
                  <div key={concern.question} className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">"{concern.question}"</h4>
                    <p className="text-red-700"><strong>Our solution:</strong> {concern.solution}</p>
                  </div>
                ))}
              </div>
            ))}
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
            {timelineSummary.map(item => (
              <div key={item.title} className={`${item.color} p-4 rounded-lg`}>
                <div className="text-2xl font-bold mb-2">{item.day}</div>
                <div className="text-sm">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-6xl mb-4" aria-hidden="true">🚀</div>
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
              href="#"
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