import Link from "next/link";

export default function TrainingCertification() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-slate-50">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
             <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 mb-8 border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0055ae] mr-2 animate-pulse"></span>
              Training & Certification
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Certified SDRs. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ae] to-purple-600">
                Enterprise-ready from Day One.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every SDR deployed through SDR Global completes a rigorous training and certification process to ensure immediate productivity, consistent performance, and enterprise-grade execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#0055ae] text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Hire Certified SDRs
              </Link>
              <Link
                href="#certification-process"
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1"
              >
                View Certification Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Certification Matters */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Certification Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is not training for training’s sake — it is infrastructure for performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Zero Ramp Time",
                desc: "Certified SDRs are productive from Day 1 — no onboarding drag, no learning curve delays.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "bg-amber-500"
              },
              {
                title: "Reduced Hiring Risk",
                desc: "All SDRs are evaluated and benchmarked before deployment, reducing performance uncertainty.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-500"
              },
              {
                title: "Consistent Quality",
                desc: "Standardized training ensures every SDR meets the same global execution standard.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                color: "bg-blue-500"
              },
              {
                title: "Enterprise Readiness",
                desc: "Our certification ensures SDRs are ready for complex, regulated, and high-stakes sales environments.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: "bg-purple-500"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-3">{item.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Framework */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A modular, performance-driven training system built for real-world sales execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Sales Foundations",
                items: [
                  "Prospecting methodologies",
                  "Qualification frameworks (BANT, MEDDICC)",
                  "Objection handling & discovery",
                ],
                color: "border-blue-500"
              },
              {
                phase: "Phase 2",
                title: "Tool Mastery",
                items: [
                  "CRM systems (Salesforce, HubSpot)",
                  "Outreach platforms",
                  "Workflow execution & reporting",
                ],
                color: "border-indigo-500"
              },
              {
                phase: "Phase 3",
                title: "Communication Excellence",
                items: [
                  "Cold calling frameworks",
                  "Email personalization",
                  "Executive-level conversations",
                ],
                color: "border-purple-500"
              },
              {
                phase: "Phase 4",
                title: "Industry Readiness",
                items: [
                  "SaaS, Cybersecurity, Healthcare",
                  "Compliance & data handling",
                  "Regional selling standards",
                ],
                color: "border-pink-500"
              },
            ].map((phase, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl border-t-4 ${phase.color} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section id="certification-process" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification Process
            </h2>
            <p className="text-xl text-gray-600">
              Certification is earned — not assumed.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

            <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Training Completion",
                desc: "SDRs complete all required modules across sales, tools, and industry readiness.",
              },
              {
                step: "02",
                title: "Practical Evaluation",
                desc: "Live mock calls, roleplays, and CRM simulations assess real-world performance.",
              },
              {
                step: "03",
                title: "Performance Benchmarks",
                desc: "SDRs must meet defined KPIs before certification is awarded.",
              },
              {
                step: "04",
                title: "Certification Awarded",
                desc: "Only SDRs who meet or exceed standards are certified and deployed.",
              },
            ].map((item, i) => (
                <div key={i} className="relative bg-white pt-4">
                  <div className="w-16 h-16 bg-[#0055ae] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-200 mx-auto md:mx-0 relative z-10">
                  {item.step}
                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Ongoing Training & Recertification */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-sm font-medium mb-6">
                Continuous Improvement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ongoing Training & Recertification
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Certification is not a one-time event. Performance is continuously measured, coached, and reinforced to ensure SDRs remain enterprise-ready at all times.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                    "Weekly coaching sessions",
                    "Quarterly recertification",
                    "Curriculum updates",
                    "Playbook optimization"
                ].map((item, i) => (
                    <div key={i} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0055ae]/20 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-gray-300">{item}</span>
                    </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                Performance Governance
              </h3>
              <div className="space-y-6 relative z-10">
                {[
                    { label: "Weekly KPI tracking", value: "100%" },
                    { label: "Call quality monitoring", value: "Daily" },
                    { label: "Replacement guarantee", value: "Active" },
                    { label: "SLA enforcement", value: "Strict" }
                ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="font-semibold text-white">{stat.value}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry & Role Specializations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry & Role Specializations
            </h2>
            <p className="text-xl text-gray-600">
              SDRs are certified not only by skill — but by market and role.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SaaS SDR Certification",
              "Enterprise SDR Certification",
              "Healthcare SDR Certification",
              "Cybersecurity SDR Certification",
              "FinTech SDR Certification",
              "Regional & Language Certification",
            ].map((item, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 bg-gradient-to-r from-[#0055ae] to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-500/30">
            {[
              { label: "SDR Retention", value: "94%" },
              { label: "Meeting Quality Score", value: "92%" },
              { label: "Deployment Readiness", value: "24h" },
              { label: "Replacement SLA", value: "Guaranteed" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm md:text-base text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-blue-50 rounded-3xl p-12 border border-blue-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Hire Certified SDRs — Not Trainees.
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Build your sales engine with enterprise-ready talent this week. Stop wasting time on ramp-up and start closing deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#0055ae] text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                    Request Certified SDRs
                    </Link>
                    <Link
                    href="/engagement-models"
                    className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
                    >
                    View Engagement Models
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
