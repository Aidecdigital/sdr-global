import Link from 'next/link';

const whyJoinBenefits = [
  { title: "Global Opportunities", description: "Work with companies across 50+ countries" },
  { title: "Performance-Based Growth", description: "Clear path to promotions and higher earnings" },
  { title: "Elite Company Partnerships", description: "Work with industry-leading organizations" },
  { title: "Continuous Development", description: "Ongoing training and skill enhancement" },
];

const networkStats = [
  { value: "50+", title: "Countries", subtitle: "Global reach" },
  { value: "200+", title: "Hiring Partners", subtitle: "Elite companies" },
  { value: "95%", title: "Placement Rate", subtitle: "Success rate" },
  { value: "$85K", title: "Avg Starting Salary", subtitle: "Competitive pay" },
];

const hiringPartners = ["TECHCORP", "CLOUDTECH", "ENTERPRISE", "STARTUP"];

const trainingCurriculum = [
  { title: "Sales Fundamentals", description: "BANT qualification, buyer psychology, value proposition development" },
  { title: "Outbound Prospecting", description: "Cold outreach, email sequences, LinkedIn strategies, call techniques" },
  { title: "CRM & Tools Mastery", description: "Salesforce, HubSpot, Outreach, ZoomInfo, and sales enablement tools" },
  { title: "Advanced Sales Development", description: "Account-based marketing, multi-threading, pipeline management" },
];

const certificationRequirements = [
  "Complete 8-week training program",
  "Pass comprehensive written exam",
  "Demonstrate live prospecting skills",
  "Complete mock sales scenarios",
  "Maintain 85%+ quiz scores throughout",
];

const certificationBenefits = [
  "Preferred placement with top companies",
  "Higher starting salaries ($75K-$95K)",
  "Faster career progression",
  "Industry-recognized credentials",
];

const careerPathways = [
  {
    icon: "🎯",
    title: "SDR",
    description: "Entry-level sales development",
    salary: "$75K-$95K",
    timeline: "Starting salary",
    color: "green",
    marginTop: "md:mt-0",
  },
  {
    icon: "📈",
    title: "Senior SDR",
    description: "Advanced prospecting & team leadership",
    salary: "$95K-$120K",
    timeline: "6-12 months",
    color: "blue",
    marginTop: "md:mt-16",
  },
  {
    icon: "💼",
    title: "Account Executive",
    description: "Full-cycle sales & closing",
    salary: "$120K-$180K",
    timeline: "12-18 months",
    color: "purple",
    marginTop: "md:mt-32",
  },
  {
    icon: "👑",
    title: "Leadership Roles",
    description: "Sales Ops, Management, or Executive",
    salary: "$150K+",
    timeline: "2-3 years",
    color: "green",
    marginTop: "md:mt-48",
  },
];

const careerMetrics = [
  { value: "85%", title: "Promotion Rate", description: "SDRs promoted within 12 months" },
  { value: "6 months", title: "Avg Time to Senior", description: "From SDR to Senior SDR" },
  { value: "92%", title: "Retention Rate", description: "Long-term career success" },
];

const activityMetrics = [
  "100+ touches per day (calls, emails, social)",
  "50+ conversations per week",
  "10+ qualified meetings per month",
  "Consistent pipeline contribution",
];

const qualityStandards = [
  "85%+ qualification accuracy",
  "Professional communication",
  "Data hygiene and compliance",
  "Continuous skill development",
];

const codeOfConduct = [
  "Integrity in all interactions",
  "Respect for clients and colleagues",
  "Confidentiality and data protection",
  "Ethical sales practices",
];

const developmentCommitment = [
  "Weekly coaching sessions",
  "Monthly performance reviews",
  "Ongoing training programs",
  "Career planning discussions",
];

const successStories = [
  {
    initials: "AJ",
    name: "Alex Johnson",
    title: "Senior SDR at TechCorp",
    quote: "Started as an SDR with SDR Global and was promoted to Senior SDR in 8 months. Now leading a team of 5.",
    progress: "Started: $80K → Now: $110K + leadership bonus",
  },
  {
    initials: "MR",
    name: "Maria Rodriguez",
    title: "Account Executive at CloudTech",
    quote: "The training and certification gave me the foundation to transition into closing deals. Best career move ever.",
    progress: "Started: $85K → Now: $140K + commissions",
  },
];

const applicationProcess = [
  { icon: "📝", step: 1, title: "Apply Online", description: "Submit your application" },
  { icon: "🎯", step: 2, title: "Assessment", description: "Skills and fit evaluation" },
  { icon: "🚀", step: 3, title: "Start Training", description: "Begin your journey" },
];

export default function SDR() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-teal-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-green-700 bg-green-50 mb-8 border border-green-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
              Join the Elite
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0055ae] mb-8 leading-tight">
              Launch Your Sales Career{"       "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Globally.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join SDR Global's elite talent network. Get trained, certified, and deployed with top companies worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#apply"
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
              >
                Apply to the SDR Program
              </Link>
              <Link
                href="/talent-pool"
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1"
              >
                Learn About Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SDR Global Talent Network */}
      <section className="py-24 bg-white">
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
              <div className="grid gap-4">
                {whyJoinBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors border border-transparent hover:border-green-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{benefit.title}</div>
                      <div className="text-gray-600 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Network Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {networkStats.map((stat) => (
                  <div key={stat.title} className="text-center bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold">{stat.title}</div>
                    <div className="text-sm text-gray-600">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hiring Partners Showcase */}
          <div className="bg-gray-900 text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-10"></div>
            <h3 className="text-2xl font-bold text-center mb-8">Our Hiring Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {hiringPartners.map((partner) => (
                <div key={partner} className="text-center">
                  <div className="text-2xl font-bold">{partner}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm opacity-75">And 200+ more leading companies worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-24 bg-slate-50">
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
                {trainingCurriculum.map((item, index) => (
                  <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold">{index + 1}</span>
                      </div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 ml-11">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Certification Standards</h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <h4 className="text-xl font-semibold mb-4">SDR Global Certification Requirements</h4>
                <div className="space-y-3">
                  {certificationRequirements.map((req) => (
                    <div key={req} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <h4 className="text-lg font-semibold mb-3">Certification Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  {certificationBenefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-24 bg-white">
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
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gray-100"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {careerPathways.map((path) => (
                <div key={path.title} className={`text-center relative pt-8`}>
                  <div className={`bg-white border-4 border-${path.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm`}>
                    <span className="text-2xl">{path.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="font-semibold">{path.salary}</div>
                    <div className="text-sm text-gray-600">{path.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Metrics */}
          <div className="mt-20 bg-gray-900 text-white p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-8">Career Advancement Metrics</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {careerMetrics.map((metric) => (
                <div key={metric.title} className="px-4">
                  <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold">{metric.title}</div>
                  <div className="text-sm opacity-75">{metric.description}</div>
                </div>
              ))}
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
                    {activityMetrics.map((metric) => <li key={metric}>• {metric}</li>)}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">Quality Standards</h4>
                  <ul className="space-y-2 text-gray-600">
                    {qualityStandards.map((standard) => (
                      <li key={standard}>• {standard}</li>
                    ))}
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
                    {codeOfConduct.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3">Development Commitment</h4>
                  <ul className="space-y-2 text-gray-600">
                    {developmentCommitment.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-16 bg-green-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">SDR Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story) => (
                <div key={story.name} className="bg-green-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-800 font-bold mr-4">
                      {story.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm opacity-75">{story.title}</div>
                    </div>
                  </div>
                  <p className="text-sm italic mb-4">"{story.quote}"</p>
                  <div className="text-sm opacity-75">{story.progress}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-linear-to-r from-green-600 to-green-800 text-white">
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
              {applicationProcess.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="font-semibold">{step.step}. {step.title}</div>
                  <div className="text-sm text-gray-600">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact#contact-form"
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
