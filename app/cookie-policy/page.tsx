export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Cookie Policy</h1>
          <p className="text-gray-600 mb-8"><strong>Last Updated:</strong> April 14, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Our Cookie Use</h2>
            <p><strong>We currently do not use any tracking, analytics, or marketing cookies.</strong></p>
            <p>We may only use essential technical cookies for:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Maintaining your session while you use the website</li>
              <li>Protecting against security threats</li>
              <li>Website functionality</li>
            </ul>
            <p>These essential cookies don't require your consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. No Third-Party Tracking</h2>
            <p>We do not use:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Google Analytics or other analytics services</li>
              <li>Advertising or retargeting pixels</li>
              <li>Marketing cookies</li>
              <li>Social media tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Your Browser Controls</h2>
            <p>You can manage cookies through your browser settings:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>Chrome:</strong> Settings {'>'} Privacy and security {'>'} Cookies and other site data</li>
              <li><strong>Firefox:</strong> Preferences {'>'} Privacy & Security {'>'} Cookies</li>
              <li><strong>Safari:</strong> Preferences {'>'} Privacy {'>'} Manage Website Data</li>
              <li><strong>Edge:</strong> Settings {'>'} Privacy and Security {'>'} Clear browsing data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Future Updates</h2>
            <p>If we add analytics or tracking services in the future, we will:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Update this policy with specific details</li>
              <li>Provide a cookie consent banner</li>
              <li>Obtain your permission before tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Third-Party Links</h2>
            <p>Links to third-party websites on our site have their own cookie policies. We recommend reviewing them before visiting.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Contact Us</h2>
            <p>Questions about our cookie practices?</p>
            <p className="mt-4 font-semibold">
              SDR Global<br />
              Email: info@sdrglobal.io
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Changes to This Policy</h2>
            <p>We may update this policy as our website evolves. The date at the top indicates the last update.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
