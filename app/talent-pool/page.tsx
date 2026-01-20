import Link from 'next/link';

export default function TalentPool() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-cyan-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 mb-8 border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Global Talent Network
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              World-Class SDR {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Talent Pool</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Access pre-vetted, trained, and ready-to-deploy SDRs with proven track records across industries and regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#profiles" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                View SDR Profiles
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1">
                Request SDR Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SDR Skill Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SDR Skill Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SDRs specialize across key B2B sales domains, ensuring the right expertise for your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology & SaaS</h3>
              <p className="text-gray-600 mb-4">
                Deep expertise in cloud platforms, enterprise software, and emerging technologies.
              </p>
              <div className="text-2xl font-bold text-[#0055ae]">40%</div>
              <div className="text-sm text-gray-600">of our SDRs</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Specialized knowledge in security solutions, compliance, and risk management.
              </p>
              <div className="text-2xl font-bold text-green-600">25%</div>
              <div className="text-sm text-gray-600">of our SDRs</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare & Life Sciences</h3>
              <p className="text-gray-600 mb-4">
                Understanding of healthcare regulations, clinical workflows, and patient data.
              </p>
              <div className="text-2xl font-bold text-purple-600">20%</div>
              <div className="text-sm text-gray-600">of our SDRs</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing & Industrial</h3>
              <p className="text-gray-600 mb-4">
                Experience with supply chain, IoT, automation, and industrial technologies.
              </p>
              <div className="text-2xl font-bold text-orange-600">15%</div>
              <div className="text-sm text-gray-600">of our SDRs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ambitious entry-level SDRs to seasoned professionals, we match the right experience level to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1-2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Junior SDR</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">High energy and motivation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Quick learning curve</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cost-effective scaling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Strong cultural fit</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">35%</div>
                  <div className="text-sm text-gray-600">of our talent pool</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0055ae]">3-5</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mid-Level SDR</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Proven track record</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Advanced qualification skills</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">CRM and sales tool expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Multi-touch campaign management</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0055ae] mb-1">45%</div>
                  <div className="text-sm text-gray-600">of our talent pool</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">5+</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior SDR</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Complex deal navigation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Executive relationship building</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Market intelligence expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Team leadership capabilities</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">20%</div>
                  <div className="text-sm text-gray-600">of our talent pool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Availability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Regional Availability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global coverage with native-speaking SDRs who understand local markets, time zones, and business cultures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">North America</h3>
              <div className="text-3xl font-bold text-[#0055ae] mb-2">150+</div>
              <div className="text-sm text-gray-600 mb-4">Available SDRs</div>
              <p className="text-gray-600 text-sm">
                Native English speakers across all time zones. Deep understanding of US and Canadian markets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Europe</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">85+</div>
              <div className="text-sm text-gray-600 mb-4">Available SDRs</div>
              <p className="text-gray-600 text-sm">
                Multi-lingual coverage across major European markets. GDPR and regional compliance expertise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🇦🇺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">APAC</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">95+</div>
              <div className="text-sm text-gray-600 mb-4">Available SDRs</div>
              <p className="text-gray-600 text-sm">
                Native speakers in Singapore, Australia, Japan, and India. Understanding of Asian business culture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Latin America</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">60+</div>
              <div className="text-sm text-gray-600 mb-4">Available SDRs</div>
              <p className="text-gray-600 text-sm">
                Spanish and Portuguese speakers. Deep knowledge of LATAM markets and relationship-driven sales.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-50 p-8 rounded-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Time Zone Coverage</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-4 rounded">
                  <div className="font-semibold text-gray-900">EST/PST</div>
                  <div className="text-gray-600">6AM - 6PM</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="font-semibold text-gray-900">GMT</div>
                  <div className="text-gray-600">9AM - 5PM</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="font-semibold text-gray-900">SGT</div>
                  <div className="text-gray-600">5PM - 1AM</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="font-semibold text-gray-900">BRT</div>
                  <div className="text-gray-600">8AM - 6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Anonymized Profiles */}
      <section className="py-20 bg-gray-50" id="profiles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sample SDR Profiles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real profiles from our talent pool (anonymized for privacy). These SDRs are trained, certified, and ready to deploy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Profile 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-[#0055ae]">MJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mid-Level SDR</h3>
                  <p className="text-[#0055ae] font-semibold">Technology & SaaS • 4 Years Experience</p>
                  <p className="text-gray-600">North America</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Generated $2.1M in pipeline at previous SaaS company</li>
                    <li>• 85% qualification rate with 150+ SQLs monthly</li>
                    <li>• Certified in Salesforce, HubSpot, and Outreach</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Enterprise Software</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cloud Platforms</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Account-Based Marketing</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Performance Metrics:</h4>
                  <div className="grid grid-cols-3 gap-4 mt-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">150+</div>
                      <div className="text-xs text-gray-600">SQLs/Month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0055ae]">85%</div>
                      <div className="text-xs text-gray-600">Qualification Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">4.8</div>
                      <div className="text-xs text-gray-600">Avg Deal Size ($K)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-green-600">SC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Senior SDR</h3>
                  <p className="text-green-600 font-semibold">Cybersecurity • 6 Years Experience</p>
                  <p className="text-gray-600">Europe</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Led SDR team of 8 at enterprise security firm</li>
                    <li>• $4.2M in closed deals from $12M pipeline created</li>
                    <li>• Specialized in GDPR compliance and risk assessment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Enterprise Security</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Compliance</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Risk Management</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Performance Metrics:</h4>
                  <div className="grid grid-cols-3 gap-4 mt-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">200+</div>
                      <div className="text-xs text-gray-600">SQLs/Month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0055ae]">78%</div>
                      <div className="text-xs text-gray-600">Win Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">8.5</div>
                      <div className="text-xs text-gray-600">Avg Deal Size ($K)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">AK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mid-Level SDR</h3>
                  <p className="text-purple-600 font-semibold">Healthcare • 3 Years Experience</p>
                  <p className="text-gray-600">North America</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Specialized in healthcare technology sales</li>
                    <li>• HIPAA compliance certified and trained</li>
                    <li>• Generated $1.8M pipeline at healthtech startup</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HealthTech</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HIPAA Compliance</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Clinical Workflows</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Performance Metrics:</h4>
                  <div className="grid grid-cols-3 gap-4 mt-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">120+</div>
                      <div className="text-xs text-gray-600">SQLs/Month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0055ae]">82%</div>
                      <div className="text-xs text-gray-600">Qualification Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">6.2</div>
                      <div className="text-xs text-gray-600">Avg Deal Size ($K)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-orange-600">RL</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Junior SDR</h3>
                  <p className="text-orange-600 font-semibold">Manufacturing • 2 Years Experience</p>
                  <p className="text-gray-600">APAC</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Fast-tracked from internship to SDR role</li>
                    <li>• Achieved 95% of quota in first 6 months</li>
                    <li>• Strong foundation in industrial technology</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Industrial IoT</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Supply Chain</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Automation</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Performance Metrics:</h4>
                  <div className="grid grid-cols-3 gap-4 mt-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">80+</div>
                      <div className="text-xs text-gray-600">SQLs/Month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0055ae]">88%</div>
                      <div className="text-xs text-gray-600">Qualification Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">3.8</div>
                      <div className="text-xs text-gray-600">Avg Deal Size ($K)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Assurance & Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every SDR in our talent pool undergoes rigorous training and continuous evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Certified Training</h3>
              <p className="text-gray-600">
                8-week intensive SDR training program covering sales fundamentals, industry knowledge, and tool certification.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4">Performance Tracking</h3>
              <p className="text-gray-600">
                Real-time KPI monitoring with weekly performance reviews and continuous improvement coaching.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold mb-4">Ongoing Development</h3>
              <p className="text-gray-600">
                Monthly training sessions, industry updates, and skill development programs to maintain peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access Our SDR Talent Pool?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get detailed profiles of SDRs matching your industry, experience level, and regional requirements.
          </p>

          <div className="bg-white text-green-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Request SDR Profiles</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-2">📋</div>
                <div className="font-semibold">Custom Matching</div>
                <div className="text-sm text-gray-600">SDRs matched to your specific needs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">24-Hour Delivery</div>
                <div className="text-sm text-gray-600">Detailed profiles within one business day</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Quality Guarantee</div>
                <div className="text-sm text-gray-600">100% satisfaction or replacement guarantee</div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Request SDR Profiles
          </Link>
        </div>
      </section>
    </div>
  );
}