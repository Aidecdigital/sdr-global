const faqData = [
  {
    category: "Company FAQs",
    items: [
      { question: "What is SDR Global?", answer: "SDR Global is a leading provider of managed sales development services, helping companies scale their sales teams with expert SDRs across global markets." },
      { question: "Where is SDR Global headquartered?", answer: "Our headquarters is in New York, with regional hubs in London, Singapore, and São Paulo to support global operations." },
      { question: "How long has SDR Global been in business?", answer: "SDR Global has been operating since 2018, with a proven track record of delivering results for over 500 clients worldwide." }
    ]
  },
  {
    category: "SDR FAQs",
    items: [
      { question: "What does an SDR do?", answer: "SDRs (Sales Development Representatives) focus on prospecting, qualifying leads, and setting up sales opportunities for account executives." },
      { question: "How are SDRs trained?", answer: "Our SDRs undergo rigorous training in sales techniques, industry knowledge, and tools like CRM systems, ensuring high performance from day one." },
      { question: "Can SDRs work remotely?", answer: "Yes, we offer remote SDR positions globally, with flexible scheduling to accommodate different time zones." }
    ]
  },
  {
    category: "Compliance & Contracts",
    items: [
      { question: "What compliance standards does SDR Global follow?", answer: "We adhere to GDPR, CCPA, and other data protection regulations, ensuring secure handling of client and prospect information." },
      { question: "How are contracts structured?", answer: "Contracts are customized based on client needs, typically including service level agreements, performance metrics, and termination clauses." },
      { question: "What happens if performance targets aren't met?", answer: "We offer performance guarantees and work collaboratively to adjust strategies; contracts include provisions for reviews and adjustments." }
    ]
  },
  {
    category: "Performance Management",
    items: [
      { question: "How is SDR performance measured?", answer: "Performance is tracked through key metrics like lead quality, conversion rates, and activity levels, with regular reporting to clients." },
      { question: "What tools do SDRs use?", answer: "SDRs use industry-standard tools such as Salesforce, HubSpot, LinkedIn Sales Navigator, and email automation platforms." },
      { question: "How often are performance reviews conducted?", answer: "Performance reviews occur weekly or bi-weekly, with monthly deep dives to optimize strategies and ensure alignment with goals." }
    ]
  }
];

import Link from 'next/link';

export default function FAQs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(section => 
      section.items.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-emerald-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-green-700 bg-green-50 mb-8 border border-green-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
              SDR Knowledge Base
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Frequently Asked {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about SDR Global, our services, and how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#faqs" className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1">
                Browse FAQs
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((section, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{section.category}</h2>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <details key={itemIdx} className="group bg-white p-6 rounded-lg shadow-md">
                    <summary className="flex justify-between items-center text-xl font-semibold text-gray-900 cursor-pointer list-none">
                      {item.question}
                      <span className="ml-4 transition-transform duration-200 group-open:rotate-180">
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team for personalized assistance.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}