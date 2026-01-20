import Link from 'next/link';
import { ProcessStepData } from './types';
import { processSteps, keyBenefits, commonConcerns, timelineSummary } from './data';
import { ProcessStep } from './components';



export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
             <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 mb-8 border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0055ae] mr-2 animate-pulse"></span>
              The SDR Global Process
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              From Discovery to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ae] to-purple-600">Deployment in 24h.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transparent, predictable, and results-driven. We remove the complexity and risk from SDR hiring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#process"
                className="px-8 py-4 bg-[#0055ae] text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                See the Process
              </Link>
              <Link
                href="/engagement-models"
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1"
              >
                View Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
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
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full"></div>

            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.step} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-50">
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
              <div key={benefit.title} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="text-6xl mb-6 transform transition-transform hover:scale-110 duration-300 inline-block" aria-hidden="true">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                <div className={`text-4xl font-bold ${benefit.color}`}>{benefit.statistic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Objections Addressed */}
      <section className="py-24 bg-white">
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
                  <div key={concern.question} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-start">
                        <span className="text-red-500 mr-2 text-2xl leading-none">"</span>
                        {concern.question}
                        <span className="text-red-500 ml-1 text-2xl leading-none">"</span>
                    </h4>
                    <div className="pl-4 border-l-4 border-blue-500">
                        <p className="text-gray-600 leading-relaxed"><strong>Our solution:</strong> {concern.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-10 -ml-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Timeline to Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From first contact to generating pipeline in just 7 days.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {timelineSummary.map(item => (
              <div key={item.title} className={`${item.color} p-6 rounded-2xl backdrop-blur-sm bg-opacity-20 border border-white/10 hover:bg-opacity-30 transition-all`}>
                <div className="text-3xl font-bold mb-2">{item.day}</div>
                <div className="text-sm font-medium text-white/90">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="text-6xl mb-6 animate-bounce" aria-hidden="true">🚀</div>
            <p className="text-2xl font-medium text-white">
              Most clients see their first qualified meetings within <span className="text-blue-400">7 days</span> of starting.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-blue-50 rounded-3xl p-12 border border-blue-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Experience the Difference?
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    See how SDR Global's proven process can transform your sales development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                    href="/engagement-models"
                    className="px-8 py-4 bg-[#0055ae] text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                    See Engagement Options
                    </Link>
                    <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
                    >
                    Schedule Discovery Call
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}