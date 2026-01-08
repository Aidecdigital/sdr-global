export default function FAQs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get clear answers to common questions and reduce uncertainty about SDR Global's services and processes.
          </p>
        </div>
      </section>

      {/* FAQs Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Company FAQs</h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">What is SDR Global?</summary>
                <p className="mt-4 text-gray-600">SDR Global is a leading provider of managed sales development services, helping companies scale their sales teams with expert SDRs across global markets.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">Where is SDR Global headquartered?</summary>
                <p className="mt-4 text-gray-600">Our headquarters is in New York, with regional hubs in London, Singapore, and São Paulo to support global operations.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">How long has SDR Global been in business?</summary>
                <p className="mt-4 text-gray-600">SDR Global has been operating since 2018, with a proven track record of delivering results for over 500 clients worldwide.</p>
              </details>
            </div>
          </div>

          {/* SDR FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">SDR FAQs</h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">What does an SDR do?</summary>
                <p className="mt-4 text-gray-600">SDRs (Sales Development Representatives) focus on prospecting, qualifying leads, and setting up sales opportunities for account executives.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">How are SDRs trained?</summary>
                <p className="mt-4 text-gray-600">Our SDRs undergo rigorous training in sales techniques, industry knowledge, and tools like CRM systems, ensuring high performance from day one.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">Can SDRs work remotely?</summary>
                <p className="mt-4 text-gray-600">Yes, we offer remote SDR positions globally, with flexible scheduling to accommodate different time zones.</p>
              </details>
            </div>
          </div>

          {/* Compliance & Contracts */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Compliance & Contracts</h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">What compliance standards does SDR Global follow?</summary>
                <p className="mt-4 text-gray-600">We adhere to GDPR, CCPA, and other data protection regulations, ensuring secure handling of client and prospect information.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">How are contracts structured?</summary>
                <p className="mt-4 text-gray-600">Contracts are customized based on client needs, typically including service level agreements, performance metrics, and termination clauses.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">What happens if performance targets aren't met?</summary>
                <p className="mt-4 text-gray-600">We offer performance guarantees and work collaboratively to adjust strategies; contracts include provisions for reviews and adjustments.</p>
              </details>
            </div>
          </div>

          {/* Performance Management */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Performance Management</h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">How is SDR performance measured?</summary>
                <p className="mt-4 text-gray-600">Performance is tracked through key metrics like lead quality, conversion rates, and activity levels, with regular reporting to clients.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">What tools do SDRs use?</summary>
                <p className="mt-4 text-gray-600">SDRs use industry-standard tools such as Salesforce, HubSpot, LinkedIn Sales Navigator, and email automation platforms.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">How often are performance reviews conducted?</summary>
                <p className="mt-4 text-gray-600">Performance reviews occur weekly or bi-weekly, with monthly deep dives to optimize strategies and ensure alignment with goals.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-r from-green-600 to-green-800 text-white">
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