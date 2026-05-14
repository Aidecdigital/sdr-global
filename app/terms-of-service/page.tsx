export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mb-8"><strong>Last Updated:</strong> April 14, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p>By using SDR Global's website, you agree to these Terms of Service. If you disagree, please don't use our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Use of Website</h2>
            <p>You may view and use our website for personal purposes only. You may not:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use bots, scrapers, or automated tools</li>
              <li>Attempt to damage or interfere with the website</li>
              <li>Post illegal, harmful, or abusive content</li>
              <li>Harass or threaten anyone</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Your Submissions</h2>
            <p>When you submit an application, resume, or contact information:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>You confirm it's accurate and truthful</li>
              <li>We can use it to evaluate your application or respond to your inquiry</li>
              <li>You give us permission to retain it as described in our Privacy Policy</li>
              <li>We don't guarantee we'll review every submission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. No Warranties</h2>
            <p>Our website is provided "as is" without warranties. We don't guarantee:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>The website will work perfectly or never have errors</li>
              <li>Content is always accurate or current</li>
              <li>The site is free of viruses or security issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Limitation of Liability</h2>
            <p>To the maximum extent allowed by law, we're not liable for:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Indirect, special, or consequential damages</li>
              <li>Lost profits, data, or business</li>
              <li>Any damage from using or not using our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Intellectual Property</h2>
            <p>All content on our website (text, images, logos) belongs to SDR Global or its suppliers. You don't have any ownership rights to this content.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Contact Us</h2>
            <p>For questions about these Terms of Service:</p>
            <p className="mt-4 font-semibold">
              SDR Global<br />
              Email: info@sdrglobal.io
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
